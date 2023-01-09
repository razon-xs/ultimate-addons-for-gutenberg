/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		attributes,
	} = props;

	const {
		block_id,
		// Size
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		iconSizeUnit,
		// Alignment
		align,
		alignTablet,
		alignMobile,
		// Rotation
		rotation,
		rotationUnit,
		//StyleSettings
		iconView,
		iconBorderWidth,
		// Color
		iconColor,
		iconBorderColor,
		iconBackgroundColorType,
		iconBackgroundColor,
		iconBackgroundGradientColor,
		iconHoverColor,
		iconHoverBorderColor,
		iconHoverBackgroundColorType,
		iconHoverBackgroundColor,
		iconHoverBackgroundGradientColor,
		// Padding
		iconTopPadding,
		iconRightPadding,
		iconBottomPadding,
		iconLeftPadding,
		iconTopTabletPadding,
		iconRightTabletPadding,
		iconBottomTabletPadding,
		iconLeftTabletPadding,
		iconTopMobilePadding,
		iconRightMobilePadding,
		iconBottomMobilePadding,
		iconLeftMobilePadding,
		iconPaddingUnit,
		iconMobilePaddingUnit,
		iconTabletPaddingUnit,
		// Margin
		iconTopMargin,
		iconRightMargin,
		iconBottomMargin,
		iconLeftMargin,
		iconTopTabletMargin,
		iconRightTabletMargin,
		iconBottomTabletMargin,
		iconLeftTabletMargin,
		iconTopMobileMargin,
		iconRightMobileMargin,
		iconBottomMobileMargin,
		iconLeftMobileMargin,
		iconMarginUnit,
		iconMobileMarginUnit,
		iconTabletMarginUnit,
	} = attributes;
	console.log( attributes );

	const iconWidth = getFallbackNumber( iconSize, 'iconSize', blockName );
	const tranformation = generateCSSUnit( getFallbackNumber( rotation, 'rotation', blockName ), rotationUnit )

	const selectors = {
		'.uagb-icon-wrapper': {
			'text-align': align,
		},
		'.uagb-icon-wrapper svg': {
			'width': generateCSSUnit(
				iconWidth,
				iconSizeUnit
			),
			'height': generateCSSUnit(
				iconWidth,
				iconSizeUnit
			),
			'box-sizing' : 'content-box',
			'transform': `rotate(${ tranformation })`,
			'fill' : iconColor,
			'transition': 'all 0.2s ease-out',

		},
		'.uagb-icon-wrapper .uagb-svg-wrapper': {
			'display' : 'inline-flex',
			'padding-top':generateCSSUnit( iconTopPadding, iconPaddingUnit ),
			'padding-right':generateCSSUnit( iconRightPadding, iconPaddingUnit ),
			'padding-bottom':generateCSSUnit( iconBottomPadding, iconPaddingUnit ),
			'padding-left':generateCSSUnit( iconLeftPadding, iconPaddingUnit ),
			'margin-top':generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-right':generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-bottom':generateCSSUnit( iconBottomMargin, iconMarginUnit ),
			'margin-left':generateCSSUnit( iconLeftMargin, iconMarginUnit ),
		},
		'.uagb-icon-wrapper svg:hover': {
			'fill' : iconHoverColor,
		},
	};

	if( iconView !== 'none' ) {
		const background = 'classic' === iconBackgroundColorType ? iconBackgroundColor : iconBackgroundGradientColor;
		const hoverBackground = 'classic' === iconHoverBackgroundColorType ? iconHoverBackgroundColor : iconHoverBackgroundGradientColor;
		if( iconView === 'framed' ) {
			selectors['.uagb-icon-wrapper.uagb-icon-square .uagb-svg-wrapper'] = {
				'border-color': iconBorderColor,
				'border-style': 'solid',
				'border-width': generateCSSUnit(
					iconBorderWidth,
					'px'
				),
			}
			selectors['.uagb-icon-wrapper.uagb-icon-circle .uagb-svg-wrapper'] = {
				'border-color': iconBorderColor,
				'border-style': 'solid',
				'border-width': generateCSSUnit(
					iconBorderWidth,
					'px'
				),
				'border-radius': '50%',
			}
			selectors['.uagb-icon-wrapper.uagb-icon-square .uagb-svg-wrapper:hover'] = {
				'border-color': iconHoverBorderColor,
			}
			selectors['.uagb-icon-wrapper.uagb-icon-circle .uagb-svg-wrapper:hover'] = {
				'border-color': iconHoverBorderColor,
			}
		} else if( 'stacked' === iconView ) {
			selectors['.uagb-icon-wrapper.uagb-icon-square .uagb-svg-wrapper'] = {
				'background': background,
			}
			selectors['.uagb-icon-wrapper.uagb-icon-circle .uagb-svg-wrapper'] = {
				'background': background,
				'border-radius': '50%',
			}
			selectors['.uagb-icon-wrapper.uagb-icon-square .uagb-svg-wrapper:hover'] = {
				'background': hoverBackground,
			}
			selectors['.uagb-icon-wrapper.uagb-icon-circle .uagb-svg-wrapper:hover'] = {
				'background': hoverBackground,
			}
		}
	}

	const tabletSelectors = {
		'.uagb-icon-wrapper': {
			'text-align': alignTablet,
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper': {
			'padding-top':generateCSSUnit( iconTopTabletPadding, iconTabletPaddingUnit ),
			'padding-right':generateCSSUnit( iconRightTabletPadding, iconTabletPaddingUnit ),
			'padding-bottom':generateCSSUnit( iconBottomTabletPadding, iconTabletPaddingUnit ),
			'padding-left':generateCSSUnit( iconLeftTabletPadding, iconTabletPaddingUnit ),
			'margin-top':generateCSSUnit( iconTopTabletMargin, iconTabletMarginUnit ),
			'margin-right':generateCSSUnit( iconRightTabletMargin, iconTabletMarginUnit ),
			'margin-bottom':generateCSSUnit( iconBottomTabletMargin, iconTabletMarginUnit ),
			'margin-left':generateCSSUnit( iconLeftTabletMargin, iconTabletMarginUnit ),
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper svg': {
			'width': generateCSSUnit( iconSizeTablet, iconSizeUnit ),
			'height': generateCSSUnit( iconSizeTablet, iconSizeUnit ),
		},
	};

	const mobileSelectors = {
		'.uagb-icon-wrapper': {
			'text-align': alignMobile,
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper': {
			'padding-top':generateCSSUnit( iconTopMobilePadding, iconMobilePaddingUnit ),
			'padding-right':generateCSSUnit( iconRightMobilePadding, iconMobilePaddingUnit ),
			'padding-bottom':generateCSSUnit( iconBottomMobilePadding, iconMobilePaddingUnit ),
			'padding-left':generateCSSUnit( iconLeftMobilePadding, iconMobilePaddingUnit ),
			'margin-top':generateCSSUnit( iconTopMobileMargin, iconMobileMarginUnit ),
			'margin-right':generateCSSUnit( iconRightMobileMargin, iconMobileMarginUnit ),
			'margin-bottom':generateCSSUnit( iconBottomMobileMargin, iconMobileMarginUnit ),
			'margin-left':generateCSSUnit( iconLeftMobileMargin, iconMobileMarginUnit ),
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper svg': {
			'width': generateCSSUnit( iconSizeMobile, iconSizeUnit ),
			'height': generateCSSUnit( iconSizeMobile, iconSizeUnit ),
		},
	};

	let stylingCss = '';
	const id = `.uagb-block-${ block_id } `;
	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
