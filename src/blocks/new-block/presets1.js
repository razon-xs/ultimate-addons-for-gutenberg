import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const presets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'align', value: 'center' },
            { label: 'backgroundType', value: 'color' },
            { label: 'backgroundColor', value: '#F0BA71AB'}
        ],
        innerBlocks: [
			[ 'uagb/advanced-heading', { seperatorStyle: 'solid', separatorHeight: 5, separatorWidth: 25, headingAlign: '', separatorSpace: 0, blockBottomPadding:0 } ],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
			[ 'uagb/icon-list', { itemCount: 6 , Label: 'Lorem Ipsum dolor' , icon: 'check-square', align: ''}],
			[ 'uagb/buttons',{ align: ''} ],
		],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="81.656" r="11.2739" fill="white"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1777 76.3527C91.8848 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3597 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8848 87.2522 92.1777 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="11.2739" fill="white"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1777 130.467C91.8848 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3597 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8848 141.367 92.1777 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="11.2739" fill="white"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1777 184.582C91.8848 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3597 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8848 195.481 92.1777 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="#B6B6B6"/> </svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'align', value: 'center' },
            { label: 'backgroundType', value: 'color' },
            { label: 'backgroundColor', value: '#F0BA71AB'}
        ],
        innerBlocks: [
			[ 'uagb/advanced-heading', { seperatorStyle: 'solid', separatorHeight: 5, separatorWidth: 25, headingAlign: '', separatorSpace: 0, blockBottomPadding:0 } ],
			[ 'uagb/advanced-heading', { headingAlign: '', headingTitleToggle: false, headingDescToggle:true,headingDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' } ],
			[ 'uagb/icon-list', { itemCount: 6 , Label: 'Lorem Ipsum dolor' , icon: 'check-square', align: ''}],
			[ 'uagb/buttons',{ align: ''} ],
		],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="81.656" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1778 76.3527C91.8849 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3598 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8849 87.2522 92.1778 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="white"/> <circle cx="89.6561" cy="135.771" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="135.771" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1778 130.467C91.8849 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3598 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8849 141.367 92.1778 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="white"/> <circle cx="89.6561" cy="189.885" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="189.885" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1778 184.582C91.8849 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3598 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8849 195.481 92.1778 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="white"/> </svg>',
    }

];

export default applyFilters(
    `uag_icon_list_presets`,
    presets
);
