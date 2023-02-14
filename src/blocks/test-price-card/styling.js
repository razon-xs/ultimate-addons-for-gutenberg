import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
// import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {
	// const blockName = props.name.replace( 'uagb/', '' );
	const {
		titleColor,
		headFontFamily,
		headFontWeight,
		headTransform,
		headDecoration,
		headFontSize,
		headFontStyle,
		headFontSizeType,
		highLightLineHeight,
		highLightLineHeightType,
		highLightLetterSpacing,
		highLightLetterSpacingType,
	} = props.attributes;

	const selectors = {
		' .uagb-block-price-card-title': {
			'color': titleColor,
			'font-family': headFontFamily,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'font-weight': headFontWeight,
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'line-height': generateCSSUnit(
				highLightLineHeight,
				highLightLineHeightType
			),
			'letter-spacing': generateCSSUnit(
				highLightLetterSpacing,
				highLightLetterSpacingType
			),
		},
	};
	const Mobselectors = {
		' .uagb-block-price-card-title': {
			'color': titleColor,
			'font-family': headFontFamily,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'font-weight': headFontWeight,
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'line-height': generateCSSUnit(
				highLightLineHeight,
				highLightLineHeightType
			),
			'letter-spacing': generateCSSUnit(
				highLightLetterSpacing,
				highLightLetterSpacingType
			),
		},
	};
	const Tabselectors = {
		' .uagb-block-price-card-title': {
			'color': titleColor,
			'font-family': headFontFamily,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'font-weight': headFontWeight,
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'line-height': generateCSSUnit(
				highLightLineHeight,
				highLightLineHeightType
			),
			'letter-spacing': generateCSSUnit(
				highLightLetterSpacing,
				highLightLetterSpacingType
			),
		},
	};

	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;
	stylingCss = generateCSS( selectors, id );
	stylingCss += generateCSS(
		Tabselectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		Mobselectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);
	return stylingCss;
}

export default styling;
