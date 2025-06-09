import { useQuery } from '@tanstack/react-query';
import type { Vehicle } from '../domains/vehicles/types';

const fetchApi = async (
	endpoint: 'free-now' | 'share-now',
): Promise<unknown> => {
	const response = await fetch(`http://localhost:5001/${endpoint}/vehicles`);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${endpoint} vehicles`);
	}
	return response.json();
};

export const useAllVehicles = () => {
	const freeNowQuery = useQuery({
		queryKey: ['vehicles', 'free-now'],
		queryFn: () => fetchApi('free-now') as Promise<{ poiList: Vehicle[] }>,
		select: ({ poiList }) => poiList,
		staleTime: 5 * 60 * 1000,
	});

	const shareNowQuery = useQuery({
		queryKey: ['vehicles', 'share-now'],
		queryFn: () => fetchApi('share-now') as Promise<{ placemarks: Vehicle[] }>,
		select: ({ placemarks }) => placemarks,
		staleTime: 5 * 60 * 1000,
	});

	const allVehicles = [
		...(freeNowQuery.data ?? []),
		...(shareNowQuery.data ?? []),
	];

	return {
		data: allVehicles,
		isLoading: freeNowQuery.isLoading || shareNowQuery.isLoading,
		error: freeNowQuery.error ?? shareNowQuery.error,
	};
};
