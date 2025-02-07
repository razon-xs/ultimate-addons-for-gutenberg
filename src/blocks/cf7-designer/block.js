/**
 * BLOCK: Contact Form 7 Styler
 */

// Import block dependencies and components.
import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';

// Import icon.
import edit from './edit';

import './style.scss';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

if ( uagb_blocks_info.cf7_is_active && ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) ) {
	registerBlockType( 'uagb/cf7-styler', {
		title: __( 'Contact Form 7 Designer', 'ultimate-addons-for-gutenberg' ), // Block title.
		description: __( 'Highly customize and style your Contact Form 7 forms .', 'ultimate-addons-for-gutenberg' ), // Block description.
		icon: renderLegacyBlockEditorIcon( 'cf7_styler' ),
		keywords: [
			__( 'CF7 styler', 'ultimate-addons-for-gutenberg' ),
			__( 'contact form styler', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
		},
		category: uagb_blocks_info.category,
		edit,
		example: {
			attributes: {
				isPreview: true,
			}
		},
		save() {
			return null;
		},
	} );
}
