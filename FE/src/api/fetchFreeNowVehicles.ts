import type { Vehicle } from '../domains/vehicles/types';
import { fetchApi } from './fetchApi';

export const fetchFreeNowVehicles = async () => {
	const data = await fetchApi<{ poiList: Vehicle[] }>('free-now');
	return data.poiList;
};
