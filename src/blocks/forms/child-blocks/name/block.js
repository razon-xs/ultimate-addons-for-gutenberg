/**
 * BLOCK: Forms - Name
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/PreviewImage';

registerBlockType( 'uagb/forms-name', {
	title: __( 'Name', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a name field in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.name,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="form-field" isChildren={ true } />
		) : (
			<Edit { ...props } />
		),
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	save,
	deprecated,
} );
