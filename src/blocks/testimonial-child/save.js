/**
 * BLOCK: Testimonial - Save Block
 */
import { RichText } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	// return (
	// 	<RichText.Content
	// 		tagName="span"
	// 		value={ attributes.myText }
	// 		className="sample-text"
	// 	/>
	// );
	return (
		<div className="saving-testimonial">
			<InnerBlocks.Content />
		</div>
	);
}
