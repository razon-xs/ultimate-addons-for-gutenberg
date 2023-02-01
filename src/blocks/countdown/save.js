import React from 'react';
import classnames from 'classnames';

import CountdownBox from './components/CountdownBox';

export default function Save( props ) {

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

    const innerblocks_content = wp.hooks.applyFilters( 'spectra.countdown.save-innerblocks', '', props.name );

    return(
        <>
            <div
                className={ classnames(
                    props.className,
                    `uagb-block-${ block_id }`,
                    'wp-block-uagb-countdown',
                ) }
            >
                <CountdownBox unitType='days' showLabels={ showLabels } label={ labelDays } />
                <CountdownBox unitType='hours' showLabels={ showLabels } label={ labelHours } />
                <CountdownBox unitType='minutes' showLabels={ showLabels } label={ labelMinutes } />
                <CountdownBox unitType='seconds' showLabels={ showLabels } label={ labelSeconds } />
            </div>
            {  timerEndAction === 'content' &&
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
