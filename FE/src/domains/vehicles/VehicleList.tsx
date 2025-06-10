import {
	Headline,
	Label,
	Table,
	TableCell,
	TableHeaderCell,
	TableRow,
	Text,
} from '@freenow/wave';
import styled from 'styled-components';
import type { Vehicle } from './Vehicle';

const StyledTableCell = styled(TableCell)`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: left;
`;

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
						<StyledTableCell>{vehicle.type}</StyledTableCell>
						<StyledTableCell>{vehicle.licensePlate}</StyledTableCell>
						<StyledTableCell>
							{vehicle.coordinates.latitude}
							<br />
							{vehicle.coordinates.longitude}
						</StyledTableCell>
						<StyledTableCell title={vehicle.address ?? undefined}>
							{vehicle.address ?? '-'}
						</StyledTableCell>
						<StyledTableCell>
							<StateLabel state={vehicle.state} />
						</StyledTableCell>
						<StyledTableCell>
							<ConditionIcon condition={vehicle.condition} />
						</StyledTableCell>
					</TableRow>
				))}
			</tbody>
		</Table>
	);
};

const StateLabel = ({ state }: Pick<Vehicle, 'state'>) => {
	return <Label>{state}</Label>;
};

const ConditionIcon = ({ condition }: Pick<Vehicle, 'condition'>) => {
	return (
		<Text>
			{condition === 'Good' && <span>👍</span>}
			{condition === 'Fair' && <span>👌</span>}
			{condition === 'Poor' && <span>👎</span>}
			{condition === 'Unknown' && <span>❓</span>}
		</Text>
	);
};
