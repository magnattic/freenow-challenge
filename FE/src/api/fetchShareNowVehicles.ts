import { z } from 'zod';
import type { Vehicle } from '../domains/vehicles/Vehicle';
import { fetchApi } from './fetchApi';

const ShareNowVehicleSchema = z
	.object({
		id: z.number(),
		coordinates: z.tuple([z.number(), z.number(), z.number()]),
		licencePlate: z.string(),
		address: z.string(),
		engineType: z.string(),
		condition: z.enum(['BAD', 'GOOD']),
		fuel: z.number(),
		state: z.enum(['ACTIVE', 'INACTIVE']),
	})
	.transform(
		(data): Vehicle => ({
			id: data.id,
			coordinates: {
				latitude: data.coordinates[1],
				longitude: data.coordinates[0],
			} as const,
			licensePlate: data.licencePlate,
			address: data.address ?? null,
			type: 'SHARE NOW' as const,
			state: data.state,
			condition: data.condition,
			fuel: data.fuel,
		}),
	);

const ShareNowResponseSchema = z.object({
	placemarks: z.array(ShareNowVehicleSchema),
});

export const fetchShareNowVehicles = async (): Promise<readonly Vehicle[]> => {
	const rawData = await fetchApi('share-now');
	const data = ShareNowResponseSchema.parse(rawData);

	return data.placemarks;
};
