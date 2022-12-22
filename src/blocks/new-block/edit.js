/**
 * BLOCK: Info-Box 2.0
 */
import styling from './styling';
import React, { useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';

import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBContainer = ( props ) => {
	const deviceType = useDeviceType();

	useEffect( () => {

		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-new-block-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
	);
};

export default UAGBContainer;
