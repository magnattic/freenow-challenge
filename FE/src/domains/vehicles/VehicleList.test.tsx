import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import type { Vehicle } from './Vehicle';
import { VehicleList } from './VehicleList';

const mockVehicles: readonly Vehicle[] = [
	{
		id: 1,
		type: 'FREE NOW',
		licensePlate: 'ABC-123',
		coordinates: { latitude: 53.5511, longitude: 9.9937 },
		address: 'Test Street 1',
		state: 'ACTIVE',
		condition: 'GOOD',
		fuel: 85,
	},
	{
		id: 2,
		type: 'SHARE NOW',
		licensePlate: 'XYZ-789',
		coordinates: { latitude: 53.552, longitude: 9.994 },
		address: 'Test Street 2',
		state: 'INACTIVE',
		condition: 'BAD',
		fuel: 25,
	},
] as const;

test('renders vehicles in the list', () => {
	const mockOnVehicleSelect = vi.fn();

	render(
		<VehicleList
			vehicles={mockVehicles}
			onVehicleSelect={mockOnVehicleSelect}
		/>,
	);

	expect(screen.getByText('ABC-123')).toBeInTheDocument();
	expect(screen.getByText('XYZ-789')).toBeInTheDocument();
	expect(screen.getByText('FREE NOW')).toBeInTheDocument();
	expect(screen.getByText('SHARE NOW')).toBeInTheDocument();
});
