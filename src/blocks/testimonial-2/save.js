/**
 * BLOCK: Testimonial - Save Block
 */
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	return <InnerBlocks.Content />;
}
