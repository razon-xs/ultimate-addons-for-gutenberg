import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import renderSVG from '@Controls/renderIcon';
import renderCustomSVG from './separator-svg';
import renderCustomURL from './separator-urls';
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

	// const renderURL = renderCustomURL( separatorStyle );

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-separator',
				`${
					elementType !== 'none'
						? 'wp-block-uagb-separator--' + elementType
						: ''
				}`
			) }
		>
		    <div className="wp-block-uagb-separator__inner">
				{ elementType !== 'none' && (
					<div className="wp-block-uagb-separator-element">
						{ elementType === 'icon' ? (
							renderSVG( separatorIcon )
						) : (
							<CustomTag> { separatorText } </CustomTag>
						) }
					</div>
				) }
			</div>
		</div>
	);
};
export default React.memo( Render );
