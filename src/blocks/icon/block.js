/**
 * BLOCK: Icon
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/icon', {
	apiVersion: 2,
	title: __( 'Icon', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add beautiful Icon on your site.', 'ultimate-addons-for-gutenberg' ), // description can be changed.
	icon: UAGB_Block_Icons.icon, // using temporary icon until new provided from designer.
	category: uagb_blocks_info.category,
	keywords: [
		// More keywords can be added.
		__( 'icon', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	attributes,
	edit,
	save,
} );
