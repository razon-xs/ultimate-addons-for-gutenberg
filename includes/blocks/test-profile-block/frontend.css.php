<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selectors    = array(
	' .uagb-user__title' => array(
		'color' => $attr['titleColor'],
	),
);
$mobselectors = array(
	' .uagb-user__title' => array(
		'color' => $attr['titleColor'],
	),
);

$tabselectors       = array(
	' .uagb-user__title' => array(
		'color' => $attr['titleColor'],
	),
);
$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $tabselectors,
	'mobile'  => $mobselectors,
);
$base_selector      = '.uagb-block-';
return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
