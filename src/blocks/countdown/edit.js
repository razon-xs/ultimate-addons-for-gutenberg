import React, { useEffect, useState, useRef } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';


const UAGBCountdownEdit = ( props ) => {

	const { setAttributes } = props;

    const [ timeChanged, setTimeChanged ] = useState( 0 );

	useEffect( () => {

		// Dynamically set default value to Jan 1 of next year (UTC),
		// on drag and drop of a new instance of the block. 
		if( ! props.attributes.timeModified ) {  // check if time has been modified dynamically using the flag attribute.

			const d = new Date();
			const year = d.getUTCFullYear();
	
			setAttributes( {
				endDateTime: ( year + 1 ) + '-01-01T00:00:00Z',
				timeModified: true,
			} );
		}

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

	const countdownProToolbar = wp.hooks.applyFilters( 'spectra.countdown.toolbar-hook', '', props.name );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/countdown.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
			{/* Countdown Toolbar options for Pro */}
			{ !!uagb_blocks_info.spectra_pro_status &&
				countdownProToolbar
			}
			<Settings parentProps={ props } />
			<Render countdownRef={ countdownRef } parentProps={ props } />
		</>
	);
}

export default UAGBCountdownEdit;
