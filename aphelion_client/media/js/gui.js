function rand (min, max) {
	var argc = arguments.length;
	if (argc === 0) {
		min = 0;
		max = 2147483647;
	} else if (argc === 1) {
		throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function expAtLevel(n) {
	return 20 * Math.pow(n, 3) + 30 * Math.pow(n, 2) + 100 * n;
}
/* for rect only */
Array.prototype.unique = function() {
    var a = [], l = this.length;
    for(var i=0; i<l; i++) {
        for(var j=i+1; j<l; j++)
            if (this[i].equals(this[j])) j = ++i;
        a.push(this[i]);
    }
    return a;
};

function linkify(inputText) {
    var replaceText, replacePattern1, replacePattern2, replacePattern3;

    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
	
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
    return replacedText;
}

function htmlentities(string, quote_style) {
    var hash_map = {},
        symbol = '',
        tmp_str = '',
        entity = '';
    tmp_str = string.toString();
 
    if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }
    hash_map["'"] = '&#039;';
    for (symbol in hash_map) {
        entity = hash_map[symbol];
        tmp_str = tmp_str.split(symbol).join(entity);
    }
 
    return tmp_str;
}

function get_html_translation_table (table, quote_style) {
    var entities = {},
        hash_map = {},
        decimal = 0,
        symbol = '';
    var constMappingTable = {},
        constMappingQuoteStyle = {};
    var useTable = {},
        useQuoteStyle = {};
 
    // Translate arguments
    constMappingTable[0] = 'HTML_SPECIALCHARS';
    constMappingTable[1] = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';
 
    useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';
 
    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: " + useTable + ' not supported');
        // return false;
    }
 
    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }
 
    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';
 
 
    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        hash_map[symbol] = entities[decimal];
    }
 
    return hash_map;
}

function clientView() {

	this.s = {
		$client: $('#client'),
		$disconnected: $('#disconnected')
	}
	
	this.align = function() {
		var gameOffset = $(window).height() / 2 - this.s.$client.height() / 2;
		this.s.$client.css('margin-top', (gameOffset > 0) ? gameOffset : 10);
	}
	
	this.init = function() {
		
		var that = this;

		// Initial alignment
		this.align();
	
		// Bind bar vertical alignment
		$(window).bind('resize', function() {
			that.align();
		});
		
		// Setup modals
		this.s.$disconnected.modal({
			keyboard: true,
			backdrop: true
		})

	}
	
	this.showDisconnected = function() {
		var disconnected = this.s.$disconnected;
		if (disconnected.is(':hidden')) {
			disconnected.modal('show');
		}
	}
	
}

function mainMenuView() {

	this.s = {
		$client: $('#client'),
		$mainMenu: $('#main-menu'),
		$bar: $('#main-menu .bar')
	}

	// This aligns the bar vertically
	this.alignBar = function() {
		var overlayOffset = this.s.$client.height() / 2 - this.s.$bar.outerHeight() / 2
		this.s.$bar.css('margin-top', overlayOffset)
	}

	this.init = function() {

		var that = this;
		var $mainMenu = this.s.$mainMenu;
		
		// Bind bar vertical alignment for window resize
		$(window).bind('resize', function() {
			that.alignBar();
		});
		
		// Bind the menu button events
		$mainMenu.find('.open').bind('click', function(e) {
			e.preventDefault();
			that.open($(this).data('open'));
		})
		
		// Show menu
		$mainMenu.show(0, function() {
			// Align the bar vertically again
			that.alignBar();
		});

	}
	
	this.open = function(screen) {
		var that = this;
		this.s.$mainMenu.find('.screen:visible').hide(0, function() {
			// Reset form errors and stuff
			$(this).find('.controls .help-inline').remove();
			$(this).find('.error').removeClass('error');
			$('.screen.' + screen).show(0, function() {
				// Align Main Menu bar
				that.alignBar()
				// Focus on new input
				$(this).find('input:first').focus();
			});
		});
	}

	this.die = function() {

		var $mainMenu = this.s.$mainMenu;
		
		// Cleanup events
		$mainMenu.find('.open').unbind('click');
		
		// Hide
		$mainMenu.hide();

	}

}

function gameView() {

	var self = this;

	this.s = {
		$game: $('#game'),
		$mainUI: $('#main-game-ui'),
		$announcement: $('#announcement'),
		$chatInput: $('#main-game-ui .entry input'),
		$chatInputTo: $('#main-game-ui .entry .channel'),
		$chatChannels: $('#chat-channels'),
		$switchChannels: $('#switch-channels'),
		$onlineList: $('#online-list .players'),
		$onlineCount: $('#online-list .total .count'),
		$onlineListButton: $('.open-online-list'),
		$playerContext: $('#player-context'),
		$playerStats: $('#player-stats'),
		$playerBars: $('#player-bars'),
		$viewportObjects: []
	}

	this.init = function() {
	
		this.s.$game.show();
		// Bind key events
		$(document).bind('keyup', function(e) {
		  if (e.keyCode == 27) {
			$('#game-menu').modal({
				keyboard: true,
				backdrop: true,
				show: true
			});
		  }
		});
		
		this.s.$chatInput.focus();
		
		// disable scrolling with arrow keys
		$(document).keydown(function(e) {
			if(e.keyCode >= 37 && e.keyCode <= 40) {
				e.preventDefault();
			}
		});

		this.s.$chatInput.blur(function(e) {
			self.s.$chatInput.focus();
		});
		
		this.s.$chatInput.bind('keyup', function(e) {
			if(e.keyCode == 13 && $.trim($(this).val()) != '') {
				$('#client').trigger({
					type: 'chat',
					msg: $(this).val()
				});
				$(this).val('');
			}
		});
		
		// Bind input pattern matching
		this.s.$chatInput.bind('keyup', function(e) {
			var value = $(this).val();
			var patterns = {
				'Global': /^~/,
				'System': /^#/,
				'Whisper': /^@/
			}
			var destination;
			for (pattern in patterns) {
				if (value.match(patterns[pattern])) {
					destination = pattern;
				}
			}
			self.s.$chatInputTo.text(destination ? destination : 'Public');
		});
		
		// Bind Main UI stuff
		this.s.$mainUI.find('.menu button').bind('click', function() {
			var screen = $(this).data('to');
			self.switchMainUI(screen);
		});
		
		// Bind chat channel switch
		this.s.$switchChannels.find('.channel').bind('click', function() {
			var channel = $(this).data('target');
			self.switchChatChannel(channel);
		});
		
		this.s.$onlineListButton.click(function() {
			$('#client').trigger('onlinelist');
		});

		// Sound stuff
		$('.adjust-sound').each(function() {
			// Init sliders
			 $(this).slider({
				orientation: 'horizontal',
				range: 'min',
				min: 0,
				max: 100,
				value: 50
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
	}
	
	
	// Toggle Main UI screens
	this.switchMainUI = function(screen) {
		var screens = this.s.$mainUI.find('.screen');
		screens.hide().filter('#' + screen).show();
		// Keep chat at bottom when switching screens
		this.scrollChatDown();
	}
	
	// Contextual messages for player
	this.addContextMessage = function(message, meta) {
		if (message.length > 0) {
			var $text = $('<span class="message">')
				.text(message);
			var $item = $('<li class="message" />')
				// Append wrapped message
				.append($text) 
				// Hide after a few seconds
				.delay(3500).fadeOut();
			this.s.$playerContext.append($item);
			this.addChatMessage({ username: 'System' }, message, 'system', 'icon-warning-sign')
		} else {
			console.log('Looks like a bad context message bro.')
		}
	}

	this.setPlayerStat = function(stat, value) {
		if (stat.match(/^[-\sa-zA-Z]+$/)) {
			this.s.$playerStats.find('.' + stat).text(value);
		}
	}
	
	this.setPlayerBar = function(bar, percent) {
		if (bar.match(/^[-\sa-zA-Z]+$/)) {
			this.s.$playerBars
				.find('.' + bar)
				.find('.value').animate({
					width: Math.floor(percent) + '%'
				}, 200);
		}
	}

	this.populateOnlineList = function(list) {
		this.s.$onlineList.html('');
		for(var i = 0;i < list.length;++i) {
			this.s.$onlineList.append('<li class="player"><span class="icon column"><i class="icon-user icon-white"></i></span><span class="name column">' + list[i].username + '</span><span class="title column"></span><span class="level column">' + list[i].level + '</span><span class="wins column"></span></li>');
		}
		this.s.$onlineCount.html(list.length);
	}
	
	this.scrollChatDown = function(channel) {
		var selector = channel ? channel : 'messages';
		console.log(selector);
		var $messages = this.s.$chatChannels.find('.' + selector);
		$messages.each(function() {
			$(this).prop({
				scrollTop: $(this).prop('scrollHeight')
			});
		});
	}
	
	this.switchChatChannel = function(request) {
		var $channelButtons = this.s.$switchChannels.find('.channel');
		var $channels = this.s.$chatChannels.find('.messages');
		$channels.each(function() {
			if ($(this).hasClass(request) && request.match(/^[-\sa-zA-Z]+$/)) {
				// Set button state
				$channelButtons.removeClass('active');
				$channelButtons.filter('.' + request).addClass('active');
				// Actually show the channel
				$channels.hide();
				$(this).show();
				// Scroll down chats
				self.scrollChatDown();
			}
		});
	}
	
	this.addChatMessage = function(player, msg, channel, icon) {
		if (this.s.$chatChannels.find('.' + channel).length > 0) {
			var $channel = this.s.$chatChannels.find('.' + channel);
		} else {
			var $channel = this.s.$chatChannels.find('.local');
		}
		var iconClass = icon ? icon : 'icon-comment';
        var atBottom = $channel[0].scrollHeight - $channel.scrollTop() <= $channel.outerHeight();
		$channel.append(
			'<li class="message">'
				+ '<span class="type">'
					+ '<i class="' + iconClass + ' icon-white"></i>'
				+ '</span>'
				+ '<span class="user">'
					+ player.username
				+ '</span> '
				+'<span class="text">'
					+ linkify(htmlentities(msg, 'ENT_NOQUOTES')) 
				+ '</span>'
			+ '</li>');
		if (atBottom) {
			this.scrollChatDown(channel);
		}
		if (player.canvas !== undefined) {
			this.addBubble(player, msg);
		}
	}

	this.addBroadcast = function(p, msg) {
		var $messages = this.s.$chatChannels.find('.messages');
		var atBottom = $messages[0].scrollHeight - $messages.scrollTop() <= $messages.outerHeight();        
		$messages.append(
			'<li class="message broadcast">'
				+ '<span class="type">'
					+ '<i class="icon-exclamation-sign icon-white"></i>'
				+ '</span>'
				+ '<span class="user">'
					+ p.username
				+ '</span> '
				+'<span class="text">'
					+ linkify(htmlentities(msg, 'ENT_NOQUOTES')) 
				+ '</span>'
			+ '</li>');
		if(atBottom) {
			$messages.prop({scrollTop: $messages.prop('scrollHeight')});
		}
		this.addBubble(player, msg, true);
	}
	
	this.addAnnouncement = function(name, message) {
		var $announcement = this.s.$announcement;
		var $messages = this.s.$chatChannels.find('.system');
		var atBottom = $messages[0].scrollHeight - $messages.scrollTop() <= $messages.outerHeight();        
		$messages.append(
			'<li class="message announcement">'
				+ '<span class="type">'
					+ '<i class="icon-exclamation-sign icon-white"></i>'
				+ '</span>'
				+ '<span class="user">'
					+ name
				+ '</span> '
				+'<span class="text">'
					+ htmlentities(message, 'ENT_NOQUOTES') 
				+ '</span>'
			+ '</li>');
		$announcement
			.stop(true)
			.show()
			.html(message)
			.animate({opacity:1}, 2500)
			.fadeOut(500);
		if(atBottom) {
			$messages.prop({scrollTop: $messages.prop('scrollHeight')});
		}
	}

	this.addBubble = function(player, msg, broadcast) {
		broadcast = broadcast == undefined ? false : broadcast;
		if(player.bubble !== undefined) {
			player.bubble.remove();
			this.s.$viewportObjects.splice(this.s.$viewportObjects.indexOf(player.bubble), 1);
		}
		var bubble = $('<div class="chat-bubble' + (broadcast ? ' broadcast' : '') + '"><span class="text">' + linkify(htmlentities(msg, "ENT_NOQUOTES")) + '</span><div class="tip"><span></span></div></div>');
		bubble.player = player;
		player.bubble = bubble;
		bubble.data('needsToBePositioned', false);
		$('#viewport').append(bubble);
		this.s.$viewportObjects.push(bubble);
		player.drawName = false;
		player.flagForDraw();
		bubble.css('marginLeft', Math.round(player.dx + player.img.width / 2 - bubble.width() / 2 + map.marginLeft - 5));
		bubble.css('marginTop', Math.round(player.dy + 200 - bubble.height() + map.marginTop - 7));
		var self = this;
		setTimeout(function() {
			if(player.bubble == bubble) {
				player.drawName = true;
				player.flagForDraw();
				player.bubble = undefined;
				bubble.remove();
				self.s.$viewportObjects.splice(self.s.$viewportObjects.indexOf(bubble), 1);
			}
		}, 2200);
	}
	
	this.repositionViewportObjects = function(force) {
		for(var i = 0;i < this.s.$viewportObjects.length;++i) {
			if(force || this.s.$viewportObjects[i].data('needsToBePositioned')) {
				var mL = Math.round(this.s.$viewportObjects[i].player.dx + this.s.$viewportObjects[i].player.img.width / 2 - this.s.$viewportObjects[i].width() / 2 + map.marginLeft - 5);
				var mT = Math.round(this.s.$viewportObjects[i].player.dy + 200 - this.s.$viewportObjects[i].height() + map.marginTop - 7);
				this.s.$viewportObjects[i].css('marginLeft', mL);
				this.s.$viewportObjects[i].css('marginTop', mT);
				this.s.$viewportObjects[i].data('needsToBePositioned', false);
			}
		}
	}
	
	this.die = function() {
		this.s.$game.hide();
		// Cleanup game buttons
		$(document).unbind('keyup');
		this.s.$chatInput.unbind('keyup');
	}
	
}


function loadingView() {

	this.s = {
		$loading: $('#loading'),
		$progress: $('#loading .progress'),
		$message: $('#loading .message')
	}
	
	this.init = function() {
		this.alignProgress();
		return this;
	}

	this.show = function() {
		var that = this;
		this.s.$loading.show(0, function() {
			that.alignProgress();
		});
		return this;
	}
	
	this.hide = function() {
		this.s.$loading.hide();
		this.reset();
		return this;
	}
	
	this.setMessage = function(msg) {
		this.s.$message.html(msg);
		return this;
	}
	
	this.reset = function() {
		this.s.$progress.find('span').width(0);
		return this;
	}
	
	this.updateProgress = function(percent) {
		this.s.$progress.find('span').animate({
            width: percent + '%'
        }, 100);
		return this;
	}
	
	this.alignProgress = function() {
		var offset = this.s.$loading.height() / 2 - this.s.$progress.outerHeight() / 2;
		this.s.$progress.css('margin-top', offset);
		return this;
	}
	
}