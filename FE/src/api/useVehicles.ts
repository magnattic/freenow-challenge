import { useQuery } from '@tanstack/react-query';
import { fetchFreeNowVehicles } from './fetchFreeNowVehicles';
import { fetchShareNowVehicles } from './fetchShareNowVehicles';
import { clusterVehicles } from './clusterVehicles';
import { useMemo } from 'react';
import { chunkArray } from './chunkArray';

const isClusteringEnabled = import.meta.env.VITE_USE_CLUSTERING === 'true';
const pageSize = Number(import.meta.env.VITE_PAGE_SIZE ?? 10);

export const useVehicles = ({ page }: { page: number }) => {
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

	const allVehicles = useMemo(
		() => [...(freeNowQuery.data ?? []), ...(shareNowQuery.data ?? [])],
		[freeNowQuery.data, shareNowQuery.data],
	);

	// Apply distance-based clustering for pagination if enabled
	const clusteredVehicles = useMemo(() => {
		if (allVehicles.length === 0) return [];

		if (isClusteringEnabled) {
			return clusterVehicles(allVehicles, pageSize);
		}

		// If clustering is not enabled, simply paginate as they come in
		return chunkArray(allVehicles, pageSize);
	}, [allVehicles]);


	// Get vehicles for the requested page (cluster)
	const pageVehicles = clusteredVehicles[page - 1] ?? [];

	return {
		data: pageVehicles,
		totalItems: allVehicles.length,
		pageSize,
		isLoading: freeNowQuery.isLoading || shareNowQuery.isLoading,
		error: freeNowQuery.error ?? shareNowQuery.error,
	};
};
