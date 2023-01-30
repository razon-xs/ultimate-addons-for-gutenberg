import React, { useState, useEffect, useRef } from 'react';
import renderSVG from '@Controls/renderIcon';
import Swiper, {
	Lazy,
	Navigation,
	Thumbs,
} from 'swiper';

const Lightbox = ( { attributes, setAttributes, setLightboxPreview } ) => {

	const {
		mediaGallery,
		lightboxDisplayCaptions,
		lightboxThumbnails,
		lightboxDisplayCount,
		lightboxCloseIcon,
		imageDefaultCaption,
	} = attributes;

	const lightboxRef = useRef();
	const thumbnailRef = useRef();
	const [ lightboxSwiper, setLightboxSwiper ] = useState( null );
	const [ thumbnailSwiper, setThumbnailSwiper ] = useState( null );
	const [ lightboxTotal, setLightboxTotal ] = useState( 0 );
	const [ CurrentSlide, setCurrentSlide ] = useState( 0 );
	
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
				if ( lightboxSwiper ) {
					lightboxSwiper.destroy();
					initLightboxSwiper();
				}
			}
		}, 500 );
	}, [ thumbnailRef ] );

	// Update the Sliders when the gallery is updated.
	useEffect( () => {
		setLightboxTotal( mediaGallery.length );
		if ( lightboxThumbnails && thumbnailSwiper ) {
			thumbnailSwiper.update();
		}
		if ( lightboxSwiper ) {
			lightboxSwiper.update();
		}
	}, [ mediaGallery ] );

	// Destroy and Recreate the Lightbox Slider when Thumbnails are created.
	useEffect( () => {
		if ( lightboxSwiper ) {
			lightboxSwiper.destroy();
			initLightboxSwiper();
		}
	}, [ thumbnailSwiper ] )

	// Initialize the Lightbox Slider.
	const initLightboxSwiper = () => {

		// Lightbox Swiper Settings.
		const settings = {
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
				activeIndexChange ( swiperInstance ) {
					setCurrentSlide( swiperInstance.activeIndex );
					if ( thumbnailSwiper ) {
						thumbnailSwiper.slideTo( swiperInstance.activeIndex );
					}
				},
			},
			thumbs: {
				swiper: thumbnailSwiper,
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
			centeredSlides: true,
			slidesPerView: 7,
			slideToClickedSlide: true,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			on: {
				beforeInit ( swiperInstance ) {
					setThumbnailSwiper( swiperInstance );
				},
			},
		}

		// Thumbnail Swiper Creation with Modules.
		new Swiper( thumbnailRef.current, {
			...settings,
		} );
	}

	// Render the Lightbox Slider.
	const renderLightbox = () => (
		<div
			className='swiper spectra-image-gallery__control-lightbox--main'
			ref={ lightboxRef }
		>
			<div className='swiper-wrapper'>
				{ mediaGallery.map( ( media ) => (
					<div className='swiper-slide'>
						<img
							className='swiper-lazy'
							data-src={ media.url }
						/>
						<div className='swiper-lazy-preloader swiper-lazy-preloader-white'/>
						{ lightboxDisplayCaptions && (
							<div className='spectra-image-gallery__control-lightbox--caption'>
								{ media.caption ? media.caption : imageDefaultCaption }
							</div>
						) }	
					</div>
				) ) }
			</div>
			<div className='swiper-button-next'/>
			<div className='swiper-button-prev'/>
		</div>
	);

	// Render the Thumbnail Slider.
	const renderThumbnails = () => (
		<div
			className='spectra-image-gallery__control-lightbox--thumbnails-wrapper'
			style={ {
				backgroundColor: lightboxDisplayCaptions ? 'black' : 'transparent',
				display: lightboxThumbnails ? undefined : 'none',
			} }
		>
			<div
				className='swiper spectra-image-gallery__control-lightbox--thumbnails'
				ref={ thumbnailRef }
			>
				<div className='swiper-wrapper'>
					{ mediaGallery.map( ( media ) => (
						<div className='swiper-slide'>
							<img src={ media.sizes.thumbnail.url } />
						</div>
					) ) }
				</div>
			</div>
		</div>
	);

	return (
		<div className='spectra-image-gallery__control-lightbox' >
			{ renderLightbox() }
			{ renderThumbnails() }
			{ lightboxDisplayCount && (
				<div className='spectra-image-gallery__control-lightbox--count' >
					{ `${ CurrentSlide + 1 } / ${ lightboxTotal }` }
				</div>
			) }
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