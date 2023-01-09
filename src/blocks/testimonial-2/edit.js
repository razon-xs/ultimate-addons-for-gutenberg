/**
 * BLOCK: Testimonial
 */
// import TestimonialStyle from './inline-styles';
import { useEffect } from '@wordpress/element';

// import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';
import { useDeviceType } from '@Controls/getPreviewType';

const UAGBtestimonial = ( props ) => {
	const deviceType = useDeviceType();
	props = {
		...props,
		deviceType,
		testimonialChild: 'uagb/testimonial-child',
	};
	// Create block id.
	const creteBlockId = props.clientId.substr( 0, 8 );
	let { block_id } = props.attributes;
	// useEffect( () => {
	// 	// Assigning block_id in the attribute.
	// 	props.setAttributes( { block_id: creteBlockId } );
	// }, [] );
	if ( ! block_id ) {
		const creteBlockId = props.clientId.substr( 0, 8 );
		props.setAttributes( { block_id: creteBlockId } );
		block_id = creteBlockId;
	}
	console.log( 'props 1', props );
	// if ( ! block_id || ( '' !== block_id && block_id !== creteBlockId ) ) {
	// 	return null;
	// }
	// console.log( 'pased' );

	return props.attributes.isPreview ? (
		<img
			width="100%"
			src={ `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/testimonial.svg` }
			alt=""
		/>
	) : (
		<>
			<Settings { ...props } />
			<Render { ...props } />
		</>
	);
};

export default UAGBtestimonial;
