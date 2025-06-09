import { Table, TableHeaderCell, TableRow } from '@freenow/wave';

export const VehicleList = () => {
	return (
		<Table rowStyle="zebra">
			<caption>Vehicle List</caption>
			<thead>
				<TableRow>
					<TableHeaderCell scope="col">Vehicle ID</TableHeaderCell>
					<TableHeaderCell scope="col">Vehicle Type</TableHeaderCell>
					<TableHeaderCell scope="col">Status</TableHeaderCell>
					<TableHeaderCell scope="col">Location</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<td>1</td>
					<td>Car</td>
					<td>Available</td>
					<td>Berlin</td>
				</TableRow>
			</tbody>
		</Table>
	);
};
