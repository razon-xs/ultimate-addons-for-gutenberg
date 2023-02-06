/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import icons from './icons';
/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'style-1',
		icon: icons['style-1'],
		title: __( 'Style 1', 'ultimate-addons-for-gutenberg' ),
		attributes: {
			backgroundType: 'color',
			backgroundColor: '#ffffff',
			blockBorderTopLeftRadius: 4,
			blockBorderTopRightRadius: 4,
			blockBorderBottomRightRadius: 4,
			blockBorderBottomLeftRadius: 4,
			boxShadowColor: '#00000021',
			boxShadowHOffset: 0,
			boxShadowVOffset: 12,
			boxShadowBlur: 16,
			boxShadowSpread: -4,
			boxShadowPosition: 'outset',
			topPaddingDesktop: 24,
			bottomPaddingDesktop: 24,
			leftPaddingDesktop: 24,
			rightPaddingDesktop: 24,
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/advanced-heading', { headingAlign: '',blockBottomPadding:0, headingDescToggle:true, headingDesc: 'Prefix',subHeadSpace:0 }],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
			[ 'uagb/advanced-heading', { headingAlign: '',blockBottomPadding:0, headingDescToggle:true, headingDesc: 'Prefix',subHeadSpace:0 }],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],  
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-2',
		icon: icons['style-2'],
		title: __( 'Style 2', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/advanced-heading', { seperatorStyle: 'solid', separatorHeight: 5, separatorWidth: 25, headingAlign: '', separatorSpace: 0, blockBottomPadding:0 } ],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
			[ 'uagb/icon-list', { itemCount: 6 , Label: 'Lorem Ipsum dolor' , icon: 'check-square', align: ''}],
			[ 'uagb/buttons',{ align: ''} ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-3',
		icon: icons['style-3'],
		title: __( 'Style 3', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/image', { align:'', width: 100, height: 100, url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`,maskShape: 'circle'}],
			[ 'uagb/advanced-heading', { headingAlign: '', blockTopPadding:0, headingDescToggle:true,headingDesc: 'Designation', headingTitle: 'Author Name' } ],
			[ 'uagb/social-share', { align: '' } ],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-4',
		icon: icons['style-4'],
		title: __( 'Style 4', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/blockquote', { align: '', descriptionText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'John Smith', quoteStyle: 'style_1',enableTweet:false,skinStyle:'quotation' } ],
			[ 'uagb/star-rating' , {displayTitle: false}],
		],
		scope: [ 'block' ],
	},
	{
		name: 'style-5',
		icon: icons['style-5'],
		title: __( 'Style 5', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/image', { align:'', width: 100, height: 100, url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`,maskShape: 'circle'}],
			[ 'uagb/advanced-heading', { headingAlign: '', blockTopPadding:0, headingDescToggle:true,headingDesc: 'Designation', headingTitle: 'Author Name' } ],
			[ 'uagb/social-share', { align: '' } ],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
		],
		scope: [ 'block' ],
	}
];

export default variations;
