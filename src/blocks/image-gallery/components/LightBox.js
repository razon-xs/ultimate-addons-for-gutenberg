import React, { useState, useEffect, useRef } from 'react';
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, EffectFlip, Manipulation, FreeMode } from 'swiper';

const Lightbox = ( { ref, attributes } ) => {

	const {
		mediaGallery,
		lightboxDisplayCaptions,
		lightboxThumbnails,
		lightboxDisplayCount,
		lightboxCloseIcon,
	} = attributes;

	const lightboxRef = useRef();
	const [ lightboxSwiper, setLightboxSwiper ] = useState( null );
	const [ thumbnailSwiper, setThumbnailSwiper ] = useState( null );
	
	// Set the Initial Slider.
	useEffect( () => {
		setTimeout( () => {
			if( lightboxRef.current ) {
				initLightboxSwiper();
			}
		}, 500 );
	}, [ lightboxRef ] );

	// Update the Slider when needed.
	useEffect( () => {
		if( lightboxSwiper ) {
			lightboxSwiper.update();
		}		
	}, [ mediaGallery ] );

	const initLightboxSwiper = () => {
		const settings = {
			slidesPerView: 1,
			autoplay: false,
			on: {
				beforeInit ( swiperInstance ) {
					setLightboxSwiper( swiperInstance );
				},
			},
		}
		new Swiper( lightboxRef.current, {
			...settings,
			modules: [
				FreeMode,
				Navigation,
				Thumbs,
			],
		} );
	}

	return (
		<div
			className='spectra-image-gallery__control-lightbox swiper'
			ref={ lightboxRef }
		>
			<p>LightBox!</p>
		</div>
	)
};

export default Lightbox;