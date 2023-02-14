<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/test-profile-block';

$block_data = array(
	'doc'              => 'test-profile-block',
	'slug'             => '',
	'admin_categories' => array( 'social' ),
	'link'             => 'test-profile-block',
	'title'            => __( 'User Profile', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Showcase your profile', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'test-profile-block' ),
	'dynamic_assets'   => array(
		'dir' => 'test-profile-block',
	),
);
