/**
 * BLOCK: Column
 */

import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import './style.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'uagb/column', {
	title: __( 'Column', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Immediate child of Advanced Columns', 'ultimate-addons-for-gutenberg' ),
	icon: renderLegacyBlockEditorIcon ( 'column' ),
	category: uagb_blocks_info.category,
	parent: [ 'uagb/columns' ],
	supports: {
		inserter: false,
		// Add EditorsKit block navigator toolbar
		editorsKitBlockNavigator: true,
	},
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<img
				width="100%"
				src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/advanced-columns-child.svg` }
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

