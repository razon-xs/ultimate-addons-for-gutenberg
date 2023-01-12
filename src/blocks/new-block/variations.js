/**
 * WordPress dependencies
 */

import UAGB_Block_Icons from '@Controls/block-icons';
/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'info-box',
		icon: UAGB_Block_Icons.info_box,
		attributes: {},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/advanced-heading', { headingAlign: '',blockBottomPadding:0, headingDescToggle:true, headingDesc: 'Prefix',subHeadSpace:0 }],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
			[ 'uagb/buttons', { btn_count: 1, align: '' }],
		],
		scope: [ 'block' ],
	},
	{
		name: 'price-list',
		icon: UAGB_Block_Icons.icon_list,
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
		name: 'testimonial',
		icon: UAGB_Block_Icons.testimonial,
		attributes: {},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/blockquote', { align: '', descriptionText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'John Smith', quoteStyle: 'style_1',enableTweet:false,skinStyle:'quotation' } ],
			[ 'uagb/star-rating' , {displayTitle: false}],
		],
		scope: [ 'block' ],
	},
	{
		name: 'team',
		icon: UAGB_Block_Icons.team,
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
