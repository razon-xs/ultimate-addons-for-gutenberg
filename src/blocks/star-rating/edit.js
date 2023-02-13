/**
 * BLOCK: Star Rating
 */

// Import block dependencies and components.
import styling from './styling';
import { useEffect } from '@wordpress/element';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGStarRating = ( props ) => {

	const deviceType = useDeviceType();
	const { isSelected } = props;
	
	useEffect( () => {

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-star-rating-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-star-rating-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	return (
		<>
		{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGStarRating;
