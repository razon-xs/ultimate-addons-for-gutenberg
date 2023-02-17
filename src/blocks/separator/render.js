import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import renderSVG from '@Controls/renderIcon';
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
			separatorWeight,
			SeparatorWeightMobile,
			separatorWeightTablet,
		},
		className,
	} = props;

	const deviceType = useDeviceType();
	const CustomTag = `${ separatorTextTag }`;
	const weight=`${separatorWeight}`;
	const customSVG = renderCustomSVG( separatorStyle, weight );

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