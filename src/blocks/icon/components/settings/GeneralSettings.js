import UAGIconPicker from '@Components/icon-picker';
import React from 'react';
import { __ } from '@wordpress/i18n';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGMediaPicker from '@Components/image';

import { ToggleControl } from '@wordpress/components';
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';

const GeneralSettings = ( props ) => {

	const { attributes, setAttributes, deviceType } = props;
	console.log( props );
	const {
		image_icon,
		icon,
		image,
		icon_color,
		label_color,
		icon_hover_color,
		label_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
		icon_border_color,
		icon_border_hover_color,
		link,
		target,
		disableLink,
	} = attributes;

	return (
		<UAGAdvancedPanelBody title={__('Icon', 'ultimate-addons-for-gutenberg')} initialOpen={ true }>
			<UAGIconPicker
				label={ __(
					'Icon',
					'ultimate-addons-for-gutenberg'
				) }
				value={ icon }
				onChange={ ( value ) =>
					setAttributes( { icon: value } )
				}
			/>
			{ icon && (
				<ToggleControl
					label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
					checked={ disableLink }
					onChange={ () =>
						setAttributes( { disableLink: ! disableLink } )
					}
				/>
			)}

			{ icon && disableLink && (
				<>
					{/* <LinkControl
						placeholder="Search here..."
					renderSuggestions={ ( props ) => {
						console.log('hhh',props)
					} }
					allowDirectEntry={false}
					withURLSuggestion={false}
					value={ attributes.url }
					onChange={ ( newURL ) => {
					} }
					withCreateSuggestion={false}
					/> */}
					<UAGTextControl
						label={__( 'URL', 'ultimate-addons-for-gutenberg' )}
						value={ link }
						data={{
							value: link,
							label: 'link',
						}}
						setAttributes={ setAttributes }
						onChange={ ( value ) =>
							setAttributes( { link: value } )
						}
						placeholder={ __(
							'Enter URL',
							'ultimate-addons-for-gutenberg'
						) }
					/>
					<ToggleControl
						label={ __(
							'Open in New Tab',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ target }
						onChange={ () =>
							setAttributes( { target: ! target } )
						}
					/>
				</>
			) }
		</UAGAdvancedPanelBody>
	);
};

export default React.memo( GeneralSettings );
