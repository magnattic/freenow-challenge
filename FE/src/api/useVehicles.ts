import { useQuery } from '@tanstack/react-query';
import { fetchFreeNowVehicles } from './fetchFreeNowVehicles';
import { fetchShareNowVehicles } from './fetchShareNowVehicles';

export const useAllVehicles = () => {
	const freeNowQuery = useQuery({
		queryKey: ['vehicles', 'free-now'],
		queryFn: fetchFreeNowVehicles,
		staleTime: 5 * 60 * 1000,
	});

	const shareNowQuery = useQuery({
		queryKey: ['vehicles', 'share-now'],
		queryFn: fetchShareNowVehicles,
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
