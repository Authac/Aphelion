<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 **/

return array(

	'aphelion.css' => array(
		'//media/css/ui-lightness/jquery-ui-1.8.17.custom.css',
		'//media/css/bootstrap.css',
		'//media/css/progress-bars.css',
		'//media/css/style.css',
		'//media/css/bootstrap-custom.css'
	),
	
	'libs.js' => array(
		'//media/js/jquery.min.js',
		'//media/js/jquery.cookie.js',
		'//media/js/jquery.validate.js',
		'//media/js/jquery-ui-1.8.17.custom.min.js',

		'//media/js/soundmanager2-jsmin.js',
		
		'//media/js/bootstrap-alerts.js',
		'//media/js/bootstrap-buttons.js',
		'//media/js/bootstrap-modal.js',
		'//media/js/bootstrap-tabs.js',

		'//media/js/bootstrap-dialog.js',
	),
	
	'aphelion-game.js' => array(
		'//media/js/KeyObject.js',
		'//media/js/ResourceLoader.js',
		'//media/js/SpriteSheet.js',
		'//media/js/ImageDisplayObject.js',
		'//media/js/Map.js',
		'//media/js/MapObject.js',
		'//media/js/Player.js',
		'//media/js/NPC.js',
		'//media/js/Rectangle.js',
		'//media/js/TextLabel.js',
		'//media/js/HealthBar.js',
		'//media/js/Benchmark.js',
	),

	'aphelion-client.js' => array(
		'//media/js/forms.js',
		'//media/js/SoundSystem.js',
		'//media/js/gui.js',
		'//media/js/client.js',
	),

);