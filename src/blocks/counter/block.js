/**
 * BLOCK: Counter
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';


registerBlockType( 'uagb/counter', {
	title: __( 'Counter', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block allows you to add number counter.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.counter,
	keywords: [
		__( 'counter', 'ultimate-addons-for-gutenberg' ),
		__( 'number', 'ultimate-addons-for-gutenberg' ),
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
				src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/counter.svg` }
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
