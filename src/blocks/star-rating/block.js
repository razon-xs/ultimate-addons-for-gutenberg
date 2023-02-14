/**
 * BLOCK: Star Rating
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/PreviewImage';

registerBlockType( 'uagb/star-rating', {
	title: __( 'Star Ratings', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Display customizable star ratings on your page.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.star_rating,
	keywords: [
		__( 'rating', 'ultimate-addons-for-gutenberg' ),
		__( 'star rating', 'ultimate-addons-for-gutenberg' ),
		__( 'review', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	category: uagb_blocks_info.category,
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="star-rating" />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated
} );
