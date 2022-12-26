import React, { useEffect, useState, useRef } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';


const UAGBCountdownEdit = ( props ) => {

    const [ timeChanged, setTimeChanged ] = useState( 0 );

	useEffect( () => {

		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	}, [] );

	const countdownRef = useRef( null );

	useEffect( () => {
		if( countdownRef ) {
		setTimeout( () => {
			UAGBCountdown.editorInit( '.uagb-block-' + props.clientId.substr( 0, 8 ), props.attributes, countdownRef.current ); // eslint-disable-line no-undef
		} )
		}
	}, [ countdownRef ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-countdown-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
        if( props.attributes.block_id && timeChanged === 1 ) {
		    UAGBCountdown.changeEndTime( '.uagb-block-' + props.attributes.block_id, props.attributes, countdownRef.current ) // eslint-disable-line no-undef
        }
		setTimeChanged( 1 );
	}, [ props.attributes.endDateTime ] )

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/countdown.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
			<Settings parentProps={ props } />
			<Render countdownRef={ countdownRef } parentProps={ props } />
		</>
	);
}

export default UAGBCountdownEdit;
