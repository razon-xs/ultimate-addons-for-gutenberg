/**
 * BLOCK: How-To Schema
 */

import SchemaNotices from './schema-notices';
import styling from './styling';
import './style.scss';
import { useSelect } from '@wordpress/data';

import { useState, useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';

import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const HowToComponent = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		setAttributes,
		attributes: {
			currencyType,
			showEstcost,
			showTotaltime,
			tools,
			materials,
			timeNeeded,
			estCost,
			mainimage,
			headingTitle,
			headingDesc,
			time,
			cost,
			timeInMins,
			timeInHours,
			timeInDays,
			timeInMonths,
			timeInYears,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
	} = props;
	
	const [ prevState, setPrevState ] = useState( '' );

	const {
		schemaJsonData
	} = useSelect(
		( select ) => {
			let urlChk = '';

			if (
				'undefined' !== attributes.mainimage &&
				null !== attributes.mainimage &&
				'' !== attributes.mainimage
			) {
				urlChk = attributes.mainimage.url;
			}
			let toolsData = {};
			let materialsData = {};
			let stepsData = {};
			const jsonData = {
				'@context': 'https://schema.org',
				'@type': 'HowTo',
				'name': attributes.headingTitle,
				'description': attributes.headingDesc,
				'image': {
					'@type': 'ImageObject',
					'url': urlChk,
					'height': '406',
					'width': '305',
				},
				'totalTime': '',
				'estimatedCost': [],
				'tool': [],
				'supply': [],
				'step': [],
			};

			const y = attributes.timeInYears
				? attributes.timeInYears
				: 0;
			const m = attributes.timeInMonths
				? attributes.timeInMonths
				: 0;
			const d = attributes.timeInDays
				? attributes.timeInDays
				: 0;
			const h = attributes.timeInHours
				? attributes.timeInHours
				: 0;

			const minutes = attributes.timeInMins
				? attributes.timeInMins
				: attributes.time;

			if ( attributes.showTotaltime ) {
				jsonData.totalTime =
					'P' + y + 'Y' + m + 'M' + d + 'DT' + h + 'H' + minutes + 'M';
			}

			if ( attributes.showEstcost ) {
				jsonData.estimatedCost = {
					'@type': 'MonetaryAmount',
					'currency': attributes.currencyType,
					'value': attributes.cost,
				};
			}

			if ( attributes.showTools ) {
				attributes.tools.forEach( ( attrTools, key ) => {
					toolsData = {
						'@type': 'HowToTool',
						'name': attrTools.add_required_tools,
					};
					jsonData.tool[ key ] = toolsData;
				} );
			}

			if ( attributes.showMaterials ) {
				attributes.materials.forEach( ( attrMaterials, key ) => {
					materialsData = {
						'@type': 'HowToSupply',
						'name': attrMaterials.add_required_materials,
					};
					jsonData.supply[ key ] = materialsData;
				} );
			}

			const getChildBlocks = select( 'core/block-editor' ).getBlocks(
				props.clientId
			);

			getChildBlocks.forEach( ( steps, key ) => {
				stepsData = {
						'@type': 'HowToStep',
						'url': steps.attributes?.ctaLink || steps.attributes?.url,
						'name': steps.attributes?.infoBoxTitle || steps.attributes?.name,
						'text': steps.attributes?.headingDesc || steps.attributes?.description,
						'image': steps.attributes?.iconImage?.url || steps.attributes?.image?.url
				}
				jsonData.step[key] = stepsData;
			} );

			return {
				schemaJsonData: jsonData,
			};
		},
	);

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( {
			schema: JSON.stringify( schemaJsonData ),
		} );


		setPrevState( schemaJsonData );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if (
			JSON.stringify( schemaJsonData ) !==
			JSON.stringify( prevState )
		) {
			setAttributes( {
				schema: JSON.stringify( schemaJsonData ),
			} );

			setPrevState( schemaJsonData );
		}
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-how-to-schema-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ attributes, deviceType ] );


	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	
	const minsValue = timeInMins ? timeInMins : time;

	return (
		<>
			<SchemaNotices
				headingTitle={ headingTitle }
				headingDesc={ headingDesc }
				mainimage={ mainimage }
				showTotaltime={ showTotaltime }
				timeNeeded={ timeNeeded }
				minsValue={ minsValue }
				timeInHours={ timeInHours }
				timeInDays={ timeInDays }
				timeInMonths={ timeInMonths }
				timeInYears={ timeInYears }
				showEstcost={ showEstcost }
				estCost={ estCost }
				cost={ cost }
				currencyType={ currencyType }
				tools={ tools }
				materials={ materials }
				clientId={ props.clientId }
			/>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default HowToComponent;
