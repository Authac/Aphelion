	<script>
		soundManager.debugMode = false;
		soundManager.debugFlash = false;
		soundManager.url = '/media/swf/';
		soundManager.flashVersion = 9;
		soundManager.useFlashBlock = false;
		soundManager.useHTML5Audio = true;
		soundManager.preferFlash = true;
		var SFX_URL = '/content/sfx/';
		var BGM_URL = '/content/bgm/';
		var SFX_VOLUME = $.cookie('sfx_volume') || 40
		var BGM_VOLUME = $.cookie('bgm_volume') || 50
	</script>
	<script src="http://mithril.rakuhana.org:8078/socket.io/socket.io.js" type="text/javascript"></script>
<?php if(SITE_DEBUG): ?>
	<script src="<?php $this->put('media_url'); ?>/js/forms.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/SoundSystem.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/gui.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/client.js" type="text/javascript"></script>
<?php else: ?>
	<script src="<?php $this->put('minify_url'); ?>/aphelion-client.js" type="text/javascript"></script>
<?php endif; ?>
