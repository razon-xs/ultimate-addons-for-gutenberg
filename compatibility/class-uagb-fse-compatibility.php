<?php
/**
 * FSE compatibility
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_FSE_Compatibility.
 */
class UAGB_FSE_Compatibility {

	/**
	 * Member Variable
	 *
	 * @var instance
	 */
	private static $instance;

	/**
	 *  Initiator
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 *
	 * @since x.x.x
	 */
	public function __construct() {
		add_action( 'wp', array( $this, 'generate_stylesheet' ), 101 );
	}

	/**
	 * Generates stylesheet and appends in head tag.
	 *
	 * @since x.x.x
	 */
	public function generate_stylesheet() {

		$query_args = array(
			'post_type' => array( 'wp_template', 'wp_template_part' ),
		);

		$query = new WP_Query( $query_args );

		foreach ( $query->posts as $key => $post ) {
			$post_id             = $post->ID;
			$current_post_assets = new UAGB_Post_Assets( intval( $post_id ) );
			$current_post_assets->enqueue_scripts();
		}

	}

}

/**
 *  Prepare if class 'UAGB_FSE_Compatibility' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_FSE_Compatibility::get_instance();
