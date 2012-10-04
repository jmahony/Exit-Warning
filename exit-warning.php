<?php
/*
   Plugin Name: Exit Warning
   Plugin URI: http://www.republiqedesign.co.uk/
   Description: Display a warning when leaving the website.
   Version: 1.0
   Author: Republique Design
   Author URI: http://www.republiqedesign.co.uk/
   License: GPL2
*/
?><?php

	if (!is_admin()) {
		wp_enqueue_script('exit-warning-script', plugins_url('/exit-warning/js/exit-warning.js'), array('jquery'));
	}

?>