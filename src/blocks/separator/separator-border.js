function renderCustomSVG( svg ) {
	const customSVG = {
		zigzag: (
			`<svg
				width="16"
				height="15"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
            <polyline points="0,18 12,6 24,18 "
            preserve_aspect_ratio='xMidYMid meet'
            stroke='black'
            stroke-linecap='sqaure'
            stroke-milterlimit='10'/>
			</svg>`
		),
		curved: (
			`<svg
				width="16"
				height="10"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
            <path d="M0,6c6,0,6,13,12,13S18,6,24,6"
            preserve_aspect_ratio='xMidYMid meet'
            stroke='black'
            stroke-linecap='sqaure'
            stroke-milterlimit='10'/>
			</svg>`
		),
        }
        return svg in customSVG ? customSVG[svg] : '';
    }
    
export default renderCustomSVG;    