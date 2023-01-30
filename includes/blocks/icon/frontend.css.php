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
$selectors[' .uagb-icon-wrapper svg'] = array(
	'width'     => $icon_width,
	'transform' => "rotate($transformation)",

);

// Generates css for tablet devices.
$t_icon_width                           = UAGB_Helper::get_css_value( $attr['iconSizeTablet'], $attr['iconSizeUnit'] );
$t_selectors[' .uagb-icon-wrapper']     = array(
	'text-align' => $attr['alignTablet'],
);
$t_selectors[' .uagb-icon-wrapper svg'] = array(
	'width' => $t_icon_width,
);

// Generates css for mobile devices.
$m_icon_width                           = UAGB_Helper::get_css_value( $attr['iconSizeMobile'], $attr['iconSizeUnit'] );
$m_selectors[' .uagb-icon-wrapper']     = array(
	'text-align' => $attr['alignMobile'],
);
$m_selectors[' .uagb-icon-wrapper svg'] = array(
	'width' => $m_icon_width,
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
