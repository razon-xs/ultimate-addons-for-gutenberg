/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {Object} state Viewport state object.
 *
 * @example
 *
 * ```js
 * import { store as viewportStore } from '@wordpress/viewport';
 * import { useSelect } from '@wordpress/data';
 * import { __ } from '@wordpress/i18n';
 * const ExampleComponent = () => {
 *     const isMobile = useSelect(
 *         ( select ) => select( viewportStore ).isViewportMatch( '< small' ),
 *         []
 *     );
 *
 *     return isMobile ? (
 *         <div>{ __( 'Mobile' ) }</div>
 *     ) : (
 *         <div>{ __( 'Not Mobile' ) }</div>
 *     );
 * };
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */
export function getGlobalBlockStylesPopupState( state ) {
	return state.globalBlockStylesPopupState;
}

export function getGlobalBlockStyles( state ) {
	return state.globalBlockStyles;
}

export function getGlobalBlockStylesFontFamilies( state ) {
	return state.globalBlockStylesFontFamilies;
}
export function getState( state ) {
	return state;
}
