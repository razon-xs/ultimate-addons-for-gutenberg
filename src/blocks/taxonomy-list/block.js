/**
 * BLOCK: UAGB - Taxonomy List
 */

// Import block dependencies and components
import UAGB_Block_Icons from '@Controls/block-icons';

//  Import CSS.
import './style.scss';
import Edit from './edit';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'uagb/taxonomy-list', {
	title: __( 'Taxonomy List', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your content categorized as per post type.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.taxonomy_list,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'taxonomy', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	example: {
		attributes: {
			isPreview: true,
		}
	},
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/taxonomy-list.svg` }
				/>
			) : (
				<Edit { ...props } />
			),
	// Render via PHP
	save:()=> null,
} );
