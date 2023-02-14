/**
 * Reducer returning the viewport state, as keys of breakpoint queries with
 * boolean value representing whether query is matched.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

 const DEFAULT_STATE = {
    globalBlockStylesPopupState: 'close',
};
function reducer( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'TOGGLE_GLOBAL_BLOCK_STYLES_POPUP':
			return {
				...state,
				globalBlockStylesPopupState: action.value,
			};
	}

	return state;
}

export default reducer;
