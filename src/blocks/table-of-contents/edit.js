/**
 * BLOCK: Table of Contents
 */

import styling from './styling';
import React, {   useEffect,  } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import Settings from './settings';
import Render from './render';

import { useSelect } from '@wordpress/data';

const UAGBTableOfContentsEdit = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		const scrollElement = document.querySelector( '.uagb-toc__scroll-top' );

		// Pushing Scroll To Top div
		const scrollToTopSvg =
			'<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve"><path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"/></svg>';

		if ( scrollElement === null ) {

			const scrollToTopDiv = document.createElement( 'div' );
			scrollToTopDiv.classList.add( 'uagb-toc__scroll-top' );
			scrollToTopDiv.innerHTML = scrollToTopSvg;
			document.body.appendChild( scrollToTopDiv );
		}

		// Pushing Style tag for this block css.
		if ( props.attributes.heading && '' !== props.attributes.heading ) {
			props.setAttributes( { headingTitle: props.attributes.heading } );
		}

		const {borderStyle,borderWidth,borderRadius,borderColor,borderHoverColor} = props.attributes;
		// Backward Border Migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'overall', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			props.setAttributes,
			props.attributes
			);
		}
		
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-toc-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-toc-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();

	}, [ deviceType ] );
	const headers = [];
	useSelect(
		( select ) => { // eslint-disable-line  no-unused-vars
			const parseTocSlug = ( slug ) => {
				// If not have the element then return false!
				if ( ! slug ) {
					return slug;
				}

				const parsedSlug = slug
					.toString()
					.toLowerCase()
					.replace( /\…+/g, '' ) // Remove multiple …
					.replace( /&(amp;)/g, '' ) // Remove &
					.replace( /&(mdash;)/g, '' ) // Remove long dash
					.replace( /\u2013|\u2014/g, '' ) // Remove long dash
					.replace( /[&]nbsp[;]/gi, '-' ) // Replace inseccable spaces
					.replace( /\s+/g, '-' ) // Replace spaces with -
					.replace( /[&\/\\#,^!+()$~%.\[\]'":*?<>{}@‘’”“|]/g, '' ) // Remove special chars
					.replace( /\-\-+/g, '-' ) // Replace multiple - with single -
					.replace( /^-+/, '' ) // Trim - from start of text
					.replace( /-+$/, '' ); // Trim - from end of text

				return decodeURI( encodeURIComponent( parsedSlug ) );
			};

			let level = 0;

			let headerArray = [];

			const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
			let locateRootContainerInsideIframe;
			if( iframeEl ){
				locateRootContainerInsideIframe = iframeEl.contentDocument.getElementsByClassName( 'is-root-container' )
				headerArray = locateRootContainerInsideIframe[0]?.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );
			} else {
				headerArray = document.body.getElementsByClassName( 'is-root-container' )[0]?.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );
			}
			const excludeBlock = document.querySelectorAll( '.uagb-toc-hide-heading' );
			if ( excludeBlock ) {
				excludeBlock.forEach( function ( heading ) {
					const innerHeading = heading.querySelectorAll(  'h1, h2, h3, h4, h5, h6' );
					if ( innerHeading ) {
						innerHeading.forEach( function( head ){
							head.classList.add( 'uagb-toc-hide-heading' );
						} )
					}
				} )
			}


			if ( headerArray !== 'undefined' ) {
				headerArray.forEach( // eslint-disable-next-line
					function ( index, value ) {
						const header = index;
						let excludeHeading;
						if ( index.className.includes( 'uagb-toc-hide-heading' ) ) {
							excludeHeading = true;
						} else {
							excludeHeading = false;
						}

						const headerText = parseTocSlug( header.textContent );
						const openLevel = header.nodeName.replace( /^H+/, '' );
						const titleText = header.textContent;

						level = parseInt( openLevel );
						if ( ! excludeHeading ) {
							headers.push( {
								tag: level,
								text: titleText,
								link: headerText,
								content: header.textContent,
							} );
						}
					}
				);
			}

			if ( headers !== undefined ) {
				headers.forEach( function ( heading, index ) {
					heading.level = 0;

					for ( let i = index - 1; i >= 0; i-- ) {
						const currentOrderedItem = headers[ i ];

						if ( currentOrderedItem.tag <= heading.tag ) {
							heading.level = currentOrderedItem.level;

							if ( currentOrderedItem.tag < heading.tag ) {
								heading.level++;
							}
							break;
						}
					}
				} );
			}

			return {
				headers,
			};
		},
	);

	const { scrollToTop } = props.attributes;
	/* eslint-disable no-undef */
	scrollElement = document.querySelector( '.uagb-toc__scroll-top' );
	if ( null !== scrollElement ) {

		if ( scrollToTop  ) {
			scrollElement.classList.add( 'uagb-toc__show-scroll' );
		} else {
			scrollElement.classList.remove( 'uagb-toc__show-scroll' );
		}
	}
	/* eslint-enable no-undef */

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/table-of-content.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } headers={ headers } />
			</>
		)
	);
};

export default UAGBTableOfContentsEdit;
