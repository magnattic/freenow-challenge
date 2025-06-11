import { MediaQueries } from '@freenow/wave';
import { DivIcon, type LatLngExpression, latLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import styled from 'styled-components';
import type { Vehicle } from './Vehicle';
import { VehicleIcon } from './VehicleIcon';

interface VehicleMapProps {
	readonly vehicles: readonly Vehicle[];
	readonly selectedVehicleId?: number;
	readonly onVehicleSelect: ({ vehicleId }: { vehicleId: number }) => void;
}

const freeNowIcon = new DivIcon({
	html: renderToStaticMarkup(<VehicleIcon vehicleType={'FREE NOW'} />),
	iconSize: [30, 30],
	iconAnchor: [15, 15],
	className: 'custom-div-icon',
});

const shareNowIcon = new DivIcon({
	html: renderToStaticMarkup(<VehicleIcon vehicleType={'SHARE NOW'} />),
	iconSize: [30, 30],
	iconAnchor: [15, 15],
	className: 'custom-div-icon',
});

const freeNowIconSelected = new DivIcon({
	html: renderToStaticMarkup(<VehicleIcon vehicleType={'FREE NOW'} />),
	iconSize: [45, 45],
	iconAnchor: [22.5, 22.5],
	className: 'custom-div-icon',
});

const shareNowIconSelected = new DivIcon({
	html: renderToStaticMarkup(<VehicleIcon vehicleType={'SHARE NOW'} />),
	iconSize: [45, 45],
	iconAnchor: [22.5, 22.5],
	className: 'custom-div-icon',
});

const StyledMap = styled(MapContainer)`
	width: 100%;
	height: 257px;

	${MediaQueries.xlarge} {
		height: 392px;
		width: 320px;
	}
	@media (min-width: 1572px) {
		height: 392px;
		width: 569px;
	}
`;

export const VehicleMap = ({
	vehicles,
	selectedVehicleId,
	onVehicleSelect,
}: VehicleMapProps) => {
	const defaultCenter: LatLngExpression = [53.5511, 9.9937] as const;

	const positions: readonly LatLngExpression[] = useMemo(
		() =>
			vehicles.map(
				(vehicle) =>
					[
						vehicle.coordinates.latitude,
						vehicle.coordinates.longitude,
					] as const,
			),
		[vehicles],
	);

	return (
		<StyledMap center={defaultCenter} zoom={13}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{vehicles.map((vehicle) => {
				const isSelected = selectedVehicleId === vehicle.id;
				const icon =
					vehicle.type === 'FREE NOW'
						? isSelected
							? freeNowIconSelected
							: freeNowIcon
						: isSelected
							? shareNowIconSelected
							: shareNowIcon;

				return (
					<Marker
						key={vehicle.id}
						position={[
							vehicle.coordinates.latitude,
							vehicle.coordinates.longitude,
						]}
						eventHandlers={{
							click: () => onVehicleSelect({ vehicleId: vehicle.id }),
						}}
						icon={icon}
						aria-label={`Vehicle ${vehicle.licensePlate} (${vehicle.type}) at ${vehicle.coordinates.latitude}, ${vehicle.coordinates.longitude}`}
					/>
				);
			})}
			<FitBounds positions={positions} />
		</StyledMap>
	);
};

const FitBounds = ({
	positions,
}: { positions: readonly LatLngExpression[] }) => {
	const map = useMap();

	useEffect(() => {
		if (positions.length === 0) return;

		const bounds = latLngBounds([...positions]);
		map.fitBounds(bounds, { padding: [50, 50] as const });
	}, [positions, map]);

	return null;
};
