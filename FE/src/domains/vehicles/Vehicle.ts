export interface Vehicle {
	readonly id: number;
	readonly coordinates: {
		readonly latitude: number;
		readonly longitude: number;
	};
	readonly licensePlate: string;
	readonly address: string | null;
	readonly type: 'FREE NOW' | 'SHARE NOW';
	readonly state: 'ACTIVE' | 'INACTIVE';
	readonly fuel?: number;
	readonly condition: 'GOOD' | 'BAD';
}
