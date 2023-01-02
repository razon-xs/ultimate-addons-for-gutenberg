/**
 * BLOCK: Icon - Attributes
 */

const attributes = {
   icon: {
	   type: 'string',
	   default: 'circle-check',
   },
   // size
   iconSize: {
	   type: 'number',
	   default: 30,
	   UAGCopyPaste: {
		   styleType: 'icon-size'
	   }
   },
   iconSizeTablet: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-size-tablet'
	   }
   },
   iconSizeMobile: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-size-mobile'
	   }
   },
   iconSizeUnit: {
	   type: 'string',
	   default: 'px',
	   UAGCopyPaste: {
		   styleType: 'icon-size-type'
	   }
   },
   // alignment
   align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	alignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	iconColor: {
	   type: 'string',
	   default: '#333',
	   UAGCopyPaste: {
		   styleType: 'icon-color'
	   }
	},
	// Rotation
	rotation: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-rotation'
		},
	},
	rotationUnit: {
		type: 'string',
		default: 'deg',
		UAGCopyPaste: {
			styleType: 'icon-rotation-type'
		},
	},
	block_id: {
		type: 'string',
	},
	iconLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin'
		},
	},
   iconRightMargin: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-right-margin'
	   },
   },
   iconTopMargin: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-top-margin'
	   },
   },
   iconBottomMargin: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-bottom-margin'
	   },
   },
   imageSize: {
	   type: 'string',
	   default: 'thumbnail',
	   UAGCopyPaste: {
		   styleType: 'image-size'
	   }
   },
   imageWidth: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'image-width'
	   },
   },
   imageWidthMobile: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'image-width-mobile'
	   }
   },
   imageWidthTablet: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'image-width-tablet'
	   }
   },
   imageWidthType: {
	   type: 'boolean',
	   default: true,
	   UAGCopyPaste: {
		   styleType: 'image-width-type'
	   }
   },
   iconMarginTopTablet: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-top-margin-tablet'
	   }
   },
   iconMarginRightTablet: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-right-margin-tablet'
	   }
   },
   iconMarginBottomTablet: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-bottom-margin-tablet'
	   }
   },
   iconMarginLeftTablet: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-left-margin-tablet'
	   }
   },
   iconMarginTopMobile: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-top-margin-mobile'
	   }
   },
   iconMarginRightMobile: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-right-margin-mobile'
	   }
   },
   iconMarginBottomMobile: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-bottom-margin-mobile'
	   }
   },
   iconMarginLeftMobile: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-left-margin-mobile'
	   }
   },
   iconMarginUnit: {
	   type: 'string',
	   default: 'px',
	   UAGCopyPaste: {
		   styleType: 'icon-margin-unit'
	   }
   },
   iconMobileMarginUnit: {
	   type: 'string',
	   default: 'px',
	   UAGCopyPaste: {
		   styleType: 'icon-margin-unit-mobile'
	   }
   },
   iconTabletMarginUnit: {
	   type: 'string',
	   default: 'px',
	   UAGCopyPaste: {
		   styleType: 'icon-margin-unit-tablet'
	   }
   },
   // padding
   blockTopPadding : {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-top-padding'
	   }
   },
   blockRightPadding : {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-right-padding'
	   }
   },
   blockLeftPadding : {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-left-padding'
	   }
   },
   blockBottomPadding : {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-bottom-padding'
	   }
   },
   blockTopPaddingTablet: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-top-padding-tablet'
	   }
   },
   blockRightPaddingTablet: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-right-padding-tablet'
	   }
   },
   blockLeftPaddingTablet: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-left-padding-tablet'
	   }
   },
   blockBottomPaddingTablet: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-bottom-padding-tablet'
	   }
   },
   blockTopPaddingMobile: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-top-padding-mobile'
	   }
   },
   blockRightPaddingMobile: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-right-padding-mobile'
	   }
   },
   blockLeftPaddingMobile: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-left-padding-mobile'
	   }
   },
   blockBottomPaddingMobile: {
	   type: 'number',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-bottom-padding-mobile'
	   }
   },
   blockPaddingUnit : {
	   type: 'string',
	   default: 'px',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-padding-unit'
	   }
   },
   blockPaddingUnitTablet: {
	   type: 'string',
	   default: 'px',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-padding-unit-tablet'
	   }
   },
   blockPaddingUnitMobile : {
	   type: 'string',
	   default: 'px',
	   isUAGStyle: true,
	   UAGCopyPaste: {
		   styleType: 'block-padding-unit-mobile'
	   }
   },
   isPreview: {
	   type: 'boolean',
	   default: false,
   },
   //
   iconView: {
	   type: 'string',
	   default: 'none',
   },
   iconShape: {
	   type: 'string',
	   default: 'Circle',
   },
   iconBackgroundColor: {
	   type: 'string',
	   default: '#6EC1E3',
	   UAGCopyPaste: {
		   styleType: 'icon-bg-color'
	   },
   },
   iconBackgroundHoverColor: {
	   type: 'string',
	   default: '',
	   UAGCopyPaste: {
		   styleType: 'icon-bg-hover-color'
	   },
   },
   iconBorderWidth: {
	   type: 'number',
	   default: 3,
	   UAGCopyPaste: {
		   styleType: 'icon-border-width'
	   },
   },
   imgTagHeight: {
	   type: 'number',
	   default: 0,
   },
   imgTagWidth: {
	   type: 'number',
	   default: 0,
   },
};

export default attributes;
