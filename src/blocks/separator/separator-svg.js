function renderCustomSVG( svg, borderWidth ) {
	const customSVG = {
		zigzag: ( `url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black'` + `stroke-width = ${ borderWidth}` + `stroke-linecap='square' round='false' stroke-linejoin='miter' stroke-miterlimit='3'%3E%3Cpolyline points='0,18 12,6 24,18 '/%3E%3C/svg%3E')` ),
		
		curved:( "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width=${borderWidth} stroke-linecap='square' round='false' stroke-miterlimit='1'%3E%3Cpath d='M0,6c6,0,6,13,12,13S18,6,24,6'/%3E%3C/svg%3E')" ),
		
		curly: ( `url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black'`+ `stroke-width=${borderWidth}`+` stroke-linecap='square' stroke-miterlimit='5'%3E%3Cpath d='M0,21c3.3,0,8.3-0.9,15.7-7.1c6.6-5.4,4.4-9.3,2.4-10.3c-3.4-1.8-7.7,1.3-7.3,8.8C11.2,20,17.1,21,24,21'/%3E%3C/svg%3E')` ),
		
		square: ( "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1' stroke-linecap='square' stroke-miterlimit='1'%3E%3Cpolyline points='0,6 6,6 6,18 18,18 18,6 24,6'/%3E%3C/svg%3E')" ),
		
		wavy: ( "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1' stroke-linecap='square' round='false' stroke-miterlimit='1'%3E%3Cpath d='M0,6c6,0,0.9,11.1,6.9,11.1S18,6,24,6'/%3E%3C/svg%3E')" ),

		slash: ( "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 20 16' fill='none' stroke='black' stroke-width='1' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cg transform='translate(-12.000000, 0)'%3E%3Cpath d='M28,0L10,18'/%3E%3Cpath d='M18,0L0,18'/%3E%3Cpath d='M48,0L30,18'/%3E%3Cpath d='M38,0L20,18'/%3E%3C/g%3E%3C/svg%3E')'%3E%3Cpath d='M28,0L10,18'/%3E%3Cpath d='M18,0L0,18'/%3E%3Cpath d='M48,0L30,18'/%3E%3Cpath d='M38,0L20,18'/%3E%3C/g%3E%3C/svg%3E)" )
		,
		leaves: 
			( "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 20 16' fill='none' stroke='black' stroke-width='1' stroke-linecap='square' stroke-miterlimit='1'%3CgclipPath='url(%23clip0_2356_5631)'%3E%3Cpath d='M15 1C10.5 1 9 2.5 9 7C13.5 7 15 5.5 15 1Z'/%3E%3Cpath d='M1 1C5.5 1 7 2.5 7 7C2.5 7 1 5.5 1 1Z'/%3E%3Cpath d='M15 15C10.5 15 9 13.5 9 9C13.5 9 15 10.5 15 15Z'/%3E%3Cpath d='M1 15C5.5 15 7 13.5 7 9C2.5 9 1 10.5 1 15Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2356_5631'%3E%3Crect height='16px' weight='16px' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E')" )


	};
	return svg in customSVG ? customSVG[svg] : '';
}

export default renderCustomSVG;