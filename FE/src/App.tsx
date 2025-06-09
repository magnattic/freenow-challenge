import './App.css';
import { VehicleList } from './domains/vehicles/VehicleList';
import { VehicleMap } from './domains/vehicles/VehicleMap';
import { useAllVehicles } from './hooks/useVehicles';

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
