/**
 * BLOCK: Table of Contents
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/table-of-contents', {
	title: __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a table of contents to allow page navigation.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.table_of_contents,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'table of contents', 'ultimate-addons-for-gutenberg' ),
		__( 'table', 'ultimate-addons-for-gutenberg' ),
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
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/table-of-content.svg` }
				/>
			) : (
				<Edit { ...props } />
			),
	// Render via PHP
	save: ()=> null,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	deprecated,
} );
