import { DefaultLayout } from './domains/layout/DefaultLayout';
import { VehiclePage } from './domains/vehicles/VehiclePage';

function App() {
	return (
		<DefaultLayout>
			<VehiclePage />
		</DefaultLayout>
	);
}

export default App;
