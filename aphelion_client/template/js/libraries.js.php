<?php if(SITE_DEBUG): ?>
	<script src="<?php $this->put('media_url'); ?>/js/jquery.min.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/jquery.cookie.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/jquery.validate.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script>

	<script src="<?php $this->put('media_url'); ?>/js/soundmanager2-jsmin.js" type="text/javascript"></script>
	
	<script src="<?php $this->put('media_url'); ?>/js/bootstrap-alerts.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/bootstrap-buttons.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/bootstrap-modal.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/bootstrap-tabs.js" type="text/javascript"></script>
	
	<!-- TODO: actually add this -->
	<script src="<?php $this->put('media_url'); ?>/js/bootstrap-dialog.js" type="text/javascript"></script>
	
<?php else: ?>
	<script src="<?php $this->put('minify_url'); ?>/libs.js" type="text/javascript"></script>
<?php endif; ?>