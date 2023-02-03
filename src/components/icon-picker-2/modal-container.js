import { Modal } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';

const ModalContainer = ( props ) => {
	const { value, onChange, closeModal, defaultIcons, iconCateList } = props;
	const defaultIconsWithKeys = { ...uagb_blocks_info.uagb_svg_icons };

	const [ searchIconInputValue, setSearchIconInputValue ] = useState( '' );
	const [ searchIconList, setSearchIconList ] = useState( [] );
	const [ iconList, setIconList ] = useState( defaultIcons );
	const [ cateListName, setCateListName ] = useState( 'all' );
	const [ iconListByCate, setIconListByCate ] = useState( defaultIcons );
	const [ insertIcon, setInsertIcon ] = useState( '' );
	const inputElement = useRef();

	useEffect( () => {
		inputElement.current.focus();
	}, [] );

	// Click on category list.
	const clickToCate = ( cate, setCate = true ) => {
		// debugger;
		let findIconsByCate = [];
		if ( 'all' === cate ) {
			findIconsByCate = defaultIcons;
		} else if ( 'no-category' === cate ) {
			for ( const defaultIcon in defaultIconsWithKeys ) {
				if (
					0 === defaultIconsWithKeys[ defaultIcon ].categories.length
				) {
					findIconsByCate.push( defaultIcon );
				}
			}
		} else {
			for ( const defaultIcon in defaultIconsWithKeys ) {
				if (
					defaultIconsWithKeys[ defaultIcon ].categories.includes(
						cate
					)
				) {
					findIconsByCate.push( defaultIcon );
				}
			}
		}

		if ( setCate ) {
			setCateListName( cate );
			setIconListByCate( findIconsByCate );
		}

		if ( 0 === searchIconList.length || ! setCate ) {
			setIconList( findIconsByCate );
		}
	};

	// Search from input icon.
	const searchIcon = ( e ) => {
		const inputValue = e.target.value.toLowerCase();
		if ( '' !== inputValue ) {
			const resultIcons = [ ...iconListByCate ].filter(
				( icons ) => -1 !== icons.indexOf( inputValue )
			);
			setSearchIconList( resultIcons );
			setIconList( resultIcons );
		} else {
			setSearchIconList( [] );
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

			return defaultIconsWithKeys[ slug ].label.length < 13
				? defaultIconsWithKeys[ slug ].label
				: defaultIconsWithKeys[ slug ].label.slice( 0, 11 ) + '..';
		};
		return (
			<div className="uagb-ip-icons">
				<div>
					{ iconList.map( ( currentIcon, key ) => {
						return (
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
						);
					} ) }
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
					setSearchIconList( [] );
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
	const listOfCate = () => {
		return (
			<div className="uagb-ip-categories-list">
				<div
					key="all"
					className={ 'all' === cateListName ? 'selected' : null }
					onClick={ () => clickToCate( 'all' ) }
				>
					{ __( 'All', 'ultimate-addons-for-gutenberg' ) }
				</div>
				{ iconCateList.slice( 0, 4 ).map( ( cateValue, key ) => {
					return (
						<div
							key={ key }
							className={
								cateValue.slug === cateListName ? 'selected' : null
							}
							onClick={ () => clickToCate( cateValue.slug ) }
						>
							{ cateValue.title }
						</div>
					);
				} ) }
				<div
					key="no-category"
					className={
						'no-category' === cateListName ? 'selected' : null
					}
					onClick={ () => clickToCate( 'no-category' ) }
				>
					{ __( 'No Category', 'ultimate-addons-for-gutenberg' ) }
				</div>
			</div>
		);
	};

	// Modal component.
	return (
		<Modal
			title={ __( 'Icon Library', 'ultimate-addons-for-gutenberg' ) }
			className="uagb-ip-modal-wrapper"
			onRequestClose={ closeModal }
			overlayClassName="uagb-ip-modal-wrapper-overlay"
			shouldCloseOnClickOutside={false}
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
