/**
 * BLOCK: Icon - Edit
 */

// import styling from './styling';
import React, { useEffect } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { select, dispatch } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import Settings from './settings';
import Render from './render';

const UAGBIcon = ( props ) => {

	const deviceType = useDeviceType();
	const {
		clientId,
		attributes,
		isSelected
	} = props;
	let block_id = attributes.block_id;

	props = { ...props, deviceType };

	useEffect( () => {
		if( ! block_id ) {
			// Assigning block_id in the attribute.
			props.setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		}
	}, [] );

	// useEffect( () => {
	// 	if( true === isSelected ) {
	// 		// Replacement for componentDidUpdate.
	// 		const blockStyling = styling( props );
	// 		addBlockEditorDynamicStyles( 'uagb-style-icon-' + block_id, blockStyling );
	// 	}
	// }, [ props ] );

	// useEffect( () => {
	// 	// Replacement for componentDidUpdate.
	// 	const blockStyling = styling( props );
	// 	addBlockEditorDynamicStyles( 'uagb-style-icon-' + block_id, blockStyling );
	// 	scrollBlockToView();

	// }, [ deviceType ] );

	// const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = attributes;
	// useEffect( () => {
	// 	responsiveConditionPreview( props );
	// }, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	// useEffect( () => {
	// 	select( 'core/block-editor' )
    //         .getBlocksByClientId( props.clientId )[0]
    //         ?.innerBlocks.forEach( function( block ) {

    //             dispatch( 'core/block-editor' ).updateBlockAttributes(
    //                 block.clientId, {
    //                     fromParentIcon: props.attributes.parentIcon,
	// 					hideLabel: props.attributes.hideLabel,
	// 					imageSizeChild: props.attributes.size,
    //                 }
    //             );

    //         } );

	// }, [ props.attributes.parentIcon, props.attributes.hideLabel, props.attributes.size ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/icon-list.svg`; // using this until preview image is provided by designers

	return (
		attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				{/* { isSelected && <Settings { ...props } /> } */}
				<Render { ...props } />
			</>
		)
	);
};

export default UAGBIcon;
