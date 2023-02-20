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
	'border-top-width' => UAGB_Helper::get_css_value( $attr['separatorHeight'], $attr['separatorHeightUnit'] ),
	'border-top-color' => $attr['separatorColor'],
	'border-top-style' => $attr['separatorStyle'],
);

$borderStyle      = array();
$iconSpacingStyle = array();

if ( $attr['elementType'] === 'none' ) {
	$borderStyle = array(
		'.wp-block-uagb-separator .wp-block-uagb-separator__after' => array_merge(
			array(
				'width' => UAGB_Helper::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),
				'-webkit-mask-size' =>  UAGB_Helper::get_css_value( $attr['separatorSize'], $attr['separatorSizeType'] )
			),
			$borderCSS
		),
	);
} else {
	$alignCSS = array();
	if ( $attr['separatorAlign'] === 'left' ) {
		$alignCSS = array(
			'margin-left' => 0,
		);
	}
	if ( $attr['separatorAlign'] === 'right' ) {
		$alignCSS = array(
			'margin-right' => 0,
		);
	}
	$borderStyle = array(
		'.wp-block-uagb-separator .wp-block-uagb-separator__after' => array_merge(
			array(
				'width' => UAGB_Helper::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),
				'-webkit-mask-size' => UAGB_Helper::get_css_value( $attr['separatorSize'], $attr['separatorSizeType'] ),
			),
			$alignCSS
		),
	);
	$borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__after'] = $borderCSS;
	$borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__after'] = $borderCSS;

	if ( $attr['elementPosition'] === 'left' ) {
		$iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
		);
		$borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__after.uagb-separator-left']                         = array(
			'display' => 'none',
		);
		$borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__after.uagb-separator-left']                         = array(
			'display' => 'none',
		);
	}
	if ( $attr['elementPosition'] === 'right' ) {
		$iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
		);
		$borderStyle['.wp-block-uagb-separator--text .wp-block-uagb-separator__after.uagb-separator-right']                          = array(
			'display' => 'none',
		);
		$borderStyle['.wp-block-uagb-separator--icon .wp-block-uagb-separator__after.uagb-separator-right']                          = array(
			'display' => 'none',
		);
	}
	if ( $attr['elementPosition'] === 'center' ) {
		$iconSpacingStyle['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
			'margin-left'  => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
		);
	}
}


$selectors = array(
	'.wp-block-uagb-separator' => array_merge(
		array(
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorBottomPadding'], $attr['separatorPaddingUnit'] ),
			'padding-top'    => UAGB_Helper::get_css_value( $attr['separatorTopPadding'], $attr['separatorPaddingUnit'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['separatorLeftPadding'], $attr['separatorPaddingUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['separatorRightPadding'], $attr['separatorPaddingUnit'] ),
			'text-align'     => $attr['separatorAlign'],
		),
	),
	'.wp-block-uagb-separator .wp-block-uagb-separator-element' => array(
		'color' => $attr['elementColor'],
	),
	'.wp-block-uagb-separator--text .wp-block-uagb-separator-element' => array(
		'font-family'     => $attr['elementTextFontFamily'],
		'font-style'      => $attr['elementTextFontStyle'],
		'text-decoration' => $attr['elementTextDecoration'],
		'text-transform'  => $attr['elementTextTransform'],
		'font-weight'     => $attr['elementTextFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['elementTextFontSize'], $attr['elementTextFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['elementTextLineHeight'], $attr['elementTextLineHeightType'] ),
		'letter-spacing'  => UAGB_Helper::get_css_value( $attr['elementTextLetterSpacing'], $attr['elementTextLetterSpacingType'] ),
	),
	'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'color'       => $attr['elementColor'],
		'fill'        => $attr['elementColor'],
	),
);

$selectors = array_merge( $selectors, $borderStyle, $iconSpacingStyle );

// Tablet.
$borderStyleTablet      = array();
$iconSpacingStyleTablet = array();
if ( $attr['elementType'] !== 'none' ) {
	if ( $attr['elementPositionTablet'] === 'left' ) {
		$iconSpacingStyleTablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
		);
		$borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__after.uagb-separator-left']                         = array(
			'display' => 'none',
		);
	}
	if ( $attr['elementPositionTablet'] === 'center' ) {
		$iconSpacingStyleTablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
		);
		$borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__after']                         = array(
			'display' => 'block',
		);
		$borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__after']                          = array(
			'display' => 'block',
		);

	}
	if ( $attr['elementPositionTablet'] === 'right' ) {
		$iconSpacingStyleTablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
		);
		$borderStyleTablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__after.uagb-separator-right']                          = array(
			'display' => 'none',
		);
		$borderStyleTablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__after.uagb-separator-right']                          = array(
			'display' => 'none',
		);
	}
}
$t_selectors['.wp-block-uagb-separator'] = array(
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorPaddingBottomTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['separatorPaddingTopTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['separatorPaddingLeftTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['separatorPaddingRightTablet'], $attr['separatorTabletPaddingUnit'] ),
	'text-align'     => $attr['separatorAlignTablet'],
);

$t_selectors['.wp-block-uagb-separator .wp-block-uagb-separator__after'] = array(
	'width' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorWidthTablet'], 'separatorWidthTablet', $block_name ),
		$attr['separatorWidthType']
	),
	'-webkit-mask-size' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorSizeTablet'], 'separatorSizeTablet', $block_name ),
		$attr['separatorSizeType']
	),
);

$t_selectors['.wp-block-uagb-separator--text .wp-block-uagb-separator-element'] = array(
	'font-size'      => UAGB_Helper::get_css_value( $attr['elementTextFontSizeTablet'], $attr['elementTextFontSizeType'] ),
	'line-height'    => UAGB_Helper::get_css_value( $attr['elementTextLineHeightTablet'], $attr['elementTextLineHeightType'] ),
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['elementTextLetterSpacingTablet'], $attr['elementTextLetterSpacingType'] ),
);

$t_selectors['.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg'] = array(
	'font-size'   => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr['elementIconWidthType'] ),
	'width'       => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr['elementIconWidthType'] ),
	'height'      => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr['elementIconWidthType'] ),
	'line-height' => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr['elementIconWidthType'] ),
);

$t_selectors = array_merge( $t_selectors, $borderStyleTablet, $iconSpacingStyleTablet );


// Mobile
$borderStyleMobile      = array();
$iconSpacingStyleMobile = array();
if ( $attr['elementType'] !== 'none' ) {
	if ( $attr['elementPositionMobile'] === 'left' ) {
		$iconSpacingStyleMobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),

		);
		$borderStyleMobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__after.uagb-separator-left'] = array(
			'display' => 'none',
		);
	}
	if ( $attr['elementPositionMobile'] === 'center' ) {
		$iconSpacingStyleMobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),
		);
		$borderStyleMobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__after']                         = array(
			'display' => 'block',
		);
		$borderStyleMobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__after']                         = array(
			'display' => 'block',
		);
	}
	if ( $attr['elementPositionMobile'] === 'right' ) {
		$iconSpacingStyleMobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),
		);
		$borderStyleMobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__after.uagb-separator-right']                          = array(
			'display' => 'none',
		);
		$borderStyleMobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__after.uagb-separator-right']                          = array(
			'display' => 'none',
		);
	}
}
$m_selectors['.wp-block-uagb-separator'] = array(
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorPaddingBottomMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['separatorPaddingTopMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['separatorPaddingLeftMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['separatorPaddingRightMobile'], $attr['separatorMobilePaddingUnit'] ),
	'text-align'     => $attr['separatorAlignMobile'],
);

$m_selectors['.wp-block-uagb-separator .wp-block-uagb-separator__after'] = array(
	'width' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorWidthMobile'], 'separatorWidthMobile', $block_name ),
		$attr['separatorWidthType']
	),
	'-webkit-mask-size' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorSizeMobile'], 'separatorSizeMobile', $block_name ),
		$attr['separatorSizeType']
	),
);

$m_selectors['.wp-block-uagb-separator--text .wp-block-uagb-separator-element'] = array(
	'font-size'      => UAGB_Helper::get_css_value( $attr['elementTextFontSizeMobile'], $attr['elementTextFontSizeType'] ),
	'line-height'    => UAGB_Helper::get_css_value( $attr['elementTextLineHeightMobile'], $attr['elementTextLineHeightType'] ),
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['elementTextLetterSpacingMobile'], $attr['elementTextLetterSpacingType'] ),
);

$m_selectors['.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg'] = array(
	'font-size'   => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr['elementIconWidthType'] ),
	'width'       => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr['elementIconWidthType'] ),
	'height'      => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr['elementIconWidthType'] ),
	'line-height' => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr['elementIconWidthType'] ),
);
$m_selectors = array_merge( $m_selectors, $borderStyleMobile, $iconSpacingStyleMobile );


$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
