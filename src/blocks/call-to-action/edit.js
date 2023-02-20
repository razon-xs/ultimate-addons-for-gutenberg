/**
 * BLOCK: Call To Action
 */

import CtaStyle from './inline-styles';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';

import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import { migrateBorderAttributes } from '@Controls/generateAttributes';
const UAGBCallToAction = ( props ) => {

	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: {
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			ctaPosition,
			stack,
			ctaLeftSpace,
			overallBlockLeftMargin,
			textAlign,
			ctaBorderStyle,
			ctaBorderWidth,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBorderRadius,
		},
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		if( stack === 'tablet' ) {
			setAttributes( {stack: 'tablet'} );
		}else if ( stack === 'mobile' ) {
			setAttributes( {stack: 'mobile'} )
		} else if ( stack === 'none' && ctaPosition === 'right' ) {
			setAttributes( {stack: 'none'} )
		} else if ( stack === 'none' && 'below-title' === ctaPosition ) {
			setAttributes( { stack: 'desktop' } );
		}

		if ( ctaLeftSpace ) {
			if ( undefined === overallBlockLeftMargin && 'left' === textAlign && 'right' === ctaPosition ) {
				setAttributes( { overallBlockLeftMargin: ctaLeftSpace } );
			}
		}

		// border
		if( ctaBorderWidth || ctaBorderRadius || ctaBorderColor || ctaBorderhoverColor || ctaBorderStyle ){
			migrateBorderAttributes( 'btn', {
				label: 'ctaBorderWidth',
				value: ctaBorderWidth,
			}, {
				label: 'ctaBorderRadius',
				value: ctaBorderRadius
			}, {
				label: 'ctaBorderColor',
				value: ctaBorderColor
			}, {
				label: 'ctaBorderhoverColor',
				value: ctaBorderhoverColor
			},{
				label: 'ctaBorderStyle',
				value: ctaBorderStyle
			},
			setAttributes,
			attributes
			);
		}
		
	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = CtaStyle( props );

		addBlockEditorDynamicStyles( 'uagb-cta-style-' + clientId.substr( 0, 8 ), blockStyling );
		
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

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

export default UAGBCallToAction;
