export interface Vehicle {
	id: string;
	coordinate?: {
		latitude: number;
		longitude: number;
	};
	licensePlate: string;
	address?: string;
	type: 'FREE NOW' | 'SHARE NOW';
	state: 'Active' | 'Inactive';
	conditions: {
		general: 'Bad conditions' | 'Good conditions';
		fuel: 'Low fuel' | 'Medium fuel' | 'Full fuel';
	};
}
