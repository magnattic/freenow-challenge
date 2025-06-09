import './App.css';
import { VehicleMap } from './domains/vehicles/VehicleMap';
import { useVehicles } from './api/useVehicles';
import { useState } from 'react';
import { VehicleList } from './domains/vehicles/VehicleList';
import { Pagination } from './domains/vehicles/Pagination';

function App() {
	const [page, setPage] = useState(1);
	const { data: vehicles, totalPages } = useVehicles({ page });
	console.log('Vehicles:', vehicles);
	return (
		<>
			<div>
				<VehicleMap vehicles={vehicles} onVehicleSelect={() => {}} />
				<Pagination
					currentPage={page}
					totalPages={totalPages}
					onPageChange={(page) => setPage(page)}
				/>
				<VehicleList vehicles={vehicles} />
			</div>
		</>
	);
}

export default App;
