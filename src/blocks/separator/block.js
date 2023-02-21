/**
 * BLOCK: UAGB - Separator
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/separator', {
	title: __( 'Separator', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add Block Separator', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.separator,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'divider', 'ultimate-addons-for-gutenberg' ),
		__( 'separator', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	edit,
	save,
	example: {
		attributes: {
			isPreview: true,
		},
	},
} );
