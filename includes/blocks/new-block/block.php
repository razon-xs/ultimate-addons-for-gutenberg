<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.2.0
 *
 * @package uagb
 */

$block_slug = 'uagb/new-block';
$block_data = array(
	'doc'              => 'new-block',
	'slug'             => '',
	'admin_categories' => array( 'creative' ),
	'link'             => 'new-block',
	'title'            => __( 'Info Box 2.0', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add a marketing call to action button with a short description.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'new-block' ),
	'deprecated'       => false,
	'dynamic_assets'   => array(
		'dir' => 'new-block',
	),
);
