import renderSVG from '@Controls/renderIcon';

const Icons = ( props ) => {
	const { attributes, setAttributes } = props;
	const { iconView, iconShape } = attributes
	return (
		<>
			{ ( attributes.showIcon ) && (
				<div className="uagb-ifb-icon-wrap">
					{ iconView === 'none' ?
					<>
						{ renderSVG( attributes.icon, setAttributes ) }
					</>
					:
					<>
						{ ( attributes.source_type === 'svg' && <div className={ ( iconView === 'none' ) // eslint-disable-line no-nested-ternary
							? ( 'uagb-iconbox-icon-wrap' ) : ( ( iconShape === 'Circle' ) ? ( 'uagb-iconbox-icon-wrap uagb-infobox-shape-circle' ) : ( 'uagb-iconbox-icon-wrap uagb-infobox-shape-squre' ) ) } dangerouslySetInnerHTML={{ _html:attributes.iconSvg.svg }}>
							</div> ) }
						{ ( attributes.source_type === 'icon' &&
							<div className={ ( iconView === 'none' ) // eslint-disable-line no-nested-ternary
							? ( 'uagb-iconbox-icon-wrap' ) : ( ( iconShape === 'Circle' ) ? ( 'uagb-iconbox-icon-wrap uagb-infobox-shape-circle' ) : ( 'uagb-iconbox-icon-wrap uagb-infobox-shape-squre' ) ) }>
								{ renderSVG( attributes.icon, setAttributes ) }
							</div> ) }

					</>}

				</div>
			)}
		</>
	);
};
export default Icons;
