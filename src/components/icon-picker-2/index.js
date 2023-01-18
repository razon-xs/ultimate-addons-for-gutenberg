import { useLayoutEffect, useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import ModalContainer from './modal-container';

const UAGIconPicker = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { label, value, onChange } = props;
	// For modal.
	const [ isOpen, setOpen ] = useState( false );

	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

	const isIconAvailable = value && '' !== value;

	// Modal placeholder.
	const modalPlaceHolder = (
		<div className={ `uag-ip-placeholder-wrap` }>
			{ /* If icon available then show remove button. */ }
			{ isIconAvailable && (
				<div
					className="uag-ip-remove-icon"
					onClick={ () => {
						onChange( '' );
					} }
				>
					{ renderSVG( 'xmark' ) }
				</div>
			) }

			<div className="uag-ip-selected-icon" onClick={ openModal }>
				<div className="uag-ip-selected-icon-overlay">
					{ ! isIconAvailable && renderSVG( 'plus' ) }
				</div>
				{ isIconAvailable && (
					<div className="uag-ip-selected-icon-value">
						{ renderSVG( value ) }
					</div>
				) }
			</div>
			<div className="uag-ip-actions">
				<span onClick={ openModal }>
					{ __( 'Change Icon', 'ultimate-addons-for-gutenberg' ) }
				</span>
			</div>
		</div>
	);
	return (
		<div className="uag-custom-ip">
			<span className="uag-control-label">
				{ label || __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
			</span>
			{ modalPlaceHolder }
			{ isOpen && <ModalContainer { ...{ ...props, closeModal } } /> }
		</div>
	);
};
export default UAGIconPicker;
