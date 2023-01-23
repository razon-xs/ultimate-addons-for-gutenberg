import React, { useState, useEffect, useRef } from 'react';
import Swiper, {
	FreeMode,
	Navigation,
	Thumbs,
} from 'swiper';

const Lightbox = ( { attributes } ) => {

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

	console.log( mediaGallery );
	return (
		<div
			className='spectra-image-gallery__control-lightbox swiper'
			ref={ lightboxRef }
		>
			<div className='swiper-wrapper'>
				{ mediaGallery.map( ( media ) => (
					<div className='swiper-slide' >
						<img
							src={ media.url }
						/>
					</div>
				) ) }
			</div>
		</div>
	)
};

export default Lightbox;