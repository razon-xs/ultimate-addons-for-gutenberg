import React, { useState, useEffect, useRef } from 'react';
import renderSVG from '@Controls/renderIcon';
import Swiper, {
	FreeMode,
	Lazy,
	Navigation,
	Thumbs,
} from 'swiper';

const Lightbox = ( { attributes, setAttributes, lightboxPreview, setLightboxPreview } ) => {

	const {
		mediaGallery,
		lightboxDisplayCaptions,
		lightboxThumbnails,
		lightboxDisplayCount,
		lightboxCloseIcon,
	} = attributes;

	const lightboxRef = useRef();
	const thumbnailRef = useRef();
	const [ lightboxSwiper, setLightboxSwiper ] = useState( null );
	const [ thumbnailSwiper, setThumbnailSwiper ] = useState( null );
	const [ currentCaption, setCurrentCaption ] = useState( '' );
	
	// Set the Lightbox Slider once the Ref is in use.
	useEffect( () => {
		setTimeout( () => {
			if ( lightboxRef.current ) {
				initLightboxSwiper();
			}
		}, 500 );
	}, [ lightboxRef ] );

	// Set the Thumbnail Slider once the Ref is in use.
	useEffect( () => {
		setTimeout( () => {
			if ( thumbnailRef.current ) {
				initThumbnailSwiper();
			}
		}, 500 );
	}, [ thumbnailRef ] );

	// Update the Sliders when the gallery is updated.
	useEffect( () => {
		if ( lightboxSwiper ) {
			lightboxSwiper.update();
		}
		if ( lightboxThumbnails && thumbnailSwiper ) {
			thumbnailSwiper.update();
		}
	}, [ mediaGallery ] );

	// Update the Thumbnail Swiper only when needed.
	useEffect( () => {
		if ( lightboxThumbnails && thumbnailSwiper ) {
			thumbnailSwiper.update();
		}
	}, [ lightboxThumbnails ] );

	// Initialize the Lightbox Slider.
	const initLightboxSwiper = () => {

		// Lightbox Swiper Settings.
		const settings = {
			autoplay: false,
			lazy: true,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on: {
				beforeInit ( swiperInstance ) {
					setLightboxSwiper( swiperInstance );
				},
			},
			thumbs: {
			  swiper: thumbnailRef.current,
			},
		}

		// Lightbox Swiper Creation with Modules.
		new Swiper( lightboxRef.current, {
			...settings,
			modules: [
				Lazy,
				Navigation,
				Thumbs,
			],
		} );
	}

	// Initialize the Thumbnail Slider.
	const initThumbnailSwiper = () => {

		// Thumbnail Swiper Settings.
		const settings = {
			autoplay: false,
			centeredSlides: true,
			lazy: true,
			freeMode: true,
			slidesPerView: 5,
			spaceBetween: 10,
			watchSlidesProgress: true,
			on: {
				beforeInit ( swiperInstance ) {
					setThumbnailSwiper( swiperInstance );
				},
			},
		}

		// Thumbnail Swiper Creation with Modules.
		new Swiper( thumbnailRef.current, {
			...settings,
			modules: [
				FreeMode,
				Lazy,
			],
		} );
	}

	// Render the Lightbox Slider.
	const renderLightbox = () => (
		<div
			className='swiper spectra-image-gallery__control-lightbox--main'
			ref={ lightboxRef }
		>
			<div className='swiper-wrapper'>
				{ mediaGallery.map( ( media ) => renderSlide( media.url, media.caption ) ) }
			</div>
			<div className='swiper-button-next'/>
			<div className='swiper-button-prev'/>
		</div>
	);

	// Render the Thumbnail Slider.
	const renderThumbnails = () => (
		<div
			className='swiper spectra-image-gallery__control-lightbox--thumbnails'
			style={ {
				backgroundColor: lightboxDisplayCaptions ? 'black' : 'transparent',
			} }
			ref={ thumbnailRef }
		>
			<div className='swiper-wrapper'>
				{ mediaGallery.map( ( media ) => renderSlide( media.sizes.thumbnail.url ) ) }
			</div>
		</div>
	);

	// Render the Common Slider Components.
	const renderSlide = ( url, caption = '' ) => {
		return (
			<div className='swiper-slide'>
				<img
					className='swiper-lazy'
					data-src={ url }
				/>
				<div className='swiper-lazy-preloader swiper-lazy-preloader-white'/>
				{ ( lightboxDisplayCaptions && caption ) && (
					<div className='spectra-image-gallery__control-lightbox--caption'>
						{ caption }
					</div>
				) }
			</div>
		);
	}

	return (
		<div className='spectra-image-gallery__control-lightbox' >
			{ renderLightbox() }
			{ lightboxThumbnails && renderThumbnails() }
			{ lightboxCloseIcon && (
				<button
					className='spectra-image-gallery__control-lightbox--close'
					onClick={ () => setLightboxPreview( false ) }
				>
					{ renderSVG( lightboxCloseIcon, setAttributes ) }
				</button>
			) }
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