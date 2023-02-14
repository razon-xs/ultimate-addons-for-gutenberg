/**
 * BLOCK: Buttons
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/PreviewImage';

registerBlockType( 'uagb/buttons', {
	title: __( 'Buttons', 'ultimate-addons-for-gutenberg' ),
	description:  __( 'Add multiple buttons to redirect user to different webpages.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.buttons,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'buttons', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	getEditWrapperProps( attribute ) {
		return { 'data-btn-width': attribute.align };
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="buttons" />
		) : (
			<Edit { ...props } />
		),
	save,
	deprecated,
} );

