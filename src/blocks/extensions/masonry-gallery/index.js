import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
const { enableMasonryGallery } = uagb_blocks_info;
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateCSS from '@Controls/generateCSS';
import styles from './../editor.lazy.scss';
import { useLayoutEffect } from '@wordpress/element';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { select } from '@wordpress/data';

const MasonryGallery = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {
		const { attributes, setAttributes, isSelected } = props;
		const blockName = props.name;
		const blockType = [ 'core/gallery' ];

		useLayoutEffect( () => {
			styles.use();
			return () => {
				styles.unuse();
			};
		}, [] );

		/**
		 * Generates CSS for the given values for editor.
		 */
		const applyCSS = () => {
			const colCount = attributes.columns ? attributes.columns : 3;
			const selectors = {
				/* Start Backword */
				'.wp-block-gallery ul.blocks-gallery-grid': {
					'column-gap': generateCSSUnit(
						attributes.masonryGutter,
						'px'
					),
					'column-count': colCount,
				},
				'.wp-block-gallery ul.blocks-gallery-grid li.blocks-gallery-item': {
					'margin-bottom': generateCSSUnit(
						attributes.masonryGutter,
						'px'
					),
				},
				/* End Backword */
				'.wp-block-gallery.blocks-gallery-grid.has-nested-images.uag-masonry.blocks-gallery-grid': {
					'column-gap': generateCSSUnit(
						attributes.masonryGutter,
						'px'
					),
					'column-count': colCount,
				},
				'.wp-block-gallery.blocks-gallery-grid.has-nested-images.uag-masonry.blocks-gallery-grid figure.wp-block-image:not(#individual-image)': {
					'margin-bottom': generateCSSUnit(
						attributes.masonryGutter,
						'px'
					),
				},
			};
			const styling = generateCSS(
				selectors,
				'#block-' + props.clientId
			);
			if ( attributes.masonry ) {
				const element = document.getElementById(
					'uag-gallery-masonry-style-' + props.clientId.substr( 0, 8 )
				);
				if ( null !== element && undefined !== element ) {
					element.innerHTML = styling;
				} else {
					const style = document.createElement( 'style' );
					style.setAttribute(
						'id',
						'uag-gallery-masonry-style-' +
							props.clientId.substr( 0, 8 )
					);
					style.innerHTML = styling;
					document.head.appendChild( style );
				}
			}
		};

		/**
		 * Update the Masonry flag.
		 *
		 * @param {boolean} value
		 */
		const update = ( value ) => {
			if ( value ) {
				setAttributes( { className: 'uag-masonry' } );
			} else {
				let classNameList = attributes.className;
				classNameList = classNameList.replace( 'uag-masonry', '' );
				setAttributes( { className: classNameList } );
			}
			setAttributes( { masonry: ! attributes.masonry } );
			setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		};

		/**
		 * Gutter value for the Masonry layout
		 *
		 * @param {number} value
		 */
		const applyGutter = ( value ) => {
			if ( undefined === value ) {
				return;
			}
			setAttributes( { masonryGutter: value } );
			applyCSS();
		};

		applyCSS();

		const imagesID = ( undefined !== attributes.ids ) ? attributes.ids.length : select( 'core/block-editor' ).getBlocks( props.clientId ).length;

		return (
			<>
				<BlockEdit { ...props } />
				{ isSelected && blockType.includes( blockName ) && ( imagesID.length !== 0 ) && (
					<InspectorControls>
						<UAGAdvancedPanelBody
							title={ __(
								'Masonry Gallery',
								'ultimate-addons-for-gutenberg'
							) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Enable Masonry Layout' ) }
								checked={ attributes.masonry }
								onChange={ ( value ) => update( value ) }
							/>
							{ attributes.masonry && (
								<RangeControl
									label={ __(
										'Gap',
										'ultimate-addons-for-gutenberg'
									) }
									value={ attributes.masonryGutter }
									onChange={ ( value ) =>
										applyGutter( value )
									}
									min={ 0 }
									max={ 100 }
									allowReset
								/>
							) }
						</UAGAdvancedPanelBody>
					</InspectorControls>
				) }
			</>
		);
	};
}, 'MasonryGallery' );

function ApplyUniqueClass( extraProps, blockType, attributes ) {

	if ( 'core/gallery' === blockType.name && attributes.masonry ) {
		extraProps.className =
			extraProps.className + ' uagb-block-' + attributes.block_id;
	}

	return extraProps;
}

if ( 'enabled' === enableMasonryGallery || true === enableMasonryGallery ) {
	addFilter(
		'editor.BlockEdit',
		'uagb/masonry-gallery',
		MasonryGallery,
		999
	);

	addFilter(
		'blocks.getSaveContent.extraProps',
		'uagb/apply-extra-class',
		ApplyUniqueClass,
	);
}
