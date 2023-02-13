import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import classnames from 'classnames';

import {
	
	Button,
	
} from '@wordpress/components';
import {
	MediaUpload,
	RichText,
} from '@wordpress/block-editor';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) =>{
    useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const deviceType = useDeviceType();
    props = props.parentProps;
    const { setAttributes, attributes, className } = props;
    const { imgURL, 
		    title, 
			instaLink, 
			fbLink, 
			twLink,  
			ytLink, 
			imgID, 
			ptLink, 
			twIcon, 
			instaIcon, 
			fbIcon, 
			ptIcon, 
			ytIcon} = attributes;
    const onSelectImage = ( media ) => {
		return setAttributes ( {
			imgURL: media.url,
			imgID: media.id,
		} );
	};
	const socialHtml = ( icon, link, target ) => {
		const target_value = target ? '_blank' : '_self';
        
		return (
			<li className="uagb-user__social-icon">
				<a
					href={ link }
					aria-label={ icon }
					target={ target_value }
					title=""
					rel="noreferrer noopener"
				>
					{ renderSVG( icon ) }
				</a>
			</li>
		);
	};
    return (
        <div 
		className={ classnames(
			className,
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			`uagb-block-${ props.clientId.substr( 0, 8 ) }`
		) }
		>
			<div className="img-container">
				<MediaUpload
					onSelect={onSelectImage}
					style={{ marginTop: '30px' }}
					type="image"
					value={imgID}
					render={ ( { open } ) => (
						<Button
							onClick={open}
							className={imgID ? 'image-button' : 'button button-large'}
						>
							{!imgID ? (
								__( 'Upload Image' )
							) : (
								<img
									style={{
										width: '200px',
										height: '200px',
										marginTop: 'auto',
									}}
                                    alt='user/img'
									src={imgURL}
								/>
							)}
						</Button>
					)}
				/>
			</div>
			<RichText
			    className="uagb-user__title"
				key="editable"
				tagName="h3"
				placeholder={__(
                    'Your Name',
                    'ultimate-addons-for-gutenberg'
                )}
				value={title}
				onChange={( newTitle ) => setAttributes( { title: newTitle } )}
			/>
			
				<ul className="uagb-social-media-list">
					
					{socialHtml( instaIcon, instaLink ) }
					
					{socialHtml( fbIcon, fbLink ) }
					
					{socialHtml( twIcon, twLink ) }
					
					{socialHtml( ytIcon, ytLink ) }
					
					{socialHtml( ptIcon, ptLink ) }
					
				</ul>
			
		</div>
    )
}

export default React.memo( Render );
