/**
 * BLOCK: Forms - Checkbox
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'uagb/forms-checkbox', {
	title: __( 'Checkbox', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add checkboxes to allow multiple choices from options.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.checkbox,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<img
				width="100%"
				src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/form-checkbox.svg` }
			/>
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
