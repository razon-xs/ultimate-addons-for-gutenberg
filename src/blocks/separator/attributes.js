/**
 * BLOCK: UAGB separator Attributes
 */
const attributes = {
	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	separatorAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	separatorAlignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	separatorAlignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	separatorStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'separator-style'
		}
	},
	separatorWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
		default: 30,
	},
	separatorWidthTablet: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'separator-width-tablet'
		},
	},
	separatorWidthMobile: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'separator-width-mobile'
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type'
		}
	},
	separatorThickness: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'separator-thickness'
		}
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-thickness-unit'
		}
	},
	separatorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-color'
		}
	},
	separatorTopPadding : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-padding'
		}
	},
	separatorRightPadding : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-padding'
		}
	},
	separatorLeftPadding : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-padding'
		}
	},
	separatorBottomPadding : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-padding'
		}
	},
	separatorPaddingTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-padding-tablet'
		}
	},
	separatorPaddingRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-padding-tablet'
		}
	},
	separatorPaddingBottomTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-padding-tablet'
		}
	},
	separatorPaddingLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-padding-tablet'
		}
	},
	separatorPaddingTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-padding-mobile'
		}
	},
	separatorPaddingRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-padding-mobile'
		}
	},
	separatorPaddingBottomMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-padding-mobile'
		}
	},
	separatorPaddingLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-padding-mobile'
		}
	},
	separatorPaddingUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-padding-unit'
		}
	},
	separatorMobilePaddingUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-padding-unit-mobile'
		},
		default: 'px',
	},
	separatorTabletPaddingUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-padding-unit-tablet'
		},
		default: 'px',
	},
	separatorPaddingLink: {
		type: 'boolean',
		default: true,
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-padding-link'
		}
	},
	elementType: {
		type: 'string',
		default: 'none',
	},
	separatorText: {
		type: 'string',
		default: 'Divider',
	},
	separatorTextTag: {
		type: 'string',
		default: 'span',
	},
	separatorIcon: {
		type: 'string',
		default: 'circle-check',
	},
	elementPosition: {
		type: 'string',
		default: 'center',
	},
	elementPositionTablet: {
		type: 'string',
		default: 'center',
	},
	elementPositionMobile: {
		type: 'string',
		default: 'center',
	},
	elementSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'element-spacing'
		},
		default: 15,
	},
	elementSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'element-spacing-tablet'
		},
		default: 15,
	},
	elementSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'element-spacing-mobile'
		},
		default: 15,
	},
	elementSpacingUnit: {
		type: 'string',
		default: 'px',
	},

	elementTextLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
	},
	elementTextFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	elementTextFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	elementTextFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	elementTextFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
		default: 'px'
	},
	elementTextFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	elementTextFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	elementTextLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	elementTextLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	elementTextLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	elementTextLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	elementTextFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	elementTextLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing'
		}
	},
	elementTextLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-tablet'
		}
	},
	elementTextLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-mobile'
		}
	},
	elementTextLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-type'
		}
	},
	elementTextDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	elementTextTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	elementColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		}
	},
	elementIconWidth:{
		type: 'number',
		default: '',
	},
	elementIconWidthTablet:{
		type: 'number',
		default: '',
	},
	elementIconWidthMobile:{
		type: 'number',
		default: '',
	},
	elementIconWidthType: {
		type: 'string',
		default: 'px',
	},
};

export default attributes;
