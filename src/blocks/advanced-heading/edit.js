/**
 * BLOCK: Advanced Heading
 */
import styling from './styling';
import React, { useEffect, useState } from 'react';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import { initBlockId } from '@Utils/Helpers';
//  Import CSS.
import './style.scss';

const UAGBAdvancedHeading = (props) => {
	const deviceType = useDeviceType();
	console.log('props without again one line', props);
	const {
		attributes: { block_id, UAGHideDesktop, UAGHideTab, UAGHideMob },
	} = props;
	useEffect(() => {
		responsiveConditionPreview(props);
	}, [UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType]);

	// useEffect( () => {

	// 	const { setAttributes } = props;
	// 	// Assigning block_id in the attribute.
	// 	setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	// 	setAttributes( { classMigrate: true } )

	// }, [] );

	useEffect(() => {
		initBlockId(props, { classMigrate: true });
	}, []);

	useEffect(() => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling(props);

		addBlockEditorDynamicStyles(
			'uagb-adv-heading-style-' + block_id,
			blockStyling
		);
	}, [props]);

	useEffect(() => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling(props);

		addBlockEditorDynamicStyles(
			'uagb-adv-heading-style-' + block_id,
			blockStyling
		);

		scrollBlockToView();
	}, [deviceType]);

	const previewImageData = `${uagb_blocks_info.uagb_url}/assets/images/block-previews/advanced-heading.svg`;

	return props.attributes.isPreview ? (
		<img width="100%" src={previewImageData} alt="" />
	) : (
		<>
			<Settings parentProps={props} />
			<Render parentProps={props} />
		</>
	);
};
export default UAGBAdvancedHeading;
