import React, { useLayoutEffect, useEffect, useRef } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
const { getSelectedBlock } = select( 'core/block-editor' );
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, useDispatch } from '@wordpress/data';
import { ButtonGroup, Button, Tooltip, Modal  } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import UAGSelectControl from '@Components/select-control';
import generateCSS from '@Controls/generateCSS';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import apiFetch from '@wordpress/api-fetch';

const GlobalBlockStyles = (props) => {
   // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const styling = props.styling;
    const setRefreshEditorGlobal = props.setRefreshEditorGlobal;
    const refreshEditorGlobal = props.refreshEditorGlobal;

	props = props.parentProps;

    const {
        attributes,
        setAttributes
    } = props;

    const [ isOpen, setOpen ] = useState( false );
    const [ uniqueID, setUniqueID ] = useState( '' );
    const [ saveToDatabase, setSaveToDatabase ] = useState( false );
    const [ gbsPanel, setGbsPanel ] = useState( false );
    const [currentAttributesState, setCurrentAttributesState] = useState( attributes );
    const [ attributesChanged, setAttributesChanged ] = useState( false );



	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );
	
    const {
        globalBlockStyleName,
        globalBlockStyleId
    } = attributes;

    const selectedBlockData = getSelectedBlock();
    const {
        name,
        clientId,
        innerBlocks
    } = selectedBlockData;

    const blockName = name.replace( 'uagb/', '' );

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )
    const currentBlockDefaultAttributes = allBlocksAttributes[blockName]

    useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { spectraBlockName: name } );
	}, [] );

    useEffect( () => {
        if ( currentAttributesState !== attributes ) {
            setCurrentAttributesState(attributes);
            setAttributesChanged(true);
            // console.log('iffff');
        } else {
            setAttributesChanged(false);
            // console.log('elseee');

        }
		
	}, [attributes] );

    useEffect( () => {
		// console.log(globalBlockStyleId);
		// console.log(saveToDatabase);
        if ( saveToDatabase ) {
            const formData = new window.FormData();

            formData.append( 'action', 'uag_global_block_styles' );
            formData.append( 'security', uagb_blocks_info.uagb_ajax_nonce );
            formData.append( 'attributes', JSON.stringify(attributes) );
            formData.append( 'blockName', name );


            apiFetch( {
                url: uagb_blocks_info.ajax_url,
                method: 'POST',
                body: formData,
            } ).then( () => {
                // console.log('here');
                Object.keys( currentBlockDefaultAttributes ).map( ( attribute ) => {

					if ( currentBlockDefaultAttributes[attribute]?.UAGCopyPaste ) {
                        setAttributes({
                            [attribute] : currentBlockDefaultAttributes[attribute]?.default || undefined
                        });
                        // console.log(attribute);
					}
					return attribute;
				} );
                setSaveToDatabase(false);
            } );
        }
	}, [saveToDatabase] );

    let blockNameClass = name?.split( '/' )?.pop();

    let spectraGlobalStyles = [
        {
            value: '',
            label: 'None'
        }
    ]
    const uagLocalStorage = getUAGEditorStateLocalStorage();

    if ( uagLocalStorage ) {
        const spectraGlobalStylesObject = JSON.parse(uagLocalStorage.getItem( 'spectraGlobalStyles' )) || [];
        if ( spectraGlobalStylesObject.length === 0 ) {

            spectraGlobalStyles = [
                ...spectraGlobalStyles,
                ...spectraGlobalStylesObject
            ]
        } else {
            spectraGlobalStyles = [
                ...spectraGlobalStylesObject
            ]
        }
    }

    const getBlockStyles = () => {
        

        let spectraGlobalStylesStoreObject = JSON.parse(uagLocalStorage.getItem( 'spectraGlobalStyles' )) || [];

        
        spectraGlobalStylesStoreObject.map( ( style ) => {
            console.log(style?.value);
            console.log(uniqueID);
            console.log(globalBlockStyleId);
            if ( (style?.value == uniqueID) || (style?.value === globalBlockStyleId) ) {
                console.log('inin');
                const baseSelector = `.spectra-gbs-${blockNameClass}-${style?.label}`;
                const blockStyling = styling( props, baseSelector );
                style['styles'] = blockStyling;
            }

            return style;

        } );

        uagLocalStorage.setItem(
            'spectraGlobalStyles',
            JSON.stringify(spectraGlobalStylesStoreObject)
        )
        setRefreshEditorGlobal(!refreshEditorGlobal);
        setSaveToDatabase(true);
    };
    const getRef = (ref) => {
        // console.log(ref);
        setGbsPanel(ref)
    }
console.log(spectraGlobalStyles);
console.log(globalBlockStyleId);
    spectraGlobalStyles.map((style) => {
        console.log(style);
    });
    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ false }
            getRef={getRef}
        >
            {
                ( ! globalBlockStyleName || '' === globalBlockStyleName ) && (
                    <>
                        <Button
                            className="spectra-save-block-styles-button components-base-control"
                            onClick={ () => {
                                openModal();
                                setUniqueID(new Date().getTime().toString());
                            } }
                            variant="primary"
                        >
                            { __( 'Save as a New Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                        <UAGSelectControl
                            label={ __(
                                'Link to Existing Style',
                                'ultimate-addons-for-gutenberg'
                            ) }
                            data={ {
                                value: globalBlockStyleId,
                                label: 'globalBlockStyleId',
                            } }
                            onChange = {
                                (value) => {
                                    let label = '';
                                    for (var i = 0; i < spectraGlobalStyles.length; i++) {
                                        if ( spectraGlobalStyles[i]?.value == value ) {
                                            label = spectraGlobalStyles[i]?.label;
                                            break;
                                        }
                                    }
                                    setAttributes( 
                                        { 
                                            globalBlockStyleId: value,
                                            globalBlockStyleName: label 
                                        } 
                                    );

                                }
                            }
                            layout="stack"
                            options={ spectraGlobalStyles }
                        />
                    </>
                )
            }
            { isOpen && (
                    <Modal 
                        title={ __( 'Save as a Global Block Style', 'ultimate-addons-for-gutenberg' ) } onRequestClose={ closeModal }
                        className="spectra-global-block-style-name-modal"
                    >
                    <p> { __( 'You\'ll be able to add this global style to multiple areas on your site.', 'ultimate-addons-for-gutenberg' ) }</p>
                    <div className="button-input-wrap">
                        <UAGTextControl
                            label={ __(
                                'Style Name',
                                'ultimate-addons-for-gutenberg'
                            ) }
                            value={ globalBlockStyleName }
                            onChange={ ( value ) => {
                                setAttributes( 
                                    { 
                                        globalBlockStyleName: value,
                                        globalBlockStyleId: uniqueID 
                                    } 
                                )
                            } }
                            showHeaderControls={false}
                        />
                        <button 
                            onClick={ () => {
                                spectraGlobalStyles = [
                                    ...spectraGlobalStyles,
                                    {
                                        value: uniqueID,
                                        label: globalBlockStyleName
                                    }
                                ]
                                uagLocalStorage.setItem(
                                    'spectraGlobalStyles',
                                    JSON.stringify(spectraGlobalStyles)
                                )
                                closeModal();
                                getBlockStyles();

                            } }
                        >
                            <p> { __( 'Save', 'ultimate-addons-for-gutenberg' ) }</p>
                        </button>
                    </div>
				</Modal>
			) }
            {
                (globalBlockStyleName && '' !== globalBlockStyleName ) && (
                    <>
                        <UAGSelectControl
							label={ __(
								'Linked Style',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: globalBlockStyleId,
								label: 'globalBlockStyleId',
							} }
                            onChange = {
                                (value) => {
                                    let label = '';
                                    for (var i = 0; i < spectraGlobalStyles.length; i++) {
                                        if ( spectraGlobalStyles[i]?.value == value ) {
                                            label = spectraGlobalStyles[i]?.label;
                                            break;
                                        }
                                    }
                                    setAttributes( 
                                        { 
                                            globalBlockStyleId: value,
                                            globalBlockStyleName: label 
                                        } 
                                    );
                                }
                            }
							options={ spectraGlobalStyles }
                            layout="stack"
						/>
                        {
                            attributesChanged &&
                            <Button
                                className="spectra-save-block-styles-button components-base-control"
                                onClick={ () => {
                                    getBlockStyles();
                                } }
                                variant="primary"
                            >
                                { __( 'Update Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                            </Button>
                        }
                        <Button
                                className="spectra-save-block-styles-button components-base-control"
                                onClick={ () => {
                                    setAttributes( 
                                        { 
                                            globalBlockStyleId: '',
                                            globalBlockStyleName: '' 
                                        } 
                                    );
                                } }
                                variant="primary"
                        >
                            { __( 'Unlink Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                    </>
                )
            }
        </UAGAdvancedPanelBody>
    );
};

export default GlobalBlockStyles;