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

$t_selectors = [];
$m_selectors = [];
$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
