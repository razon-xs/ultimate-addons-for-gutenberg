import React, { useState, useEffect, useRef } from 'react';
import Swiper, {
	FreeMode,
	Navigation,
	Thumbs,
} from 'swiper';

const Lightbox = ( { attributes, lightboxPreview, setLightboxPreview } ) => {

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
	
	// Set the Lightbox Slider once the Ref is in use.
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

	// Initialize the Lightbox Slider.
	const initLightboxSwiper = () => {

		// Lightbox Swiper Settings.
		const settings = {
			slidesPerView: 1,
			autoplay: false,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			on: {
				beforeInit ( swiperInstance ) {
					setLightboxSwiper( swiperInstance );
				},
			},
		}

		// Lightbox Swiper Creation with Modules.
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
		<div className='spectra-image-gallery__control-lightbox' >
			<div
				className='swiper spectra-image-gallery__control-lightbox--main'
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
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
			</div>
		</div>
	)
};


// Media Object Example.

// alt: ""
// caption: "A Game of Chess"
// id: 42
// link: "https://spectra.test/tirt/pexels-vlada-karpovich-6114952/"
// mime: "image/jpeg"
// sizes: {
// 	full: {
// 		height: 2560
// 		orientation: "portrait"
// 		url: "https://spectra.test/wp-content/uploads/2022/11/pexels-vlada-karpovich-6114952-scaled.jpg"
// 		width: 1707
// 	}
// 	large: {
// 		height: 1024
// 		orientation: "portrait"
// 		url: "https://spectra.test/wp-content/uploads/2022/11/pexels-vlada-karpovich-6114952-683x1024.jpg"
// 		width: 683
// 	}
// 	medium: {
// 		height: 300
// 		orientation: "portrait"
// 		url: "https://spectra.test/wp-content/uploads/2022/11/pexels-vlada-karpovich-6114952-200x300.jpg"
// 		width: 200
// 	}
// 	thumbnail: {
// 		height: 150
// 		orientation: "landscape"
// 		url: "https://spectra.test/wp-content/uploads/2022/11/pexels-vlada-karpovich-6114952-150x150.jpg"
// 		width: 150
// 	}
// }
// subtype: "jpeg"
// type: "image"
// url: "https://spectra.test/wp-content/uploads/2022/11/pexels-vlada-karpovich-6114952-scaled.jpg"

export default Lightbox;