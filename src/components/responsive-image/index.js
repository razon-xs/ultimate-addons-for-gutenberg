/**
 * External dependencies
 */
 import React from 'react';
 import { useDeviceType } from '@Controls/getPreviewType';
 import ResponsiveToggle from '../responsive-toggle';
 import UAGMediaPicker from '@Components/image';
 import { __ } from '@wordpress/i18n';

 const ResponsiveUAGImage = ( props ) => {
	 const { backgroundImage, setAttributes } = props;

	 const responsive = true;

	 const deviceType = useDeviceType();
	 const device = deviceType.toLowerCase();

	 /*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {

		if ( ! media || ! media.url ) {
			setAttributes( { [backgroundImage[device].label]: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { [backgroundImage[device].label]: null } );
			return;
		}

		setAttributes( { [backgroundImage[device].label]: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { [backgroundImage[device].label]: '' } );
	};

	 const output = {};
	 output.Desktop = (
		<UAGMediaPicker
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.desktop.value }
			onRemoveImage={ onRemoveImage }
			disableLabel={ true }
		/>
	 );
	 output.Tablet = (
		<UAGMediaPicker
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.tablet.value }
			onRemoveImage={ onRemoveImage }
			disableLabel={ true }
		/>
	 );
	 output.Mobile = (
		<UAGMediaPicker
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.mobile.value }
			onRemoveImage={ onRemoveImage }
			disableLabel={ true }
		/>
	 );

	 return (
		 <div className="uag-responsive-image-select components-base-control uagb-responsive-select-control">
			 <div className="uagb-size-type-field-tabs">
				 <div className="uagb-control__header">
					 <ResponsiveToggle
						 label= { __( 'Image', 'ultimate-addons-for-gutenberg' ) }
						 responsive= { responsive }
					 />
				 </div>
				 { output[ deviceType ] ? output[ deviceType ] : output.Desktop }
			 </div>
			 { props.help && (
				 <p className="components-base-control__help">{ props.help }</p>
			 ) }
		 </div>
	 );
 };

 export default ResponsiveUAGImage;
