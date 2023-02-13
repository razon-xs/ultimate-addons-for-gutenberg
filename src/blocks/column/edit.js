/**
 * BLOCK: Column - Edit
 */

import styling from './styling';
import { useEffect } from '@wordpress/element';


import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';

import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

const ColumnComponent = ( props ) => {
	const deviceType = useDeviceType();
	const { setAttributes, attributes, isSelected } = props;
	
	useEffect( () => {
		const {
			backgroundOpacity,
			backgroundImageColor,
			gradientOverlayColor1,
			gradientOverlayColor2,
			backgroundType,
			overlayType,
			gradientOverlayAngle,
			gradientOverlayLocation1,
			gradientOverlayPosition,
			gradientOverlayLocation2,
			gradientOverlayType
		   } = attributes;

		   if( 101 !== backgroundOpacity && 'image' === backgroundType && 'gradient' === overlayType ){
			const color1 = hexToRGBA( maybeGetColorForVariable( gradientOverlayColor1 ), backgroundOpacity );
			const color2 = hexToRGBA( maybeGetColorForVariable( gradientOverlayColor2 ), backgroundOpacity );
			let gradientVal;
			if ( 'linear' === gradientOverlayType ) {
				gradientVal = `linear-gradient(${ gradientOverlayAngle }deg, ${ color1 } ${ gradientOverlayLocation1 }%, ${ color2 } ${ gradientOverlayLocation2 }%)`;
			} else {
				gradientVal = `radial-gradient( at ${ gradientOverlayPosition }, ${ color1 } ${ gradientOverlayLocation1 }%, ${ color2 } ${ gradientOverlayLocation2 }%)`;
			}
			setAttributes( { gradientValue: gradientVal } );
		}

		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		if ( 'image' === backgroundType ) {
			if ( 101 !== backgroundOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
				setAttributes( { backgroundImageColor: color } );
				setAttributes( { backgroundOpacity: 101 } );
			}
		}
		const { borderStyle, borderWidth, borderRadius, borderColor, borderHoverColor } = props.attributes;

		// border migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){

			migrateBorderAttributes( 'column', {
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

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-column-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-column-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	return (
		<>
			{ isSelected && (
				<Settings parentProps={ props } deviceType={ deviceType } />
			) }
			<Render parentProps={ props } />
		</>
	);
};

export default ColumnComponent;
