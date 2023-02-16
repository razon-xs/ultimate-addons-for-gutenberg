import { Modal, Tooltip } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import { Grid } from 'react-virtualized';
import { uagbClassNames } from '@Utils/Helpers';

import chunk from './chunks';
import HeaderContainer from './header-container';

const ModalContainer = ( props ) => {
	const { value, onChange, closeModal, defaultIcons, iconCateList } = props;
	const defaultIconsWithKeys = { ...uagb_blocks_info.uagb_svg_icons };

	const setIconListWithChunks = ( icons ) => chunk( icons, 8 );

	const [ searchIconInputValue, setSearchIconInputValue ] = useState( '' );
	const [ iconList, setIconList ] = useState(
		setIconListWithChunks( defaultIcons )
	);
	const [ cateListName, setCateListName ] = useState( 'all' );
	const [ iconListByCate, setIconListByCate ] = useState( defaultIcons );
	const [ insertIcon, setInsertIcon ] = useState( '' );
	const inputElement = useRef();

	// Container states
	const iconContainerRef = useRef();
	const [ iconContainerHeight, setIconContainerHeight ] = useState( null );
	const [ iconContainerWidth, setIconContainerWidth ] = useState( null );
	
	/**
	 * This is value when modal mount then we will show selected icon rest of time this will set to null.
	 */
	const [ rowIndexForFirstTime, setRowIndexForFirstTime ] = useState( null );

	const getContainerHeight = ( property ) => {
		const element = iconContainerRef?.current;
		if ( ! element ) {
			return null;
		}
		return 'w' === property ? element.offsetWidth : element.offsetHeight;
	};

	useEffect( () => {
		inputElement.current.focus();
		setIconContainerHeight( getContainerHeight( 'h' ) );
		setIconContainerWidth( getContainerHeight( 'w' ) );
		const selectedIconRowIndex = iconList.findIndex( ( row_value ) =>
			row_value.includes( value )
		);
		setRowIndexForFirstTime( selectedIconRowIndex );
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
		setRowIndexForFirstTime( null );
		setIconList( setIconListWithChunks( findIconsByCate ) );
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
			setIconList( setIconListWithChunks( resultIcons ) );
		} else {
			clickToCate( cateListName );
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
		const iconTitle = ( actualTitle ) => {
			if ( ! actualTitle ) {
				return '';
			}
			return actualTitle.length < 11
				? actualTitle
				: actualTitle.slice( 0, 10 ) + '..';
		};
		// renderer.
		function cellRenderer( renderer ) {
			const { columnIndex, key, rowIndex, style } = renderer;
			const currentIcon = iconList[ rowIndex ][ columnIndex ];

			if ( ! currentIcon ) {
				return null;
			}

			const iconClass = uagbClassNames( [
				'uagb-icon-item',
				value === currentIcon && 'default',
				currentIcon === insertIcon && 'selected',
			] );

			const actualTitle = defaultIconsWithKeys[ currentIcon ]?.label
				? defaultIconsWithKeys[ currentIcon ].label
				: '';
			return (
				<div key={ key } style={ style }>
					<div
						className={ iconClass }
						onClick={ () => {
							if ( value !== currentIcon ) {
								setInsertIcon( currentIcon );
							}
						} }
					>
						{ renderSVG( currentIcon ) }
						<Tooltip text={ actualTitle }>
							<span>{ iconTitle( actualTitle ) }</span>
						</Tooltip>
					</div>
				</div>
			);
		}
		const heightAndWidth =
			iconList[ 0 ].length === 8
				? iconContainerWidth / iconList[ 0 ].length
				: 100;

		return (
			<div className="uagb-ip-icons">
				<Grid
					cellRenderer={ cellRenderer }
					columnCount={ iconList[ 0 ].length }
					columnWidth={ heightAndWidth - 2 }
					height={ iconContainerHeight }
					rowCount={ iconList.length }
					rowHeight={ heightAndWidth }
					width={ iconContainerWidth }
					scrollToRow={ rowIndexForFirstTime }
				/>
			</div>
		);
	};

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
			className="uagb-ip-modal-wrapper"
			onRequestClose={ closeModal }
			overlayClassName="uagb-ip-modal-wrapper-overlay"
			shouldCloseOnClickOutside={ false }
			closeButtonLabel={ __( 'Close', 'ultimate-addons-for-gutenberg' ) }
		>
			{ /* Header  */ }
			<HeaderContainer
				searchIconInputValue={ searchIconInputValue }
				onClickRemoveSearch={ () => {
					clickToCate( cateListName, false );
					setSearchIconInputValue( '' );
				} }
				searchIcon={ searchIcon }
				inputElement={ inputElement }
			/>
			{ /* middle  */ }
			<div className="uagb-ip-lr-container">
				<div className="uagb-ip-left">{ listOfCate() }</div>
				<div className="uagb-ip-right">
					<div
						className="uagb-ip-modal-container"
						ref={ iconContainerRef }
					>
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
