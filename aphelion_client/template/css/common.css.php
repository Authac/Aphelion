	<style>
		.modal_background {
		  position: absolute;
		  top: 0;
		  left: 0;
		  background-color: #888;
		  opacity: 0.5;
		  filter: alpha(opacity=50);
		  width: 100%;
		  height: 100%;
		  z-index: 20000;
		}
	</style>
<?php if(SITE_DEBUG): ?>
	<link rel="stylesheet" type="text/css" href="<?php $this->put('media_url'); ?>/css/ui-lightness/jquery-ui-1.8.17.custom.css" />
	<link rel="stylesheet" type="text/css" href="<?php $this->put('media_url'); ?>/css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="<?php $this->put('media_url'); ?>/css/progress-bars.css" />
	<link rel="stylesheet" type="text/css" href="<?php $this->put('media_url'); ?>/css/style.css" />
	<link rel="stylesheet" type="text/css" href="<?php $this->put('media_url'); ?>/css/bootstrap-custom.css" />
<?php else: ?>
	<link rel="stylesheet" type="text/css" href="<?php $this->put('minify_url'); ?>/aphelion.css" />
<?php endif; ?>


