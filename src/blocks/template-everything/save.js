/**
 * BLOCK: Template Everything - Save Block
 */

import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes: { block_id } } = props;


	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				'uagb-template-everything__wrap'
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
