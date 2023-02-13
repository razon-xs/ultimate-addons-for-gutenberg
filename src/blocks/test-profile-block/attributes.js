/**
 * BLOCK: UAGB Team Block Attributes
 */

const attributes = {
    block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
    title: {
        type: 'string',
        source: 'html',
        selector: 'h3'
    },
    imgURL: {
        type:'string',
        default:null
    },
    imgID: {
        type:'number'
    },
    twIcon: {
		type: 'string',
		default: 'twitter',
	},
    instaIcon: {
		type: 'string',
		default: 'instagram',
	},
    fbIcon: {
		type: 'string',
		default: 'facebook',
	},
    ptIcon: {
		type: 'string',
		default: 'pinterest',
	},
    ytIcon: {
		type: 'string',
		default: 'youtube',
	},
    instaLink: {
        type:'string',
        default:null
    },
    fbLink: {
        type:'string',
        default:null
    },
    twLink: {
        type:'string',
        default:null
    },
    
    ytLink: {
        type:'string',
        default:null
    },
    ptLink: {
        type:'string',
        default:null
    },
    titleColor: {
		type: 'string',
		
	},
}

export default attributes;