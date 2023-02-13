/**
 * BLOCK: How To - Step
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
registerBlockType( 'uagb/how-to-step', {
	title: __( 'Step', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add relevant content for this step.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.how_to_step,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/how-to' ],
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/how-to-step.svg` }
				/>
			) : (
				<Edit { ...props } />
			),
	supports: {
		anchor: true,
	},
	save,
	deprecated,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );
