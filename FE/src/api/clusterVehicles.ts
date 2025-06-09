import { orderByDistance } from 'geolib';
import type { Vehicle } from '../domains/vehicles/Vehicle';

export const clusterVehicles = (
	vehicles: readonly Vehicle[],
	clusterSize: number,
): readonly (readonly Vehicle[])[] => {
	const unvisited = [...vehicles];
	const result: Vehicle[][] = [];

	while (unvisited.length >= clusterSize) {
		const seed = unvisited.pop();
		if (!seed) {
			break;
		}

		const neighbors = orderByDistance(
			{
				latitude: seed.coordinates.latitude,
				longitude: seed.coordinates.longitude,
			},
			unvisited.map((v) => ({
				id: v.id,
				latitude: v.coordinates.latitude,
				longitude: v.coordinates.longitude,
			})),
		).slice(0, clusterSize - 1) as unknown as {
			id: number;
		}[];

		// Create group starting with seed
		const group: Vehicle[] = [seed];

		// Add the 9 closest neighbors
		for (const neighbor of neighbors) {
			const neighborVehicle = unvisited.find((v) => v.id === neighbor.id);
			if (neighborVehicle) {
				group.push(neighborVehicle);
			}
		}

		result.push(group);
	}

	// Add remaining vehicles as the last cluster (if any)
	if (unvisited.length > 0) {
		result.push(unvisited);
	}

	return result;
};
