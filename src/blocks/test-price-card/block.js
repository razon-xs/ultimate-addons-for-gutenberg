/**
 * BLOCK: Test-User-Profile
 */

import UAGB_Block_Icons from '@Controls/block-icons';

import { __ } from '@wordpress/i18n';

import './style.scss';

import edit from './edit';
import save from './save';
import attributes from './attributes';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/test-price-card', {
	title: __( 'Price Card', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Showcase your Price card',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.team,
	keywords: [
		__( 'user', 'ultimate-addons-for-gutenberg' ),
		__( 'profile', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	example: {
		attributes: {
			isPreview: true,
		},
	},
} );
