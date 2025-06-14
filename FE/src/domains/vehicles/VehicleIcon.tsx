import { getSemanticValue } from '@freenow/wave';

export const VehicleIcon = ({
	vehicleType,
}: {
	vehicleType: 'FREE NOW' | 'SHARE NOW';
}) => {
	const color =
		vehicleType === 'FREE NOW'
			? getSemanticValue('foreground-primary')
			: getSemanticValue('foreground-accent-default');
	return (
		<svg
			width="31"
			height="33"
			viewBox="0 0 31 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Vehicle Icon</title>
			<g filter="url(#filter0_ddd_5390_29707)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.3887 25.8522C23.1188 24.9463 27.5 19.9848 27.5 14C27.5 7.37258 22.1274 2 15.5 2C8.87258 2 3.5 7.37258 3.5 14C3.5 19.9848 7.88123 24.9463 13.6113 25.8522L15.5 29L17.3887 25.8522Z"
					fill={color}
				/>
			</g>
			<path
				d="M17.2766 8.375C18.0614 8.375 18.7631 8.86375 19.0352 9.59986L20.0961 12.4779L20.2275 12.75H21.75V14L20.8189 13.9998C21.0208 14.5108 21.125 15.0563 21.125 15.6076V19.625H19.25V18.375H11.75V19.625H9.875V15.4227C9.875 14.9377 9.95563 14.457 10.1127 14.0001L9.25 14V12.75H10.6513L10.753 12.5234L11.9015 9.57035C12.1818 8.84969 12.8758 8.375 13.649 8.375H17.2766ZM19.4444 14H11.4619L11.3955 14.1508C11.2427 14.4939 11.1531 14.8613 11.1306 15.2352L11.125 15.4227V17.125H19.875V15.6076C19.875 15.1364 19.7684 14.6712 19.5632 14.247L19.4444 14ZM12.6875 14.625C13.2053 14.625 13.625 15.0447 13.625 15.5625C13.625 16.0803 13.2053 16.5 12.6875 16.5C12.1697 16.5 11.75 16.0803 11.75 15.5625C11.75 15.0447 12.1697 14.625 12.6875 14.625ZM18.3125 14.625C18.8303 14.625 19.25 15.0447 19.25 15.5625C19.25 16.0803 18.8303 16.5 18.3125 16.5C17.7947 16.5 17.375 16.0803 17.375 15.5625C17.375 15.0447 17.7947 14.625 18.3125 14.625ZM17.2766 9.625H13.649C13.3913 9.625 13.1599 9.78323 13.0665 10.0234L12.005 12.75H18.8669L17.8628 10.0333C17.7811 9.81245 17.5835 9.65841 17.3541 9.62981L17.2766 9.625Z"
				fill="white"
			/>
			<defs>
				<filter
					id="filter0_ddd_5390_29707"
					x="0.5"
					y="0"
					width="30"
					height="33"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0.059 0 0 0 0 0.122 0 0 0 0.2 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_5390_29707"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology
						radius="1"
						operator="erode"
						in="SourceAlpha"
						result="effect2_dropShadow_5390_29707"
					/>
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="0.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0.059 0 0 0 0 0.122 0 0 0 0.14 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_5390_29707"
						result="effect2_dropShadow_5390_29707"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="0.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
					/>
					<feBlend
						mode="normal"
						in2="effect2_dropShadow_5390_29707"
						result="effect3_dropShadow_5390_29707"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect3_dropShadow_5390_29707"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};
