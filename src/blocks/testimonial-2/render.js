import UAGB_Block_Icons from '@Controls/block-icons';
import styles from './editor.lazy.scss';
import { useEffect, useMemo } from '@wordpress/element';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import Grid from './components/layouts/Grid';
import Slider from './components/layouts/Slider';
import classnames from 'classnames';
const Render = ( props ) => {
	const { attributes, deviceType, testimonialChild } = props;
	const { block_id } = attributes;

	// Add inner blocks
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id }  uagb-testimonial-2-container uagb-testimonial-2-wrap uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

	// Create block template.
	const getTestimonialTemplates = [
		[ testimonialChild, {} ],
		[ testimonialChild, {} ],
	];

	return (
		<div className={ blockProps }>
			<InnerBlocks
				template={ getTestimonialTemplates }
				templateLock={ false }
				allowedBlocks={ [ testimonialChild ] }
				renderAppender={ false }
			/>
		</div>
	);
};
export default React.memo( Render );
