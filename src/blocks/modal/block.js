/**
 * BLOCK: Modal
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';


registerBlockType( 'uagb/modal', {
	title: __( 'Modal', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block allows you to add modal popup.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.modal,
	keywords: [
		__( 'modal', 'ultimate-addons-for-gutenberg' ),
		__( 'popup', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/modal.svg` }
				/>
			) : (
				<Edit { ...props } />
			),
	save,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );
