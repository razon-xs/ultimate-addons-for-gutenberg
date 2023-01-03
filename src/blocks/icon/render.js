// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import React from 'react';
import { useBlockProps } from "@wordpress/block-editor";

const Render = ( props ) => {

	const { attributes, deviceType } = props;
	const {
		icon,
		block_id,
	} = attributes;

	const iconHtml = (
			( renderSVG( icon ? icon : 'circle-check' ) )
		)

	const blockProps = useBlockProps( {
		className: classnames( `uagb-block-${ block_id } uagb-editor-preview-mode-${ deviceType.toLowerCase() }` )
	} );

	return (
		<div { ...blockProps }>
			<div className='uagb-icon-wrapper'>
				{ iconHtml }
			</div>
		</div>
	);
};
export default React.memo( Render );
