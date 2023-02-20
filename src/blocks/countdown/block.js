/**
 * BLOCK: Countdown
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
 
 
registerBlockType( 'uagb/countdown', {
	apiVersion: 2,
	title: __( 'Countdown', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Create a sense of urgency around your product or offer and drive customers to take advantage of a time-sensitive offer with a countdown timer.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.countdown,
	keywords: [
		__( 'countdown', 'ultimate-addons-for-gutenberg' ),
		__( 'timer', 'ultimate-addons-for-gutenberg' ),
		__( 'sale', 'ultimate-addons-for-gutenberg' ),
		__( 'offer', 'ultimate-addons-for-gutenberg' ),
		__( 'discount', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );
 