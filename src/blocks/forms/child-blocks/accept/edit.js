/**
 * BLOCK: Forms - Accept - Edit
 */

import React, {   useEffect,  } from 'react';


import Settings from './settings';
import Render from './render';

const UAGBFormsAcceptEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-accept-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/form-accept.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};

export default UAGBFormsAcceptEdit;
