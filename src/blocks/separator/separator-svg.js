function renderCustomSVG( svg, color ) {
	const customSVG = {
		zigzag: (
			<svg
				width="100%"
				height="15"
				viewBox="0 0 16 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M-1 1L8 14L17 1" stroke={color} />
			</svg>
		),
		curved: (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 11.9534C1.01444 11.9534 2.02889 11.4495 2.60473 10.4418L5.39527 5.55834C6.54695 3.54289 9.45305 3.54289 10.6047 5.55834L13.3953 10.4418C13.9711 11.4495 14.9856 11.9534 16 11.9534"
					stroke={color}
				/>
			</svg>
		),
		curly: (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 14C10 14 14 2 8 2C2 2 6 14 16 14" stroke={color} />
			</svg>
		),
		elips: (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_2352_6019)">
					<path
						d="M0 8.00002C0 8.00002 3.00018 4.00019 8.00006 4C12.9999 3.99981 16 8.00002 16 8.00002C16 8.00002 13.0003 12 8.00016 11.9999C2.99999 11.9997 0 8.00002 0 8.00002Z"
						stroke={color}
					/>
				</g>
				<defs>
					<clipPath id="clip0_2352_6019">
						<rect width="16" height="16" fill="white" />
					</clipPath>
				</defs>
			</svg>
		),
		square: (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 12H4V3H12V12H16" stroke={color} />
			</svg>
		),
		slash: (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_2357_6044)">
					<path
						d="M6.29312 16.9999L17 6.29302M14.2931 16.9999L17 14.293M-0.707031 15.9999L16.0002 -0.707153M8.00017 -0.707153L-0.706882 7.9999"
						stroke={color}
					/>
				</g>
				<defs>
					<clipPath id="clip0_2357_6044">
						<rect width="16" height="16" fill="white" />
					</clipPath>
				</defs>
			</svg>
		),
		leaves: (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_2356_5631)">
					<path
						d="M15 1C10.5 1 9 2.5 9 7C13.5 7 15 5.5 15 1Z"
						stroke={color}
					/>
					<path
						d="M1 1C5.5 1 7 2.5 7 7C2.5 7 1 5.5 1 1Z"
						stroke={color}
					/>
					<path
						d="M15 15C10.5 15 9 13.5 9 9C13.5 9 15 10.5 15 15Z"
						stroke={color}
					/>
					<path
						d="M1 15C5.5 15 7 13.5 7 9C2.5 9 1 10.5 1 15Z"
						stroke={color}
					/>
				</g>
				<defs>
					<clipPath id="clip0_2356_5631">
						<rect width="16" height="16" fill="white" />
					</clipPath>
				</defs>
			</svg>
		),
	};
	return svg in customSVG ? customSVG[ svg ] : '';
}

export default renderCustomSVG;
