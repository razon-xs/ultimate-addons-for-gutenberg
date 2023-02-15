<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selectors = array(
	' .uagb-block-price-card-title' => array(
		'color'           => $attr['titleColor'],
		'font-family'     => $attr['headFontFamily'],
		'font-style'      => $attr['headFontStyle'],
		'text-decoration' => $attr['headDecoration'],
		'text-transform'  => $attr['headTransform'],
		'font-weight'     => $attr['headFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['headFontSize'], $attr['headFontSizeType'] ),

	),
	' .uagb-block-price-card-desc'  => array(
		'color' => $attr['desColor'],
	),
);
$mobselectors = array(
	' .uagb-block-price-card-title' => array(
		'color'           => $attr['titleColor'],
		'font-family'     => $attr['headFontFamily'],
		'font-style'      => $attr['headFontStyle'],
		'text-decoration' => $attr['headDecoration'],
		'text-transform'  => $attr['headTransform'],
		'font-weight'     => $attr['headFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['headFontSize'], $attr['headFontSizeType'] ),
	),
	' .uagb-block-price-card-desc'  => array(
		'color' => $attr['desColor'],
	),
);

$tabselectors       = array(
	' .uagb-block-price-card-title' => array(
		'color'           => $attr['titleColor'],
		'font-family'     => $attr['headFontFamily'],
		'font-style'      => $attr['headFontStyle'],
		'text-decoration' => $attr['headDecoration'],
		'text-transform'  => $attr['headTransform'],
		'font-weight'     => $attr['headFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['headFontSize'], $attr['headFontSizeType'] ),
	),
	' .uagb-block-price-card-desc'  => array(
		'color' => $attr['desColor'],
	),
);
$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $tabselectors,
	'mobile'  => $mobselectors,
);
$base_selector      = '.uagb-block-';
return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
