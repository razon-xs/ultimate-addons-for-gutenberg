import React from 'react';
import { __ } from '@wordpress/i18n';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTabsControl from '@Components/tabs';
import ColorSwitchControl from '@Components/color-switch-control';
import ResponsiveBorder from '@Components/responsive-border';
import TextShadowControl from '@Components/text-shadow';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';

const StyleSettings = ( props ) => {

	const { attributes, setAttributes, deviceType } = props;

	const {
		block_id,
		// Color
		iconColor,
		iconBackgroundColorType,
		iconBackgroundColor,
		iconBackgroundGradientColor,
		iconHoverColor,
		iconHoverBackgroundColorType,
		iconHoverBackgroundColor,
		iconHoverBackgroundGradientColor,
		// Padding
		iconTopPadding,
		iconRightPadding,
		iconBottomPadding,
		iconLeftPadding,
		iconTopTabletPadding,
		iconRightTabletPadding,
		iconBottomTabletPadding,
		iconLeftTabletPadding,
		iconTopMobilePadding,
		iconRightMobilePadding,
		iconBottomMobilePadding,
		iconLeftMobilePadding,
		iconPaddingUnit,
		iconMobilePaddingUnit,
		iconTabletPaddingUnit,
		iconPaddingLink,
		// Margin
		iconTopMargin,
		iconRightMargin,
		iconBottomMargin,
		iconLeftMargin,
		iconTopTabletMargin,
		iconRightTabletMargin,
		iconBottomTabletMargin,
		iconLeftTabletMargin,
		iconTopMobileMargin,
		iconRightMobileMargin,
		iconBottomMobileMargin,
		iconLeftMobileMargin,
		iconMarginUnit,
		iconMobileMarginUnit,
		iconTabletMarginUnit,
		iconMarginLink,
		// Shadow
		iconShadowColor,
		iconShadowHOffset,
		iconShadowVOffset,
		iconShadowBlur,
	} = attributes;

	return (
		<>
		<UAGAdvancedPanelBody title={__( 'Icon', 'ultimate-addons-for-gutenberg' )} initialOpen={ true }>
			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'hover',
						title: __(
							'Hover',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				normal={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								iconColor ? iconColor : ''
							}
							data={ {
								value: iconColor,
								label: 'iconColor',
							} }
							setAttributes={ setAttributes }
						/>
						<ColorSwitchControl
							label={__( 'Background Color', 'ultimate-addons-for-gutenberg' )}
							type={{
								value: iconBackgroundColorType,
								label: 'iconBackgroundColorType'
							}}
							classic={{
								value: iconBackgroundColor,
								label: 'iconBackgroundColor'
							}}
							gradient={{
								value: iconBackgroundGradientColor,
								label: 'iconBackgroundGradientColor'
							}}
							setAttributes={ setAttributes }
						/>
					</>
				}
				hover={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Hover Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								iconHoverColor ? iconHoverColor : ''
							}
							data={ {
								value: iconHoverColor,
								label: 'iconHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
						<ColorSwitchControl
							label={__( 'Background Color', 'ultimate-addons-for-gutenberg' )}
							type={{
								value: iconHoverBackgroundColorType,
								label: 'iconHoverBackgroundColorType'
							}}
							classic={{
								value: iconHoverBackgroundColor,
								label: 'iconHoverBackgroundColor'
							}}
							gradient={{
								value: iconHoverBackgroundGradientColor,
								label: 'iconHoverBackgroundGradientColor'
							}}
							setAttributes={ setAttributes }
						/>
					</>
					}
				disableBottomSeparator={ false }
			/>
			<ResponsiveBorder
				setAttributes={ setAttributes }
				prefix={'icon'}
				attributes={ attributes }
				deviceType={deviceType}
				disableBottomSeparator={ false }
			/>
			<TextShadowControl
				blockId={ block_id }
				setAttributes={ setAttributes }
				label={ __(
					'Drop Shadow',
					'ultimate-addons-for-gutenberg'
				) }
				textShadowColor={ {
					value: iconShadowColor,
					label: 'iconShadowColor',
					title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
				} }
				textShadowHOffset={ {
					value: iconShadowHOffset,
					label: 'iconShadowHOffset',
					title: __(
						'Horizontal',
						'ultimate-addons-for-gutenberg'
					),
				} }
				textShadowVOffset={ {
					value: iconShadowVOffset,
					label: 'iconShadowVOffset',
					title: __(
						'Vertical',
						'ultimate-addons-for-gutenberg'
					),
				} }
				textShadowBlur={ {
					value: iconShadowBlur,
					label: 'iconShadowBlur',
					title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
				} }
				popup={ true }
			/>
		</UAGAdvancedPanelBody>
		<UAGAdvancedPanelBody title={__( 'Spacing', 'ultimate-addons-for-gutenberg' )} initialOpen={ false }>
			<SpacingControl
				{ ...props }
				label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: iconTopPadding,
					label: 'iconTopPadding',
				} }
				valueRight={ {
					value: iconRightPadding,
					label: 'iconRightPadding',
				} }
				valueBottom={ {
					value: iconBottomPadding,
					label: 'iconBottomPadding',
				} }
				valueLeft={ {
					value: iconLeftPadding,
					label: 'iconLeftPadding',
				} }
				valueTopTablet={ {
					value: iconTopTabletPadding,
					label: 'iconTopTabletPadding',
				} }
				valueRightTablet={ {
					value: iconRightTabletPadding,
					label: 'iconRightTabletPadding',
				} }
				valueBottomTablet={ {
					value: iconBottomTabletPadding,
					label: 'iconBottomTabletPadding',
				} }
				valueLeftTablet={ {
					value: iconLeftTabletPadding,
					label: 'iconLeftTabletPadding',
				} }
				valueTopMobile={ {
					value: iconTopMobilePadding,
					label: 'iconTopMobilePadding',
				} }
				valueRightMobile={ {
					value: iconRightMobilePadding,
					label: 'iconRightMobilePadding',
				} }
				valueBottomMobile={ {
					value: iconBottomMobilePadding,
					label: 'iconBottomMobilePadding',
				} }
				valueLeftMobile={ {
					value: iconLeftMobilePadding,
					label: 'iconLeftMobilePadding',
				} }
				unit={ {
					value: iconPaddingUnit,
					label: 'iconPaddingUnit',
				} }
				mUnit={ {
					value: iconMobilePaddingUnit,
					label: 'iconMobilePaddingUnit',
				} }
				tUnit={ {
					value: iconTabletPaddingUnit,
					label: 'iconTabletPaddingUnit',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: iconPaddingLink,
					label: 'iconPaddingLink',
				} }
			/>
			<SpacingControl
				{ ...props }
				label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: iconTopMargin,
					label: 'iconTopMargin',
				} }
				valueRight={ {
					value: iconRightMargin,
					label: 'iconRightMargin',
				} }
				valueBottom={ {
					value: iconBottomMargin,
					label: 'iconBottomMargin',
				} }
				valueLeft={ {
					value: iconLeftMargin,
					label: 'iconLeftMargin',
				} }
				valueTopTablet={ {
					value: iconTopTabletMargin,
					label: 'iconTopTabletMargin',
				} }
				valueRightTablet={ {
					value: iconRightTabletMargin,
					label: 'iconRightTabletMargin',
				} }
				valueBottomTablet={ {
					value: iconBottomTabletMargin,
					label: 'iconBottomTabletMargin',
				} }
				valueLeftTablet={ {
					value: iconLeftTabletMargin,
					label: 'iconLeftTabletMargin',
				} }
				valueTopMobile={ {
					value: iconTopMobileMargin,
					label: 'iconTopMobileMargin',
				} }
				valueRightMobile={ {
					value: iconRightMobileMargin,
					label: 'iconRightMobileMargin',
				} }
				valueBottomMobile={ {
					value: iconBottomMobileMargin,
					label: 'iconBottomMobileMargin',
				} }
				valueLeftMobile={ {
					value: iconLeftMobileMargin,
					label: 'iconLeftMobileMargin',
				} }
				unit={ {
					value: iconMarginUnit,
					label: 'iconMarginUnit',
				} }
				mUnit={ {
					value: iconMobileMarginUnit,
					label: 'iconMobileMarginUnit',
				} }
				tUnit={ {
					value: iconTabletMarginUnit,
					label: 'iconTabletMarginUnit',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: iconMarginLink,
					label: 'iconMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
		</>
	);
};

export default React.memo( StyleSettings );
