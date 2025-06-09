import type { Vehicle } from '../domains/vehicles/Vehicle';
import { fetchApi } from './fetchApi';

export const fetchFreeNowVehicles = async () => {
	const data = await fetchApi<FreeNowResponse>('free-now');
	const vehicles: Vehicle[] = data.poiList.map((vehicle) => ({
		id: vehicle.id,
		address: null, // Free Now does not provide address information
		coordinates: {
			latitude: vehicle.coordinate.latitude,
			longitude: vehicle.coordinate.longitude,
		},
		licensePlate: vehicle.licencePlate,
		type: 'FREE NOW',
		state: vehicle.state === 'ACTIVE' ? 'Active' : 'Inactive',
		condition: vehicle.condition,
	}));
	return vehicles;
};

interface FreeNowVehicle {
	readonly id: number;
	readonly coordinate: {
		readonly latitude: number;
		readonly longitude: number;
	};
	readonly licencePlate: string;
	readonly condition: 'BAD' | 'GOOD';
	readonly state: 'ACTIVE' | 'INACTIVE';
}

interface FreeNowResponse {
	readonly poiList: readonly FreeNowVehicle[];
}
