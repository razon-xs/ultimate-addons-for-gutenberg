<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

UAGB_Block_JS::blocks_countdown_gfont( $attr );

$block_name = 'countdown';

$is_rtl = is_rtl();

$child_selector_type          = $is_rtl ? 'first' : 'last';
$pseudo_element_selector_type = $is_rtl ? 'before' : 'after';

$separator_selector = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:' . $child_selector_type . '-child) .wp-block-uagb-countdown__time::' . $pseudo_element_selector_type;

// Fallbacks.
$box_spacing_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['boxSpacing'], 'boxSpacing', $block_name );
$attr['boxSpacingTablet'] = is_numeric( $attr['boxSpacingTablet'] ) ? $attr['boxSpacingTablet'] : $box_spacing_fallback;
$attr['boxSpacingMobile'] = is_numeric( $attr['boxSpacingMobile'] ) ? $attr['boxSpacingMobile'] : $attr['boxSpacingTablet'];

$separator_right_spacing_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['separatorRightSpacing'], 'separatorRightSpacing', $block_name );
$attr['separatorRightSpacingTablet'] = is_numeric( $attr['separatorRightSpacingTablet'] ) ? $attr['separatorRightSpacingTablet'] : $separator_right_spacing_fallback;
$attr['separatorRightSpacingMobile'] = is_numeric( $attr['separatorRightSpacingMobile'] ) ? $attr['separatorRightSpacingMobile'] : $attr['separatorRightSpacingTablet'];

$separator_top_spacing_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['separatorTopSpacing'], 'separatorTopSpacing', $block_name );
$attr['separatorTopSpacingTablet'] = is_numeric( $attr['separatorTopSpacingTablet'] ) ? $attr['separatorTopSpacingTablet'] : $separator_top_spacing_fallback;
$attr['separatorTopSpacingMobile'] = is_numeric( $attr['separatorTopSpacingMobile'] ) ? $attr['separatorTopSpacingMobile'] : $attr['separatorTopSpacingTablet'];

// Box Border CSS.
$box_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'box' );
$box_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'box', 'tablet' );
$box_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'box', 'mobile' );

// Box Shadow.
$box_shadow_position_css = $attr['boxShadowPosition'];

if ( 'outset' === $attr['boxShadowPosition'] ) {
	$box_shadow_position_css = '';
}

$box_shadow_position_css_hover = $attr['boxShadowPositionHover'];

if ( 'outset' === $attr['boxShadowPositionHover'] ) {
	$box_shadow_position_css_hover = '';
}

$m_selectors = array();
$t_selectors = array();

$selectors = array(

	'.wp-block-uagb-countdown' => array(
		'justify-content' => $attr['align'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['blockTopMargin'], $attr['blockMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['blockRightMargin'], $attr['blockMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['blockBottomMargin'], $attr['blockMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['blockLeftMargin'], $attr['blockMarginUnit'] ),
		'padding-top'     => UAGB_Helper::get_css_value( $attr['blockTopPadding'], $attr['blockPaddingUnit'] ),
		'padding-right'   => UAGB_Helper::get_css_value( $attr['blockRightPadding'], $attr['blockPaddingUnit'] ),
		'padding-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomPadding'], $attr['blockPaddingUnit'] ),
		'padding-left'    => UAGB_Helper::get_css_value( $attr['blockLeftPadding'], $attr['blockPaddingUnit'] ),
	),

	'.wp-block-uagb-countdown .wp-block-uagb-countdown__box' => array_merge(
		array(
			'flex-direction'   => $attr['boxFlex'],
			'text-align'       => $attr['boxAlign'],
			'background-color' => ( 'transparent' !== $attr['boxBgType'] ) ? $attr['boxBgColor'] : 'transparent',
			'padding-top'      => UAGB_Helper::get_css_value( $attr['boxTopPadding'], $attr['boxPaddingUnit'] ),
			'padding-right'    => UAGB_Helper::get_css_value( $attr['boxRightPadding'], $attr['boxPaddingUnit'] ),
			'padding-bottom'   => UAGB_Helper::get_css_value( $attr['boxBottomPadding'], $attr['boxPaddingUnit'] ),
			'padding-left'     => UAGB_Helper::get_css_value( $attr['boxLeftPadding'], $attr['boxPaddingUnit'] ),
			'box-shadow'       => UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
													' ' .
													$attr['boxShadowColor'] .
													' ' .
													$box_shadow_position_css,
		),
		$box_border_css
	),

	'.wp-block-uagb-countdown:hover .wp-block-uagb-countdown__box' => array(
		'border-color' => $attr['boxBorderHColor'],
	),

	'.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)' => array(
		'margin-right' => UAGB_Helper::get_css_value( $box_spacing_fallback, 'px' ),
	),

	'.wp-block-uagb-countdown .wp-block-uagb-countdown__time' => array(
		'font-family'     => $attr['digitFontFamily'],
		'font-style'      => $attr['digitFontStyle'],
		'text-decoration' => $attr['digitDecoration'],
		'text-transform'  => $attr['digitTransform'],
		'font-weight'     => $attr['digitFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['digitFontSize'], $attr['digitFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['digitLineHeight'], $attr['digitLineHeightType'] ),
		'color'           => $attr['digitColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['digitTopMargin'], $attr['digitMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['digitRightMargin'], $attr['digitMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['digitBottomMargin'], $attr['digitMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['digitLeftMargin'], $attr['digitMarginUnit'] ),
	),

	'.wp-block-uagb-countdown .wp-block-uagb-countdown__label' => array(
		'font-family'     => $attr['labelFontFamily'],
		'font-style'      => $attr['labelFontStyle'],
		'text-decoration' => $attr['labelDecoration'],
		'text-transform'  => $attr['labelTransform'],
		'font-weight'     => $attr['labelFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['labelFontSize'], $attr['labelFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['labelLineHeight'], $attr['labelLineHeightType'] ),
		'color'           => $attr['labelColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['labelTopMargin'], $attr['labelMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['labelRightMargin'], $attr['labelMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['labelBottomMargin'], $attr['labelMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['labelLeftMargin'], $attr['labelMarginUnit'] ),
	),

);

// If hover blur or hover color are set, show the hover shadow.
if ( ( ( '' !== $attr['boxShadowBlurHover'] ) && ( null !== $attr['boxShadowBlurHover'] ) ) || '' !== $attr['boxShadowColorHover'] ) {

	$selectors['.wp-block-uagb-countdown:hover .wp-block-uagb-countdown__box']['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffsetHover'], 'px' ) .
																' ' .
														UAGB_Helper::get_css_value( $attr['boxShadowVOffsetHover'], 'px' ) .
														' ' .
														UAGB_Helper::get_css_value( $attr['boxShadowBlurHover'], 'px' ) .
														' ' .
														UAGB_Helper::get_css_value( $attr['boxShadowSpreadHover'], 'px' ) .
														' ' .
														$attr['boxShadowColorHover'] .
														' ' .
														$box_shadow_position_css_hover;

}

// TABLET SELECTORS.

$t_selectors['.wp-block-uagb-countdown'] = array(
	'justify-content' => $attr['alignTablet'],
	'margin-top'      => UAGB_Helper::get_css_value( $attr['blockTopMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['blockRightMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['blockBottomMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['blockLeftMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'padding-top'     => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-right'   => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-left'    => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
);

$t_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box'] = array_merge(
	array(
		'flex-direction' => $attr['boxFlexTablet'],
		'text-align'     => $attr['boxAlignTablet'],
		'padding-top'    => UAGB_Helper::get_css_value( $attr['boxTopPaddingTablet'], $attr['boxPaddingUnitTablet'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['boxRightPaddingTablet'], $attr['boxPaddingUnitTablet'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['boxBottomPaddingTablet'], $attr['boxPaddingUnitTablet'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['boxLeftPaddingTablet'], $attr['boxPaddingUnitTablet'] ),
	),
	$box_border_css_tablet
);

$t_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)'] = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['boxSpacingTablet'], 'px' ),
);

$t_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['digitFontSizeTablet'], $attr['digitFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['digitLineHeightTablet'], $attr['digitLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['digitTopMarginTablet'], $attr['digitMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['digitRightMarginTablet'], $attr['digitMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['digitBottomMarginTablet'], $attr['digitMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['digitLeftMarginTablet'], $attr['digitMarginUnitTablet'] ),
);

$t_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['labelFontSizeTablet'], $attr['labelFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['labelLineHeightTablet'], $attr['labelLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['labelTopMarginTablet'], $attr['labelMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['labelRightMarginTablet'], $attr['labelMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['labelBottomMarginTablet'], $attr['labelMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['labelLeftMarginTablet'], $attr['labelMarginUnitTablet'] ),
);

// MOBILE SELECTORS.

$m_selectors['.wp-block-uagb-countdown'] = array(
	'justify-content' => $attr['alignMobile'],
	'margin-top'      => UAGB_Helper::get_css_value( $attr['blockTopMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['blockRightMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['blockBottomMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['blockLeftMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'padding-top'     => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-right'   => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-left'    => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box'] = array_merge(
	array(
		'flex-direction' => $attr['boxFlexMobile'],
		'text-align'     => $attr['boxAlignMobile'],
		'padding-top'    => UAGB_Helper::get_css_value( $attr['boxTopPaddingMobile'], $attr['boxPaddingUnitMobile'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['boxRightPaddingMobile'], $attr['boxPaddingUnitMobile'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['boxBottomPaddingMobile'], $attr['boxPaddingUnitMobile'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['boxLeftPaddingMobile'], $attr['boxPaddingUnitMobile'] ),
	),
	$box_border_css_mobile
);

$m_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)'] = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['boxSpacingMobile'], 'px' ),
);

$m_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['digitFontSizeMobile'], $attr['digitFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['digitLineHeightMobile'], $attr['digitLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['digitTopMarginMobile'], $attr['digitMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['digitRightMarginMobile'], $attr['digitMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['digitBottomMarginMobile'], $attr['digitMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['digitLeftMarginMobile'], $attr['digitMarginUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['labelFontSizeMobile'], $attr['labelFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['labelLineHeightMobile'], $attr['labelLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['labelTopMarginMobile'], $attr['labelMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['labelRightMarginMobile'], $attr['labelMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['labelBottomMarginMobile'], $attr['labelMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['labelLeftMarginMobile'], $attr['labelMarginUnitMobile'] ),
);

if ( true === $attr['showSeparator'] ) {

	$selectors[ $separator_selector ] = array(
		'content'         => ( 'line' === $attr['separatorType'] ) ? '"|"' : '":"',
		'font-family'     => $attr['separatorFontFamily'],
		'font-style'      => $attr['separatorFontStyle'],
		'font-weight'     => $attr['separatorFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['separatorFontSize'], $attr['separatorFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['separatorLineHeight'], $attr['separatorLineHeightType'] ),
		'color'           => $attr['separatorColor'],
		'right'           => UAGB_Helper::get_css_value( -$separator_right_spacing_fallback, 'px' ),
		'top'             => UAGB_Helper::get_css_value( $attr['separatorTopSpacing'], 'px' ),
	);

	$t_selectors[ $separator_selector ] = array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['separatorFontSizeTablet'], $attr['separatorFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['separatorLineHeightTablet'], $attr['separatorLineHeightType'] ),
		'right'       => UAGB_Helper::get_css_value( -$attr['separatorRightSpacingTablet'], 'px' ),
		'top'         => UAGB_Helper::get_css_value( $attr['separatorTopSpacingTablet'], 'px' ),
	);

	$m_selectors[ $separator_selector ] = array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['separatorFontSizeMobile'], $attr['separatorFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['separatorLineHeightMobile'], $attr['separatorLineHeightType'] ),
		'right'       => UAGB_Helper::get_css_value( -$attr['separatorRightSpacingMobile'], 'px' ),
		'top'         => UAGB_Helper::get_css_value( $attr['separatorTopSpacingMobile'], 'px' ),
	);
}

// RTL support for box gap.
if ( $is_rtl ) {
	$boxGapSelectorLTR = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)';
	$boxGapSelectorRTL = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)';

	$selectors[ $boxGapSelectorLTR ]['margin-right']   = 'unset';
	$t_selectors[ $boxGapSelectorLTR ]['margin-right'] = 'unset';
	$m_selectors[ $boxGapSelectorLTR ]['margin-right'] = 'unset';

	$selectors[ $boxGapSelectorRTL ]['margin-right']   = UAGB_Helper::get_css_value( $box_spacing_fallback, 'px' );
	$t_selectors[ $boxGapSelectorRTL ]['margin-right'] = UAGB_Helper::get_css_value( $attr['boxSpacingTablet'], 'px' );
	$m_selectors[ $boxGapSelectorRTL ]['margin-right'] = UAGB_Helper::get_css_value( $attr['boxSpacingMobile'], 'px' );
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
