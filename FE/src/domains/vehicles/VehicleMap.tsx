import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { latLngBounds, type LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import type { Vehicle } from './Vehicle';

interface VehicleMapProps {
	vehicles: Vehicle[];
	selectedVehicleId?: string;
	onVehicleSelect: (vehicleId: number) => void;
}

export const VehicleMap = ({
	vehicles,
	selectedVehicleId,
	onVehicleSelect,
}: VehicleMapProps) => {
	// Hamburg
	const defaultCenter: LatLngExpression = [53.5511, 9.9937];

	const positions: LatLngExpression[] = vehicles.map((vehicle) => [
		vehicle.coordinates.latitude,
		vehicle.coordinates.longitude,
	]);

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
			{vehicles.map((vehicle) => (
				<Marker
					key={vehicle.id}
					position={[
						vehicle.coordinates.latitude,
						vehicle.coordinates.longitude,
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
			<FitBounds positions={positions} />
		</MapContainer>
	);
};

const FitBounds = ({ positions }: { positions: LatLngExpression[] }) => {
	const map = useMap();

	useEffect(() => {
		if (positions.length === 0) return;

		const bounds = latLngBounds(positions);
		map.fitBounds(bounds, { padding: [50, 50] }); // Optional padding
	}, [positions, map]);

	return null;
};
