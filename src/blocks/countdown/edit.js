import { useEffect, useState, useRef } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import { getSettings as getDateSettings } from '@wordpress/date';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { useDeviceType } from '@Controls/getPreviewType';

//  Import CSS.
import './style.scss';


const UAGBCountdownEdit = ( props ) => {

	const {
		isSelected,
		attributes,
		attributes: {
			timeModified,
			endDateTime,
			showDays,
			showHours,
			showMinutes,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		setAttributes
	} = props;

	const [ timeChanged, setTimeChanged ] = useState( 0 );

	const deviceType = useDeviceType();

	useEffect( () => {

		// Dynamically set default value to Jan 1 of next year (UTC),
		// on drag and drop of a new instance of the block. 
		if( ! timeModified ) {  // check if time has been modified dynamically using the flag attribute.

			// Get WordPress' timezone offset from settings.
			const { timezone } = getDateSettings();

			// For countdown calculations.
			const actualTime = new Date();

			// For setting the time in input fields as per selected timezone offset in WordPress settings.
			const displayTime = new Date();

			// Set the default end time to 7 days later (one for displaying in input fields, and another with actual timezone offset calculations).
			actualTime.setMilliseconds( actualTime.getMilliseconds() + ( 7 * 24 * 60 * 60 * 1000 ) );

			displayTime.setMilliseconds( displayTime.getMilliseconds() + ( 7 * 24 * 60 * 60 * 1000 ) );

			// For display time, we consider local and WP timezone offset.
			displayTime.setMilliseconds( displayTime.getMilliseconds() + ( ( displayTime.getTimezoneOffset() * 60 * 1000 ) + ( timezone.offset * 60 * 60 * 1000 ) ) );
	
			setAttributes( {
				endDateTime: actualTime,
				displayEndDateTime: displayTime,
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
	}, [ attributes ] );

	useEffect( () => {
		if( props.attributes.block_id && timeChanged === 1 ) {
			UAGBCountdown.changeEndTime( '.uagb-block-' + props.attributes.block_id, props.attributes, countdownRef.current ) // eslint-disable-line no-undef
		}
		setTimeChanged( 1 );
	}, [
		endDateTime,
		showDays,
		showHours,
		showMinutes,
	] )

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [
		UAGHideDesktop,
		UAGHideTab,
		UAGHideMob,
		deviceType
	] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/countdown.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render countdownRef={ countdownRef } parentProps={ props } />
		</>
	);
}

export default UAGBCountdownEdit;
