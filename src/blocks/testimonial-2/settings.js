import { __ } from '@wordpress/i18n';
import React from 'react';

import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import UAGMediaPicker from '@Components/image';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import UAGSelectControl from '@Components/select-control';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import {
	Icon,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	const blockName = props.name.replace( 'uagb/', '' );
	const { setAttributes, attributes, deviceType } = props;
	const getBlockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="insert"
						label={ __( 'Add Slide' ) }
						onClick={ () => {
							insertBlock(
								createBlock( 'uagb/slider-child' ),
								block.innerBlocks.length,
								block.clientId
							);

							setAttributes( {
								slideItem: attributes.slideItem + 1,
							} );
							swiperInstance.activeIndex =
								attributes.slideItem + 1;
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	};
	return (
		<>
			{ getBlockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						General
						{ /* <UAGAdvancedPanelBody
				title={ __( 'General' ) }
				initialOpen={ true }
			>
				General
			</UAGAdvancedPanelBody> */ }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>style</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }>
						advance
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
