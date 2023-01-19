/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
 
export default function styling( props ) {

    const { attributes } = props;

    const {
        // digit.
		digitFontFamily,
		digitFontWeight,
		digitFontStyle,
		digitFontSize,
		digitColor,
		digitDecoration,
		digitFontSizeType,
		digitFontSizeMobile,
		digitFontSizeTablet,
		digitLineHeight,
		digitLineHeightType,
		digitLineHeightMobile,
		digitLineHeightTablet,
		digitLetterSpacing,
		digitLetterSpacingType,
		digitLetterSpacingMobile,
		digitLetterSpacingTablet,
		digitTopMargin,
		digitRightMargin,
		digitLeftMargin,
		digitBottomMargin,
		digitTopMarginTablet,
		digitRightMarginTablet,
		digitLeftMarginTablet,
		digitBottomMarginTablet,
		digitTopMarginMobile,
		digitRightMarginMobile,
		digitLeftMarginMobile,
		digitBottomMarginMobile,
		digitMarginUnit,
		digitMarginUnitTablet,
		digitMarginUnitMobile,
        // label.
		labelFontFamily,
		labelFontWeight,
		labelFontStyle,
		labelFontSize,
		labelColor,
		labelTransform,
		labelDecoration,
		labelFontSizeType,
		labelFontSizeMobile,
		labelFontSizeTablet,
		labelLineHeight,
		labelLineHeightType,
		labelLineHeightMobile,
		labelLineHeightTablet,
		labelLetterSpacing,
		labelLetterSpacingType,
		labelLetterSpacingMobile,
		labelLetterSpacingTablet,
		labelTopMargin,
		labelRightMargin,
		labelLeftMargin,
		labelBottomMargin,
		labelTopMarginTablet,
		labelRightMarginTablet,
		labelLeftMarginTablet,
		labelBottomMarginTablet,
		labelTopMarginMobile,
		labelRightMarginMobile,
		labelLeftMarginMobile,
		labelBottomMarginMobile,
		labelMarginUnit,
		labelMarginUnitTablet,
		labelMarginUnitMobile,
		// Separator styling.
		separatorFontFamily,
		separatorFontWeight,
		separatorFontStyle,
		separatorFontSize,
		separatorColor,
		separatorFontSizeType,
		separatorFontSizeMobile,
		separatorFontSizeTablet,
		separatorLineHeight,
		separatorLineHeightType,
		separatorLineHeightMobile,
		separatorLineHeightTablet,
		separatorRightSpacing,
		separatorRightSpacingTablet,
		separatorRightSpacingMobile,
		separatorTopSpacing,
		separatorTopSpacingTablet,
		separatorTopSpacingMobile,
        // Block Margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		// Block Padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		// Box Padding.
		boxTopPadding,
		boxRightPadding,
		boxLeftPadding,
		boxBottomPadding,
		boxTopPaddingTablet,
		boxRightPaddingTablet,
		boxLeftPaddingTablet,
		boxBottomPaddingTablet,
		boxTopPaddingMobile,
		boxRightPaddingMobile,
		boxLeftPaddingMobile,
		boxBottomPaddingMobile,
		boxPaddingUnit,
		boxPaddingUnitTablet,
		boxPaddingUnitMobile,
		// Overall Align.
		align,
		alignTablet,
		alignMobile,
		// Box Align.
		boxAlign,
		boxAlignTablet,
		boxAlignMobile,
		// Box Spacing.
		boxSpacing,
		boxSpacingTablet,
		boxSpacingMobile,
		// Box Flex Direction.
		boxFlex,
		boxFlexTablet,
		boxFlexMobile,
		// Box Background.
		boxBgType,
		boxBgColor,
		// Box - Box Shadow.
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,
		showSeparator,
        separatorType,
		boxBorderHColor,
    } = attributes;

    const blockName = props.name.replace( 'uagb/', '' );

	const isRTL = ( '1' === uagb_blocks_info.is_rtl ) ? true : false;

	const childSelectorType = isRTL ? 'first' : 'last';
	const pseudoElementSelectorType = isRTL ? 'before' : 'after';

	const separatorSelector = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:' + childSelectorType + '-child) .wp-block-uagb-countdown__time::' + pseudoElementSelectorType;

	// Fallbacks.

	const boxSpacingFallback = getFallbackNumber( boxSpacing, 'boxSpacing', blockName );
	const boxSpacingFallbackTablet = isNaN( boxSpacingTablet ) ? boxSpacing : boxSpacingTablet;
	const boxSpacingFallbackMobile = isNaN( boxSpacingMobile ) ? boxSpacingTablet : boxSpacingMobile;

	const separatorRightSpacingFallback = getFallbackNumber( separatorRightSpacing, 'separatorRightSpacing', blockName );
	const separatorRightSpacingTabletFallback = isNaN( separatorRightSpacingTablet ) ? separatorRightSpacing : separatorRightSpacingTablet;
	const separatorRightSpacingMobileFallback = isNaN( separatorRightSpacingMobile ) ? separatorRightSpacingTablet : separatorRightSpacingMobile;

	const separatorTopSpacingFallback = getFallbackNumber( separatorTopSpacing, 'separatorTopSpacing', blockName );
	const separatorTopSpacingTabletFallback = isNaN( separatorTopSpacingTablet ) ? separatorTopSpacing : separatorTopSpacingTablet;
	const separatorTopSpacingMobileFallback = isNaN( separatorTopSpacingMobile ) ? separatorTopSpacingTablet : separatorTopSpacingMobile;

	// Border.
	const boxBorderCSS = generateBorderCSS( props.attributes, 'box' );
	const boxBorderCSSTablet = generateBorderCSS( props.attributes, 'box', 'tablet' );
	const boxBorderCSSMobile = generateBorderCSS( props.attributes, 'box', 'mobile' );

	let boxShadowPositionCSS = boxShadowPosition;

	// Box Shadow.
	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
	}


	const tabletSelectors = {};
	const mobileSelectors = {};

    const selectors = {

        '.wp-block-uagb-countdown':{
			'justify-content': align,
            'margin-top': generateCSSUnit( blockTopMargin, blockMarginUnit ),
			'margin-right': generateCSSUnit( blockRightMargin, blockMarginUnit ),
			'margin-bottom': generateCSSUnit( blockBottomMargin, blockMarginUnit ),
			'margin-left': generateCSSUnit( blockLeftMargin, blockMarginUnit ),
			'padding-top': generateCSSUnit( blockTopPadding, blockPaddingUnit ),
			'padding-right': generateCSSUnit( blockRightPadding, blockPaddingUnit ),
			'padding-bottom': generateCSSUnit( blockBottomPadding, blockPaddingUnit ),
			'padding-left': generateCSSUnit( blockLeftPadding, blockPaddingUnit ),
        },
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box':{
			'flex-direction': boxFlex,
			'text-align': boxAlign,
			'background-color': ( boxBgType !== 'transparent' ) ? boxBgColor : 'transparent', 
			'padding-top': generateCSSUnit( boxTopPadding, boxPaddingUnit ),
			'padding-right': generateCSSUnit( boxRightPadding, boxPaddingUnit ),
			'padding-bottom': generateCSSUnit( boxBottomPadding, boxPaddingUnit ),
			'padding-left': generateCSSUnit( boxLeftPadding, boxPaddingUnit ),
			'box-shadow': generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) +	' ' +
			generateCSSUnit( boxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpread, 'px' ) + ' ' +
			boxShadowColor + ' ' +	boxShadowPositionCSS,
			...boxBorderCSS,
		},
		'.wp-block-uagb-countdown:hover .wp-block-uagb-countdown__box':{
			'border-color': boxBorderHColor,
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)':{
			'margin-right': generateCSSUnit( boxSpacingFallback, 'px' ),
		},
        '.wp-block-uagb-countdown .wp-block-uagb-countdown__time':{
			'font-family': digitFontFamily,
			'font-style' : digitFontStyle,
			'text-decoration': digitDecoration,
			'font-weight': digitFontWeight,
			'font-size': generateCSSUnit( digitFontSize, digitFontSizeType ),
			'line-height': generateCSSUnit( digitLineHeight, digitLineHeightType ),
			'letter-spacing': generateCSSUnit( digitLetterSpacing, digitLetterSpacingType ),
			'color': digitColor,
			'margin-top': generateCSSUnit( digitTopMargin, digitMarginUnit ),
			'margin-right': generateCSSUnit( digitRightMargin, digitMarginUnit ),
			'margin-bottom': generateCSSUnit( digitBottomMargin, digitMarginUnit ),
			'margin-left': generateCSSUnit( digitLeftMargin, digitMarginUnit ),
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child) .wp-block-uagb-countdown__time::after': {}, // Empty ruleset to prevent undefined error.
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)':{},  // Empty ruleset to prevent undefined error (for RTL Box Gap).
        '.wp-block-uagb-countdown .wp-block-uagb-countdown__label': {
            'font-family': labelFontFamily,
			'font-style' : labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
			'color': labelColor,
			'margin-top': generateCSSUnit( labelTopMargin, labelMarginUnit ),
			'margin-right': generateCSSUnit( labelRightMargin, labelMarginUnit ),
			'margin-bottom': generateCSSUnit( labelBottomMargin, labelMarginUnit ),
			'margin-left': generateCSSUnit( labelLeftMargin, labelMarginUnit ),
        },

    };

	// Box Shadow.
	const boxShadowBlurHoverTemp = isNaN( boxShadowBlurHover ) ? '' : boxShadowBlurHover;
	const boxShadowColorHoverTemp = boxShadowColorHover ? boxShadowColorHover : '';

	if( '' !== boxShadowColorHoverTemp || '' !== boxShadowBlurHoverTemp ) {

		const boxShadowBlurHoverCSSUnit = ( '' === boxShadowBlurHoverTemp ) ? '' : generateCSSUnit( boxShadowBlurHoverTemp, 'px' );

		selectors['.wp-block-uagb-countdown:hover .wp-block-uagb-countdown__box']['box-shadow'] = generateCSSUnit( boxShadowHOffsetHover, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffsetHover, 'px' ) +	' ' +
													boxShadowBlurHoverCSSUnit + ' ' +	generateCSSUnit( boxShadowSpreadHover, 'px' ) + ' ' +
													boxShadowColorHoverTemp + ' ' +	boxShadowPositionCSSHover;
	}

	// TABLET SELECTORS.
    tabletSelectors['.wp-block-uagb-countdown'] = {
		'justify-content': alignTablet,
        'margin-top': generateCSSUnit( blockTopMarginTablet, blockMarginUnitTablet ),
        'margin-right': generateCSSUnit( blockRightMarginTablet, blockMarginUnitTablet ),
        'margin-bottom': generateCSSUnit( blockBottomMarginTablet, blockMarginUnitTablet ),
        'margin-left': generateCSSUnit( blockLeftMarginTablet, blockMarginUnitTablet ),
        'padding-top': generateCSSUnit( blockTopPaddingTablet, blockPaddingUnitTablet ),
        'padding-right': generateCSSUnit( blockRightPaddingTablet, blockPaddingUnitTablet ),
        'padding-bottom': generateCSSUnit( blockBottomPaddingTablet, blockPaddingUnitTablet ),
        'padding-left': generateCSSUnit( blockLeftPaddingTablet, blockPaddingUnitTablet ),
    };

	tabletSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box'] = {
		'flex-direction': boxFlexTablet,
		'text-align': boxAlignTablet,
        'padding-top': generateCSSUnit( boxTopPaddingTablet, boxPaddingUnitTablet ),
        'padding-right': generateCSSUnit( boxRightPaddingTablet, boxPaddingUnitTablet ),
        'padding-bottom': generateCSSUnit( boxBottomPaddingTablet, boxPaddingUnitTablet ),
        'padding-left': generateCSSUnit( boxLeftPaddingTablet, boxPaddingUnitTablet ),
		...boxBorderCSSTablet,
    };

	tabletSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)'] = {
		'margin-right': generateCSSUnit( boxSpacingFallbackTablet, 'px' ),
    };

	tabletSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)'] = {}; // Empty ruleset to prevent undefined error (for RTL Box Gap).

    tabletSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = {
        'font-size': generateCSSUnit( digitFontSizeTablet, digitFontSizeType ),
        'line-height': generateCSSUnit( digitLineHeightTablet, digitLineHeightType ),
		'letter-spacing': generateCSSUnit( digitLetterSpacingTablet, digitLetterSpacingType ),
        'margin-top': generateCSSUnit( digitTopMarginTablet, digitMarginUnitTablet ),
        'margin-right': generateCSSUnit( digitRightMarginTablet, digitMarginUnitTablet ),
        'margin-bottom': generateCSSUnit( digitBottomMarginTablet, digitMarginUnitTablet ),
        'margin-left': generateCSSUnit( digitLeftMarginTablet, digitMarginUnitTablet ),
    };

    tabletSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = {
        'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
        'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
		'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
        'margin-top': generateCSSUnit( labelTopMarginTablet, labelMarginUnitTablet ),
        'margin-right': generateCSSUnit( labelRightMarginTablet, labelMarginUnitTablet ),
        'margin-bottom': generateCSSUnit( labelBottomMarginTablet, labelMarginUnitTablet ),
        'margin-left': generateCSSUnit( labelLeftMarginTablet, labelMarginUnitTablet ),
    };

    mobileSelectors['.wp-block-uagb-countdown'] = {
		'justify-content': alignMobile,
        'margin-top': generateCSSUnit( blockTopMarginMobile, blockMarginUnitMobile ),
        'margin-right': generateCSSUnit( blockRightMarginMobile, blockMarginUnitMobile ),
        'margin-bottom': generateCSSUnit( blockBottomMarginMobile, blockMarginUnitMobile ),
        'margin-left': generateCSSUnit( blockLeftMarginMobile, blockMarginUnitMobile ),
        'padding-top': generateCSSUnit( blockTopPaddingMobile, blockPaddingUnitMobile ),
        'padding-right': generateCSSUnit( blockRightPaddingMobile, blockPaddingUnitMobile ),
        'padding-bottom': generateCSSUnit( blockBottomPaddingMobile, blockPaddingUnitMobile ),
        'padding-left': generateCSSUnit( blockLeftPaddingMobile, blockPaddingUnitMobile ),
    };

	mobileSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box'] = {
		'flex-direction': boxFlexMobile,
		'text-align': boxAlignMobile,
        'padding-top': generateCSSUnit( boxTopPaddingMobile, boxPaddingUnitMobile ),
        'padding-right': generateCSSUnit( boxRightPaddingMobile, boxPaddingUnitMobile ),
        'padding-bottom': generateCSSUnit( boxBottomPaddingMobile, boxPaddingUnitMobile ),
        'padding-left': generateCSSUnit( boxLeftPaddingMobile, boxPaddingUnitMobile ),
		...boxBorderCSSMobile,
    };

	mobileSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)'] = {
		'margin-right': generateCSSUnit( boxSpacingFallbackMobile, 'px' ),
    };

	mobileSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)'] = {}; // Empty ruleset to prevent undefined error (for RTL Box Gap).

    mobileSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = {
        'font-size': generateCSSUnit( digitFontSizeMobile, digitFontSizeType ),
        'line-height': generateCSSUnit( digitLineHeightMobile, digitLineHeightType ),
		'letter-spacing': generateCSSUnit( digitLetterSpacingMobile, digitLetterSpacingType ),
        'margin-top': generateCSSUnit( digitTopMarginMobile, digitMarginUnitMobile ),
        'margin-right': generateCSSUnit( digitRightMarginMobile, digitMarginUnitMobile ),
        'margin-bottom': generateCSSUnit( digitBottomMarginMobile, digitMarginUnitMobile ),
        'margin-left': generateCSSUnit( digitLeftMarginMobile, digitMarginUnitMobile ),
    };

    mobileSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = {
        'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
        'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
		'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
        'margin-top': generateCSSUnit( labelTopMarginMobile, labelMarginUnitMobile ),
        'margin-right': generateCSSUnit( labelRightMarginMobile, labelMarginUnitMobile ),
        'margin-bottom': generateCSSUnit( labelBottomMarginMobile, labelMarginUnitMobile ),
        'margin-left': generateCSSUnit( labelLeftMarginMobile, labelMarginUnitMobile ),
    };

	// Separator.
	if( showSeparator ) {
		selectors[ separatorSelector ] = {
			'content': ( separatorType === 'line' ) ? '"|"' : '":"',
			'font-family': separatorFontFamily,
			'font-style' : separatorFontStyle,
			'font-weight': separatorFontWeight,
			'font-size': generateCSSUnit( separatorFontSize, separatorFontSizeType ),
			'line-height': generateCSSUnit( separatorLineHeight, separatorLineHeightType ),
			'color': separatorColor,

			'right': generateCSSUnit( -separatorRightSpacingFallback, 'px' ),
			'top': generateCSSUnit( separatorTopSpacingFallback, 'px' ),
		};

		tabletSelectors[ separatorSelector ] = {
			'font-size': generateCSSUnit( separatorFontSizeTablet, separatorFontSizeType ),
			'line-height': generateCSSUnit( separatorLineHeightTablet, separatorLineHeightType ),
			'right': generateCSSUnit( -separatorRightSpacingTabletFallback, 'px' ),
			'top': generateCSSUnit( separatorTopSpacingTabletFallback, 'px' ),
		};

		mobileSelectors[ separatorSelector ] = {
			'font-size': generateCSSUnit( separatorFontSizeMobile, separatorFontSizeType ),
			'line-height': generateCSSUnit( separatorLineHeightMobile, separatorLineHeightType ),
			'right': generateCSSUnit( -separatorRightSpacingMobileFallback, 'px' ),
			'top': generateCSSUnit( separatorTopSpacingMobileFallback, 'px' ),
		};
	}

	// If RTL is enabled, we use the following selectors and CSS properties for box gap.
	if ( isRTL ) {

		const boxGapSelectorLTR = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)';
		const boxGapSelectorRTL = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)';

		selectors[boxGapSelectorLTR]['margin-right'] = 'unset';
		tabletSelectors[boxGapSelectorLTR]['margin-right'] = 'unset';
		mobileSelectors[boxGapSelectorLTR]['margin-right'] = 'unset';

		selectors[boxGapSelectorRTL]['margin-right'] = generateCSSUnit( boxSpacingFallback, 'px' );
		tabletSelectors[boxGapSelectorRTL]['margin-right'] = generateCSSUnit( boxSpacingFallbackTablet, 'px' );
		mobileSelectors[boxGapSelectorRTL]['margin-right'] = generateCSSUnit( boxSpacingFallbackMobile, 'px' );

	}

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

    let styling_css = generateCSS( selectors, baseSelector );

    styling_css += generateCSS(
        tabletSelectors,
        `${ baseSelector }.uagb-editor-preview-mode-tablet`,
        true,
        'tablet'
    );


    styling_css += generateCSS(
        mobileSelectors,
        `${ baseSelector }.uagb-editor-preview-mode-mobile`,
        true,
        'mobile'
    );

    return styling_css;
}
 