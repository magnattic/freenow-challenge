import { Table, TableCell, TableHeaderCell, TableRow } from '@freenow/wave';
import type { Vehicle } from './Vehicle';

export const VehicleList = ({ vehicles }: { vehicles: readonly Vehicle[] }) => {
	return (
		<Table rowStyle="zebra" width={'100%'} style={{ tableLayout: 'fixed' }}>
			<caption>Vehicle List</caption>
			<thead>
				<TableRow>
					<TableHeaderCell scope="col" width={'10%'}>
						Type
					</TableHeaderCell>
					<TableHeaderCell scope="col" width={'15%'}>
						Licence plate
					</TableHeaderCell>
					<TableHeaderCell scope="col" width={'20%'}>
						Coordinates
					</TableHeaderCell>
					<TableHeaderCell scope="col" width={'30%'}>
						Address
					</TableHeaderCell>
					<TableHeaderCell scope="col" width={'12.5%'}>
						State
					</TableHeaderCell>
					<TableHeaderCell scope="col" width={'12.5%'}>
						Condition
					</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				{vehicles.map((vehicle) => (
					<TableRow key={vehicle.id}>
						<TableCell>{vehicle.type}</TableCell>
						<TableCell>{vehicle.licensePlate}</TableCell>
						<TableCell>
							{vehicle.coordinates.latitude}
							<br />
							{vehicle.coordinates.longitude}
						</TableCell>
						<TableCell
							title={vehicle.address ?? undefined}
							style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
						>
							{vehicle.address ?? 'N/A'}
						</TableCell>
						<TableCell>{vehicle.state}</TableCell>
						<TableCell>{vehicle.condition}</TableCell>
					</TableRow>
				))}
			</tbody>
		</Table>
	);
};
