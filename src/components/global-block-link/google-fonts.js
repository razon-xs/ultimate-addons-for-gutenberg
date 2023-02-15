import WebfontLoader from '@Components/typography/fontloader';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

const SpectraLoadGlobaGoogleFonts = () => {
    const uagLocalStorage = getUAGEditorStateLocalStorage();

    const spectraGlobalStylesFontFamilies = JSON.parse( uagLocalStorage.getItem( 'spectraGlobalStylesFontFamilies' ) ) || [];
    const renderFonts = spectraGlobalStylesFontFamilies.map( ( family ) => {
        const hconfig = {
            google: {
                families: [
                    family,
                ],
            },
        };
    
        return (
            <WebfontLoader key={family} config={ hconfig }></WebfontLoader>
        );
    } );



	return (
        <div className='spectra-gbs-fonts'>
        {renderFonts}
        </div>
    );
};

export default SpectraLoadGlobaGoogleFonts;