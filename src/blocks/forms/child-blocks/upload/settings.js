import { __ } from '@wordpress/i18n';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { ToggleControl, FormTokenField } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { uploadRequired, formats } = attributes;

	const uploadInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ uploadRequired }
					onChange={ () =>
						setAttributes( { uploadRequired: ! uploadRequired } )
					}
				/>
				<h2>Allowed Formats</h2>
				<FormTokenField
					value={ formats }
					onChange={ ( value ) =>
						setAttributes( { formats: value } )
					}
					placeholder={ __(
						'Type allowed formats',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>
					{ uploadInspectorControls() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default memo( Settings );
