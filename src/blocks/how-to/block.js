/**
 * BLOCK: How-To Schema
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/how-to', {
	title: __( 'How To', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add instructions/steps on processes using how to block.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.how_to,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'how to', 'ultimate-addons-for-gutenberg' ),
		__( 'schema', 'ultimate-addons-for-gutenberg' ),
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
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/how-to.svg` }
				/>
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
} );
