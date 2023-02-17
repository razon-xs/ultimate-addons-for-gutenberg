<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;

$block_name = 'countdown';

$countdown_options = apply_filters(
	'uagb_countdown_options',
	array(
		'block_id'       => $attr['block_id'],
		'endDateTime'    => $attr['endDateTime'],
		'showDays'       => $attr['showDays'],
		'showHours'      => $attr['showHours'],
		'showMinutes'    => $attr['showMinutes'],
		'isFrontend'     => true,
		'block_id'       => $attr['block_id'],
		'endDateTime'    => $attr['endDateTime'],
		'timerEndAction' => $attr['timerEndAction'],
		'redirectURL'    => $attr['redirectURL'],
		'isFrontend'     => true,
	),
	$id
);

ob_start();
?>
window.addEventListener( 'load', function() {
	UAGBCountdown.init( '<?php echo esc_attr( $selector ); ?>', <?php echo wp_json_encode( $countdown_options ); ?> );
});
<?php
return ob_get_clean();
?>
