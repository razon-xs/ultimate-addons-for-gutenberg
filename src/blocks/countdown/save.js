import { useBlockProps } from '@wordpress/block-editor';

import CountdownBox from './components/CountdownBox';

export default function Save( props ) {

	const {
		attributes: {
			block_id,
			showLabels,
			labelDays,
			labelHours,
			labelMinutes,
			labelSeconds,	
			timerEndAction,		
		},
	} = props;

	const blockProps = useBlockProps.save( {
		className: `uagb-block-${ block_id } wp-block-uagb-countdown`
	} );

    const innerblocks_content = wp.hooks.applyFilters( 'spectra.countdown.save-innerblocks', '', props.name );

	return(
		<>
			<div
				{ ...blockProps }
			>
				<CountdownBox unitType='days' showLabels={ showLabels } label={ labelDays } />
				<CountdownBox unitType='hours' showLabels={ showLabels } label={ labelHours } />
				<CountdownBox unitType='minutes' showLabels={ showLabels } label={ labelMinutes } />
				<CountdownBox unitType='seconds' showLabels={ showLabels } label={ labelSeconds } />
			</div>
			{  timerEndAction === 'content' &&
                <div
                    className={ `uagb-block-countdown-innerblocks-${ block_id } wp-block-uagb-countdown-innerblocks` }
                >
                    {innerblocks_content}
                </div>
            }
		</>
	);
};
