import './App.css';
import { VehicleMap } from './domains/vehicles/VehicleMap';
import { useVehicles } from './api/useVehicles';
import { useState } from 'react';
import { VehicleList } from './domains/vehicles/VehicleList';
import { Pagination } from './domains/vehicles/Pagination';
import { MediaQueries } from '@freenow/wave';
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

function App() {
	const [page, setPage] = useState(1);
	const { data: vehicles, totalItems, pageSize } = useVehicles({ page });
	return (
		<Container>
			<VehicleMap vehicles={vehicles} onVehicleSelect={() => {}} />
			<div>
				<VehicleList vehicles={vehicles} />
				<Pagination
					value={page}
					onPageChange={(page) => setPage(page)}
					totalItems={totalItems}
					pageSize={pageSize}
				/>
			</div>
		</Container>
	);
}

export default App;
