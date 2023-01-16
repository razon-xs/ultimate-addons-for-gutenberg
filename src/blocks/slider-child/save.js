/**
 * BLOCK: Slider child - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
		navigationLink
	} = props.attributes;

	return (
		<>
			<div
				className={ classnames(
					'uagb-slider-child-wrap',
					'swiper-slide',
					`uagb-block-${ block_id }`
				) }
				data-hash={navigationLink}
				key = { block_id }
			>
				<div className='swiper-content' >
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
