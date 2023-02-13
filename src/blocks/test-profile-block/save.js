import {
	
	RichText,
} from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import classnames from 'classnames';

export default function save( props ) {
   
    const { attributes, className } = props;
    const { imgURL, 
            block_id,
            title, 
            instaLink, 
            fbLink, 
            twLink,  
            ytLink, 
            twIcon, 
			 instaIcon, 
			 fbIcon, 
			 ptIcon, 
			 ytIcon,
			 
            ptLink} = attributes;
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
			`uagb-block-${ block_id }`
		) }
        >
        <div className="img-container">
        <img
            style={ {
                width: '200px',
                height: '200px',
                marginTop: 'auto',
            } }
            alt='user/img'
            src={imgURL}
        />
         </div>
        <RichText.Content tagName="h3" className="uagb-user__title" value={title} />
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
