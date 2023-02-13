import React from 'react';
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
} from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import UAGIconPicker from '@Components/icon-picker';

import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';

 import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
 import UAGTextControl from '@Components/text-control';

const Settings = ( props ) => {
    props = props.parentProps;
    const { setAttributes, attributes } = props;
    const {  instaLink,
		     fbLink, 
			 twLink,  
			 ytLink, 
			 twIcon, 
			 instaIcon, 
			 fbIcon, 
			 ptIcon, 
			 titleColor,
			 ytIcon,
			 ptLink} = attributes;
    
    const getSocialMediaPanelBody=()=>{
      return (
        <UAGAdvancedPanelBody
				title={ __( 'Social Links', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
		<strong>twitter</strong>
		<UAGIconPicker
					label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
					) }
							value={ twIcon }
							onChange={ ( value ) =>
								setAttributes( { twIcon: value } )
							}
						/>		
        <UAGTextControl
					label={ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
					value={ twLink }
					data={{
					value: twLink,
					label: 'twitterLink',
					}}
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
					setAttributes( { twLink: value } )
					}
					placeholder={ __(
								'URL',
								'ultimate-addons-for-gutenberg'
									) }
								/>
		<strong>Instagram</strong>
		<UAGIconPicker
					label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
					) }
							value={ instaIcon }
							onChange={ ( value ) =>
								setAttributes( { instaIcon: value } )
							}
						/>						
        <UAGTextControl
					label={ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
					value={ instaLink }
					data={{
					value: instaLink,
					label: 'instaLink',
					}}
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
					setAttributes( { instaLink: value } )
					}
					placeholder={ __(
								'Instagram URL',
								'ultimate-addons-for-gutenberg'
									) }
								/>
	    <strong>Facebook</strong>
		<UAGIconPicker
					label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
					) }
							value={ fbIcon }
							onChange={ ( value ) =>
								setAttributes( { fbIcon: value } )
							}
						/>	
        <UAGTextControl
					label={ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
					value={ fbLink }
					data={{
					value: fbLink,
					label: 'fbLink',
					}}
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
					setAttributes( { fbLink: value } )
					}
					placeholder={ __(
								'Facebook URL',
								'ultimate-addons-for-gutenberg'
									) }
								/>
		<strong>Youtube</strong>
		<UAGIconPicker
					label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
					) }
							value={ ytIcon }
							onChange={ ( value ) =>
								setAttributes( { ytIcon: value } )
							}
						/>	
        <UAGTextControl
					label={ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
					value={ ytLink }
					data={{
					value: ytLink,
					label: 'ytLink',
					}}
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
					setAttributes( { ytLink: value } )
					}
					placeholder={ __(
								'Youtube URL',
								'ultimate-addons-for-gutenberg'
									) }
								/>
		<strong>Pinterest</strong>
		<UAGIconPicker
					label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
					) }
							value={ ptIcon }
							onChange={ ( value ) =>
								setAttributes( { ptIcon: value } )
							}
						/>	
        <UAGTextControl
					label={ __( 'Pinterest URL', 'ultimate-addons-for-gutenberg' ) }
					value={ ptLink }
					data={{
					value: ptLink,
					label: 'ptLink',
					}}
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
					setAttributes( { ptLink: value } )
					}
					placeholder={ __(
								'Pinterest',
								'ultimate-addons-for-gutenberg'
									) }
								/>
        </UAGAdvancedPanelBody>
      )
    }
	const getTitleColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor ? titleColor : '' }
					data={ {
						value: titleColor,
						label: 'titleColor',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		)
	}
    return (
        <>
        <InspectorControls style={{ marginBottom: '40px' }}>
        <InspectorTabs>
           <InspectorTab { ...UAGTabs.general }>
			
                {getSocialMediaPanelBody()}
			
           </InspectorTab>
		   <InspectorTab { ...UAGTabs.style }>
						{ getTitleColorSettings() }
						
					</InspectorTab>
           <InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
          </InspectorTabs>
		</InspectorControls>
        </>
    )
}


export default React.memo( Settings );