import type { Vehicle } from '../domains/vehicles/Vehicle';
import { fetchApi } from './fetchApi';

export const fetchShareNowVehicles = async () => {
	const data = await fetchApi<ShareNowResponse>('share-now');
	const vehicles: Vehicle[] = data.placemarks.map((vehicle) => ({
		id: vehicle.id,
		coordinates: {
			latitude: vehicle.coordinates[1],
			longitude: vehicle.coordinates[0],
		},
		licensePlate: vehicle.licencePlate,
		address: vehicle.address,
		type: 'SHARE NOW',
		state: vehicle.state === 'ACTIVE' ? 'Active' : 'Inactive',
		condition: vehicle.condition,
		fuel: vehicle.fuel,
	}));
	return vehicles;
};

interface ShareNowVehicle {
	readonly id: number;
	readonly coordinates: readonly [number, number, number];
	readonly licencePlate: string;
	readonly address: string;
	readonly engineType: string;
	readonly condition: 'BAD' | 'GOOD';
	readonly fuel: number;
	readonly state: 'ACTIVE' | 'INACTIVE';
}

interface ShareNowResponse {
	readonly placemarks: readonly ShareNowVehicle[];
}
