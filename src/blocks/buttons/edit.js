/**
 * BLOCK: Buttons
 */

import styling from './styling';
import { useEffect,useState } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

let prevState;

const ButtonsComponent = ( props ) => {

	const deviceType = useDeviceType();
	const { isSelected } = props;

	const initialState = {
		isFocused: 'false',
		isHovered: 'false',
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		props.setAttributes( { classMigrate: true } );
		props.setAttributes( { childMigrate: true } );

		prevState = props.isSelected;
		
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if ( ! props.isSelected && prevState && state.isFocused ) {
			setStateValue( {
				isFocused: 'false',
			} );
		}

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-buttons-' + props.clientId.substr( 0, 8 ), blockStyling );

		prevState = props.isSelected;
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-buttons-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();

	}, [deviceType] );
	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default ButtonsComponent;
