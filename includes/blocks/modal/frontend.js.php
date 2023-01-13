<?php
/**
 * Frontend JS File.
 *
 * @since 2.2.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
$args     = array(
	'modalTrigger' => $attr['modalTrigger'],
	'cssClass'     => $attr['cssClass'],
	'cssID'        => $attr['cssID']
);
ob_start();
?>
	window.addEventListener( 'DOMContentLoaded', function() {
		UAGBModal.init( '<?php echo esc_attr( $selector ); ?>', '', false, '<?php echo json_encode( $args ) ?>' );
	});
<?php
return ob_get_clean();
?>
