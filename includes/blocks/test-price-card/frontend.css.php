<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selectors = array(
    ' .uagb-block-price-card-title'=> array(
        'color'                => $attr['titleColor'],
        'font-family'          => $attr['headFontFamily'],
        'font-style'           => $attr['headFontStyle'],
        'text-decoration'      => $attr['headDecoration'],
        'text-transform'       => $attr['headTransform'],
        'font-weight'          => $attr['headFontWeight'],
        'font-size'            => UAGB_Helper::get_css_value( $attr['headFontSize'], $attr['headFontSizeType'] ),

    ),
);
$Mobselectors = array(
    ' .uagb-block-price-card-title'=> array(
        'color'                => $attr['titleColor'],
        'font-family'          => $attr['headFontFamily'],
        'font-style'           => $attr['headFontStyle'],
        'text-decoration'      => $attr['headDecoration'],
        'text-transform'       => $attr['headTransform'],
        'font-weight'          => $attr['headFontWeight'],
        'font-size'            => UAGB_Helper::get_css_value( $attr['headFontSize'], $attr['headFontSizeType'] ),
    ),
);

$Tabselectors = array(
    ' .uagb-block-price-card-title'=> array(
        'color'                => $attr['titleColor'],
        'font-family'          => $attr['headFontFamily'],
        'font-style'           => $attr['headFontStyle'],
        'text-decoration'      => $attr['headDecoration'],
        'text-transform'       => $attr['headTransform'],
        'font-weight'          => $attr['headFontWeight'],
        'font-size'            => UAGB_Helper::get_css_value( $attr['headFontSize'], $attr['headFontSizeType'] ),
    ),
);
$combined_selectors   = array(
	'desktop' => $selectors,
	'tablet'  => $Tabselectors,
	'mobile'  => $Mobselectors,
);
$base_selector= '.uagb-block-';
return UAGB_Helper::generate_all_css( $combined_selectors , $base_selector . $id );