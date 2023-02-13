/**
 * BLOCK: Content Timeline Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import '.././style.scss';
import './style.scss';
import save from './save';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/content-timeline-child', {
	title: __( 'Content Timeline Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add and customize content of this timeline.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.content_timeline_child,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/content-timeline' ],
	keywords: [
		__( 'Content Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<img
					width="100%"
					src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/content-timeline-child.svg` }
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
