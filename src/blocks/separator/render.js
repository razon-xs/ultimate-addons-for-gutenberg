import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React , { useLayoutEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import renderSVG from '@Controls/renderIcon';
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
			separatorIcon
		},
		setAttributes,
		className,
	} = props;

	const deviceType = useDeviceType();



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
			<div className='wp-block-uagb-separator__inner'>
				{
					elementType !== 'none' && (
						<div className='wp-block-uagb-separator-element'>
							{
								elementType === 'icon' ? renderSVG( separatorIcon ) : <RichText tagName={separatorTextTag} placeholder={separatorText} />
							}
						</div>
					)
				}
			</div>
		</div>
	);
};
export default React.memo( Render );
