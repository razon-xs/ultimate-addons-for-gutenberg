import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
export default function save( props ) {
	const { attributes, className } = props;
	const {
		block_id,
		imgURL,
		titleTag,
		title,
		description,
		price,
	} = attributes;
	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`,
				'uagb-block-price-card-container'
			) }
		>
			<div className="img-container">
				<img
					style={ {
						width: '200px',
						marginTop: 'auto',
					} }
					alt="user/img"
					src={ imgURL }
				/>
			</div>
			<div className="uagb-block-price-card-body">
				<div className="uagb-block-price-card-title__price">
					<RichText.Content
						className="uagb-block-price-card-title"
						tagName={ titleTag }
						value={ title }
					/>
					<RichText.Content
						className="uagb-block-price-card-price"
						tagName="span"
						value={ price }
					/>
				</div>
				<RichText.Content
					className="uagb-block-price-card-desc"
					tagName="p"
					value={ description }
				/>
			</div>
		</div>
	);
}
