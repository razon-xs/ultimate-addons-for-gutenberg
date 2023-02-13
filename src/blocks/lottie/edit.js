/**
 * BLOCK: Lottie Edit
 */

import styling from './styling';
import { useEffect,useState,useRef } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBLottie = ( props ) => {
	const deviceType = useDeviceType();
	const { isSelected } = props;
	const lottieplayer = useRef();
	const [ state, setState ] = useState( { direction: 1, loopState: true } );

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );
		
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-lottie-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-lottie-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const loopLottie = () => {
		const { setAttributes } = props;
		const { loop } = props.attributes;
		const { loopState } = state;

		setAttributes( { loop: ! loop } );
		setState( { loopState: ! loopState } );
	};

	const reverseDirection = () => {
		const { setAttributes } = props;
		const { reverse } = props.attributes;
		const { direction } = state;

		setAttributes( { reverse: ! reverse } );
		setState( { direction: direction * -1 } );
	};

	return (
		<>
			<Render lottieplayer={ lottieplayer } parentProps={ props } />
			{ isSelected && (
				<Settings
					parentProps={ props }
					loopLottie={ loopLottie }
					reverseDirection={ reverseDirection }
				/>
			) }
		</>
	);
};

export default UAGBLottie;
