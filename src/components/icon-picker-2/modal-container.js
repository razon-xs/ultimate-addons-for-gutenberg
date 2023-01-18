import { Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';

const ModalContainer = ( props ) => {
	const numberOfIconsPerPage = 66;
	const { value, onChange, closeModal } = props;
	const defaultIcons = [ ...wp.UAGBSvgIcons ];

	const [ currentIconPage, setCurrentIconPage ] = useState( 1 );
	const [ totalPages, setTotalPages ] = useState(
		Math.ceil( defaultIcons.length / numberOfIconsPerPage )
	);
	const [ searchIconInputValue, setSearchIconInputValue ] = useState( '' );
	const [ searchIconList, setSearchIconList ] = useState( [] );
	const [ iconList, setIconList ] = useState(
		defaultIcons.slice( 0, numberOfIconsPerPage )
	);

	const setPageStates = ( icons ) => {
		setTotalPages( Math.ceil( icons.length / numberOfIconsPerPage ) );
		setCurrentIconPage( 1 );
		setIconList( icons.slice( 0, numberOfIconsPerPage ) );
	};
	// Search from input icon.
	const searchIcon = ( e ) => {
		const inputValue = e.target.value.trim().toLowerCase();
		if ( '' !== inputValue ) {
			const resultIcons = defaultIcons.filter(
				( icons ) => -1 !== icons.indexOf( inputValue )
			);
			setSearchIconList( resultIcons );
			setPageStates( resultIcons );
		} else {
			setSearchIconList( [] );
			setPageStates( defaultIcons );
		}
		setSearchIconInputValue( inputValue );
	};

	// If change pagination by input number.
	const paginationInputOnchange = ( e ) => {
		let inputValue = e.target.value;
		if ( '' === inputValue ) {
			setPageStates( defaultIcons );
		}

		if ( isNaN( inputValue ) ) {
			return;
		}

		inputValue = parseInt( inputValue );
		if ( inputValue > 0 && inputValue <= totalPages ) {
			setCurrentIconPage( inputValue );
			const showIcons =
				'' !== searchIconInputValue && searchIconList.length
					? [ ...searchIconList ]
					: [ ...defaultIcons ];
			const indexesOfIcons =
				1 === inputValue
					? 0
					: numberOfIconsPerPage * inputValue +
					  1 -
					  numberOfIconsPerPage;
			const showList = showIcons.slice(
				indexesOfIcons,
				indexesOfIcons + numberOfIconsPerPage
			);
			setIconList( showList );
		}
	};

	// Set icon list for next prev button.
	const setStateForNextPrev = ( findNextPage ) => {
		const showIcons =
			'' !== searchIconInputValue && searchIconList.length
				? [ ...searchIconList ]
				: [ ...defaultIcons ];
		const showList = showIcons.slice(
			findNextPage,
			findNextPage + numberOfIconsPerPage
		);
		setIconList( showList );
	};

	// Click on next button.
	const clickOnNext = () => {
		if ( totalPages <= currentIconPage ) {
			return;
		}
		setCurrentIconPage( ( prevState ) => {
			// debugger;
			const nextPage = prevState + 1;
			const findNextPage = numberOfIconsPerPage * ( nextPage - 1 ) + 1;
			setStateForNextPrev( findNextPage );
			return nextPage;
		} );
	};

	// Click on prev button.
	const clickOnPrev = () => {
		if ( currentIconPage <= 1 ) {
			return;
		}
		setCurrentIconPage( ( prevState ) => {
			const prevPage = prevState - 1;
			const findPrevPage = numberOfIconsPerPage * ( prevPage - 1 );
			setStateForNextPrev( findPrevPage );
			return prevPage;
		} );
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
		return (
			<div className="uagb-ip-icons">
				<div>
					{ iconList.map( ( currentIcon,key ) => {
						return (
							<div
                            key={key}
								className={ `uagb-icon-item ${
									value === currentIcon ? 'selected' : ''
								}` }
								onClick={ () => {
									if ( value !== currentIcon ) {
										onChange( currentIcon );
										closeModal();
									}
								} }
							>
								{ renderSVG( currentIcon ) }
							</div>
						);
					} ) }
				</div>
			</div>
		);
	};

	// Modal component.
	return (
		<Modal
			title="Select Icon"
			className="uagb-ip-modal-wrapper"
			onRequestClose={ closeModal }
		>
			<div className="uagb-ip-modal-container">
				<div className="uagb-ip-search-container">
					<div className="uagb-ip-search-bar">
						<input
							type="text"
							placeholder={ __(
								'Search Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ searchIconInputValue }
							onChange={ searchIcon }
						/>
					</div>
					<div className="uagb-ip-search-pagination">
						<div className="uagb-ip-pagination-input">
							<input
								type="number"
								value={ currentIconPage }
								onChange={ paginationInputOnchange }
							/>
							<span>/</span>
							<span>{ totalPages }</span>
						</div>
						<div className="uagb-ip-pagination-np">
							<span onClick={ clickOnPrev }>
								{ renderSVG( 'angle-left' ) }
							</span>
							<span onClick={ clickOnNext }>
								{ renderSVG( 'angle-right' ) }
							</span>
						</div>
					</div>
				</div>
				{ renderIconList() }
			</div>
		</Modal>
	);
};
export default ModalContainer;
