<!DOCTYPE HTML>

<html lang="en">

<head>

<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />

<title><?php $this->put('page_title'); ?> - <?php $this->put('site_title'); ?></title>

<?php $this->load_css('common'); ?>

<?php $this->load_js('libraries'); ?>

<script type="text/javascript">
$(document).ready(function() {
	
	function browserWarning() {
		var version = parseInt($.browser.version, 10);
		var old = ($.browser.webkit && version < 532) || ($.browser.msie && version < 9) || ($.browser.mozilla && version < 4);
		if (old) {
			$('#browser-warning').show();
		}
	}
	browserWarning();

});
</script>

<?php $this->load_js('game'); ?>

<?php $this->load_js('client'); ?>

<script type="text/javascript">
$(document).ready(function() {
	
    <?php if (isset($_COOKIE['autologin'])): ?>
    
	// Temporary auto-login
	$('#login-username').val('tester');
	$('#login-password').val('tester');
	$('form.login').submit();
    
    <?php endif; ?>

});
</script>


<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-9743668-12']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>

<body>