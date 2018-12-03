<html>

<head>

<link rel="stylesheet" type="text/css" href="/media/css/ui-lightness/jquery-ui-1.8.17.custom.css" />

<link rel="stylesheet" type="text/css" href="/media/css/bootstrap.css" />

<script src="/media/js/jquery.min.js" type="text/javascript"></script>

<script src="/media/js/jquery.cookie.js" type="text/javascript"></script>

<script src="/media/js/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script>

<script src="/media/js/soundmanager2-jsmin.js" type="text/javascript"></script>

<style>
.ui-widget-header {
	background: #49AFCD;
	rgba(0,0,0,0.5);
}

.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus {
	border: 1px solid #ccc;
	background: inherit;
	outline: none;
}
</style>

<script>

var SFX_URL = '/content/sfx/';
var BGM_URL = '/content/bgm/';
var SFX_VOLUME = $.cookie('bgm_volume') || 40
var BGM_VOLUME = $.cookie('sfx_volume') || 50

function SoundSystem(options) {

	this.init = function() {
		soundManager.url = '/media/swf/';
		soundManager.flashVersion = 9;
		soundManager.useFlashBlock = false;

		this.settings = {
			sfx_volume: SFX_VOLUME,
			bgm_volume: BGM_VOLUME,
			sfx_url: SFX_URL,
			bgm_url: BGM_URL
		}
		
		// TODO: Move library to its own file
		this.library = {
			sfx: {
				admin: 'admin.mp3',
				attack: 'attack.mp3',
				death: 'death.mp3',
				disappear: 'disappear.mp3',
				pm: 'pm.mp3',
				sit: 'sit.mp3',
				system: 'system.mp3',
				twinkle: 'twinkle.mp3',
				win: 'win.mp3'
			},
			bgm: {
				aurora: 'aurora.mp3',
				mfx042: 'mfx042.mp3',
				mfx016: 'mfx016.mp3'
			}
		}
	}

	this.playSFX = function(sound) {
		var sfx = this.library.sfx;
		// Do we have this sound?
		if (sfx[sound]) {
			var soundObject = soundManager.getSoundById(sound)
			// Does the sound object already exist?
			if (soundObject) {
				soundObject.play({ volume: this.settings.sfx_volume });
			// If not, we should make it
			} else {
				soundManager.createSound({
					volume: this.settings.sfx_volume,
					id: sound,
					url: this.settings.sfx_url + sfx[sound],
					autoLoad: true,
					autoPlay: true
				});
			}
		} else {
			console.log('Invalid SFX: ' + sound);
		}
	}

	this.playBGM = function(sound) {
		var that = this;
		var bgm = this.library.bgm;
		// Do we have this sound?
		if (bgm[sound]) {
			// We need to destory current BGM
			if (soundManager.getSoundById('bgm')) {
				soundManager.destroySound('bgm')
			}
			// Let's make a new one
			soundManager.createSound({
				volume: this.settings.bgm_volume,
				id: 'bgm',
				url: this.settings.bgm_url + bgm[sound],
				autoLoad: true,
				autoPlay: true,
				onfinish: function() {
					// Repeat this
					that.playBGM(sound);
				}
			});
		} else {
			console.log('Invalid BGM: ' + sound);
		}
	}

	this.stopBGM = function() {
		if (soundManager.getSoundById('bgm')) {
			soundManager.destroySound('bgm')
		}
	}
	
	this.setVolume = function(type, value) {
		// TODO: Add sanity check for volume int
		if (type == 'bgm') {
			this.settings.bgm_volume = value;
			// We'll need to set the volume immediately
			// since music might be playing right now
			soundManager.setVolume('bgm', value);
		} else if (type == 'sfx') {
			this.settings.sfx_volume = value;
		}
	}

}

$(document).ready(function() {

	// Init audio
	audio = new SoundSystem();
	audio.init();
	
	// Trigger aurora song on load
	// We need to wait for soundmanager to get ready though
	soundManager.onready(function() {
		audio.playBGM('aurora');
	});

	$('.play-sfx').click(function() {
		var sound = $(this).data('sound');
		audio.playSFX(sound);
	});
	$('.play-bgm').click(function() {
		var sound = $(this).data('sound');
		audio.playBGM(sound);
	});
	$('.stop-bgm').click(function() {
		audio.stopBGM();
	});
	
	$('.adjust-sound').each(function() {
		// Init sliders
		 $(this).slider({
			orientation: 'horizontal',
			range: 'min',
			min: 0,
			max: 100,
			value: 50,
			slide: function() {
				console.log()
			}
		});
		// Set initial slider state
		var isBGM = $(this).hasClass('bgm')
		var isSFX = $(this).hasClass('sfx')
		if (isBGM) {
			$(this).slider('value', BGM_VOLUME);
			$('.current-volume.bgm').text(BGM_VOLUME);
		}
		if (isSFX) {
			$(this).slider('value', SFX_VOLUME);
			$('.current-volume.sfx').text(SFX_VOLUME);
		}
		// Bind slider change
		$(this).bind('slide slidestop', function() {
			var value = $(this).slider('value')
			var isBGM = $(this).hasClass('bgm')
			var isSFX = $(this).hasClass('sfx')
			if (isBGM) {
				audio.setVolume('bgm', value);
				$('.current-volume.bgm').text(value);
				$.cookie('bgm_volume', value);
			}
			if (isSFX) {
				audio.setVolume('sfx', value);
				$('.current-volume.sfx').text(value);
				$.cookie('sfx_volume', value);
			}
		})
	});

});

</script>

</head>

<body style="padding: 20px">
	<div class="well">
		<p>Music (<span class="current-volume bgm">50</span>):</p>
		<div class="adjust-sound bgm" style="width: 200px; margin-bottom: 15px;"></div>
		<p>Sound Effects (<span class="current-volume sfx">50</span>):</p>
		<div class="adjust-sound sfx" style="width: 200px; margin-bottom: 15px;"></div>
	</div>
	<div class="well">
		<button class="play-bgm btn" data-sound="aurora">Play Title Theme</button>	
		<button class="play-bgm btn" data-sound="mfx016">Play MFX016</button>
		<button class="play-bgm btn" data-sound="mfx042">Play MFX042</button>
		<button class="stop-bgm btn">Stop Background Music</button>
	</div>
	<div class="well">
		<button class="play-sfx btn" data-sound="pm">Play PM Sound</button>	
		<button class="play-sfx btn" data-sound="admin">Play Admin Sound</button>	
		<button class="play-sfx btn" data-sound="system">Play System Sound</button>

		<br />
		<br />

		<button class="play-sfx btn" data-sound="attack">Play Attack Sound</button>	
		<button class="play-sfx btn" data-sound="win">Play Win Sound</button>	
		<button class="play-sfx btn" data-sound="death">Play Death Sound</button>
		
		<br />
		<br />
		
		<button class="play-sfx btn" data-sound="sit">Play Sit Sound</button>
		<button class="play-sfx btn" data-sound="disappear">Play Disappear Sound</button>
		<button class="play-sfx btn" data-sound="twinkle">Play Twinkle Sound</button>

		
	</div>
</body>


</html>