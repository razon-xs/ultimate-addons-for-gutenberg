import WebfontLoader from '@Components/typography/fontloader';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

const SpectraLoadGlobaGoogleFonts = () => {
    const uagLocalStorage = getUAGEditorStateLocalStorage();

    let spectraGlobalStylesFontFamilies = JSON.parse(uagLocalStorage.getItem( 'spectraGlobalStylesFontFamilies' )) || [];
    let renderFonts = spectraGlobalStylesFontFamilies.map((family) => {
        
        let loadGoogleFonts;
        const hconfig = {
            google: {
                families: [
                    family,
                ],
            },
        };
    
        loadGoogleFonts = (
            <WebfontLoader config={ hconfig }></WebfontLoader>
        );

        return loadGoogleFonts;
    });



	return (
        <div className='hello-moto'>
        {renderFonts}
        </div>
    );
};

export default SpectraLoadGlobaGoogleFonts;