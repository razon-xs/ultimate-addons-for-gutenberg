/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';


function styling( props ) {
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
	} = attributes;

	let tranformation = generateCSSUnit( rotation, rotationUnit )

	const selectors = {
		'.wp-block-uagb-icon': {
			'text-align': align,
			// 'margin-top': generateCSSUnit(
			// 	childTopMargin,
			// 	childMarginUnit
			// ),
			// 'margin-right': generateCSSUnit(
			// 	childRightMargin,
			// 	childMarginUnit
			// ),
			// 'margin-bottom': generateCSSUnit(
			// 	childBottomMargin,
			// 	childMarginUnit
			// ),
			// 'margin-left': generateCSSUnit(
			// 	childLeftMargin,
			// 	childMarginUnit
			// ),
			// 'padding-top': generateCSSUnit(
			// 	childTopPadding,
			// 	childPaddingUnit
			// ),
			// 'padding-right': generateCSSUnit(
			// 	childRightPadding,
			// 	childPaddingUnit
			// ),
			// 'padding-bottom': generateCSSUnit(
			// 	childBottomPadding,
			// 	childPaddingUnit
			// ),
			// 'padding-left': generateCSSUnit(
			// 	childLeftPadding,
			// 	childPaddingUnit
			// ),
		},
		'.wp-block-uagb-icon svg': {
			'width': generateCSSUnit(
				iconSize,
				iconSizeUnit
			),
			'transform': `rotate(${ tranformation })`,
		},
	};

	const tabletSelectors = {
		'.wp-block-uagb-icon': {
			'text-align': alignTablet,
		},
		'.wp-block-uagb-icon svg': {
			'width': generateCSSUnit(
				iconSizeTablet,
				iconSizeUnit
			),
			'transform': `rotate(${ tranformation })`,
		},
	};

	const mobileSelectors = {
		'.wp-block-uagb-icon': {
			'text-align': alignMobile,
		},
		'.wp-block-uagb-icon svg': {
			'width': generateCSSUnit(
				iconSizeMobile,
				iconSizeUnit
			),
			'transform': `rotate(${ tranformation })`,
		},
	};

	let stylingCss = '';
	const id = `.uagb-block-${ block_id }`;
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
