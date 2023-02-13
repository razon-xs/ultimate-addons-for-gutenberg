/**
 * BLOCK: FAQ - Child
 */

import { useEffect, useState} from '@wordpress/element';


import Settings from './settings';
import Render from './render';

let prevState;

const FaqChildComponent = ( props ) => {
	const initialState = {
		isFocused: 'false',
	};
	const { isSelected } = props;

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		prevState = props.isSelected;
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		if ( ! props.isSelected && prevState && state.isFocused ) {
			setStateValue( {
				isFocused: 'false',
			} );
		}
		if ( props.isSelected && ! prevState ) {
			setStateValue( {
				isFocused: true,
			} );
		}
		prevState = props.isSelected;
	}, [ props ] );

	return (
		<>
			{ isSelected && <Settings /> }
			<Render parentProps={ props } state={ state } />
		</>
	);
};

export default FaqChildComponent;
