import './App.css';
import { VehicleMap } from './domains/vehicles/VehicleMap';
import { useVehicles } from './api/useVehicles';
import { useState } from 'react';
import { VehicleList } from './domains/vehicles/VehicleList';
import { Pagination } from './domains/vehicles/Pagination';

function App() {
	const [page, setPage] = useState(1);
	const { data: vehicles, totalItems, pageSize } = useVehicles({ page });
	return (
		<>
			<div>
				<VehicleMap vehicles={vehicles} onVehicleSelect={() => {}} />
				<Pagination
					value={page}
					onPageChange={(page) => setPage(page)}
					totalItems={totalItems}
					pageSize={pageSize}
				/>
				<VehicleList vehicles={vehicles} />
			</div>
		</>
	);
}

export default App;
