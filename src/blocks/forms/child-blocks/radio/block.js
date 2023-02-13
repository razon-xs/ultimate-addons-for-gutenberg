/**
 * BLOCK: Forms - Radio
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/forms-radio', {
	title: __( 'Radio', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add radio select boxes to allow a single choice from options.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.radio,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<img
				width="100%"
				src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/form-radio.svg` }
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
