/**
 * BLOCK: FAQ - Schema - Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/PreviewImage';

registerBlockType( 'uagb/faq-child', {
	title: __( 'FAQ Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a frequently asked question/accordion to display information.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.faq_child,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/faq' ],
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="faq-child" isChildren={ true } />
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
