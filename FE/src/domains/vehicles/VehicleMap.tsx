import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Vehicle } from './types';
import type { LatLngExpression } from 'leaflet';

interface VehicleMapProps {
	vehicles: Vehicle[];
	selectedVehicleId?: string;
	onVehicleSelect: (vehicleId: string) => void;
}

export const VehicleMap = ({
	vehicles,
	selectedVehicleId,
	onVehicleSelect,
}: VehicleMapProps) => {
	// Hamburg
	const defaultCenter: LatLngExpression = [53.5511, 9.9937];

	return (
		<MapContainer
			center={defaultCenter}
			zoom={13}
			style={{ height: '400px', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{vehicles
				.filter((v) => v.coordinate !== undefined)
				.map((vehicle) => (
					<Marker
						key={vehicle.id}
						position={[
							vehicle.coordinate.latitude,
							vehicle.coordinate.longitude,
						]}
						eventHandlers={{
							click: () => onVehicleSelect(vehicle.id),
						}}
					>
						<Popup>
							<div>
								<strong>{vehicle.licensePlate}</strong>
								<br />
								{vehicle.type}
								<br />
								{vehicle.address ?? 'No address available'}
							</div>
						</Popup>
					</Marker>
				))}
		</MapContainer>
	);
};
