

import generateCSS from '@Controls/generateCSS';
// import generateCSSUnit from '@Controls/generateCSSUnit';
// import { getFallbackNumber } from '@Controls/getAttributeFallback';


function styling( props ) {

	// const blockName = props.name.replace( 'uagb/', '' );
    const { titleColor }= props.attributes;

    const selectors = {
        ' .uagb-user__title':{
            'color':titleColor
        }
    }
    const Mobselectors = {
        ' .uagb-user__title':{
            'color':titleColor
        }
    }
    const Tabselectors = {
        ' .uagb-user__title':{
            'color':titleColor
        }
    }
   

    let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;
    stylingCss = generateCSS( selectors, id );
    stylingCss += generateCSS(
		Tabselectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		Mobselectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);
    return stylingCss;
}

export default styling;
