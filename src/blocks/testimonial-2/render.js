import UAGB_Block_Icons from '@Controls/block-icons';
import styles from './editor.lazy.scss';
import { useEffect, useMemo,useLayoutEffect } from '@wordpress/element';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const Render = ( props ) => {
	const { attributes, deviceType, testimonialChild } = props;
	const { block_id } = attributes;
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// Add inner blocks
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id }  uagb-testimonial-2-container uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

	// Create block template.
	const getTestimonialTemplates = [
		[ testimonialChild, {} ],
		[ testimonialChild, {} ],
	];

	return (
		<div { ...blockProps }>
			<div className='uagb-testimonial-2-grid-wrap'>
				<InnerBlocks
					template={ getTestimonialTemplates }
					templateLock={ false }
					allowedBlocks={ [ testimonialChild ] }
					renderAppender={ false }
				/>
			</div>
		</div>
	);
};
export default React.memo( Render );
