import './App.css';
import { VehicleMap } from './domains/vehicles/VehicleMap';
import { useAllVehicles } from './api/useVehicles';
import { useState } from 'react';

function App() {
	const [page, setPage] = useState(1);
	const { data: vehicles, totalPages } = useAllVehicles({ page });
	console.log('Vehicles:', vehicles);
	return (
		<>
			<div>
				<VehicleMap vehicles={vehicles} onVehicleSelect={() => {}} />
				<button
					onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
					disabled={page === 1}
				>
					Previous
				</button>
				<span>Page {page}</span>
				<button
					onClick={() => setPage((prev) => prev + 1)}
					disabled={page >= totalPages}
				>
					Next
				</button>
				{/* <VehicleList /> */}
			</div>
		</>
	);
}

export default App;
