/**
 * BLOCK: Testimonial - Save Block
 */
import { InnerBlocks,useBlockProps } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	const {
		block_id,
	} = attributes;
	const blockProps = useBlockProps.save({
		className:'testimonial-block-child-wrap'
	});
	return (
		<div {...blockProps}>
				<InnerBlocks.Content />
		</div>
	);
}
