import classnames from 'classnames';
import { useLayoutEffect, memo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';
import { useBlockProps } from '@wordpress/block-editor';

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
	const {
		attributes: {
			block_id,
			showLabels,
			labelDays,
			labelHours,
			labelMinutes,
			labelSeconds,
		}
	} = props;

	const blockProps = useBlockProps();

	return(
		<div
			{ ...blockProps }
		>
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
		</div>
	);
};

export default memo( Render );
