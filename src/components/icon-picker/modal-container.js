import { Modal } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';

const ModalContainer = ( props ) => {
	const { value, onChange, closeModal, defaultIcons, iconCateList } = props;
	const defaultIconsWithKeys = { ...uagb_blocks_info.uagb_svg_icons };

	const [ searchIconInputValue, setSearchIconInputValue ] = useState( '' );
	const [ iconList, setIconList ] = useState( defaultIcons );
	const [ cateListName, setCateListName ] = useState( 'all' );
	const [ iconListByCate, setIconListByCate ] = useState( defaultIcons );
	const [ insertIcon, setInsertIcon ] = useState( '' );
	const inputElement = useRef();

	useEffect( () => {
		inputElement.current.focus();
	}, [] );

	// Click on category list.
	const clickToCate = ( cate ) => {
		let findIconsByCate = [];
		if ( 'all' === cate ) {
			findIconsByCate = defaultIcons;
		} else if ( 'no-category' === cate ) {
			for ( const defaultIcon in defaultIconsWithKeys ) {
				if (
					0 ===
					defaultIconsWithKeys[ defaultIcon ].custom_categories.length
				) {
					findIconsByCate.push( defaultIcon );
				}
			}
		} else {
			for ( const defaultIcon in defaultIconsWithKeys ) {
				if (
					defaultIconsWithKeys[
						defaultIcon
					].custom_categories.includes( cate )
				) {
					findIconsByCate.push( defaultIcon );
				}
			}
		}
		setCateListName( cate );
		setIconListByCate( findIconsByCate );
		setIconList( findIconsByCate );
		setSearchIconInputValue( '' );
	};

	// Search from input icon.
	const searchIcon = ( e ) => {
		const inputValue = e.target.value.toLowerCase();
		if ( '' !== inputValue ) {
			const filterIcons = ( icons ) =>
				defaultIconsWithKeys[ icons ]?.label
					? -1 !==
					  defaultIconsWithKeys[ icons ].label
							.toLowerCase()
							.indexOf( inputValue )
					: false;

			const resultIcons = [ ...iconListByCate ].filter( filterIcons );
			setIconList( resultIcons );
		} else {
			clickToCate( cateListName, false );
		}
		setSearchIconInputValue( inputValue );
	};

	// Render icon list.
	const renderIconList = () => {
		if ( ! iconList.length ) {
			return (
				<div className="uagb-ip-icons icon-not-found">
					<div className="uagb-icon-not-available">
						<span>
							{ __(
								'No Icons Found',
								'ultimate-addons-for-gutenberg'
							) }
						</span>
					</div>
				</div>
			);
		}
		const iconTitle = ( slug ) => {
			if ( ! defaultIconsWithKeys[ slug ]?.label ) {
				return '';
			}

			return defaultIconsWithKeys[ slug ].label.length < 11
				? defaultIconsWithKeys[ slug ].label
				: defaultIconsWithKeys[ slug ].label.slice( 0, 10 ) + '..';
		};
		return (
			<div className="uagb-ip-icons">
				<div>
					{ iconList.map( ( currentIcon, key ) => (
						<div
							key={ key }
							className={ `uagb-icon-item ${
								value === currentIcon ? 'default' : ''
							}  ${
								currentIcon === insertIcon ? 'selected' : ''
							}` }
							onClick={ () => {
								if ( value !== currentIcon ) {
									setInsertIcon( currentIcon );
								}
							} }
						>
							{ renderSVG( currentIcon ) }
							<span>{ iconTitle( currentIcon ) }</span>
						</div>
					) ) }
				</div>
			</div>
		);
	};

	const removeTextIcon = () => {
		return '' === searchIconInputValue ? (
			renderSVG( 'sistrix' )
		) : (
			<span
				onClick={ () => {
					clickToCate( cateListName, false );
					setSearchIconInputValue( '' );
				} }
				className="dashicons dashicons-no-alt"
			></span>
		);
	};

	// Search input container.
	const searchContainer = (
		<div className="uagb-ip-search-container">
			<div className="uagb-ip-search-bar">
				{ removeTextIcon() }
				<input
					type="text"
					placeholder={ __(
						'Search',
						'ultimate-addons-for-gutenberg'
					) }
					value={ searchIconInputValue }
					onChange={ searchIcon }
					ref={ inputElement }
				/>
			</div>
		</div>
	);

	// List of cate.
	const listOfCate = () => (
		<div className="uagb-ip-categories-list">
			<div
				key="all"
				className={ 'all' === cateListName ? 'selected' : null }
				onClick={ () => clickToCate( 'all' ) }
			>
				{ __( 'All Icons', 'ultimate-addons-for-gutenberg' ) }
			</div>
			{ iconCateList.map( ( cateValue, key ) => (
				<div
					key={ key }
					className={
						cateValue.slug === cateListName ? 'selected' : null
					}
					onClick={ () => clickToCate( cateValue.slug ) }
				>
					{ cateValue.title }
				</div>
			) ) }
			<div
				key="no-category"
				className={ 'no-category' === cateListName ? 'selected' : null }
				onClick={ () => clickToCate( 'no-category' ) }
			>
				{ __( 'Other', 'ultimate-addons-for-gutenberg' ) }
			</div>
		</div>
	);

	// Modal component.
	return (
		<Modal
			title={ __( 'Icon Library', 'ultimate-addons-for-gutenberg' ) }
			className="uagb-ip-modal-wrapper"
			onRequestClose={ closeModal }
			overlayClassName="uagb-ip-modal-wrapper-overlay"
			shouldCloseOnClickOutside={ false }
		>
			{ /* Header  */ }
			<div className="uagb-ip-header">
				<h2>
					{ __( 'Icon Library', 'ultimate-addons-for-gutenberg' ) }
				</h2>
				{ searchContainer }
			</div>
			{ /* middle  */ }
			<div className="uagb-ip-lr-container">
				<div className="uagb-ip-left">{ listOfCate() }</div>
				<div className="uagb-ip-right">
					<div className="uagb-ip-modal-container">
						{ renderIconList() }
					</div>
				</div>
			</div>
			{ /* Footer */ }
			<div className="uagb-ip-footer">
				<button
					className={ '' === insertIcon ? 'disable' : null }
					onClick={
						'' !== insertIcon
							? () => {
									onChange( insertIcon );
									closeModal();
							  }
							: null
					}
				>
					{ __( 'Insert Icon', 'ultimate-addons-for-gutenberg' ) }
				</button>
			</div>
		</Modal>
	);
};
export default ModalContainer;
