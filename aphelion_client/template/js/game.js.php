<?php if(SITE_DEBUG): ?>
	<script src="<?php $this->put('media_url'); ?>/js/KeyObject.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/ResourceLoader.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/SpriteSheet.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/ImageDisplayObject.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/Map.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/MapObject.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/Player.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/NPC.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/Rectangle.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/TextLabel.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/HealthBar.js" type="text/javascript"></script>
	<script src="<?php $this->put('media_url'); ?>/js/Benchmark.js" type="text/javascript"></script>
<?php else: ?>
	<script src="<?php $this->put('minify_url'); ?>/aphelion-game.js" type="text/javascript"></script>
<?php endif; ?>