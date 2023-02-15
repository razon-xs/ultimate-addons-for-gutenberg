/**
 * BLOCK: UAGB Team Block Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	imgURL: {
		type: 'string',
		default: null,
	},
	imgID: {
		type: 'number',
	},
	title: {
		type: 'string',
		source: 'html',
		selector: 'h1,h2,h3,h4',
	},
	price: {
		type: 'string',
		source: 'html',
		selector: 'span',
		default: '$18',
	},
	description: {
		type: 'string',
		source: 'html',
		selector: 'p',
	},
	titleTag: {
		type: 'string',
		default: 'h2',
	},
	titleColor: {
		type: 'string',
	},
	desColor: {
		type: 'string',
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
	},
	headFontWeight: {
		type: 'string',
	},
	headTransform: {
		type: 'string',
	},
	headDecoration: {
		type: 'string',
	},
	headFontSize: {
		type: 'number',
	},
	headFontStyle: {
		type: 'string',
		default: 'normal',
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
	},
	highLightLineHeightType: {
		type: 'string',
		default: 'em',
	},
	highLightLineHeight: {
		type: 'number',
	},
	highLightLetterSpacing: {
		type: 'number',
	},
	highLightLetterSpacingType: {
		type: 'string',
		default: 'px',
	},
};

export default attributes;
