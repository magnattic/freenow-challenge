import {
	Battery25Icon,
	Battery50Icon,
	Battery75Icon,
	BatteryEmptyIcon,
	BatteryFullIcon,
	EmojiHappyIcon,
	EmojiSadIcon,
	Label,
	Table,
	TableCell,
	TableHeaderCell,
	TableRow,
	TableRowSkeleton,
	Text,
	getSemanticValue,
} from '@freenow/wave';
import styled from 'styled-components';
import type { Vehicle } from './Vehicle';

const StyledTableCell = styled(TableCell)`
	cursor: pointer;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: left;
`;

type VehicleListProps = {
	vehicles: readonly Vehicle[];
	selectedVehicleId?: number;
	onVehicleSelect: ({ vehicleId }: { vehicleId: number }) => void;
};

const TableContainer = styled.div`
	min-height: 620px; ${'' /* Ensures the table doesn't jump around when fewer rows are available on the last page. */}
`;

export const VehicleList = ({
	vehicles,
	onVehicleSelect,
	selectedVehicleId,
}: VehicleListProps) => {
	return (
		<TableContainer>
			<Table rowStyle="zebra" width={'100%'} style={{ tableLayout: 'fixed' }}>
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
					{vehicles.length > 0
						? vehicles.map((vehicle) => (
								<TableRow
									key={vehicle.id}
									active={selectedVehicleId === vehicle.id}
									onClick={() => {
										onVehicleSelect({ vehicleId: vehicle.id });
									}}
								>
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
										<ConditionIcon condition={vehicle.condition} />{' '}
										<FuelIcon fuel={vehicle.fuel} />
									</StyledTableCell>
								</TableRow>
							))
						: // Show 10 skeleton rows if no vehicles are available
							Array.from({ length: 10 }).map((_, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: Using index as key for skeleton rows is acceptable here
								<TableRowSkeleton key={index} columns={5} />
							))}
				</tbody>
			</Table>
		</TableContainer>
	);
};

const ActiveLabel = styled(Label).attrs({ variant: 'warning' })`
	border-radius: 3px;
	`;
const InactiveLabel = styled(Label).attrs({ variant: 'default' })`
	border-radius: 3px;
`;
const StateLabel = ({ state }: Pick<Vehicle, 'state'>) => {
	if (state === 'ACTIVE') {
		return <ActiveLabel>{state}</ActiveLabel>;
	}
	return <InactiveLabel>{state}</InactiveLabel>;
};

const ConditionIcon = ({ condition }: Pick<Vehicle, 'condition'>) => {
	return (
		<Text title={`Condition: ${condition === 'GOOD' ? 'Good' : 'Bad'}`}>
			{condition === 'GOOD' && <EmojiHappyIcon />}
			{condition === 'BAD' && (
				<EmojiSadIcon color={getSemanticValue('foreground-danger-default')} />
			)}
		</Text>
	);
};

/** The svg icons have preset colors for the bars, but the design wants them black. */
const OverrideBatteryColor = styled.span`
    svg path {
        fill: black !important;
    }
`;
const FuelIcon = ({ fuel }: Pick<Vehicle, 'fuel'>) => {
	if (fuel === undefined) {
		return null;
	}
	return (
		<OverrideBatteryColor title={`Fuel: ${fuel}%`}>
			{getFuelIcon(fuel)}
		</OverrideBatteryColor>
	);
};

const getFuelIcon = (fuel?: number) => {
	if (fuel === undefined) {
		return null;
	}
	if (fuel >= 100) {
		return <BatteryFullIcon />;
	}
	if (fuel >= 75) {
		return <Battery75Icon />;
	}
	if (fuel >= 50) {
		return <Battery50Icon />;
	}
	if (fuel >= 25) {
		return <Battery25Icon />;
	}
	return <BatteryEmptyIcon />;
};
