/**
 * BLOCK: Icon - Edit
 */

import React, { useEffect } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import Render from './render';

const UAGBIcon = ( props ) => {

	const deviceType = useDeviceType();
	const {
		clientId,
		attributes,
	} = props;
	const block_id = attributes.block_id;

	props = { ...props, deviceType };

	useEffect( () => {
		// Assigns block_id only for the first time when block is initialized.
		if( ! block_id ) {
			props.setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		}
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/icon-list.svg`; // using this until preview image is provided by designers

	return (
		attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Render { ...props } />
			</>
		)
	);
};

export default UAGBIcon;
