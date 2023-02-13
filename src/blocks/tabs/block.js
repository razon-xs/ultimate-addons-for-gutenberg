/**
 * BLOCK: Tabs Block
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';
import save from './save';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/tabs', {
	title: __( 'Tabs', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your content under different tabs.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.tabs,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'tabs', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/tabs.svg` }
				/>
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );
