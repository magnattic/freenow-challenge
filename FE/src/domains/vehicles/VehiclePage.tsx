import { useVehicles } from '@/api/useVehicles';
import { Pagination } from '@/domains/vehicles/Pagination';
import { VehicleList } from '@/domains/vehicles/VehicleList';
import { VehicleMap } from '@/domains/vehicles/VehicleMap';
import { MediaQueries } from '@freenow/wave';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	${MediaQueries.small} {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 16px;
	}
	${MediaQueries.medium} {
		grid-template-columns: 1fr 3fr;
		grid-template-rows: auto 1fr auto;
		gap: 16px;
	}
`;

export const VehiclePage = () => {
	const [page, setPage] = useState(1);
	const [highlightedVehicleId, setHighlightedVehicleId] = useState<
		number | null
	>(null);
	const { data: vehicles, totalItems, pageSize } = useVehicles({ page });
	return (
		<Container>
			<VehicleMap
				vehicles={vehicles}
				onVehicleSelect={({ vehicleId }) => {
					setHighlightedVehicleId(vehicleId);
				}}
				selectedVehicleId={highlightedVehicleId ?? undefined}
			/>
			<div>
				<VehicleList
					vehicles={vehicles}
					onVehicleSelect={({ vehicleId }) => {
						setHighlightedVehicleId(vehicleId);
					}}
				/>
				<Pagination
					value={page}
					onPageChange={(page) => setPage(page)}
					totalItems={totalItems}
					pageSize={pageSize}
				/>
			</div>
		</Container>
	);
};
