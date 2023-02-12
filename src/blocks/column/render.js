/**
 * BLOCK: Column - Editor Render.
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import { useLayoutEffect,memo } from '@wordpress/element';

import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const deviceType = useDeviceType();

	const {
		attributes: { align, backgroundType, alignMobile, alignTablet },
		isSelected,
		className,
	} = props.parentProps;

	const active = isSelected ? 'active' : 'not-active';

	const alignClass = 'center' === align ? '' : `uagb-column__align-${ align }`;
	const alignClassMobile =
		'' === alignMobile ? '' : `uagb-column__align-mobile-${ alignMobile }`;
	const alignClassTablet =
		'' === alignTablet ? '' : `uagb-column__align-tablet-${ alignTablet }`;

	return (
		<div
			className={ classnames(
				className,
				'uagb-column__wrap',
				`uagb-column__background-${ backgroundType }`,
				`uagb-column__edit-${ active }`,
				alignClass,
				alignClassMobile,
				alignClassTablet,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.parentProps.clientId.substr( 0, 8 ) }`
			) }
		>
			<div className="uagb-column__overlay"></div>
			<InnerBlocks templateLock={ false } />
		</div>
	);
};

export default memo( Render );
