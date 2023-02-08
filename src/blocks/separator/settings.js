import React from 'react';

import TypographyControl from '@Components/typography';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import { Icon } from '@wordpress/components';
import SpacingControl from '@Components/spacing-control';
import UAGTextControl from '@Components/text-control';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGSelectControl from '@Components/select-control';
import UAGIconPicker from '@Components/icon-picker';
// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, deviceType, setAttributes } = props;
	const {
		block_id,
		separatorStyle,
		separatorAlign,
		separatorAlignTablet,
		separatorAlignMobile,
		separatorWidth,
		separatorWidthTablet,
		separatorWidthMobile,
		separatorWidthType,
		separatorColor,
		separatorThickness,
		thicknessUnit,
		separatorTopPadding,
		separatorRightPadding,
		separatorBottomPadding,
		separatorLeftPadding,
		separatorPaddingTopTablet,
		separatorPaddingRightTablet,
		separatorPaddingBottomTablet,
		separatorPaddingLeftTablet,
		separatorPaddingTopMobile,
		separatorPaddingRightMobile,
		separatorPaddingBottomMobile,
		separatorPaddingLeftMobile,
		separatorPaddingUnit,
		separatorMobilePaddingUnit,
		separatorTabletPaddingUnit,
		separatorPaddingLink,
		elementType,
		separatorText,
		separatorTextTag,
		separatorIcon,
		elementPosition,
		elementPositionTablet,
		elementPositionMobile,
		elementSpacing,
		elementSpacingTablet,
		elementSpacingMobile,
		elementSpacingUnit,
		elementTextLoadGoogleFonts,
		elementTextFontFamily,
		elementTextFontWeight,
		elementTextFontSize,
		elementTextFontSizeType,
		elementTextFontSizeTablet,
		elementTextFontSizeMobile,
		elementTextLineHeightType,
		elementTextLineHeight,
		elementTextLineHeightTablet,
		elementTextLineHeightMobile,
		elementTextFontStyle,
		elementTextLetterSpacing,
		elementTextLetterSpacingTablet,
		elementTextLetterSpacingMobile,
		elementTextLetterSpacingType,
		elementTextDecoration,
		elementTextTransform,
		elementColor,
		elementIconWidth,
		elementIconWidthTablet,
		elementIconWidthMobile,
		elementIconWidthType
	} = attributes;

	// Separator settings.
	const separatorGeneralSettings = () => {
	
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<UAGSelectControl
					label={ __(
						'Style',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: separatorStyle,
						label: 'separatorStyle',
					} }
					setAttributes={ setAttributes }
					options={ [ {
						value: 'none',
						label: __( 'None', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'dotted',
						label: __( 'Dotted', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'dashed',
						label: __( 'Dashed', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'double',
						label: __( 'Double', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'solid',
						label: __( 'Solid', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'zigzag',
						label: __( 'ZigZag', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'curved',
						label: __( 'Curved', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'curly',
						label: __( 'Curly', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'square',
						label: __( 'Square', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'leaves',
						label: __( 'Leaves', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'slash',
						label: __( 'Slash', 'ultimate-addons-for-gutenberg' ),
					},
				] } 
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					responsive={true}
					data={ {
						desktop: {
							value: separatorAlign,
							label: 'separatorAlign',
						},
						tablet: {
							value: separatorAlignTablet,
							label: 'separatorAlignTablet',
						},
						mobile: {
							value: separatorAlignMobile,
							label: 'separatorAlignMobile',
						},
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-center'
									) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-right'
									) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Add Element', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: elementType,
						label: 'elementType',
					} }
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'text',
							label: __(
								'Text',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'icon',
							label: __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
					responsive={false}
				/>
				{
					elementType === 'text' && (
						<>
							<UAGTextControl
								label={ __(
									'Text',
									'ultimate-addons-for-gutenberg'
								) }
								data={{
									value: separatorText,
									label: 'separatorText',
								}}
								setAttributes={ setAttributes }
								value={ separatorText }
							/>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __(
									'HTML Tag',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									value: separatorTextTag,
									label: 'separatorTextTag',
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
									{
										value: 'h5',
										label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
									},
									{
										value: 'h6',
										label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
									},
									{
										value: 'span',
										label: __(
											'Span',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'p',
										label: __( 'P', 'ultimate-addons-for-gutenberg' ),
									},
								] }
							/>
						</>
					)
				}
				{
					elementType === 'icon' && (
						<UAGIconPicker
							label={ __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ separatorIcon }
							onChange={ ( value ) =>
								setAttributes( { separatorIcon: value } )
							}
						/>
					)
				}
			</UAGAdvancedPanelBody>
		);
	};

	const separatorStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title="Separator"
				initialOpen={ true }
			>
				<ResponsiveSlider
					label={ __(
						'Width',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: separatorWidth,
							label: 'separatorWidth',
						},
						tablet: {
							value: separatorWidthTablet,
							label: 'separatorWidthTablet',
						},
						mobile: {
							value: separatorWidthMobile,
							label: 'separatorWidthMobile',
						},
					} }
					min={ 0 }
					max={ '%' === separatorWidthType ? 100 : 500 }
					unit={ {
						value: separatorWidthType,
						label: 'separatorWidthType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __(
								'%',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: '%',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Thickness',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ separatorThickness }
					data={ {
						value: separatorThickness,
						label: 'separatorThickness',
					} }
					min={ 0 }
					max={ 10 }
					unit={ {
						value: thicknessUnit,
						label: 'thicknessUnit',
					} }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={
						separatorColor ? separatorColor : ''
					}
					data={ {
						value: separatorColor,
						label: 'separatorColor',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: separatorTopPadding,
						label: 'separatorTopPadding',
					} }
					valueRight={ {
						value: separatorRightPadding,
						label: 'separatorRightPadding',
					} }
					valueBottom={ {
						value: separatorBottomPadding,
						label: 'separatorBottomPadding',
					} }
					valueLeft={ {
						value: separatorLeftPadding,
						label: 'separatorLeftPadding',
					} }
					valueTopTablet={ {
						value: separatorPaddingTopTablet,
						label: 'separatorPaddingTopTablet',
					} }
					valueRightTablet={ {
						value: separatorPaddingRightTablet,
						label: 'separatorPaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: separatorPaddingBottomTablet,
						label: 'separatorPaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: separatorPaddingLeftTablet,
						label: 'separatorPaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: separatorPaddingTopMobile,
						label: 'separatorPaddingTopMobile',
					} }
					valueRightMobile={ {
						value: separatorPaddingRightMobile,
						label: 'separatorPaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: separatorPaddingBottomMobile,
						label: 'separatorPaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: separatorPaddingLeftMobile,
						label: 'separatorPaddingLeftMobile',
					} }
					unit={ {
						value: separatorPaddingUnit,
						label: 'separatorPaddingUnit',
					} }
					mUnit={ {
						value: separatorMobilePaddingUnit,
						label: 'separatorMobilePaddingUnit',
					} }
					tUnit={ {
						value: separatorTabletPaddingUnit,
						label: 'separatorTabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: separatorPaddingLink,
						label: 'separatorPaddingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const iconAndTextStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={elementType === 'text' ? __('Text', 'ultimate-addons-for-gutenberg') : __('Icon', 'ultimate-addons-for-gutenberg')}
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					responsive={true}
					data={ {
						desktop: {
							value: elementPosition,
							label: 'elementPosition',
						},
						tablet: {
							value: elementPositionTablet,
							label: 'elementPositionTablet',
						},
						mobile: {
							value: elementPositionMobile,
							label: 'elementPositionMobile',
						},
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-center'
									) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-right'
									) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
				{
					elementType === 'text' && (
						<TypographyControl
							label={ __(
								'Typography',
								'ultimate-addons-for-gutenberg'
							) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							loadGoogleFonts={ {
								value: elementTextLoadGoogleFonts,
								label: 'elementTextLoadGoogleFonts',
							} }
							fontFamily={ {
								value: elementTextFontFamily,
								label: 'elementTextFontFamily',
							} }
							fontWeight={ {
								value: elementTextFontWeight,
								label: 'elementTextFontWeight',
							} }
							fontStyle={ {
								value: elementTextFontStyle,
								label: 'elementTextFontStyle',
							} }
							fontSizeType={ {
								value: elementTextFontSizeType,
								label: 'elementTextFontSizeType',
							} }
							fontSize={ {
								value: elementTextFontSize,
								label: 'elementTextFontSize',
							} }
							fontSizeMobile={ {
								value: elementTextFontSizeMobile,
								label: 'elementTextFontSizeMobile',
							} }
							fontSizeTablet={ {
								value: elementTextFontSizeTablet,
								label: 'elementTextFontSizeTablet',
							} }
							lineHeightType={ {
								value: elementTextLineHeightType,
								label: 'elementTextLineHeightType',
							} }
							lineHeight={ {
								value: elementTextLineHeight,
								label: 'elementTextLineHeight',
							} }
							lineHeightMobile={ {
								value: elementTextLineHeightMobile,
								label: 'elementTextLineHeightMobile',
							} }
							lineHeightTablet={ {
								value: elementTextLineHeightTablet,
								label: 'elementTextLineHeightTablet',
							} }
							letterSpacing={ {
								value: elementTextLetterSpacing,
								label: 'elementTextLetterSpacing',
							} }
							letterSpacingTablet={ {
								value: elementTextLetterSpacingTablet,
								label: 'elementTextLetterSpacingTablet',
							} }
							letterSpacingMobile={ {
								value: elementTextLetterSpacingMobile,
								label: 'elementTextLetterSpacingMobile',
							} }
							letterSpacingType={ {
								value: elementTextLetterSpacingType,
								label: 'elementTextLetterSpacingType',
							} }
							transform={ {
								value: elementTextTransform,
								label: 'elementTextTransform',
							} }
							decoration={ {
								value: elementTextDecoration,
								label: 'elementTextDecoration',
							} }
						/>
					)
				}

				{
					elementType === 'icon' && (
						<ResponsiveSlider
							label={ __(
								'Icon Size',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: elementIconWidth,
									label: 'elementIconWidth',
								},
								tablet: {
									value: elementIconWidthTablet,
									label: 'elementIconWidthTablet',
								},
								mobile: {
									value: elementIconWidthMobile,
									label: 'elementIconWidthMobile',
								},
							} }
							min={ 0 }
							max={ 100 }
							unit={ {
								value: elementIconWidthType,
								label: 'elementIconWidthType',
							} }
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
								{
									name: __(
										'EM',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'em',
								},
							] }
							setAttributes={ setAttributes }
						/>
					)
				}

				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ elementColor ? elementColor : '' }
					data={ {
						value: elementColor,
						label: 'elementColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: elementSpacing,
							label: 'elementSpacing',
						},
						tablet: {
							value: elementSpacingTablet,
							label: 'elementSpacingTablet',
						},
						mobile: {
							value: elementSpacingMobile,
							label: 'elementSpacingMobile',
						},
					} }
					min={ 0 }
					max={ 500 }
					unit={ {
						value: elementSpacingUnit,
						label: 'elementSpacingUnit',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		)
	}

	return (
		<div>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{separatorGeneralSettings()}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{separatorStyleSettings()}
						{
							elementType !== 'none' && iconAndTextStyleSettings()
						}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</div>
	);
};
export default React.memo( Settings );
