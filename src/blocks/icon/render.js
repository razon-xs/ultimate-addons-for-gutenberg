// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';

const Render = ( props ) => {

	const { attributes, deviceType } = props;
	const {
		icon,
		block_id,
	} = attributes;

	const blockProps = useBlockProps( {
		className: classnames( `uagb-block-${ block_id } uagb-editor-preview-mode-${ deviceType.toLowerCase() }` )
	} );

	return (
		<div { ...blockProps }>
			{ renderSVG( icon ) }
		</div>
	);
};
export default React.memo( Render );
