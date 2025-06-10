import { z } from 'zod';
import type { Vehicle } from '../domains/vehicles/Vehicle';
import { fetchApi } from './fetchApi';

const FreeNowVehicleSchema = z
	.object({
		id: z.number(),
		coordinate: z.object({
			latitude: z.number(),
			longitude: z.number(),
		}),
		licencePlate: z.string(),
		condition: z.enum(['BAD', 'GOOD']),
		state: z.enum(['ACTIVE', 'INACTIVE']),
	})
	.transform(
		(data): Vehicle => ({
			id: data.id,
			address: null, // Free Now does not provide address information
			coordinates: {
				latitude: data.coordinate.latitude,
				longitude: data.coordinate.longitude,
			} as const,
			licensePlate: data.licencePlate,
			type: 'FREE NOW' as const,
			state: data.state,
			condition: data.condition,
		}),
	);

const FreeNowResponseSchema = z.object({
	poiList: z.array(FreeNowVehicleSchema),
});

export const fetchFreeNowVehicles = async (): Promise<readonly Vehicle[]> => {
	const rawData = await fetchApi('free-now');
	const data = FreeNowResponseSchema.parse(rawData);

	return data.poiList;
};
