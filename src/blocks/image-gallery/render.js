import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import InitialSelector from './components/InitialSelector';
import ImageGallery from './components/ImageGallery';
import LightBox from './components/LightBox';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		lightBoxRef,
		lightBoxPreview,
	} = props;

	props = props.parentProps;
	
	const {
		attributes,
		setAttributes,
		className,
		name,
	} = props;
	const { block_id, readyToRender } = attributes;
	const deviceType = useDeviceType();
	
	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{
				readyToRender ? (
					<>
						<ImageGallery
							attributes={ attributes }
							setAttributes={ setAttributes }
							name={ name }
						/>
						{ lightBoxPreview && (
							<LightBox
								ref={ lightBoxRef }
								images={ attributes.mediaGallery }
							/>
						) }
					</>
				) : (
					<InitialSelector
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				)
			}
		</div>
	);
};

export default React.memo( Render );
