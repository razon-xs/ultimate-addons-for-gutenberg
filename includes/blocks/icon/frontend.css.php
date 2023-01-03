<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_name = 'icon';

$icon_width = UAGB_Helper::get_css_value( $attr['iconSize'], $attr['iconSizeUnit'] );
$transformation = UAGB_Helper::get_css_value( $attr['rotation'], $attr['rotationUnit'] );

$t_selectors = array();
$m_selectors = array();

$selectors[' .uagb-icon-wrapper'] = array(
	'text-align' => $attr['align'],

);
$selectors[' .uagb-icon-wrapper svg'] = array(
	'width' => $icon_width,
	'transform' => "rotate($transformation)",

);

$t_icon_width = UAGB_Helper::get_css_value( $attr['iconSizeTablet'], $attr['iconSizeUnit'] );
$t_selectors[' .uagb-icon-wrapper'] = array(
	'text-align' => $attr['alignTablet'],

);
$t_selectors[' .uagb-icon-wrapper svg'] = array(
	'width' => $t_icon_width,
	'transform' => "rotate($transformation)",
);

$m_icon_width = UAGB_Helper::get_css_value( $attr['iconSizeMobile'], $attr['iconSizeUnit'] );
$m_selectors[' .uagb-icon-wrapper'] = array(
	'text-align' => $attr['alignMobile'],

);
$m_selectors[' .uagb-icon-wrapper svg'] = array(
	'width' => $m_icon_width,
	'transform' => "rotate($transformation)",

);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
