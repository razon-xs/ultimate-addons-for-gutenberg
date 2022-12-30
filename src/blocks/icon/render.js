// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
// import { __ } from '@wordpress/i18n';
// import { RichText } from '@wordpress/block-editor';
import React, { useLayoutEffect, useEffect } from 'react';
import styles from './editor.lazy.scss';
// import { useDeviceType } from '@Controls/getPreviewType';
// import getImageHeightWidth from '@Controls/getImageHeightWidth';
import { useBlockProps } from "@wordpress/block-editor";

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes , className, deviceType } = props;
	const {
	// 	label,
	// 	image_icon,
		icon,
	// 	image,
		block_id,
	// 	link,
	// 	target,
	// 	disableLink,
	// 	hideLabel,
	// 	fromParentIcon,
	// 	imageSizeChild,
	// 	imgTagHeight,
	} = attributes;

	// const deviceType = useDeviceType();

	// const defaultedAlt = ( image && image?.alt ) ? image?.alt : '';

	let imageIconHtml = renderSVG( icon );

	// useEffect( () => {
	// 	if( image && image.url && image_icon !== 'none' ){
	// 		getImageHeightWidth( image?.url, setAttributes, { type: 'width', value: imageSizeChild} )
	// 	}
	// }, [ image, imageSizeChild ] )

	// if ( image_icon === 'icon' ) {
	// 	if( icon || fromParentIcon ){
	// 		imageIconHtml =
	// 	}
	// } else if ( image && image.url && image_icon !== 'none' ) {
	// 	imageIconHtml = (
	// 		<img
	// 			className="uagb-icon-list__source-image"
	// 			alt= { defaultedAlt }
	// 			src={ image.url }
	// 			width={ imageSizeChild }
	// 			height={ imgTagHeight }
	// 			loading="lazy"
	// 		/>
	// 	);
	// }

	// const targetVal = target ? '_blank' : '_self';
	// const linkUrl = disableLink ? link : '/';

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
