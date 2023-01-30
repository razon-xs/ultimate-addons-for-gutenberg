/**
 * BLOCK: Icon - Edit
 */

import React, { useEffect } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import styling from './styling';
import Settings from './settings';
import Render from './render';

const UAGBIcon = ( props ) => {

	const deviceType = useDeviceType();
	const {
		clientId,
		attributes,
		isSelected,
	} = props;
	const blockId = clientId.substr( 0, 8 );

	props = { ...props, deviceType };

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: blockId } );
		props.attributes.block_id = blockId;
	}, [] );

	useEffect( () => {
		if( true === isSelected ) {
			// Replacement for componentDidUpdate.
			const blockStyling = styling( props );
			addBlockEditorDynamicStyles( 'uagb-style-icon-' + blockId, blockStyling );
		}
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
		addBlockEditorDynamicStyles( 'uagb-style-icon-' + blockId, blockStyling );
		scrollBlockToView();
	}, [ deviceType ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = attributes;
	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/icon-list.svg`; // using this until preview image is provided by designers

	return (
		attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				{ isSelected && <Settings { ...props } /> }
				<Render { ...props } />
			</>
		)
	);
};

export default UAGBIcon;
