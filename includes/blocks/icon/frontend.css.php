<?php
/**
 * Frontend CSS.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_name = 'icon';

$size_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['iconSize'], 'iconSize', $block_name );
$rotation_fallback = UAGB_Block_Helper::get_fallback_number( $attr['rotation'], 'rotation', $block_name );
$icon_width        = UAGB_Helper::get_css_value( $size_fallback, $attr['iconSizeUnit'] );
$transformation    = UAGB_Helper::get_css_value( $rotation_fallback, $attr['rotationUnit'] );

$t_selectors = array();
$m_selectors = array();

$selectors[' .uagb-icon-wrapper'] = array(
	'text-align' => $attr['align'],
);
$selectors[' .uagb-icon-wrapper .uagb-svg-wrapper a'] = array(
	'display' => 'contents',
);
$selectors[' .uagb-icon-wrapper svg']               = array(
	'width'      => $icon_width,
	'height'     => $icon_width,
	'transform'  => "rotate($transformation)",
	'box-sizing' => 'content-box',
	'fill'       => $attr['iconColor'],
);
$selectors[' .uagb-icon-wrapper svg:hover']         = array(
	'fill' => $attr['iconHoverColor'],
);
$selectors[' .uagb-icon-wrapper .uagb-svg-wrapper'] = array(
	'display'        => 'inline-flex',
	'padding-top'    => UAGB_Helper::get_css_value( $attr['iconTopPadding'], $attr['iconPaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['iconRightPadding'], $attr['iconPaddingUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconBottomPadding'], $attr['iconPaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['iconLeftPadding'], $attr['iconPaddingUnit'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['iconTopMargin'], $attr['iconMarginUnit'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['iconRightMargin'], $attr['iconMarginUnit'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['iconBottomMargin'], $attr['iconMarginUnit'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['iconLeftMargin'], $attr['iconMarginUnit'] ),
);

if( $attr['iconView'] !== 'none' ) {
	$background = 'classic' === $attr['iconBackgroundColorType'] ? $attr['iconBackgroundColor'] : $attr['iconBackgroundGradientColor'];
	$hover_background = 'classic' === $attr['iconHoverBackgroundColorType'] ? $attr['iconHoverBackgroundColor'] : $attr['iconHoverBackgroundGradientColor'];
	if( $attr['iconView'] === 'framed' ) {
		$selectors[' .uagb-icon-wrapper.uagb-icon-square .uagb-svg-wrapper'] = array(
			'border-color'=> $attr['iconBorderColor'],
			'border-style'=> 'solid',
			'border-width'=> UAGB_Helper::get_css_value(
				$attr['iconBorderWidth'],
				'px'
			),
		);
		$selectors[' .uagb-icon-wrapper.uagb-icon-circle .uagb-svg-wrapper'] = array(
			'border-color'=> $attr['iconBorderColor'],
			'border-style'=> 'solid',
			'border-width'=> UAGB_Helper::get_css_value(
				$attr['iconBorderWidth'],
				'px'
			),
			'border-radius'=> '50%',
		);
		$selectors[' .uagb-icon-wrapper .uagb-svg-wrapper:hover'] = array(
			'border-color'=> $attr['iconHoverBorderColor'],
		);
	} else if( 'stacked' === $attr['iconView'] ) {
		$selectors[' .uagb-icon-wrapper .uagb-svg-wrapper'] = array_merge(
			$selectors[' .uagb-icon-wrapper .uagb-svg-wrapper'],
			array(
				'background'=> $background,
			)
		);
		$selectors[' .uagb-icon-wrapper.uagb-icon-circle .uagb-svg-wrapper'] = array(
			'border-radius' => '50%',
		);
		$selectors[ ' .uagb-icon-wrapper .uagb-svg-wrapper:hover'] = array(
			'background'=> $hover_background,
		);
	}
}

// Generates css for tablet devices.
$attr['iconSizeTablet'] = empty( $attr['iconSizeTablet'] ) ? $size_fallback : $attr['iconSizeTablet'];
$t_icon_width                           = UAGB_Helper::get_css_value( $attr['iconSizeTablet'], $attr['iconSizeUnit'] );
$t_align = empty( $attr['alignTablet'] ) ? $attr['align'] : $attr['alignTablet'];
$t_selectors[' .uagb-icon-wrapper']     = array(
	'text-align' => $t_align,
);
$t_selectors[' .uagb-icon-wrapper svg'] = array(
	'width' => $t_icon_width,
	'height' => $t_icon_width,
);
$t_selectors[' .uagb-icon-wrapper .uagb-svg-wrapper'] = array(
	'display'        => 'inline-flex',
	'padding-top'    => UAGB_Helper::get_css_value( $attr['iconTopTabletPadding'], $attr['iconTabletPaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['iconRightTabletPadding'], $attr['iconTabletPaddingUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconBottomTabletPadding'], $attr['iconTabletPaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['iconLeftTabletPadding'], $attr['iconTabletPaddingUnit'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['iconTopTabletMargin'], $attr['iconTabletMarginUnit'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['iconRightTabletMargin'], $attr['iconTabletMarginUnit'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['iconBottomTabletMargin'], $attr['iconTabletMarginUnit'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['iconLeftTabletMargin'], $attr['iconTabletMarginUnit'] ),
);

// Generates css for mobile devices.
$attr['iconSizeMobile'] = empty( $attr['iconSizeMobile'] ) ? $size_fallback : $attr['iconSizeMobile'];
$m_icon_width                           = UAGB_Helper::get_css_value( $attr['iconSizeMobile'], $attr['iconSizeUnit'] );
$m_align = empty( $attr['alignMobile'] ) ? $attr['align'] : $attr['alignMobile'];
$m_selectors[' .uagb-icon-wrapper']     = array(
	'text-align' => $m_align,
);
$m_selectors[' .uagb-icon-wrapper svg'] = array(
	'width' => $m_icon_width,
	'height' => $m_icon_width,
);
$m_selectors[' .uagb-icon-wrapper .uagb-svg-wrapper'] = array(
	'display'        => 'inline-flex',
	'padding-top'    => UAGB_Helper::get_css_value( $attr['iconTopMobilePadding'], $attr['iconMobilePaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['iconRightMobilePadding'], $attr['iconMobilePaddingUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconBottomMobilePadding'], $attr['iconMobilePaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['iconLeftMobilePadding'], $attr['iconMobilePaddingUnit'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['iconTopMobileMargin'], $attr['iconMobileMarginUnit'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['iconRightMobileMargin'], $attr['iconMobileMarginUnit'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['iconBottomMobileMargin'], $attr['iconMobileMarginUnit'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['iconLeftMobileMargin'], $attr['iconMobileMarginUnit'] ),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
