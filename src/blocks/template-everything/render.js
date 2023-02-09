import classnames from 'classnames';
import React from 'react';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [
	'uagb/advanced-heading',
	'uagb/image',
	'uagb/marketing-button',
	'uagb/blockquote',
	'uagb/buttons',
	'uagb/icon-list',
	'uagb/star-rating',
	'uagb/container'
];

import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {

	props = props.parentProps;

	const deviceType = useDeviceType();

	const { attributes } = props;
	const {
		block_id,
		lockTemplate
	} = attributes;

	return (
		<>
			<div
				className={ classnames(
					`uagb-block-${ block_id }`,
					'uagb-template-everything__wrap',
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
				) }
			>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }
   					templateLock={ lockTemplate ? 'all' : false } />
			</div>
		</>
	);
};

export default React.memo( Render );
