import { Table, TableCell, TableHeaderCell, TableRow } from '@freenow/wave';
import type { Vehicle } from './Vehicle';

export const VehicleList = ({ vehicles }: { vehicles: readonly Vehicle[] }) => {
	return (
		<Table rowStyle="zebra">
			<caption>Vehicle List</caption>
			<thead>
				<TableRow>
					<TableHeaderCell scope="col">Type</TableHeaderCell>
					<TableHeaderCell scope="col">Licence plate</TableHeaderCell>
					<TableHeaderCell scope="col">Coordinates</TableHeaderCell>
					<TableHeaderCell scope="col">Address</TableHeaderCell>
					<TableHeaderCell scope="col">State</TableHeaderCell>
					<TableHeaderCell scope="col">Condition</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>{
				vehicles.map((vehicle) => (
					<TableRow key={vehicle.id}>
						<TableCell>{vehicle.type}</TableCell>
						<TableCell>{vehicle.licensePlate}</TableCell>
						<TableCell>
							{vehicle.coordinates.latitude}, {vehicle.coordinates.longitude}
						</TableCell>
						<TableCell>{vehicle.address}</TableCell>
						<TableCell>{vehicle.state}</TableCell>
						<TableCell>{vehicle.condition}</TableCell>
					</TableRow>
				))
			}
			</tbody>
		</Table>
	);
};
