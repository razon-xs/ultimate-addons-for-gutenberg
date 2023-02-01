import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';

import CountdownBox from './components/CountdownBox';

const Render = ( props ) => {

    // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const countdownRef = props.countdownRef;

	props = props.parentProps;

    const deviceType = useDeviceType();
	const { attributes } = props;

    const {
        block_id,
        showLabels,
        labelDays,
        labelHours,
        labelMinutes,
        labelSeconds,
        timerEndAction,
    } = attributes;

    const innerblocks_content = wp.hooks.applyFilters( 'spectra.countdown.render-innerblocks', '', props.name );

    return(
        <>
            <div
                className={ classnames(
                    props.className,
                    `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
                    `uagb-block-${ block_id }`,
                    'wp-block-uagb-countdown',
                ) }
                ref = { countdownRef }
            >
                <CountdownBox unitType='days' showLabels={ showLabels } label={ labelDays } />
                <CountdownBox unitType='hours' showLabels={ showLabels } label={ labelHours } />
                <CountdownBox unitType='minutes' showLabels={ showLabels } label={ labelMinutes } />
                <CountdownBox unitType='seconds' showLabels={ showLabels } label={ labelSeconds } />
            </div>
            { timerEndAction === 'content' &&
                <div
                    className={ classnames(
                        `uagb-block-countdown-innerblocks-${ block_id }`,
                        'wp-block-uagb-countdown-innerblocks',
                    ) }
                >
                    {innerblocks_content}
                </div>
            }
        </>
    );
};

export default Render;
