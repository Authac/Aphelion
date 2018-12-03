function SoundSystem(options) {

	this.init = function() {
		var that = this;
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
				'attack-soft': 'attack-soft.mp3',
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
		// Handle GUI
		// TODO: Move + Clean this
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
			if ($(this).hasClass('bgm')) {
				$(this).slider('value', that.settings.bgm_volume);
				$('.current-volume.bgm').text(that.settings.bgm_volume);
			}
			if ($(this).hasClass('sfx')) {
				$(this).slider('value', that.settings.sfx_volume);
				$('.current-volume.sfx').text(that.settings.sfx_volume);
			}
			// Bind slider change
			$(this).bind('slide slidestop', function() {
				var value = $(this).slider('value')
				if ($(this).hasClass('bgm')) {
					audio.setVolume('bgm', value);
					$('.current-volume.bgm').text(value);
					$.cookie('bgm_volume', value, { expires: 365 });
				}
				if ($(this).hasClass('sfx')) {
					audio.setVolume('sfx', value);
					$('.current-volume.sfx').text(value);
					$.cookie('sfx_volume', value, { expires: 365 });
				}
			})
		});
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