/**
 * BLOCK: Info-Box 2.0
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import variations from './variations';
import './style.scss';

registerBlockType( 'uagb/new-block', {
	title: __( 'Info-Box 2.0', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Create beautiful layouts with multiple Spectra blocks.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.container,
	keywords: [
		__( 'Info-Box 2.0', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'flex', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	variations,
	edit,
	save,
} );
