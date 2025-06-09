import './App.css';
import { VehicleMap } from './domains/vehicles/VehicleMap';
import { useAllVehicles } from './api/useVehicles';

function App() {
	const vehicles = useAllVehicles();
	console.log('Vehicles:', vehicles);
	return (
		<>
			<div>
				<VehicleMap vehicles={vehicles.data} onVehicleSelect={() => {}} />
				{/* <VehicleList /> */}
			</div>
		</>
	);
}

export default App;
