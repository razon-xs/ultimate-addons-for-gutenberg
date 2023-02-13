/**
 * BLOCK: Icon List - Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/icon-list-child', {
	title: __( 'Icon', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add and customize content for this list component.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.icon_list_child,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/icon-list' ],
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/icon-list-child.svg` }
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
