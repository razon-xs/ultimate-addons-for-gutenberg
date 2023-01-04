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
	} = attributes;

	const iconWidth = getFallbackNumber( iconSize, 'iconSize', blockName );
	const tranformation = generateCSSUnit( getFallbackNumber( rotation, 'rotation', blockName ), rotationUnit )

	const selectors = {
		'.wp-block-uagb-icon': {
			'text-align': align,
		},
		'.wp-block-uagb-icon svg': {
			'width': generateCSSUnit(
				iconWidth,
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
			)
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
