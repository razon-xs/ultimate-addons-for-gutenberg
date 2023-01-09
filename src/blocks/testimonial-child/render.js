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

	const TEMPLATE = [
		[
			'uagb/container',
			{ directionDesktop: 'row' },
			[
				[
					'uagb/container',
					{},
					[
						[ 'uagb/image', {} ],
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

	// Hide slider block.
	const ALLOWED_BLOCKS = [
		'uagb/container',
		'uagb/image',
		'core/paragraph',
		'uagb/advanced-heading',
		'uagb/star-rating',
	];
	// const ALLOWED_BLOCKS = parentBlocks
	// 	.map( ( block ) => block.name )
	// 	.filter(
	// 		( blockName ) =>
	// 			[
	// 				'uagb/slider',
	// 				'uagb/post-carousel',
	// 				'uagb/testimonial',
	// 			].indexOf( blockName ) === -1
	// 	);

	const innerBlockOptions = {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
	};

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `testimonial-block-cl1`,
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
