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
    } = attributes;

    return(
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
    );
};
