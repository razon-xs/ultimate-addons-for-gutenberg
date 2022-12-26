import { __ } from '@wordpress/i18n';
import UAGTextControl from '@Components/text-control';
import UAGSelectControl from '@Components/select-control';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import TypographyControl from '@Components/typography';
import SpacingControl from '@Components/spacing-control';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveBorder from '@Components/responsive-border';
import WebfontLoader from '@Components/typography/fontloader';
import renderSVG from '@Controls/renderIcon';
import renderCustomIcon from '@Controls/renderCustomIcon';
import UAGPresets from '@Components/presets';
import UAGTabsControl from '@Components/tabs';
import BoxShadowControl from '@Components/box-shadow';
import { boxShadowPresets, boxShadowHoverPresets } from './presets';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import {
	Icon,
    ToggleControl,
	DateTimePicker,
} from '@wordpress/components';
import {
    InspectorControls
} from '@wordpress/block-editor';

export default function Settings( props ) {

    props = props.parentProps;
	const { setAttributes, attributes } = props;

	const deviceType = useDeviceType();

    const {
		block_id,
        timerType,
        endDateTime,
		timerEndAction,
		redirectURL,
        showLabels,
        labelDays,
        labelHours,
        labelMinutes,
        labelSeconds,
        showSeparator,
        separatorType,
        // digit.
		digitLoadGoogleFonts,
		digitFontFamily,
		digitFontWeight,
		digitFontStyle,
		digitFontSize,
		digitColor,
		digitTransform,
		digitDecoration,
		digitFontSizeType,
		digitFontSizeMobile,
		digitFontSizeTablet,
		digitLineHeight,
		digitLineHeightType,
		digitLineHeightMobile,
		digitLineHeightTablet,
		digitLetterSpacing,
		digitLetterSpacingType,
		digitLetterSpacingMobile,
		digitLetterSpacingTablet,
		digitTopMargin,
		digitRightMargin,
		digitLeftMargin,
		digitBottomMargin,
		digitTopMarginTablet,
		digitRightMarginTablet,
		digitLeftMarginTablet,
		digitBottomMarginTablet,
		digitTopMarginMobile,
		digitRightMarginMobile,
		digitLeftMarginMobile,
		digitBottomMarginMobile,
		digitMarginUnit,
		digitMarginUnitTablet,
		digitMarginUnitMobile,
		digitMarginLink,
        // label.
		labelLoadGoogleFonts,
		labelFontFamily,
		labelFontWeight,
		labelFontStyle,
		labelFontSize,
		labelColor,
		labelTransform,
		labelDecoration,
		labelFontSizeType,
		labelFontSizeMobile,
		labelFontSizeTablet,
		labelLineHeight,
		labelLineHeightType,
		labelLineHeightMobile,
		labelLineHeightTablet,
		labelLetterSpacing,
		labelLetterSpacingType,
		labelLetterSpacingMobile,
		labelLetterSpacingTablet,
		labelTopMargin,
		labelRightMargin,
		labelLeftMargin,
		labelBottomMargin,
		labelTopMarginTablet,
		labelRightMarginTablet,
		labelLeftMarginTablet,
		labelBottomMarginTablet,
		labelTopMarginMobile,
		labelRightMarginMobile,
		labelLeftMarginMobile,
		labelBottomMarginMobile,
		labelMarginUnit,
		labelMarginUnitTablet,
		labelMarginUnitMobile,
		labelMarginLink,
		// Separator styling.
		separatorLoadGoogleFonts,
		separatorFontFamily,
		separatorFontWeight,
		separatorFontStyle,
		separatorFontSize,
		separatorColor,
		separatorFontSizeType,
		separatorFontSizeMobile,
		separatorFontSizeTablet,
		separatorLineHeight,
		separatorLineHeightType,
		separatorLineHeightMobile,
		separatorLineHeightTablet,
		separatorRightSpacing,
		separatorRightSpacingTablet,
		separatorRightSpacingMobile,
		separatorTopSpacing,
		separatorTopSpacingTablet,
		separatorTopSpacingMobile,
		// Block Margin.
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		blockMarginLink,
		// Block Padding.
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		blockPaddingLink,
		// Box Padding.
		boxTopPadding,
		boxRightPadding,
		boxLeftPadding,
		boxBottomPadding,
		boxTopPaddingTablet,
		boxRightPaddingTablet,
		boxLeftPaddingTablet,
		boxBottomPaddingTablet,
		boxTopPaddingMobile,
		boxRightPaddingMobile,
		boxLeftPaddingMobile,
		boxBottomPaddingMobile,
		boxPaddingUnit,
		boxPaddingUnitTablet,
		boxPaddingUnitMobile,
		boxPaddingLink,
		// Overall Align.
		align,
		alignTablet,
		alignMobile,
		// Box Align.
		boxAlign,
		boxAlignTablet,
		boxAlignMobile,
		// Box Spacing.
		boxSpacing,
		boxSpacingTablet,
		boxSpacingMobile,
		// Box Flex Direction.
		boxFlex,
		boxFlexTablet,
		boxFlexMobile,
		// Box Background.
		boxBgType,
		boxBgColor,
		// Box - Box Shadow.
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,
    } = attributes;

	// <------------------ OPTIONS/VALUES ------------------>
	const bgTypeOptions = [
		{
			value: 'transparent',
			label: __( 'Transparent', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'color',
			label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
		},
	];

	const alignmentOptions = [
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
	];

	const expiryOptions = [
		{
			value: 'zero',
			label: __( 'Keep at Zero', 'ultimate-addons-for-gutenberg' ),
		},
	];

	// <------------------ GOOGLE FONTS ------------------>
	// Loading Google Fonts.
	let loadDigitGoogleFonts;
	let loadLabelGoogleFonts;
	let loadSeparatorGoogleFonts;

	if ( digitLoadGoogleFonts === true ) {
		const digitConfig = {
			google: {
				families: [
					digitFontFamily +
						( digitFontWeight ? ':' + digitFontWeight : '' ),
				],
			},
		};

		loadDigitGoogleFonts = (
			<WebfontLoader config={ digitConfig }></WebfontLoader>
		);
	}

	if ( labelLoadGoogleFonts === true ) {
		const labelConfig = {
			google: {
				families: [
					labelFontFamily + ( labelFontWeight ? ':' + labelFontWeight : '' ),
				],
			},
		};

		loadLabelGoogleFonts = (
			<WebfontLoader config={ labelConfig }></WebfontLoader>
		);
	}

	if ( separatorLoadGoogleFonts === true ) {
		const separatorConfig = {
			google: {
				families: [
					separatorFontFamily +
						( separatorFontWeight ? ':' + separatorFontWeight : '' ),
				],
			},
		};

		loadSeparatorGoogleFonts = (
			<WebfontLoader config={ separatorConfig }></WebfontLoader>
		);
	}

    // <------------------ GENERAL TAB ------------------>
    const generalPanel = (
        <UAGAdvancedPanelBody
			title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
            { timerType && 
                <div className='uagb-countdown__datetime-picker'>
                    <h2>Timer End Date &amp; Time (UTC)</h2>
                    <DateTimePicker
						className="uagb-date-picker"
						currentDate={ endDateTime.slice( 0, -1 ) }
						onChange={ ( value ) => {
                                const UTCValue = value + 'Z';
                                setAttributes( { endDateTime: UTCValue } )
                            }
						}
						is12Hour={ true }
						__nextRemoveResetButton={ true }
					/>
                </div>
            }
        </UAGAdvancedPanelBody>
    );

    const labelGeneralPanel = (
        <UAGAdvancedPanelBody
			title={ __( 'Labels', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
            <ToggleControl
                label={ __( 'Show Labels', 'ultimate-addons-for-gutenberg' ) }
                checked={ showLabels }
                onChange={ () =>
                    setAttributes( { showLabels: ! showLabels } )
                }
            />
            { showLabels &&
                <>
                    <UAGTextControl
                        label={ __( 'Days', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelDays }
                        data={{
                            value: labelDays,
                            label: 'labelDays',
                        }}
                        setAttributes={ setAttributes }
                    />
                    <UAGTextControl
                        label={ __( 'Hours', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelHours }
                        data={{
                            value: labelHours,
                            label: 'labelHours',
                        }}
                        setAttributes={ setAttributes }
                    />
                    <UAGTextControl
                        label={ __( 'Minutes', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelMinutes }
                        data={{
                            value: labelMinutes,
                            label: 'labelMinutes',
                        }}
                        setAttributes={ setAttributes }
                    />
                    <UAGTextControl
                        label={ __( 'Seconds', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelSeconds }
                        data={{
                            value: labelSeconds,
                            label: 'labelSeconds',
                        }}
                        setAttributes={ setAttributes }
                    />
                </>
            }
        </UAGAdvancedPanelBody>
    );

    const separatorGeneralPanel = (
        <UAGAdvancedPanelBody
			title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
            <ToggleControl
                label={ __( 'Show Separator', 'ultimate-addons-for-gutenberg' ) }
                checked={ showSeparator }
                onChange={ () =>
                    setAttributes( { showSeparator: ! showSeparator } )
                }
            />
            { showSeparator && 
                <>
                    <MultiButtonsControl
                        setAttributes={ setAttributes }
                        label={ __( 'Separator Type', 'ultimate-addons-for-gutenberg' ) }
                        data={ {
                            value: separatorType,
                            label: 'separatorType',
                        } }
                        options={ [
                            {
                                value: 'colon',
                                label: __( 'Colon', 'ultimate-addons-for-gutenberg' ),
                            },
                            {
                                value: 'line',
                                label: __( 'Line', 'ultimate-addons-for-gutenberg' ),
                            },
                        ] }
                    />
                </>
            }
        </UAGAdvancedPanelBody>
    );

	const expirySettingsGeneralPanel = (
        <UAGAdvancedPanelBody
			title={ __( 'Countdown Expiry Settings', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<UAGSelectControl
				label={ __( 'Expiry Action', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: timerEndAction,
					label: 'timerEndAction',
				} }
				setAttributes={ setAttributes }
				options={ expiryOptions }
			/> 
        </UAGAdvancedPanelBody>
    );

    // <------------------ STYLE TAB ------------------>
	const boxStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Box', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Overall Alignment',
					'ultimate-addons-for-gutenberg'
				) }
				responsive={ true }
				data={ {
						desktop: {
							value: align,
							label: 'align',
						},
						tablet: {
							value: alignTablet,
							label: 'alignTablet',
						},
						mobile: {
							value: alignMobile,
							label: 'alignMobile',
						},
				} }
				className="uagb-multi-button-alignment-control"
				options={ alignmentOptions }
				showIcons={ true }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Inner Alignment',
					'ultimate-addons-for-gutenberg'
				) }
				responsive={ true }
				data={ {
						desktop: {
							value: boxAlign,
							label: 'boxAlign',
						},
						tablet: {
							value: boxAlignTablet,
							label: 'boxAlignTablet',
						},
						mobile: {
							value: boxAlignMobile,
							label: 'boxAlignMobile',
						},
				} }
				className="uagb-multi-button-alignment-control"
				options={ alignmentOptions }
				showIcons={ true }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Flex Direction', 'ultimate-addons-for-gutenberg' ) }
				responsive={ true }
				data={ {
						desktop: {
							value: boxFlex,
							label: 'boxFlex',
						},
						tablet: {
							value: boxFlexTablet,
							label: 'boxFlexTablet',
						},
						mobile: {
							value: boxFlexMobile,
							label: 'boxFlexMobile',
						},
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'row',
						icon: (
							<Icon
								icon={ renderCustomIcon( 'flex-direction-row' ) }
							/>
						),
						tooltip: __( 'Row', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'column',
						icon: (
							<Icon
								icon={ renderCustomIcon( 'flex-direction-column' ) }
							/>
						),
						tooltip: __( 'Column', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				showIcons={ true }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: boxBgType,
					label: 'boxBgType',
				} }
				className="uagb-multi-button-alignment-control"
				options={ bgTypeOptions }
			/>
			{ boxBgType === 'color' &&
				 <AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ boxBgColor ? boxBgColor : '' }
					data={ {
						value: boxBgColor,
						label: 'boxBgColor',
					} }
					setAttributes={ setAttributes }
				/>
			}
			<ResponsiveSlider
				label={ __(
					'Gap Between Boxes',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: boxSpacing,
						label: 'boxSpacing',
					},
					tablet: {
						value: boxSpacingTablet,
						label: 'boxSpacingTablet',
					},
					mobile: {
						value: boxSpacingMobile,
						label: 'boxSpacingMobile',
					},
				} }
				min={ 0 }
				max={ 200 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<ResponsiveBorder
				disabledBorderTitle= {false}
				setAttributes={ setAttributes }
				prefix={'box'}
				attributes={ attributes }
				deviceType={deviceType}
				disableBottomSeparator={ false }
			/>
			<SpacingControl
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: boxTopPadding,
					label: 'boxTopPadding',
				} }
				valueRight={ {
					value: boxRightPadding,
					label: 'boxRightPadding',
				} }
				valueBottom={ {
					value: boxBottomPadding,
					label: 'boxBottomPadding',
				} }
				valueLeft={ {
					value: boxLeftPadding,
					label: 'boxLeftPadding',
				} }
				valueTopTablet={ {
					value: boxTopPaddingTablet,
					label: 'boxTopPaddingTablet',
				} }
				valueRightTablet={ {
					value: boxRightPaddingTablet,
					label: 'boxRightPaddingTablet',
				} }
				valueBottomTablet={ {
					value: boxBottomPaddingTablet,
					label: 'boxBottomPaddingTablet',
				} }
				valueLeftTablet={ {
					value: boxLeftPaddingTablet,
					label: 'boxLeftPaddingTablet',
				} }
				valueTopMobile={ {
					value: boxTopPaddingMobile,
					label: 'boxTopPaddingMobile',
				} }
				valueRightMobile={ {
					value: boxRightPaddingMobile,
					label: 'boxRightPaddingMobile',
				} }
				valueBottomMobile={ {
					value: boxBottomPaddingMobile,
					label: 'boxBottomPaddingMobile',
				} }
				valueLeftMobile={ {
					value: boxLeftPaddingMobile,
					label: 'boxLeftPaddingMobile',
				} }
				unit={ {
					value: boxPaddingUnit,
					label: 'boxPaddingUnit',
				} }
				mUnit={ {
					value: boxPaddingUnitMobile,
					label: 'boxPaddingUnitMobile',
				} }
				tUnit={ {
					value: boxPaddingUnitTablet,
					label: 'boxPaddingUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: boxPaddingLink,
					label: 'boxPaddingLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	);

    const digitStylePanel = (
        <UAGAdvancedPanelBody
			title={ __( 'Digit', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
            <AdvancedPopColorControl
                label={ __(
                    'Color',
                    'ultimate-addons-for-gutenberg'
                ) }
                colorValue={
                    digitColor ? digitColor : ''
                }
                data={ {
                    value: digitColor,
                    label: 'digitColor',
                } }
                setAttributes={ setAttributes }
            />
            <TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: digitLoadGoogleFonts,
					label: 'digitLoadGoogleFonts',
				} }
				fontFamily={ {
					value: digitFontFamily,
					label: 'digitFontFamily',
				} }
				fontWeight={ {
					value: digitFontWeight,
					label: 'digitFontWeight',
				} }
				fontStyle={ {
					value: digitFontStyle,
					label: 'digitFontStyle',
				} }
				transform={ {
					value: digitTransform,
					label: 'digitTransform',
				} }
				decoration={ {
					value: digitDecoration,
					label: 'digitDecoration',
				} }
				fontSizeType={ {
					value: digitFontSizeType,
					label: 'digitFontSizeType',
				} }
				fontSize={ {
					value: digitFontSize,
					label: 'digitFontSize',
				} }
				fontSizeMobile={ {
					value: digitFontSizeMobile,
					label: 'digitFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: digitFontSizeTablet,
					label: 'digitFontSizeTablet',
				} }
				lineHeightType={ {
					value: digitLineHeightType,
					label: 'digitLineHeightType',
				} }
				lineHeight={ {
					value: digitLineHeight,
					label: 'digitLineHeight',
				} }
				lineHeightMobile={ {
					value: digitLineHeightMobile,
					label: 'digitLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: digitLineHeightTablet,
					label: 'digitLineHeightTablet',
				} }
				letterSpacingType={ {
					value: digitLetterSpacingType,
					label: 'digitLetterSpacingType',
				} }
				letterSpacing={ {
					value: digitLetterSpacing,
					label: 'digitLetterSpacing',
				} }
				letterSpacingMobile={ {
					value: digitLetterSpacingMobile,
					label: 'digitLetterSpacingMobile',
				} }
				letterSpacingTablet={ {
					value: digitLetterSpacingTablet,
					label: 'digitLetterSpacingTablet',
				} }
			/>
            <SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: digitTopMargin,
					label: 'digitTopMargin',
				} }
				valueRight={ {
					value: digitRightMargin,
					label: 'digitRightMargin',
				} }
				valueBottom={ {
					value: digitBottomMargin,
					label: 'digitBottomMargin',
				} }
				valueLeft={ {
					value: digitLeftMargin,
					label: 'digitLeftMargin',
				} }
				valueTopTablet={ {
					value: digitTopMarginTablet,
					label: 'digitTopMarginTablet',
				} }
				valueRightTablet={ {
					value: digitRightMarginTablet,
					label: 'digitRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: digitBottomMarginTablet,
					label: 'digitBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: digitLeftMarginTablet,
					label: 'digitLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: digitTopMarginMobile,
					label: 'digitTopMarginMobile',
				} }
				valueRightMobile={ {
					value: digitRightMarginMobile,
					label: 'digitRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: digitBottomMarginMobile,
					label: 'digitBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: digitLeftMarginMobile,
					label: 'digitLeftMarginMobile',
				} }
				unit={ {
					value: digitMarginUnit,
					label: 'digitMarginUnit',
				} }
				mUnit={ {
					value: digitMarginUnitMobile,
					label: 'digitMarginUnitMobile',
				} }
				tUnit={ {
					value: digitMarginUnitTablet,
					label: 'digitMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: digitMarginLink,
					label: 'digitMarginLink',
				} }
			/>
        </UAGAdvancedPanelBody>
    );

    const labelStylePanel = (
        <UAGAdvancedPanelBody
			title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
            <AdvancedPopColorControl
                label={ __(
                    'Color',
                    'ultimate-addons-for-gutenberg'
                ) }
                colorValue={
                    labelColor ? labelColor : ''
                }
                data={ {
                    value: labelColor,
                    label: 'labelColor',
                } }
                setAttributes={ setAttributes }
            />
            <TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: labelLoadGoogleFonts,
					label: 'labelLoadGoogleFonts',
				} }
				fontFamily={ {
					value: labelFontFamily,
					label: 'labelFontFamily',
				} }
				fontWeight={ {
					value: labelFontWeight,
					label: 'labelFontWeight',
				} }
				fontStyle={ {
					value: labelFontStyle,
					label: 'labelFontStyle',
				} }
				transform={ {
					value: labelTransform,
					label: 'labelTransform',
				} }
				decoration={ {
					value: labelDecoration,
					label: 'labelDecoration',
				} }
				fontSizeType={ {
					value: labelFontSizeType,
					label: 'labelFontSizeType',
				} }
				fontSize={ {
					value: labelFontSize,
					label: 'labelFontSize',
				} }
				fontSizeMobile={ {
					value: labelFontSizeMobile,
					label: 'labelFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: labelFontSizeTablet,
					label: 'labelFontSizeTablet',
				} }
				lineHeightType={ {
					value: labelLineHeightType,
					label: 'labelLineHeightType',
				} }
				lineHeight={ {
					value: labelLineHeight,
					label: 'labelLineHeight',
				} }
				lineHeightMobile={ {
					value: labelLineHeightMobile,
					label: 'labelLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: labelLineHeightTablet,
					label: 'labelLineHeightTablet',
				} }
				letterSpacingType={ {
					value: labelLetterSpacingType,
					label: 'labelLetterSpacingType',
				} }
				letterSpacing={ {
					value: labelLetterSpacing,
					label: 'labelLetterSpacing',
				} }
				letterSpacingMobile={ {
					value: labelLetterSpacingMobile,
					label: 'labelLetterSpacingMobile',
				} }
				letterSpacingTablet={ {
					value: labelLetterSpacingTablet,
					label: 'labelLetterSpacingTablet',
				} }
			/>
            <SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: labelTopMargin,
					label: 'labelTopMargin',
				} }
				valueRight={ {
					value: labelRightMargin,
					label: 'labelRightMargin',
				} }
				valueBottom={ {
					value: labelBottomMargin,
					label: 'labelBottomMargin',
				} }
				valueLeft={ {
					value: labelLeftMargin,
					label: 'labelLeftMargin',
				} }
				valueTopTablet={ {
					value: labelTopMarginTablet,
					label: 'labelTopMarginTablet',
				} }
				valueRightTablet={ {
					value: labelRightMarginTablet,
					label: 'labelRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: labelBottomMarginTablet,
					label: 'labelBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: labelLeftMarginTablet,
					label: 'labelLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: labelTopMarginMobile,
					label: 'labelTopMarginMobile',
				} }
				valueRightMobile={ {
					value: labelRightMarginMobile,
					label: 'labelRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: labelBottomMarginMobile,
					label: 'labelBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: labelLeftMarginMobile,
					label: 'labelLeftMarginMobile',
				} }
				unit={ {
					value: labelMarginUnit,
					label: 'labelMarginUnit',
				} }
				mUnit={ {
					value: labelMarginUnitMobile,
					label: 'labelMarginUnitMobile',
				} }
				tUnit={ {
					value: labelMarginUnitTablet,
					label: 'labelMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: labelMarginLink,
					label: 'labelMarginLink',
				} }
			/>
        </UAGAdvancedPanelBody>
    );

	const separatorStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={
					separatorColor ? separatorColor : ''
				}
				data={ {
					value: separatorColor,
					label: 'separatorColor',
				} }
				setAttributes={ setAttributes }
			/>
			<TypographyControl
				label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: separatorLoadGoogleFonts,
					label: 'separatorLoadGoogleFonts',
				} }
				fontFamily={ {
					value: separatorFontFamily,
					label: 'separatorFontFamily',
				} }
				fontWeight={ {
					value: separatorFontWeight,
					label: 'separatorFontWeight',
				} }
				fontStyle={ {
					value: separatorFontStyle,
					label: 'separatorFontStyle',
				} }
				disableTransform = { true }
				disableDecoration = { true }
				fontSizeType={ {
					value: separatorFontSizeType,
					label: 'separatorFontSizeType',
				} }
				fontSize={ {
					value: separatorFontSize,
					label: 'separatorFontSize',
				} }
				fontSizeMobile={ {
					value: separatorFontSizeMobile,
					label: 'separatorFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: separatorFontSizeTablet,
					label: 'separatorFontSizeTablet',
				} }
				lineHeightType={ {
					value: separatorLineHeightType,
					label: 'separatorLineHeightType',
				} }
				lineHeight={ {
					value: separatorLineHeight,
					label: 'separatorLineHeight',
				} }
				lineHeightMobile={ {
					value: separatorLineHeightMobile,
					label: 'separatorLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: separatorLineHeightTablet,
					label: 'separatorLineHeightTablet',
				} }
			/>
			<ResponsiveSlider
				label={ __( 'Separator Right Spacing', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: separatorRightSpacing,
						label: 'separatorRightSpacing',
					},
					tablet: {
						value: separatorRightSpacingTablet,
						label: 'separatorRightSpacingTablet',
					},
					mobile: {
						value: separatorRightSpacingMobile,
						label: 'separatorRightSpacingMobile',
					},
				} }
				min={ 0 }
				max={ 300 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __( 'Separator Top Spacing', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: separatorTopSpacing,
						label: 'separatorTopSpacing',
					},
					tablet: {
						value: separatorTopSpacingTablet,
						label: 'separatorTopSpacingTablet',
					},
					mobile: {
						value: separatorTopSpacingMobile,
						label: 'separatorTopSpacingMobile',
					},
				} }
				min={ 0 }
				max={ 300 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	);

	const boxShadowSettings = (
		<UAGAdvancedPanelBody
			title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>

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
						<UAGPresets
							setAttributes = { setAttributes }
							presets = { boxShadowPresets }
							presetInputType = 'radioImage'
						/>
						<BoxShadowControl
							blockId={ block_id }
							setAttributes={ setAttributes }
							label={ __(
								'Box Shadow',
								'ultimate-addons-for-gutenberg'
							) }
							boxShadowColor={ {
								value: boxShadowColor,
								label: 'boxShadowColor',
								title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowHOffset={ {
								value: boxShadowHOffset,
								label: 'boxShadowHOffset',
								title: __(
									'Horizontal',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowVOffset={ {
								value: boxShadowVOffset,
								label: 'boxShadowVOffset',
								title: __(
									'Vertical',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowBlur={ {
								value: boxShadowBlur,
								label: 'boxShadowBlur',
								title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowSpread={ {
								value: boxShadowSpread,
								label: 'boxShadowSpread',
								title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowPosition={ {
								value: boxShadowPosition,
								label: 'boxShadowPosition',
								title: __(
									'Position',
									'ultimate-addons-for-gutenberg'
								),
							} }
						/>
					</>
				}
				hover={
					<>
						<UAGPresets
							setAttributes = { setAttributes }
							presets = { boxShadowHoverPresets }
							presetInputType = 'radioImage'
						/>
						<BoxShadowControl
							blockId={ block_id }
							setAttributes={ setAttributes }
							label={ __(
								'Box Shadow',
								'ultimate-addons-for-gutenberg'
							) }
							boxShadowColor={ {
								value: boxShadowColorHover,
								label: 'boxShadowColorHover',
								title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowHOffset={ {
								value: boxShadowHOffsetHover,
								label: 'boxShadowHOffsetHover',
								title: __(
									'Horizontal',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowVOffset={ {
								value: boxShadowVOffsetHover,
								label: 'boxShadowVOffsetHover',
								title: __(
									'Vertical',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowBlur={ {
								value: boxShadowBlurHover,
								label: 'boxShadowBlurHover',
								title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowSpread={ {
								value: boxShadowSpreadHover,
								label: 'boxShadowSpreadHover',
								title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowPosition={ {
								value: boxShadowPositionHover,
								label: 'boxShadowPositionHover',
								title: __(
									'Position',
									'ultimate-addons-for-gutenberg'
								),
							} }
						/>
					</>
				}
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const spacingStylePanel = (
        <UAGAdvancedPanelBody
			title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<SpacingControl
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: blockTopPadding,
					label: 'blockTopPadding',
				} }
				valueRight={ {
					value: blockRightPadding,
					label: 'blockRightPadding',
				} }
				valueBottom={ {
					value: blockBottomPadding,
					label: 'blockBottomPadding',
				} }
				valueLeft={ {
					value: blockLeftPadding,
					label: 'blockLeftPadding',
				} }
				valueTopTablet={ {
					value: blockTopPaddingTablet,
					label: 'blockTopPaddingTablet',
				} }
				valueRightTablet={ {
					value: blockRightPaddingTablet,
					label: 'blockRightPaddingTablet',
				} }
				valueBottomTablet={ {
					value: blockBottomPaddingTablet,
					label: 'blockBottomPaddingTablet',
				} }
				valueLeftTablet={ {
					value: blockLeftPaddingTablet,
					label: 'blockLeftPaddingTablet',
				} }
				valueTopMobile={ {
					value: blockTopPaddingMobile,
					label: 'blockTopPaddingMobile',
				} }
				valueRightMobile={ {
					value: blockRightPaddingMobile,
					label: 'blockRightPaddingMobile',
				} }
				valueBottomMobile={ {
					value: blockBottomPaddingMobile,
					label: 'blockBottomPaddingMobile',
				} }
				valueLeftMobile={ {
					value: blockLeftPaddingMobile,
					label: 'blockLeftPaddingMobile',
				} }
				unit={ {
					value: blockPaddingUnit,
					label: 'blockPaddingUnit',
				} }
				mUnit={ {
					value: blockPaddingUnitMobile,
					label: 'blockPaddingUnitMobile',
				} }
				tUnit={ {
					value: blockPaddingUnitTablet,
					label: 'blockPaddingUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: blockPaddingLink,
					label: 'blockPaddingLink',
				} }
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: blockTopMargin,
					label: 'blockTopMargin',
				} }
				valueRight={ {
					value: blockRightMargin,
					label: 'blockRightMargin',
				} }
				valueBottom={ {
					value: blockBottomMargin,
					label: 'blockBottomMargin',
				} }
				valueLeft={ {
					value: blockLeftMargin,
					label: 'blockLeftMargin',
				} }
				valueTopTablet={ {
					value: blockTopMarginTablet,
					label: 'blockTopMarginTablet',
				} }
				valueRightTablet={ {
					value: blockRightMarginTablet,
					label: 'blockRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: blockBottomMarginTablet,
					label: 'blockBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: blockLeftMarginTablet,
					label: 'blockLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: blockTopMarginMobile,
					label: 'blockTopMarginMobile',
				} }
				valueRightMobile={ {
					value: blockRightMarginMobile,
					label: 'blockRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: blockBottomMarginMobile,
					label: 'blockBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: blockLeftMarginMobile,
					label: 'blockLeftMarginMobile',
				} }
				unit={ {
					value: blockMarginUnit,
					label: 'blockMarginUnit',
				} }
				mUnit={ {
					value: blockMarginUnitMobile,
					label: 'blockMarginUnitMobile',
				} }
				tUnit={ {
					value: blockMarginUnitTablet,
					label: 'blockMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: blockMarginLink,
					label: 'blockMarginLink',
				} }
			/>
        </UAGAdvancedPanelBody>
    );

    return (
        <>
            <InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
                        { generalPanel }
                        { labelGeneralPanel }
                        { separatorGeneralPanel }
						{ expirySettingsGeneralPanel }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ boxStylePanel }
                        { digitStylePanel }
                        { showLabels && labelStylePanel }
						{ showSeparator && separatorStylePanel }
						{ boxShadowSettings }
						{ spacingStylePanel }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadDigitGoogleFonts }
			{ loadLabelGoogleFonts }
			{ loadSeparatorGoogleFonts }
        </>
    );
};