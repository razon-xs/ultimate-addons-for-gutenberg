/**
 * BLOCK: Testimonial - Save Block
 */
import { InnerBlocks,useBlockProps } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	const {
		block_id,
	} = attributes;
	const blockProps = useBlockProps.save({
		className:'uagb-testimonial-2-container'
	});
	return (
		<div {...blockProps}>
				<div className='uagb-testimonial-2-grid-wrap'>
					<InnerBlocks.Content />
				</div>
		</div>
	);
}
