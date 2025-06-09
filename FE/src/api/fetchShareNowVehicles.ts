import type { Vehicle } from '../domains/vehicles/types';
import { fetchApi } from './fetchApi';

export const fetchShareNowVehicles = async () => {
	const data = await fetchApi<{ placemarks: Vehicle[] }>('share-now');
	return data.placemarks;
};
