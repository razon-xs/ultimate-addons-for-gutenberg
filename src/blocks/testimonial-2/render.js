import UAGB_Block_Icons from '@Controls/block-icons';
import styles from './editor.lazy.scss';
import { useEffect, useMemo } from '@wordpress/element';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/testimonial-child' ];
import Grid from './components/layouts/Grid';
import Slider from './components/layouts/Slider';
import classnames from 'classnames';
const Render = ( props ) => {
	const blockName = props.name.replace( 'uagb/', '' );
	const {
		className,
		setAttributes,
		attributes,
		deviceType,
		clientId,
	} = props;
	const { block_id, testimonialItems } = attributes;
	// Get children
	const { isListViewOpen, hasChildren } = useSelect( ( select ) => {
		const { isListViewOpened } = select( 'core/edit-post' );

		return {
			isListViewOpen: isListViewOpened(),
			hasChildren:
				0 !==
				select( 'core/block-editor' ).getBlocks( clientId ).length,
		};
	}, [] );

	// Add inner blocks
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${
			hasChildren ? 'hasChildrenClass' : 'no_children'
		} uagb-testimonial-2-container uagb-testimonial-2-wrap uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

	// Create block template.
	const getTestimonialTemplates = [
		[ 'uagb/testimonial-child', {} ],
		[ 'uagb/testimonial-child', {} ],
		[ 'uagb/testimonial-child', {} ],
	];

	return (
		<InnerBlocks
			template={ getTestimonialTemplates }
			templateLock={ false }
			allowedBlocks={ ALLOWED_BLOCKS }
			renderAppender={ false }
		/>
	);
	// return (
	// 	<div { ...blockProps } key={ block_id }>
	// 		<div className="testimonial">
	// 			<div { ...innerBlocksProps } />
	// 		</div>
	// 	</div>
	// );
	// return <Grid { ...props } />;
};
export default React.memo( Render );
