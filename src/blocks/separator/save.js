/**
 * BLOCK: Separator - Save Block
 */

import renderSVG from '@Controls/renderIcon';
import classnames from 'classnames';
import renderCustomSVG from './separator-svg';

export default function save( props ) {
	const {
		block_id,
		elementType,
		separatorText,
		separatorTextTag,
		separatorIcon,
		separatorStyle,
	} = props.attributes;
	const CustomTag = `${ separatorTextTag }`;
	const renderSvg = renderCustomSVG( separatorStyle );
	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-separator',
				`${
					elementType !== 'none'
						? 'wp-block-uagb-separator--' + elementType
						: ''
				}`
			) }
		>
			<div className="wp-block-uagb-separator__inner">
				{ renderSvg }
				{ elementType !== 'none' && (
					<div className="wp-block-uagb-separator-element">
						{ elementType === 'icon' ? (
							renderSVG( separatorIcon )
						) : (
							<CustomTag> { separatorText } </CustomTag>
						) }
					</div>
				) }
				{ renderSvg }
			</div>
		</div>
	);
}
