import React, { useLayoutEffect, useEffect } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
const { getSelectedBlock } = select( 'core/block-editor' );
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, dispatch, useSelect } from '@wordpress/data';
import { Button, Modal  } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import UAGSelectControl from '@Components/select-control';
import apiFetch from '@wordpress/api-fetch';
import { store as spectraStore } from '@Store';

const GlobalBlockStyles = ( props ) => {
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

    const isOpen = useSelect( ( spectraStoreSelect ) => {
        return spectraStoreSelect( 'spectra' ).globalBlockStylesPopupState();
    } );
    
    const [ uniqueID, setUniqueID ] = useState( false );
    const [ saveToDatabase, setSaveToDatabase ] = useState( false );
    const [currentAttributesState, setCurrentAttributesState] = useState( attributes );
    const [ attributesChanged, setAttributesChanged ] = useState( false );



	const openModal = () => dispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'open' );
	const closeModal = () => dispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'close' );
	
    const {
        globalBlockStyleName,
        globalBlockStyleId
    } = attributes;

    const selectedBlockData = getSelectedBlock();
    const {
        name,
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
            setCurrentAttributesState( attributes );
            setAttributesChanged( true );
            
        } else {
            setAttributesChanged( false );
            

        }
		
	}, [attributes] );

    useEffect( () => {
        if ( saveToDatabase ) {
            saveStylesToDatabase();
        }
	}, [saveToDatabase] );

    const saveStylesToDatabase = () => {

        const spectraGlobalStylesStoreObject = JSON.parse( uagLocalStorage.getItem( 'spectraGlobalStyles' ) ) || [];

        let styleAttrs = {};

        spectraGlobalStylesStoreObject.map( ( style ) => {
            if ( ( style?.value === uniqueID ) || ( style?.value === globalBlockStyleId ) ) {
                styleAttrs = style?.props?.attributes;
            }
            return style;
        } );
        const formData = new window.FormData();

        formData.append( 'action', 'uag_global_block_styles' );
        formData.append( 'security', uagb_blocks_info.uagb_ajax_nonce );
        formData.append( 'attributes', JSON.stringify( styleAttrs ) );     
        formData.append( 'blockName', name );
        formData.append( 'postId', select( 'core/editor' ).getCurrentPostId() );
        

        apiFetch( {
            url: uagb_blocks_info.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( () => {
            
            Object.keys( currentBlockDefaultAttributes ).map( ( attribute ) => {

                if ( currentBlockDefaultAttributes[attribute]?.UAGCopyPaste ) {
                    setAttributes( {
                        [attribute] : currentBlockDefaultAttributes[attribute]?.default || undefined
                    } );
                    
                }
                return attribute;
            } );
            setSaveToDatabase( false );
        } );
    };

    const blockNameClass = name?.split( '/' )?.pop();

    let spectraGlobalStyles = [
        {
            value: '',
            label: 'None'
        }
    ]
    const uagLocalStorage = getUAGEditorStateLocalStorage();

    if ( uagLocalStorage ) {
        const spectraGlobalStylesObject = JSON.parse( uagLocalStorage.getItem( 'spectraGlobalStyles' ) ) || [];
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
        

        const spectraGlobalStylesStoreObject = JSON.parse( uagLocalStorage.getItem( 'spectraGlobalStyles' ) ) || [];

        updateGoogleFontData( attributes );

        
        spectraGlobalStylesStoreObject.map( ( style ) => {
            if ( ( style?.value === uniqueID ) || ( style?.value === globalBlockStyleId ) ) {
                
                const baseSelector = `.spectra-gbs-${blockNameClass}-${style?.label}`;
                const asArray = Object.entries( props.attributes );
                const filtered = asArray.filter( ( [key, value] ) => {
                    return currentBlockDefaultAttributes[key]?.default !== value;
                } );

                const justStrings = Object.fromEntries( filtered );
                const newProps = {...props};
                if ( style?.props ) {
                    newProps.attributes = {
                        ...style?.props.attributes,
                        ...justStrings
                    }
                }
                const blockStyling = styling( newProps, baseSelector );
                style.styles = blockStyling;
                style.props = newProps;
            }
            return style

        } );

        uagLocalStorage.setItem(
            'spectraGlobalStyles',
            JSON.stringify( spectraGlobalStylesStoreObject )
        )
        setRefreshEditorGlobal( !refreshEditorGlobal );
        setSaveToDatabase( true );
    };
    const updateGoogleFontData = ( attrs ) => {
        const spectraGlobalStylesFontFamilies = JSON.parse( uagLocalStorage.getItem( 'spectraGlobalStylesFontFamilies' ) ) || [];

        Object.keys( attrs ).map( ( attribute ) => {
            
            if ( attribute.includes( 'Family' ) && '' !== attrs[attribute] ) {
                spectraGlobalStylesFontFamilies.push( attrs[attribute] );
            }
            return attribute;
        } );
        const output = [];
        for( const item of spectraGlobalStylesFontFamilies ){
    
            if( !output.includes( item ) )
              output.push( item )
        }
        uagLocalStorage.setItem(
            'spectraGlobalStylesFontFamilies',
            JSON.stringify( output )
        )
    };

    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ true }
        >
            {
                ( ! globalBlockStyleName || '' === globalBlockStyleName ) && (
                    <>
                        <Button
                            className="spectra-save-block-styles-button components-base-control"
                            onClick={ () => {
                                openModal();
                                setUniqueID( new Date().getTime().toString() );
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
                                ( value ) => {
                                    let label = '';
                                    for ( let i = 0; i < spectraGlobalStyles.length; i++ ) {
                                        if ( spectraGlobalStyles[i]?.value === value ) {
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
                                    setSaveToDatabase( true );
                                }
                            }
                            layout="stack"
                            options={ spectraGlobalStyles }
                        />
                    </>
                )
            }
            { 'open' === isOpen && (
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
                                        label: globalBlockStyleName,
                                        props
                                    }
                                ]
                                uagLocalStorage.setItem(
                                    'spectraGlobalStyles',
                                    JSON.stringify( spectraGlobalStyles )
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
                ( globalBlockStyleName && '' !== globalBlockStyleName ) && (
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
                                ( value ) => {
                                    let label = '';
                                    for ( let i = 0; i < spectraGlobalStyles.length; i++ ) {
                                        if ( spectraGlobalStyles[i]?.value === value ) {
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
                                    setSaveToDatabase( true );
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
                                    setAttributesChanged( false );
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