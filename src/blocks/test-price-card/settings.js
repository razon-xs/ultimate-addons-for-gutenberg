import React from 'react';
import { __ } from '@wordpress/i18n';
import MultiButtonsControl from '@Components/multi-buttons-control';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { InspectorControls } from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes } = props;
	const {
		titleTag,
		titleColor,
		desColor,
		headLoadGoogleFonts,
		headFontFamily,
		headFontWeight,
		headTransform,
		headDecoration,
		headFontSize,
		headFontStyle,
		headFontSizeType,
		highLightLineHeightType,
		highLightLineHeight,
		highLightLetterSpacing,
		highLightLetterSpacingType,
	} = attributes;

	let loadHeadingGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadingGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}
	const getTitlePanelBody = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title Tag', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: titleTag,
						label: 'titleTag',
					} }
					options={ [
						{
							value: 'h1',
							label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h2',
							label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h3',
							label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h4',
							label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const getTitleStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: headLoadGoogleFonts,
						label: 'headLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headFontFamily,
						label: 'headFontFamily',
					} }
					fontWeight={ {
						value: headFontWeight,
						label: 'headFontWeight',
					} }
					fontStyle={ {
						value: headFontStyle,
						label: 'headFontStyle',
					} }
					transform={ {
						value: headTransform,
						label: 'headTransform',
					} }
					decoration={ {
						value: headDecoration,
						label: 'headDecoration',
					} }
					fontSizeType={ {
						value: headFontSizeType,
						label: 'headFontSizeType',
					} }
					fontSize={ {
						value: headFontSize,
						label: 'headFontSize',
					} }
					fontSizeMobile={ {
						value: '',
						label: 'highLightFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: '',
						label: 'highLightFontSizeTablet',
					} }
					lineHeightType={ {
						value: highLightLineHeightType,
						label: 'highLightLineHeightType',
					} }
					lineHeight={ {
						value: highLightLineHeight,
						label: 'highLightLineHeight',
					} }
					lineHeightMobile={ {
						value: '',
						label: 'highLightLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: '',
						label: 'highLightLineHeightTablet',
					} }
					letterSpacing={ {
						value: highLightLetterSpacing,
						label: 'highLightLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: '',
						label: 'highLightLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: '',
						label: 'highLightLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: highLightLetterSpacingType,
						label: 'highLightLetterSpacingType',
					} }
				/>
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
		);
	};
	const getDesStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ desColor ? desColor : '' }
					data={ {
						value: desColor,
						label: 'desColor',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<>
			<InspectorControls style={ { marginBottom: '40px' } }>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ getTitlePanelBody() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ getTitleStyleSettings() }
						{ getDesStyleSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadHeadingGoogleFonts }
		</>
	);
};

export default React.memo( Settings );
