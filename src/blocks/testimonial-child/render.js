import UAGB_Block_Icons from '@Controls/block-icons';
import styles from './editor.lazy.scss';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useInnerBlocksProps } from '@wordpress/block-editor';

const Render = ( props ) => {
	const blockName = props.name.replace( 'uagb/', '' );
	const { className, setAttributes, attributes, deviceType } = props;

	// return (
	// 	<RichText
	// 		tagName="h1"
	// 		value={ attributes.myText }
	// 		placeholder={ __( 'Author Name', 'ultimate-addons-for-gutenberg' ) }
	// 		className="sample-text"
	// 		onChange={ ( value ) => {
	// 			setAttributes( { myText: value } );
	// 		} }
	// 	/>
	// );

	// 'uagb/advanced-heading',
	// 'uagb/image',
	// 'uagb/marketing-button',
	// 'uagb/blockquote',
	// 'uagb/buttons',
	// 'uagb/icon-list',
	// 'uagb/social-share',
	// 'uagb/star-rating',
	// 'core/paragraph',
	// 'uagb/container'

	// Only parent blocks.
	const parentBlocks = wp.blocks.getBlockTypes().filter( function ( item ) {
		return ! item.parent;
	} );
	const placeHolderImage = `${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png`;
	const TEMPLATE = [
		[
			'uagb/container',
			{ directionDesktop: 'row' },
			[
				[
					'uagb/container',
					{},
					[
						[ 'uagb/image', {url:placeHolderImage} ],
						[ 'core/paragraph', {} ],
					],
				],
				[
					'uagb/container',
					{},
					[
						[ 'uagb/advanced-heading', {} ],
						[ 'uagb/star-rating', {} ],
					],
				],
			],
		],
	];

	const ALLOWED_BLOCKS = [
		'uagb/container',
		'uagb/image',
		'core/paragraph',
		'uagb/advanced-heading',
		'uagb/star-rating',
	];

	const innerBlockOptions = {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
	};

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `testimonial-block-child-wrap`,
			slot: 'container-start',
		},
		innerBlockOptions
	);

	return (
		<div>
			<div { ...innerBlocksProps } />
		</div>
	);
};
export default React.memo( Render );
