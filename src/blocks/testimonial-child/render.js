import UAGB_Block_Icons from '@Controls/block-icons';
import styles from './editor.lazy.scss';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Render = ( props ) => {
	const blockName = props.name.replace( 'uagb/', '' );
	const { className, setAttributes, attributes, deviceType } = props;

	return (
		<RichText
			tagName="h1"
			value={ attributes.myText }
			placeholder={ __( 'Author Name', 'ultimate-addons-for-gutenberg' ) }
			className="sample-text"
			onChange={ ( value ) => {
				setAttributes( { myText: value } );
			} }
		/>
	);
};
export default React.memo( Render );
