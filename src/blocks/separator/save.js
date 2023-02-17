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
		separatorWeight
	} = props.attributes;
	const CustomTag = `${ separatorTextTag }`;
	const weight=`${separatorWeight}`;
	const customSVG = renderCustomSVG( separatorStyle, weight );
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
			<div className="wp-block-uagb-separator__inner"
			 style={{
				'--my-background-image': `${customSVG}`,
			  }}>
				{ elementType !== 'none' && (
					<div className="wp-block-uagb-separator-element">
						{ elementType === 'icon' ? (
							renderSVG( separatorIcon )
						) : (
							<CustomTag> { separatorText } </CustomTag>
						) }
					</div>
				) }
			</div>
		</div>
	);
}
