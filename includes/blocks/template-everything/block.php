<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.2.0
 *
 * @package uagb
 */

$block_slug = 'uagb/template-everything';
$block_data = array(
	'doc'              => 'template-everything',
	'slug'             => '',
	'admin_categories' => array( 'creative' ),
	'link'             => 'template-everything',
	'title'            => __( 'Template Everything!', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add a marketing call to action button with a short description.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'template-everything' ),
	'deprecated'       => false,
	'dynamic_assets'   => array(
		'dir' => 'template-everything',
	),
);
