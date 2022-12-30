// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { useBlockProps } from "@wordpress/block-editor";

export default function save( props ){
	const { attributes } = props;
	const {
		icon,
		block_id,
	} = attributes;


	const blockProps = useBlockProps.save( {
		className: classnames( `uagb-block-${ block_id }` )
	} );

	return (
		<div { ...blockProps }>
			{ renderSVG( icon ) }
		</div>
	);
};
