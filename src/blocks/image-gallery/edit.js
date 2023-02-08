/**
 * BLOCK: Image Gallery
 */

import styling from './styling';
import React, { useEffect, useState } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBImageGallery = ( props ) => {

	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
        addBlockEditorDynamicStyles( 'uagb-image-gallery-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props, deviceType ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	// Lightbox disabled by default for the block on every instance.
	const [ lightboxPreview, setLightboxPreview ] = useState( false );

	// Disable the Lightbox when the block isn't selected.
	useEffect( () => {
		if ( ! props.isSelected ) {
			setLightboxPreview( false );
		}
	}, [ props.isSelected ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/image-gallery.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings
					parentProps={ props }
					lightboxPreview={ lightboxPreview }
					setLightboxPreview={ setLightboxPreview }
				/>
				<Render
					parentProps={ props }
					lightboxPreview={ lightboxPreview }
					setLightboxPreview={ setLightboxPreview }
				/>
			</>
		)
	);
};

export default UAGBImageGallery;
