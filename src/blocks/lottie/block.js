/**
 * BLOCK: Lottie
 */

import Edit from './edit';
import UAGB_Block_Icons from '@Controls/block-icons';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/lottie', {
	title: __( 'Lottie Animation', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add customizable lottie animation on your page.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.lottie,
	keywords: [
		__( 'lottie', 'ultimate-addons-for-gutenberg' ),
		__( 'animation', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	example: {
		attributes: {
			isPreview: true,
		}
	},
	category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/lottie.svg` }
				/>
			) : (
				<Edit { ...props } />
			),
	// Render via PHP
	save: ()=> null,
} );
