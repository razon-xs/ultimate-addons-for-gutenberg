/**
 * Returns Dynamic Generated CSS
 */

import generateBorderCSS from '@Controls/generateBorderCSS';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		separatorStyle,
		separatorAlign,
		separatorAlignTablet,
		separatorAlignMobile,
		separatorWidth,
		separatorWidthTablet,
		separatorWidthMobile,
		separatorWidthType,
		separatorColor,
		separatorThickness,
		thicknessUnit,
		separatorTopPadding,
		separatorRightPadding,
		separatorBottomPadding,
		separatorLeftPadding,
		separatorPaddingTopTablet,
		separatorPaddingRightTablet,
		separatorPaddingBottomTablet,
		separatorPaddingLeftTablet,
		separatorPaddingTopMobile,
		separatorPaddingRightMobile,
		separatorPaddingBottomMobile,
		separatorPaddingLeftMobile,
		separatorPaddingUnit,
		separatorMobilePaddingUnit,
		separatorTabletPaddingUnit,
		elementType,
		elementPosition,
		elementPositionTablet,
		elementPositionMobile,
		elementSpacing,
		elementSpacingTablet,
		elementSpacingMobile,
		elementSpacingUnit,
		elementTextFontFamily,
		elementTextFontWeight,
		elementTextFontSize,
		elementTextFontSizeType,
		elementTextFontSizeTablet,
		elementTextFontSizeMobile,
		elementTextLineHeightType,
		elementTextLineHeight,
		elementTextLineHeightTablet,
		elementTextLineHeightMobile,
		elementTextFontStyle,
		elementTextLetterSpacing,
		elementTextLetterSpacingTablet,
		elementTextLetterSpacingMobile,
		elementTextLetterSpacingType,
		elementTextDecoration,
		elementTextTransform,
		elementColor,
		elementIconWidth,
		elementIconWidthTablet,
		elementIconWidthMobile,
		elementIconWidthType
	} = props.attributes;

	// Responsive Slider
	const separatorWidthFallback = getFallbackNumber( separatorWidth, 'separatorWidth', blockName );
	const separatorWidthFallbackTablet = getFallbackNumber( separatorWidthTablet, 'separatorWidthTablet', blockName );
	const separatorWidthFallbackMobile = getFallbackNumber( separatorWidthMobile, 'separatorWidthMobile', blockName );
	// Thikness
	const separatorThicknessFallback = getFallbackNumber( separatorThickness, 'separatorThickness', blockName );


	const borderCSS = {
		'border-top-width': generateCSSUnit(
			separatorThicknessFallback,
			thicknessUnit
		),
		'border-top-color': separatorColor,
		'border-top-style': separatorStyle,
	}
	let borderStyle = {}
	let iconSpacingStyle = {}
	if(elementType === 'none'){
		borderStyle = {
			'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
				'width': generateCSSUnit( separatorWidthFallback, separatorWidthType ),
				...borderCSS
			}
		}
	} else {
		let alignCSS = {}
		if(separatorAlign === 'left'){
			alignCSS = {
				'margin-left': 0
			}
		}
		if(separatorAlign === 'right'){
			alignCSS = {
				'margin-right': 0
			}
		}
		borderStyle = {
			'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
				'width': generateCSSUnit( separatorWidthFallback, separatorWidthType ),
				...alignCSS
			},
			'.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before': borderCSS,
			'.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before': borderCSS,
			'.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after': borderCSS,
			'.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after': borderCSS
		}
		if(elementPosition === 'left'){
			iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-right': generateCSSUnit( elementSpacing, elementSpacingUnit )
			}
			borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = {
				'display': 'none'
			}
			borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = {
				'display': 'none'
			}
		}
		if(elementPosition === 'right'){
			iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-left': generateCSSUnit( elementSpacing, elementSpacingUnit )
			}
			borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after'] = {
				'display': 'none'
			}
			borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after'] = {
				'display': 'none'
			}
		}
		if(elementPosition === 'center'){
			iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-right': generateCSSUnit( elementSpacing, elementSpacingUnit ),
				'margin-left': generateCSSUnit( elementSpacing, elementSpacingUnit )
			}
		}
	}

	const selectors = {
		'.wp-block-uagb-separator': {
			'padding-bottom': generateCSSUnit( separatorBottomPadding, separatorPaddingUnit ),
			'padding-top': generateCSSUnit( separatorTopPadding, separatorPaddingUnit ),
			'padding-left': generateCSSUnit( separatorLeftPadding, separatorPaddingUnit ),
			'padding-right': generateCSSUnit( separatorRightPadding, separatorPaddingUnit ),
			'text-align': separatorAlign,
		},
		...borderStyle,
		...iconSpacingStyle,
		'.wp-block-uagb-separator .wp-block-uagb-separator-element': {
			'color': elementColor
		},
		'.wp-block-uagb-separator--text .wp-block-uagb-separator-element': {
			'font-family': elementTextFontFamily,
			'font-style' : elementTextFontStyle,
			'text-decoration': elementTextDecoration,
			'text-transform': elementTextTransform,
			'font-weight': elementTextFontWeight,
			'font-size': generateCSSUnit( elementTextFontSize, elementTextFontSizeType ),
			'line-height': generateCSSUnit( elementTextLineHeight, elementTextLineHeightType ),
			'letter-spacing': generateCSSUnit( elementTextLetterSpacing, elementTextLetterSpacingType ),
		},
		'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element': {
			'fill': elementColor
		},
		'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg': {
			'font-size': generateCSSUnit( elementIconWidth, elementIconWidthType ),
			'width': generateCSSUnit( elementIconWidth, elementIconWidthType ),
			'height': generateCSSUnit( elementIconWidth, elementIconWidthType ),
			'line-height': generateCSSUnit( elementIconWidth, elementIconWidthType )
		}
	}

	let borderStyleTablet = {}
	let iconSpacingStyleTablet = {}
	if(elementType !== 'none') {
		if(elementPositionTablet === 'left'){
			iconSpacingStyleTablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-right': generateCSSUnit( elementSpacingTablet, elementSpacingUnit )
			}
			borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = {
				'display': 'none'
			}
			borderStyleTablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = {
				'display': 'none'
			}
		}
		if(elementPositionTablet === 'center'){
			iconSpacingStyleTablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-left': generateCSSUnit( elementSpacingTablet, elementSpacingUnit ),
				'margin-right': generateCSSUnit( elementSpacingTablet, elementSpacingUnit )
			}
			borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = {
				'display': 'block'
			}
			borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after'] = {
				'display': 'block'
			}
			borderStyleTablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = {
				'display': 'block'
			}
			borderStyleTablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after'] = {
				'display': 'block'
			}
		}
		if(elementPositionTablet === 'right'){
			iconSpacingStyleTablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-left': generateCSSUnit( elementSpacingTablet, elementSpacingUnit ),
			}
			borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after'] = {
				'display': 'none'
			}
			borderStyleTablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after'] = {
				'display': 'none'
			}
		}
	}

	const tablet_selectors = {
		'.wp-block-uagb-separator': {
			'padding-bottom': generateCSSUnit( separatorPaddingBottomTablet, separatorTabletPaddingUnit ),
			'padding-top': generateCSSUnit( separatorPaddingTopTablet, separatorTabletPaddingUnit ),
			'padding-left': generateCSSUnit( separatorPaddingLeftTablet, separatorTabletPaddingUnit ),
			'padding-right': generateCSSUnit( separatorPaddingRightTablet, separatorTabletPaddingUnit ),
			'text-align': separatorAlignTablet,
		},
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
			'width': generateCSSUnit( separatorWidthFallbackTablet, separatorWidthType ),
		},
		...borderStyleTablet,
		...iconSpacingStyleTablet,
		'.wp-block-uagb-separator--text .wp-block-uagb-separator-element': {
			'font-size': generateCSSUnit( elementTextFontSizeTablet, elementTextFontSizeType ),
			'line-height': generateCSSUnit( elementTextLineHeightTablet, elementTextLineHeightType ),
			'letter-spacing': generateCSSUnit( elementTextLetterSpacingTablet, elementTextLetterSpacingType ),
		},
		'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg': {
			'font-size': generateCSSUnit( elementIconWidthTablet, elementIconWidthType ),
			'width': generateCSSUnit( elementIconWidthTablet, elementIconWidthType ),
			'height': generateCSSUnit( elementIconWidthTablet, elementIconWidthType ),
			'line-height': generateCSSUnit( elementIconWidthTablet, elementIconWidthType )
		}
	};

	let borderStyleMobile = {}
	let iconSpacingStyleMobile = {}
	if(elementType !== 'none') {
		if(elementPositionMobile === 'left'){
			iconSpacingStyleMobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-right': generateCSSUnit( elementSpacingMobile, elementSpacingUnit )
			}
			borderStyleMobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = {
				'display': 'none'
			}
			borderStyleMobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = {
				'display': 'none'
			}
		}
		if(elementPositionMobile === 'center'){
			iconSpacingStyleMobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-left': generateCSSUnit( elementSpacingMobile, elementSpacingUnit ),
				'margin-right': generateCSSUnit( elementSpacingMobile, elementSpacingUnit )
			}
			borderStyleMobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = {
				'display': 'block'
			}
			borderStyleMobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after'] = {
				'display': 'block'
			}
			borderStyleMobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = {
				'display': 'block'
			}
			borderStyleMobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after'] = {
				'display': 'block'
			}
		}
		if(elementPositionMobile === 'right'){
			iconSpacingStyleMobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = {
				'margin-left': generateCSSUnit( elementSpacingMobile, elementSpacingUnit )
			}
			borderStyleMobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after'] = {
				'display': 'none'
			}
			borderStyleMobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after'] = {
				'display': 'none'
			}
		}
	}
	const mobile_selectors = {
		'.wp-block-uagb-separator': {
			'padding-bottom': generateCSSUnit( separatorPaddingBottomMobile, separatorMobilePaddingUnit ),
			'padding-top': generateCSSUnit( separatorPaddingTopMobile, separatorMobilePaddingUnit ),
			'padding-left': generateCSSUnit( separatorPaddingLeftMobile, separatorMobilePaddingUnit ),
			'padding-right': generateCSSUnit( separatorPaddingRightMobile, separatorMobilePaddingUnit ),
			'text-align': separatorAlignMobile,
		},
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
			'width': generateCSSUnit( separatorWidthFallbackMobile, separatorWidthType ),
		},
		...borderStyleMobile,
		...iconSpacingStyleMobile,
		'.wp-block-uagb-separator--text .wp-block-uagb-separator-element': {
			'font-size': generateCSSUnit( elementTextFontSizeMobile, elementTextFontSizeType ),
			'line-height': generateCSSUnit( elementTextLineHeightMobile, elementTextLineHeightType ),
			'letter-spacing': generateCSSUnit( elementTextLetterSpacingMobile, elementTextLetterSpacingType ),
		},
		'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg': {
			'font-size': generateCSSUnit( elementIconWidthMobile, elementIconWidthType ),
			'width': generateCSSUnit( elementIconWidthMobile, elementIconWidthType ),
			'height': generateCSSUnit( elementIconWidthMobile, elementIconWidthType ),
			'line-height': generateCSSUnit( elementIconWidthMobile, elementIconWidthType )
		}
	};


	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
}

export default styling;
