/**
 * BLOCK: Forms - Date - Edit
 */

import { useEffect } from '@wordpress/element';


import Settings from './settings';
import Render from './render';

const UAGBFormsDateEdit = ( props ) => {
	const { isSelected } = props;
	
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-date-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
			</>
	);
};

export default UAGBFormsDateEdit;
