import React, { useEffect } from 'react';
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, EffectFlip, Manipulation } from 'swiper';

const LightBox = ( { ref, images } ) => {

	// Set the Initial Slider.
	useEffect( () => {
		setTimeout( () => {
			if( ref.current ) {
				// initSlider();
			}
		}, 500 );
	} );

	// Reset the Slider when a setting is changed.
	// useEffect( () => {
	// 	if( swiperInstance ) {
	// 		swiperInstance.destroy();
	// 		initSlider();
	// 	}
	// }, [
	// 	transitionEffect,
	// 	displayArrows,
	// 	displayDots,
	// 	transitionSpeed
	// ] );
	
	const initSlider = () => {

		const settings = {
			slidesPerView: 1,
			autoplay: false,
			speed: transitionSpeed,
			loop: false,
			effect: transitionEffect,
			flipEffect: {
				slideShadows: false,
			},
			fadeEffect: {
				crossFade: true
			},
			pagination: displayDots ? {
				el: sliderPaginationRef.current,
				clickable: true,
			} : false, 
			allowTouchMove:false,
			navigation: displayArrows ? {
				nextEl: sliderNavNextRef.current,
				prevEl: sliderNavPrevRef.current,
			} : false,
			on: {
				beforeInit ( swiperInst ) {
					swiperRef.current = swiperInst;
					setSwiperInstance( swiperInst );
				},
			},
		}

		new Swiper( ref.current, {
			...settings,
			modules: [
				Navigation, Pagination,Autoplay,EffectFade, Manipulation, EffectFlip
			],
		} );
	}

	console.info( images );
	return (
		<div
			className='swiper'
			ref={ ref }
		>
			<p>LightBox!</p>
		</div>
	)
};

export default LightBox;