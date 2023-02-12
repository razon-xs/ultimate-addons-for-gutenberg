import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	const { state, togglePreview, inspectorControls, categoriesList, taxonomyList } = props;

	props = props.parentProps;

	const { attributes } = props;

	const {
		titleFontFamily,
		titleFontWeight,
		titleLoadGoogleFonts,
		metaFontFamily,
		metaFontWeight,
		metaLoadGoogleFonts,
		excerptFontFamily,
		excerptFontWeight,
		excerptLoadGoogleFonts,
		ctaFontFamily,
		ctaFontWeight,
		ctaLoadGoogleFonts,
	} = attributes;

	let loadTitleGoogleFonts;
	let loadMetaGoogleFonts;
	let loadExcerptGoogleFonts;
	let loadCtaGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ titleconfig }></WebfontLoader>
		);
	}

	if ( metaLoadGoogleFonts === true ) {
		const metaconfig = {
			google: {
				families: [
					metaFontFamily +
						( metaFontWeight ? ':' + metaFontWeight : '' ),
				],
			},
		};

		loadMetaGoogleFonts = (
			<WebfontLoader config={ metaconfig }></WebfontLoader>
		);
	}

	if ( excerptLoadGoogleFonts === true ) {
		const excerptconfig = {
			google: {
				families: [
					excerptFontFamily +
						( excerptFontWeight ? ':' + excerptFontWeight : '' ),
				],
			},
		};

		loadExcerptGoogleFonts = (
			<WebfontLoader config={ excerptconfig }></WebfontLoader>
		);
	}

	if ( ctaLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [
					ctaFontFamily +
						( ctaFontWeight ? ':' + ctaFontWeight : '' ),
				],
			},
		};

		loadCtaGoogleFonts = (
			<WebfontLoader config={ ctaconfig }></WebfontLoader>
		);
	}

	const getBlockControls = () => {
		const { isEditing } = state;

		return (
			<ToolbarGroup
				controls={ [
					{
						icon: 'edit',
						title: __( 'Edit' ),
						onClick: () => togglePreview(),
						isActive: isEditing,
					},
				] }
			/>
		);
	};

	const taxonomyListOptions = [];

	const categoryListOptions = [
		{ value: '', label: __( 'All', 'ultimate-addons-for-gutenberg' ) },
	];

	if ( '' !== taxonomyList ) {
		Object.keys( taxonomyList ).map( ( item ) => {
			return taxonomyListOptions.push( {
				value: taxonomyList[ item ].name,
				label: decodeEntities( taxonomyList[ item ].label ),
			} );
		} );
	}

	if ( '' !== categoriesList ) {
		Object.keys( categoriesList ).map( ( item ) => {
			return categoryListOptions.push( {
				value: categoriesList[ item ].id,
				label: decodeEntities( categoriesList[ item ].name ),
			} );
		} );
	}

	return (
		<>
			{ inspectorControls }
			<BlockControls>
				{ getBlockControls() }
			</BlockControls>
			{ loadTitleGoogleFonts }
			{ loadMetaGoogleFonts }
			{ loadExcerptGoogleFonts }
			{ loadCtaGoogleFonts }
		</>
	);
};

export default memo( Settings );
