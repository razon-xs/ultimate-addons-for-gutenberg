/**
 * BLOCK: Call To Action
 */

import CtaStyle from './inline-styles';
import React, { useEffect,    } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';

import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import { migrateBorderAttributes } from '@Controls/generateAttributes';
const UAGBCallToAction = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		const {
			ctaPosition,
			stack,
			ctaLeftSpace,
			overallBlockLeftMargin,
			textAlign,
			ctaBorderStyle,
			ctaBorderWidth,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBorderRadius
		} = props.attributes;

		if( stack === 'tablet' ) {
			props.setAttributes( {stack: 'tablet'} );
		}else if ( stack === 'mobile' ) {
			props.setAttributes( {stack: 'mobile'} )
		} else if ( stack === 'none' && ctaPosition === 'right' ) {
			props.setAttributes( {stack: 'none'} )
		} else if ( stack === 'none' && 'below-title' === ctaPosition ) {
			props.setAttributes( { stack: 'desktop' } );
		}

		if ( ctaLeftSpace ) {
			if ( undefined === overallBlockLeftMargin && 'left' === textAlign && 'right' === ctaPosition ) {
				props.setAttributes( { overallBlockLeftMargin: ctaLeftSpace } );
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
			props.setAttributes,
			props.attributes
			);
		}
		
	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = CtaStyle( props );

		addBlockEditorDynamicStyles( 'uagb-cta-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = CtaStyle( props );

		addBlockEditorDynamicStyles( 'uagb-cta-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/call-to-action.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};

export default UAGBCallToAction;
