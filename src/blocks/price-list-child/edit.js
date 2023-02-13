/**
 * BLOCK: Price List
 */

import { useEffect } from '@wordpress/element';


import Settings from './settings';
import Render from './render';
const UAGBRestaurantMenuChild = ( props ) => {
	const { isSelected } = props;
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	}, [] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBRestaurantMenuChild;
