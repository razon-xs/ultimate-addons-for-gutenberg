/**
 * BLOCK: Section
 */

import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';
import './style.scss';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/PreviewImage';

if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) {
	registerBlockType( 'uagb/section', {
		title: __( 'Advanced Row', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Outer wrap section that allows you to add other blocks within it.', 'ultimate-addons-for-gutenberg' ),
		icon: renderLegacyBlockEditorIcon( 'section' ),
		category: uagb_blocks_info.category,
		keywords: [
			__( 'advanced row', 'ultimate-addons-for-gutenberg' ),
			__( 'wrapper', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
		},
		attributes,
		edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="advanced-row" />
			) : (
				<Edit { ...props } />
			),
		getEditWrapperProps( attribute ) {
			const { align, contentWidth } = attribute;
			if (
				'left' === align ||
				'right' === align ||
				'wide' === align ||
				'full' === align
			) {
				if ( 'full_width' === contentWidth ) {
					return { 'data-align': align };
				}
			}
		},
		save,
		example: {
			attributes: {
				isPreview: true,
			}
		},
		deprecated,
	} );
}
