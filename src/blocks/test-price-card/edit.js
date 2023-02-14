/**
 * BLOCK: Test-User-PriceCard
 */

import styling from './styling';
import Settings from './settings';
import Render from './render';
import React, { useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const UAGBPriceCard = ( props ) => {
	// console.log(props)

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles(
			'uagb-price-card-style-' + props.clientId.substr( 0, 8 ),
			blockStyling
		);
	}, [ props ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );
	}, [] );

	return (
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBPriceCard;
