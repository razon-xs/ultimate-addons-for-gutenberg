/**
 * Returns an action object used in signalling that viewport queries have been
 * updated. Values are specified as an object of breakpoint query keys where
 * value represents whether query matches.
 * Ignored from documentation as it is for internal use only.
 *
 * @ignore
 *
 * @param {Object} values Breakpoint query matches.
 *
 * @return {Object} Action object.
 */
export function toggleGlobalBlockStylesPopup( value ) {
	return {
		type: 'TOGGLE_GLOBAL_BLOCK_STYLES_POPUP',
		value,
	};
}
