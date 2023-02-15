import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import renderSVG from '@Controls/renderIcon';
import separatorStyles from './sample-border';
import renderCustomSVG from './separator-svg';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	props = props.parentProps;

	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		attributes: {
			block_id,
			elementType,
			separatorText,
			separatorTextTag,
			separatorIcon,
			separatorStyle,
			separatorColor,
		},
		className,
	} = props;

	const deviceType = useDeviceType();
	const CustomTag = `${ separatorTextTag }`;
	const customSVG = renderCustomSVG( separatorStyle );

	// const renderURL = separatorStyles( separatorStyle );
	// function svgToURI( svg ) {
	// 	return str_replace(
	// 		[ '<', '>', '"', '#' ],
	// 		[ '%3C', '%3E', "'", '%23' ],
	// 		svg
	// 	);
	// }
	// function buildSVG() {
	 
	// 	 const svgShapes =separatorStyles();
	 
	// 	 const attr = [
	// 		 overflow = 'visible',
	// 		 height = '100%',
	// 		 viewBox = '0 0 24 24',
	// 		 attr['fill'] = 'none',
	// 		 attr['stroke'] = 'black',
	// 		 attr['stroke-width'] = settings['weight']['size'],
	// 		 attr['stroke-linecap'] = 'square',
	// 		 attr['stroke-miterlimit'] = '10'
	// 	 ];
	 
	// 	 add_render_attribute( 'svg', attr );
	 
	// 	const pattern_attribute_string = get_render_attribute_string( 'svg' );
	// 	 shape = separatorStyle;
	 
	// 	 return '<svg xmlns="http://www.w3.org/2000/svg" ' + pattern_attribute_string + '>' + shape + '</svg>';
	//  }
	 
	// const svgCode = buildSVG;
    // const svgURI=svgToURI(svgCode);
	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-separator',
				`${elementType !== 'none' ? 'wp-block-uagb-separator--' + elementType : ''}`
			) }
		>
			<div className='wp-block-uagb-separator__inner'
			 style={{
				'--my-background-image': `${customSVG}`,
			  }}>
				{
					elementType !== 'none' && (
						<div className='wp-block-uagb-separator-element'>
							{
								elementType === 'icon' ? renderSVG( separatorIcon ) : <CustomTag>{separatorText}</CustomTag>
							}
						</div>
					)
				}
			</div>
		</div>
	);
};
export default React.memo( Render );
