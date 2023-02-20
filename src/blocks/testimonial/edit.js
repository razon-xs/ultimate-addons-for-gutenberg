/**
 * BLOCK: Testimonial
 */
import TestimonialStyle from './inline-styles';
import React, {    useEffect } from 'react';


import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import hexToRGBA from '@Controls/hexToRgba';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

const UAGBtestimonial = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {

		const { setAttributes, attributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		const {
			backgroundOpacity,
			backgroundImageColor,
			backgroundType,
			overlayType,
			gradientColor1,
			gradientColor2,
			gradientLocation1,
			gradientLocation2,
			gradientType,
			gradientAngle,
			gradientPosition,
		} = attributes;

		if( 101 !== backgroundOpacity && 'image' === backgroundType && 'gradient' === overlayType ){
			const color1 = hexToRGBA( maybeGetColorForVariable( gradientColor1 ), backgroundOpacity );
			const color2 = hexToRGBA( maybeGetColorForVariable( gradientColor2 ), backgroundOpacity );
			let gradientVal;
			if ( 'linear' === gradientType ) {
				gradientVal = `linear-gradient(${ gradientAngle }deg, ${ color1 } ${ gradientLocation1 }%, ${ color2 } ${ gradientLocation2 }%)`;
			} else {
				gradientVal = `radial-gradient( at ${ gradientPosition }, ${ color1 } ${ gradientLocation1 }%, ${ color2 } ${ gradientLocation2 }%)`;
			}
			setAttributes( { gradientValue: gradientVal } );
		}

		if ( 'image' === backgroundType ) {
			if ( 101 !== backgroundOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
				setAttributes( { backgroundImageColor: color } );
				setAttributes( { backgroundOpacity: 101 } );
			}
		}
		const { borderStyle,borderWidth,borderRadius,borderColor,borderHoverColor } = props.attributes;
		// Backward Border Migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'overall', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			props.setAttributes,
			props.attributes
			);
		}
		

	}, [] );

	useEffect( () => {
		const equalHeight = props.attributes.equalHeight;
		if ( equalHeight ) {
			uagb_carousel_height( props.clientId.substr( 0, 8 ) ); // eslint-disable-line no-undef
		} else {
			uagb_carousel_unset_height( props.clientId.substr( 0, 8 ) ); // eslint-disable-line no-undef
		}

		const blockStyling = TestimonialStyle( props );

		addBlockEditorDynamicStyles( 'uagb-testinomial-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );
	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = TestimonialStyle( props );

		addBlockEditorDynamicStyles( 'uagb-testinomial-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/testimonial.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};

export default UAGBtestimonial;
