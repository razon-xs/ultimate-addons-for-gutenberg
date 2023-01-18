/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */

export function getImageSize(sizes) {
	const sizeArr = [];
	for (const size in sizes) {
		if (sizes.hasOwnProperty(size)) {
			const p = { value: size, label: size };
			sizeArr.push(p);
		}
	}
	return sizeArr;
}

export function getIdFromString(label) {
	return label
		? label
				.toLowerCase()
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/\s+/g, '-')
		: '';
}

/**
 *
 * @param {Object} props Block props.
 * @param {Object} initialAttr Initial attributes.
 */
export function initBlockId(props, initialAttr = false) {
	const {
		attributes: { block_id },
		setAttributes,
		clientId,
		isSelected,
	} = props;

	console.log('props', props);
	// console.log('uniq 12 - ', uagb_blocks_info.unique_blocks);

	let updateAttribute = false;
	if (block_id) {
		if (isSelected && uagb_blocks_info.unique_blocks.includes(block_id)) {
			updateAttribute = true;
		} else {
			if (!uagb_blocks_info.unique_blocks.includes(block_id)) {
				updateAttribute = true;
			}
		}
	} else if (!block_id) {
		updateAttribute = true;
	}

	console.log('updateAttribute', updateAttribute);

	// Update attribute.
	if (updateAttribute) {
		const createBlockID = clientId.substr(0, 8);
		let saveAttr = { block_id: createBlockID };
		if (initialAttr) {
			saveAttr = { ...saveAttr, ...initialAttr };
		}
		setAttributes(saveAttr);
		uagb_blocks_info.unique_blocks.push(createBlockID);
	}
}
// export function initBlockId(props, initialAttr = false) {
// 	const {
// 		attributes: { block_id },
// 		setAttributes,
// 		clientId,
// 		isSelected,
// 	} = props;
// 	console.log('props', props);
// 	console.log('uniq', uagb_blocks_info.unique_blocks);
// 	const createBlockID = clientId.substr(0, 8);

// 	if (block_id) {
// 		if (isSelected && uagb_blocks_info.unique_blocks.includes(block_id)) {
// 			uagb_blocks_info.unique_blocks.push(createBlockID);

// 			let saveAttr = { block_id: createBlockID };
// 			if (initialAttr) {
// 				saveAttr = { ...saveAttr, ...initialAttr };
// 			}

// 			setAttributes(saveAttr);
// 		} else {
// 			if (!uagb_blocks_info.unique_blocks.includes(block_id)) {
// 				uagb_blocks_info.unique_blocks.push(block_id);
// 			}
// 		}
// 	} else if (!block_id) {
// 		let saveAttr = { block_id: createBlockID };
// 		if (initialAttr) {
// 			saveAttr = { ...saveAttr, ...initialAttr };
// 		}
// 		setAttributes(saveAttr);
// 		uagb_blocks_info.unique_blocks.push(createBlockID);
// 	}
// }
