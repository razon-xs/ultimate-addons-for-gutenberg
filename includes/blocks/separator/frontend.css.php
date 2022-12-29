<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_name = 'separator';

$m_selectors = array();
$t_selectors = array();

$borderCSS = array(
	'border-top-width' => UAGB_Helper::get_css_value( $attr['separatorThicknessFallback'], $attr['thicknessUnit'] ),
	'border-top-color' => $attr['separatorColor'],
	'border-top-style' => $attr['separatorStyle'],
);

$borderStyle = array();
$iconSpacingStyle = array();

if($attr['elementType'] === 'none'){
	$borderStyle = array(
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner' => array_merge(
			array(
				'width' => UAGB_Helper::get_css_value( $attr['separatorWidthFallback'], $attr['separatorWidthType'] ),
			),
			$borderCSS
		)
	);
} else {
	$alignCSS = array();
	if($attr['separatorAlign'] === 'left'){
		$alignCSS = array(
			'margin-left' => 0
		);
	}
	if($attr['separatorAlign'] === 'right'){
		$alignCSS = array(
			'margin-right' => 0
		);
	}
	$borderStyle = array(
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner' => array_merge(
			array(
				'width' => UAGB_Helper::get_css_value( $attr['separatorWidthFallback'], $attr['separatorWidthType'] ),
			),
			$alignCSS
		),
	);
	$borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = $borderCSS;
	$borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = $borderCSS;
	$borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after'] = $borderCSS;
	$borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after'] = $borderCSS;


	if($attr['elementPosition'] === 'left'){
		$iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' =>  UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] )
		);
		$borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = array(
			'display' => 'none'
		);
		$borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = array(
			'display' => 'none'
		);
	}
	if($attr['elementPosition'] === 'right'){
		$iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left' =>  UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] )
		);
		$borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after'] = array(
			'display' => 'none'
		);
		$borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after'] = array(
			'display' => 'none'
		);
	}
	if($attr['elementPosition'] === 'center'){
		$iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' =>  UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
			'margin-left' =>  UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] )
		);
	}
}


$selectors = array(
	'.wp-block-uagb-separator' => array(
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorBottomPadding'], $attr['separatorPaddingUnit'] ),
		'padding-top' => UAGB_Helper::get_css_value( $attr['separatorTopPadding'], $attr['separatorPaddingUnit'] ),
		'padding-left' => UAGB_Helper::get_css_value( $attr['separatorLeftPadding'], $attr['separatorPaddingUnit'] ),
		'padding-right' => UAGB_Helper::get_css_value( $attr['separatorRightPadding'], $attr['separatorPaddingUnit'] ),
		'text-align' => $attr['separatorAlign'],
	),
	'.wp-block-uagb-separator&:not(.wp-block-uagb-separator--text):not(.wp-block-uagb-separator--icon) .wp-block-uagb-separator__inner' => array(
		'width' => UAGB_Helper::get_css_value(
			UAGB_Block_Helper::get_fallback_number( $attr['separatorWidth'], 'separatorWidth', $block_name ),
			$attr['separatorWidthType']
		),
		'border-top-width' => UAGB_Helper::get_css_value(
			UAGB_Block_Helper::get_fallback_number( $attr['separatorThickness'], 'separatorThickness', $block_name ),
			$attr['thicknessUnit']
		),
		'border-top-color' => $attr['separatorColor'],
		'border-top-style' => $attr['separatorStyle'],
	)
);

$t_selectors['.wp-block-uagb-separator'] = array(
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorPaddingBottomTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-top' => UAGB_Helper::get_css_value( $attr['separatorPaddingTopTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-left' => UAGB_Helper::get_css_value( $attr['separatorPaddingLeftTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-right' => UAGB_Helper::get_css_value( $attr['separatorPaddingRightTablet'], $attr['separatorTabletPaddingUnit'] ),
	'text-align' => $attr['separatorAlignTablet'],
);

$t_selectors['.wp-block-uagb-separator .wp-block-uagb-separator__inner'] = array(
	'width' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorWidthTablet'], 'separatorWidthTablet', $block_name ),
		$attr['separatorWidthType']
	),
);

$m_selectors['.wp-block-uagb-separator'] = array(
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorPaddingBottomMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-top' => UAGB_Helper::get_css_value( $attr['separatorPaddingTopMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-left' => UAGB_Helper::get_css_value( $attr['separatorPaddingLeftMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-right' => UAGB_Helper::get_css_value( $attr['separatorPaddingRightMobile'], $attr['separatorMobilePaddingUnit'] ),
	'text-align' => $attr['separatorAlignMobile'],
);

$m_selectors['.wp-block-uagb-separator .wp-block-uagb-separator__inner'] = array(
	'width' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorWidthMobile'], 'separatorWidthMobile', $block_name ),
		$attr['separatorWidthType']
	),
);


$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
