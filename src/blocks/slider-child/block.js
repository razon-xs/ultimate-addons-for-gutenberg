/**
 * BLOCK: Slider Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import save from './save';
import attributes from './attributes';
import Edit from './edit';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/slider-child', {
	title: __( 'Slider Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add and customize content of this slide.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.slider_child,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/slider' ],
	keywords: [
		__( 'slider', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/slider-child.svg` }
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
