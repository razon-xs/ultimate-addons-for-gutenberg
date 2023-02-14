import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import classnames from 'classnames';
import { useDeviceType } from '@Controls/getPreviewType';
import { MediaUpload, RichText } from '@wordpress/block-editor';
const Render = ( props ) => {
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const deviceType = useDeviceType();
	props = props.parentProps;
	const { setAttributes, attributes, className } = props;
	const { imgURL, imgID, titleTag, title, description, price } = attributes;
	const onSelectImage = ( media ) => {
		return setAttributes( {
			imgURL: media.url,
			imgID: media.id,
		} );
	};
	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				'uagb-block-price-card-container'
			) }
		>
			<div className="img-container">
				<MediaUpload
					onSelect={ onSelectImage }
					style={ { marginTop: '30px' } }
					type="image"
					value={ imgID }
					render={ ( { open } ) => (
						<Button
							onClick={ open }
							className={
								imgID ? 'image-button' : 'button button-large'
							}
						>
							{ ! imgID ? (
								__( 'Upload Image' )
							) : (
								<img
									style={ {
										width: '200px',
										marginTop: 'auto',
									} }
									alt="user/img"
									src={ imgURL }
								/>
							) }
						</Button>
					) }
				/>
			</div>
			<div className="uagb-block-price-card-body">
				<div className="uagb-block-price-card-title__price">
					<RichText
						className="uagb-block-price-card-title"
						key="editable"
						tagName={ titleTag }
						placeholder={ __(
							'title',
							'ultimate-addons-for-gutenberg'
						) }
						value={ title }
						onChange={ ( value ) =>
							setAttributes( { title: value } )
						}
					/>
					<RichText
						className="uagb-block-price-card-price"
						key="editable"
						tagName="span"
						placeholder={ __(
							'price',
							'ultimate-addons-for-gutenberg'
						) }
						value={ price }
						onChange={ ( value ) =>
							setAttributes( { price: value } )
						}
					/>
				</div>
				<RichText
					className="uagb-block-price-card-desc"
					tagName="p"
					placeholder={ __(
						'description',
						'ultimate-addons-for-gutenberg'
					) }
					value={ description }
					onChange={ ( value ) =>
						setAttributes( { description: value } )
					}
				/>
			</div>
		</div>
	);
};

export default React.memo( Render );
