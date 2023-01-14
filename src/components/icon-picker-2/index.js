import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import { Button, Modal } from '@wordpress/components';
import { useLayoutEffect, useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';

const UAGIconPicker = ( props ) => {
	// console.log( 'props', props );
	// console.log( 'icons ', wp.UAGBSvgIcons );
	// console.log( 'icons 2 ', uagb_blocks_info );

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

	return (
		<div className="uag-custom-icon-picker">
			<div className="uag-icon-picker-placeholder-wrap">
				<div>
					<div className="uag-icon-picker-remove-icon">X</div>
					<div className="uag-icon-picker-selected-icon">
						<div>@</div>
					</div>
					<div className="uag-icon-picker-actions">
						<p>Change Icon</p>
					</div>
				</div>
			</div>
			<Button variant="secondary" onClick={ openModal }>
				Open Modal
			</Button>
			{ isOpen && (
				<Modal
					title="Select Icon"
					className="uagb-icon-picker-modal-wrapper"
					onRequestClose={ closeModal }
				>
					<div className="uagb-icon-picker-modal-container">
						<div className="uagb-icon-picker-search-bar">
							<input
								type="text"
								placeholder={ __(
									'Search Icon',
									'ultimate-addons-for-gutenberg'
								) }
							/>
						</div>
						<div className="uagb-icon-picker-icons">
							<div>icon container</div>
						</div>
					</div>
				</Modal>
			) }
		</div>
	);
};
export default UAGIconPicker;
