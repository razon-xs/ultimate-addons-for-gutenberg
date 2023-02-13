<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selectors = array(
    ' .uagb-user__title'=> array(
        'color'=> $attr['titleColor'],
    ),
);
$Mobselectors = array(
    ' .uagb-user__title'=> array(
        'color'=> $attr['titleColor'],
    ),
);

$Tabselectors = array(
    ' .uagb-user__title'=> array(
        'color'=> $attr['titleColor'],
    ),
);
$combined_selectors   = array(
	'desktop' => $selectors,
	'tablet'  => $Tabselectors,
	'mobile'  => $Mobselectors,
);
$base_selector= '.uagb-block-';
return UAGB_Helper::generate_all_css( $combined_selectors , $base_selector . $id );