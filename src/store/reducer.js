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
	globalBlockStyles: [
        {
            value: '',
            label: 'None'
        }
    ],
	globalBlockStylesFontFamilies: []
};
function reducer( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'TOGGLE_GLOBAL_BLOCK_STYLES_POPUP':
			return {
				...state,
				globalBlockStylesPopupState: action.value,
			};
		case 'UPDATE_GLOBAL_BLOCK_STYLES':
			return {
				...state,
				globalBlockStyles: action.value,
			};
		case 'UPDATE_GLOBAL_BLOCK_STYLES_FONT_FAMILIES':
			return {
				...state,
				globalBlockStylesFontFamilies: action.value,
			};
			
	}

	return state;
}

export default reducer;
