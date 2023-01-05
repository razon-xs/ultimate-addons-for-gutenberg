/**
 * BLOCK: Testimonial
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import attributes from './attributes';
import './style.scss';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/testimonial-child', {
	title: __( 'Testimonials Child', 'ultimate-addons-for-gutenberg' ), // Block title.
	description: __(
		'Testimonial child in customizable layouts.',
		'ultimate-addons-for-gutenberg'
	), // Block description.
	icon: UAGB_Block_Icons.testimonial, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( 'testimonial', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	parent: [ 'uagb/testimonial-2' ],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
} );
