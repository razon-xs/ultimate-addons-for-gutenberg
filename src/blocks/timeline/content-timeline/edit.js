/**
 * BLOCK: Content Timeline.
 */

import contentTimelineStyle from './styling';
import React, { useEffect,    } from 'react';

import { dispatch, select } from '@wordpress/data';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const ContentTimelineComponent = ( props ) => {
    const deviceType = useDeviceType();
    useEffect( () => {
        const { setAttributes, clientId, attributes } = props;

        // Replacement for componentDidMount.
        //Store client id.
        setAttributes( { block_id: clientId } );
        setAttributes( { classMigrate: true } );
        setAttributes( { childMigrate: true } );

        const {
            timelinAlignment,
            timelinAlignmentTablet,
            timelinAlignmentMobile,
            stack
        } = attributes;

        if( timelinAlignment ) {
            if( 'none' === stack ) {
                if( undefined === timelinAlignmentTablet ) {
                    setAttributes( { timelinAlignmentTablet: timelinAlignment } );
                }
                if( undefined === timelinAlignmentMobile ) {
                    setAttributes( { timelinAlignmentMobile: timelinAlignment } );
                }
            } else {
                if( undefined === timelinAlignmentTablet && 'tablet' === stack ) {
                    setAttributes( { timelinAlignmentTablet: 'left' } );
                    setAttributes( { timelinAlignmentMobile: 'left' } );
                }

                if( undefined === timelinAlignmentMobile && 'mobile' === stack ) {
                    setAttributes( { timelinAlignmentMobile: 'left' } );
                    setAttributes( { timelinAlignmentTablet: timelinAlignment } );
                }
            }
        }
		

    }, [] );

    useEffect( () => {
        // Replacement for componentDidUpdate.
        const blockStyling = contentTimelineStyle( props );
        const { attributes } = props;

        addBlockEditorDynamicStyles( 'uagb-content-timeline-style-' + props.clientId.substr( 0, 8 ), blockStyling );
        if (
            null ===
            select( 'core/block-editor' ).getBlocksByClientId(
                props.clientId
            )[0]
        ) {
            return;
        }

        let device = deviceType;

        // For desktop, attribute name does not have `desktop` suffix to support backward compatibility.
        if( 'Desktop' === deviceType ) {
            device = '';
        }

        const timelinAlignment = 'undefined' !== typeof attributes['timelinAlignment' + device ] ? attributes['timelinAlignment' + device ] : attributes.timelinAlignment;

        select( 'core/block-editor' )
            .getBlocksByClientId( props.clientId )[0]
            .innerBlocks.forEach( function( block, key ) {

                let alignClass = '';
                if ( 'left' === timelinAlignment ) {
                    alignClass = 'uagb-timeline__left';
                } else if ( 'right' === timelinAlignment ) {
                    alignClass = 'uagb-timeline__right';
                } else if ( 'center' === timelinAlignment ) {
                    if ( key % 2 === 0 ) {
                        alignClass =
                            'uagb-timeline__right';
                    } else {
                        alignClass =
                            'uagb-timeline__left';
                    }
                }

                let dayAlignClass = '';
                if ( 'left' === timelinAlignment ) {
                    dayAlignClass =
                        'uagb-timeline__day-new uagb-timeline__day-left';
                } else if ( 'right' === timelinAlignment ) {
                    dayAlignClass =
                        'uagb-timeline__day-new uagb-timeline__day-right';
                } else if ( 'center' === timelinAlignment ) {
                    if ( key % 2 === 0 ) {
                        dayAlignClass =
                            'uagb-timeline__day-new uagb-timeline__day-right';
                    } else {
                        dayAlignClass =
                            'uagb-timeline__day-new uagb-timeline__day-left';
                    }
                }

                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        content_class: alignClass,
                    }
                );
                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        dayalign_class: dayAlignClass,
                    }
                );
            } );
        const getChildBlocks = select( 'core/block-editor' ).getBlocks(
            props.clientId
        );
        getChildBlocks.forEach( ( ctChild ) => {
            ctChild.attributes.headingTag = props.attributes.headingTag;
            ctChild.attributes.dateFormat = props.attributes.dateFormat;
        } );
		
    }, [props] );
    const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

    useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = contentTimelineStyle( props );

        addBlockEditorDynamicStyles( 'uagb-content-timeline-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/content-timeline.svg`;

    return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps = { props }/>
				<Render parentProps = { props }/>
			</>
		)
    );
};

export default ContentTimelineComponent;
