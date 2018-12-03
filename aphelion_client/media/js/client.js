function Client() {
	this.socket;
	this.GUI = new GUI();
	this.GUI.init();
	this.last_ping;
	this.player;
	this.map;
	this.keyobj = new KeyObject();
	this.canvasElement = document.getElementById('game-screen');
	this.c = document.getElementById('game-screen').getContext('2d');
	this.mapData = ['[[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330,"object":41},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233,"object":102},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":335},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":242},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":248},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":330},{"type":337},{"type":335},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":241},{"type":249},{"type":249},{"type":249,"object":66},{"type":249},{"type":249},{"type":243},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":241},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":280},{"type":259},{"type":259},{"type":259},{"type":259},{"type":259},{"type":261},{"type":330},{"type":335},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":247},{"type":246},{"type":246},{"type":246},{"type":246},{"type":246},{"type":244},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233,"object":101},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":335},{"type":332},{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":259},{"type":259},{"type":279},{"type":245},{"type":280},{"type":259},{"type":261},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":68},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233,"object":12},{"type":233},{"type":233},{"type":233},{"type":330},{"type":338},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233,"object":27},{"type":233},{"type":233,"object":101},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233,"object":97},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":322},{"type":331},{"type":326},{"type":338},{"type":338},{"type":327},{"type":331,"object":266},{"type":323},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":261},{"type":233},{"type":233},{"type":233},{"type":233,"object":29},{"type":330},{"type":338},{"type":338},{"type":335},{"type":338},{"type":335},{"type":338},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":261},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":331},{"type":331},{"type":331},{"type":331,"object":38},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":326},{"type":338},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338},{"type":327},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331}],[{"type":337},{"type":337},{"type":337},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":337},{"type":335},{"type":338},{"type":338},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":338},{"type":335},{"type":338}],[{"type":337},{"type":337},{"type":337},{"type":337},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338,"object":34},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":338},{"type":335},{"type":338,"object":235},{"type":335},{"type":338},{"type":338}],[{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":325},{"type":338},{"type":335},{"type":338},{"type":338},{"type":336},{"type":338},{"type":328},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333}],[{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":330},{"type":338},{"type":338},{"type":335},{"type":336},{"type":338},{"type":338},{"type":332},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266}],[{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":272},{"type":321},{"type":333},{"type":325},{"type":338},{"type":336},{"type":328},{"type":333},{"type":324},{"type":253},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245}],[{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":248},{"type":245},{"type":277},{"type":266},{"type":287},{"type":330},{"type":336},{"type":336},{"type":332},{"type":286},{"type":266},{"type":278},{"type":242},{"type":239},{"type":239},{"type":239},{"type":248},{"type":245},{"type":245},{"type":242},{"type":239},{"type":239},{"type":239}],[{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245,"object":26},{"type":245},{"type":245},{"type":272},{"type":330},{"type":335},{"type":336},{"type":332},{"type":253},{"type":245},{"type":245},{"type":240},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249}],[{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":281},{"type":239},{"type":248},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":242},{"type":282},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249}],[{"type":246},{"type":246},{"type":246},{"type":283},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":284},{"type":244},{"type":245},{"type":245},{"type":247},{"type":283},{"type":249},{"type":249}],[{"type":259},{"type":259},{"type":279},{"type":247},{"type":246},{"type":283},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249,"object":237},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":285},{"type":259},{"type":279},{"type":240},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":335},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":247},{"type":283},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":285},{"type":279},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245,"object":238},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233,"object":222},{"type":233},{"type":233,"object":29},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":281},{"type":239},{"type":239},{"type":239},{"type":239},{"type":282},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249}]]', '[[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":159},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":211,"object":161},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218,"object":170},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":170},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":210},{"type":215}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":214},{"type":218}],[{"type":380},{"type":212,"object":158},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":160},{"type":380},{"type":212},{"type":216}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380,"object":480},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380,"object":481},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380},{"type":380},{"type":380}]]'];
	this.loadedBasics = false;
	this.acceptInput = true;
	
	//this.canvasElement.width = $('#game-screen').width();
	//this.canvasElement.height = $('#game-screen').height();
	
	var self = this;
	
	$('#client').bind('submit-login', function() {
		self.socket.emit('login', {
			username: $('#main-menu #login-username').val(),
			password: $('#main-menu #login-password').val()
		});
	});
	
	$('#client').bind('submit-register', function() {
		self.socket.emit('register', {
			username: $('#main-menu #register-username').val(),
			password: $('#main-menu #register-password').val(),
			email: $('#main-menu #register-email').val(),
			gender: $('#main-menu form input[name="gender"]:checked').val()
		});
	});
	
	$('#client').bind('chat', function(data) {
		if(data.msg.substr(0, 6) == '$toall' && self.player.admin >= 2) {
			self.socket.emit('chat', {msg: data.msg});
		} else if(data.msg.substr(0, 7) == '#nowall' && self.player.admin >= 3) {
			self.player.nowall = true;
		} else {
			if(data.msg.substr(0, 1) == '~') {
				
			} else {
				self.GUI.gameGUI.addChatMessage(self.map.getPlayerByID(self.player.id), data.msg, 'local');
			}
			self.socket.emit('chat', {msg: data.msg});
		}
	});
	
	$('#client').bind('attack', function() {
		self.socket.emit('attack', {});
	});
	
	$('#client').bind('turn', function(data) {
		self.socket.emit('turn', {dir: data.dir});
	});
	
	$('#client').bind('walk', function(data) {
		self.socket.emit('walk', {direction: data.dir});
	});
	
	$('#client').bind('attack monster', function() {
		self.socket.emit('attack monster', {});
	});
	
	$('#client').bind('arenaAttack', function() {
		self.socket.emit('arena attack', {});
	});
	
	$('#client').bind('viewport', function(data) {
		self.GUI.gameGUI.repositionViewportObjects(data.force);
	});
	
	$('#client').bind('onlinelist', function() {
		self.socket.emit('online list', {});
	});
}

Client.prototype.loadMap = function(mapID) {
	this.GUI.loadingGUI.show();
	this.GUI.loadingGUI.setMessage('Loading..');
	
	var mapData = JSON.parse(this.mapData[mapID]);
	var neededTiles = [0], neededObjects = [];
	for(var yCoord = 0;yCoord < mapData.length;++yCoord) {
		for(var xCoord = 0;xCoord < mapData[0].length;++xCoord) {
			if(mapData[yCoord] !== undefined && mapData[yCoord][xCoord] !== undefined && neededTiles.indexOf(mapData[yCoord][xCoord].type) == -1) {
				neededTiles.push(mapData[yCoord][xCoord].type);
			}
			if(mapData[yCoord] !== undefined && mapData[yCoord][xCoord] !== undefined && mapData[yCoord][xCoord].object !== undefined && neededObjects.indexOf(mapData[yCoord][xCoord].object) == -1) {
				neededObjects.push(mapData[yCoord][xCoord].object);
			}
		}
	}
	
	ResourceLoader.addResourceSpecific('tile_sheet.png', 64, 32, neededTiles);
	if(!this.loadedBasics) {
		ResourceLoader.addResource('basesheetm_0.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetm_1.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetf_0.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetf_2.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetf_1.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetf_5.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetf_4.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetf_6.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetm_2.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetm_4.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetm_5.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetm_6.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetm_3.png', 34, 77, 24);
		ResourceLoader.addResource('basesheetf_3.png', 34, 77, 24);
		//ResourceLoader.addResource('nite.png', 192, 128, 12);
		ResourceLoader.addResource('well.png', 63, 100, 1);
		ResourceLoader.addResource('sandcastle.png', 84, 98, 1);
		ResourceLoader.addResource('bogoman.png', 45, 70, 14);
		ResourceLoader.addResource('mummy.png', 50, 80, 14);
		ResourceLoader.addResource('centaur.png', 70, 130, 14);
		ResourceLoader.addResource('chaos.png', 45, 75, 14);
		ResourceLoader.addResource('pig.png', 48, 46, 14);
		ResourceLoader.addResource('sheep.png', 50, 45, 14);
		ResourceLoader.addResource('hg.png', 64, 90, 14);
		ResourceLoader.addResource('gorilla.png', 87, 81, 14);
		ResourceLoader.addResource('apozen.png', 172, 180, 14);
		ResourceLoader.addResource('gnoll.png', 100, 100, 14);
		ResourceLoader.addResource('tileoverlay.png', 64, 32, 5);
		ResourceLoader.addResource('healthbars.png', 39, 7, 5);
		ResourceLoader.addResource('numbers.png', 9, 12, 20);
	}
		
	for(var i = 0;i < neededObjects.length;++i) {
		ResourceLoader.addResource('image' + neededObjects[i] + '.png');
	}
		
	var t = setInterval(function() {
		self.GUI.loadingGUI.updateProgress(Math.floor((ResourceLoader.resources.length / ResourceLoader.resource_num) * 100));
	}, 100);
	
	var self = this;
	if(!this.loadedBasics) {
		ResourceLoader.onload = function() {
			clearInterval(t);
			
			self.map = new Map(mapData.length, mapData[0].length, mapID);
			// tmp
			map = self.map;
			
			self.socket.emit('done loading', {});
		}
	} else {
		self.acceptInput = false;
		self.player.clearState();
		ResourceLoader.onload = function() {
			clearInterval(t);
			
			self.map.destroy();
			self.map = new Map(mapData.length, mapData[0].length, mapID);
			map = self.map;
			
			self.socket.emit('map init', {});
		}
	}
	
	if(!this.loadedBasics) {
		this.loadedBasics = true;
	}
}

Client.prototype.connect = function() {
	this.GUI.connect();
	var trans = useFlashSockets ? ['flashsocket'] : ['websocket', 'flashsocket'];
	this.socket = io.connect('DOMAIN', {port: 8078, reconnect: false, transports: trans});
	
	var self = this;
	this.socket.on('connect', function(data) {
		self.GUI.connected();
		self.socket.emit('init', {});
	});
	
	this.socket.on('register success', function(data) {
		self.GUI.mainMenuGUI.open('after-register');
	});
	
	this.socket.on('register error', function(data) {
		self.GUI.registerError(data.error);
	});
	
	this.socket.on('login success', function(data) {
		self.GUI.mainMenuGUI.die();
		
		audio.playBGM('mfx016');
		
		Benchmark();
		
		ResourceLoader();
		
		self.loadMap(data.mapID);
	});
	
	this.socket.on('init', function(data) {
		self.GUI.loadingGUI.hide();
		self.GUI.gameGUI.init();
		
		self.keyobj = new KeyObject();
		console.log('im init');
		setInterval('keyListener()', 1000 / 60);
		
		self.player = new Player(data.player.username, data.player.gender, data.player.skin, data.player.x, data.player.y, data.player.health, data.player.maxHealth, true);
		self.player.id = data.player.id;
		self.player.dir = data.player.dir;
		self.player.admin = data.player.admin;
		self.map.addPlayer(self.player, true);
		// tmp
		player = self.player;
		
		self.GUI.gameGUI.setPlayerStat('experience', data.player.exp);
		self.GUI.gameGUI.setPlayerBar('experience', ((data.player.exp - expAtLevel(data.player.level)) / (expAtLevel(data.player.level + 1) - expAtLevel(data.player.level))) * 100);
		self.GUI.gameGUI.setPlayerStat('level', data.player.level);
		self.GUI.gameGUI.setPlayerBar('health', (data.player.health / data.player.maxHealth) * 100);
		
		for(var i = 0;i < data.players.length;++i) {
			if(data.players[i].id == data.player.id) {
				continue;
			}
			var p = new Player(data.players[i].username, data.players[i].gender, data.players[i].skin, data.players[i].x, data.players[i].y, data.players[i].health, data.players[i].maxHealth, false);
			p.id = data.players[i].id;
			p.dir = data.players[i].dir;
			self.map.addPlayer(p);
		}
		
		for(var i = 0;i < data.monsters.length;++i) {
			var m = new NPC(data.monsters[i].x, data.monsters[i].y, data.monsters[i].maxHealth, data.monsters[i].health, data.monsters[i].type);
			m.id = data.monsters[i].id;
			self.map.addMonster(m);
		}
		
		//self.map.addObject(new MapObject('well', 8, 4));
		
		self.map.draw();
		
		//self.GUI.gameGUI.addChatMessage(self.map.monsters[0], 'Arrrrggg... hey ' + self.player.username);
		
		var pingTimer = setInterval(function() {
			var d = new Date();
			self.last_ping = d.getTime();
			self.socket.emit('ping', {});
		}, 1000);
		
		var mainTimer = setInterval(main, 1000 / 10);
	});
	
	this.socket.on('load map', function(data) {
		self.acceptInput = true;
		self.GUI.loadingGUI.hide();
	
		self.map.addPlayer(self.player, true);
		self.map.warpPlayer(self.player.id, self.player.xTile, self.player.yTile);
		
		for(var i = 0;i < data.players.length;++i) {
			if(data.players[i].id == data.player.id) {
				continue;
			}
			var p = new Player(data.players[i].username, data.players[i].gender, data.players[i].skin, data.players[i].x, data.players[i].y, data.players[i].health, data.players[i].maxHealth, false);
			p.id = data.players[i].id;
			p.dir = data.players[i].dir;
			self.map.addPlayer(p);
		}
		
		self.player.flagForDraw();
		
		for(var i = 0;i < data.monsters.length;++i) {
			var m = new NPC(data.monsters[i].x, data.monsters[i].y, data.monsters[i].maxHealth, data.monsters[i].health, data.monsters[i].type);
			m.id = data.monsters[i].id;
			self.map.addMonster(m);
		}
		
		self.map.draw();
	});
	
	this.socket.on('increase health', function(data) {
		self.player.health = data.player.health;
		self.GUI.gameGUI.setPlayerBar('health', (data.player.health / data.player.maxHealth) * 100);
	});
	
	this.socket.on('global chat', function(data) {
		self.GUI.gameGUI.addChatMessage({username: data.username}, data.msg, 'global');
	});
	
	this.socket.on('ping', function(data) {
		var d = new Date();
		$('.ping .value').text((d - self.last_ping) + 'ms');
	});
	
	this.socket.on('alert', function(data) {
		alert(data.msg);
	});
	
	this.socket.on('online list', function(data) {
		self.GUI.gameGUI.populateOnlineList(data.list);
	});
	
	this.socket.on('arena announcement', function(data) {
		audio.playSFX('death');
		self.GUI.gameGUI.addContextMessage(data.msg);
	});
	
	this.socket.on('arena stats', function(data) {
		self.GUI.gameGUI.addChatMessage({ username: 'System' }, data.msg, 'local')
	});
	
	this.socket.on('warp player', function(data) {
		var p = self.map.getPlayerByID(data.player.id);
		if(!p.isSelf || self.map.id == data.player.mapID) {
			self.map.warpPlayer(data.player.id, data.player.x, data.player.y);
		} else {
			p.xTile = data.player.x;
			p.yTile = data.player.y;
			self.loadMap(data.player.mapID);
		}
	});
	
	this.socket.on('player enter', function(data) {
		console.log(data.player.username + ' entered!');
		var p = new Player(data.player.username, data.player.gender, data.player.skin, data.player.x, data.player.y, data.player.health, data.player.maxHealth, false);
		p.id = data.player.id;
		p.dir = data.player.dir;
		self.map.addPlayer(p);
	});
	
	this.socket.on('change skin', function(data) {
		self.map.getPlayerByID(data.player.id).setSkin(data.player.skin);
	});
		
	this.socket.on('monster enter', function(data) {
		var m = new NPC(data.monster.x, data.monster.y, data.monster.maxHealth, data.monster.health, data.monster.type);
		m.id = data.monster.id;
		self.map.addMonster(m);
	});
	
	this.socket.on('monster walk', function(data) {
		self.map.getMonsterByID(data.monster.id).walk(data.monster.dir);
	});
		
	this.socket.on('monster remove', function(data) {
		self.map.getMonsterByID(data.monster.id).dead();
		//self.map.removeMonster(data.monster.id);
	});
	
	this.socket.on('monster attacked', function(data) {
		self.map.getMonsterByID(data.monster.id).attacked(data.monster.health);
	});
	
	this.socket.on('monster attack', function(data) {
		self.map.getMonsterByID(data.monster.id).attack(data.monster.dir);
		var p = self.map.getPlayerByID(data.player.id);
		p.attacked(data.player.health);
		if (p.isSelf) {
			self.GUI.gameGUI.setPlayerBar('health', (data.player.health / data.player.maxHealth) * 100);
		}
	});
	
	this.socket.on('gain exp', function(data) {
		self.GUI.gameGUI.addContextMessage('You gained ' + data.exp + ' exp!');
		self.GUI.gameGUI.setPlayerBar('experience', ((data.total - expAtLevel(data.level)) / (expAtLevel(data.level + 1) - expAtLevel(data.level))) * 100);
		self.GUI.gameGUI.setPlayerStat('experience', data.total);
	});
	
	this.socket.on('level up', function(data) {
		self.GUI.gameGUI.addContextMessage('You have reached level ' + data.level + '!');
		self.GUI.gameGUI.setPlayerStat('level', data.level);
	});
		
	this.socket.on('player turn', function(data) {
		self.map.getPlayerByID(data.player.id).turn(data.player.dir);
	});
		
	this.socket.on('player walk', function(data) {
		self.map.getPlayerByID(data.player.id).walk(data.player.dir);
	});
		
	this.socket.on('player attack', function(data) {
		self.map.getPlayerByID(data.player.id).attack();
	});
		
	this.socket.on('player remove', function(data) {
		self.map.removePlayer(data.player.id);
	});
	
	this.socket.on('login error', function(data) {
		self.GUI.loginError(data.error);
	});
	
	this.socket.on('chat', function(data) {
		self.GUI.gameGUI.addChatMessage(self.map.getPlayerByID(data.user_id), data.msg, 'local');
	});
	
	this.socket.on('broadcast', function(data) {
		audio.playSFX('admin');
		self.GUI.gameGUI.addBroadcast(data.player, data.msg);
	});
	
	this.socket.on('disconnect', function(data) {
		self.GUI.clientGUI.showDisconnected();
	});
}

function GUI() {
	this.clientGUI = new clientView();
	this.mainMenuGUI = new mainMenuView();
	this.gameGUI = new gameView();
	this.loadingGUI = new loadingView();
}

GUI.prototype.init = function() {
	this.clientGUI.init();
	this.mainMenuGUI.init();
	this.loadingGUI.init();
}

GUI.prototype.registerError = function(err) {
	$('#main-menu form.register').find('.message').html(err).addClass('error');
}

GUI.prototype.loginError = function(err) {
	$('#main-menu form.login').find('.message').html(err).addClass('error');
}

GUI.prototype.connect = function() {
	this.loadingGUI.setMessage('Connecting..');
	this.loadingGUI.updateProgress(100);
	this.loadingGUI.show();
}

GUI.prototype.connected = function() {
	this.loadingGUI.hide();
}

// I'm a terrible horrible person.
var map, c, player, objectdata, keyobj, canvasElement, audio;

objectdata = {
		/*barrel : {
			filename : 'barrel.png',
			width : 40,
			height : 57
		},
		tree : {
			filename : 'tree.png',
			width : 146,
			height : 226
		}*/
		well : {
			filename: 'well.png',
			width: 63,
			height: 100
		}
	};

function main() {
	map.draw();
}

function keyListener() {
	if(!client.acceptInput) {
		return;
	}
	if(keyobj.keyDown(17)) {
		if(player.attack()) {
			$('#client').trigger({
				type: 'attack'
			});
		}
	}
	
	if(keyobj.keyDown(40)) {
		downCounter['down']++;
		downCounter['up'] = downCounter['left'] = downCounter['right'] = 0;
	} else if(keyobj.keyDown(39)) {
		downCounter['right']++;
		downCounter['up'] = downCounter['left'] = downCounter['down'] = 0;
	} else if(keyobj.keyDown(38)) {
		downCounter['up']++;
		downCounter['down'] = downCounter['left'] = downCounter['right'] = 0;
	} else if(keyobj.keyDown(37)) {
		downCounter['left']++;
		downCounter['down'] = downCounter['up'] = downCounter['right'] = 0;
	}
	
	if(keyobj.keyDown(40) && downCounter['down'] > 6) {
		player.walk(3);
	} else if(keyobj.keyDown(40)) {
		if(player.turn(3)) {
			$('#client').trigger({
				type: 'turn',
				dir: 3
			});
		}
	}
	
	if(keyobj.keyDown(39) && downCounter['right'] > 6) {
		player.walk(0);
	} else if(keyobj.keyDown(39)) {
		if(player.turn(0)) {
			$('#client').trigger({
				type: 'turn',
				dir: 0
			});
		}
	}
	
	if(keyobj.keyDown(38) && downCounter['up'] > 6) {
		player.walk(1);
	} else if(keyobj.keyDown(38)) {
		if(player.turn(1)) {
			$('#client').trigger({
				type: 'turn',
				dir: 1
			});
		}
	}
	
	if(keyobj.keyDown(37) && downCounter['left'] > 6) {
		player.walk(2);
	} else if(keyobj.keyDown(37)) {
		if(player.turn(2)) {
			$('#client').trigger({
				type: 'turn',
				dir: 2
			});
		}
	}
}

var client;
$(function() {
	audio = new SoundSystem();
	audio.init();
	
	soundManager.onready(function() {
		audio.playBGM('aurora');
	});
	
	client = new Client();
	client.connect();
	
	map = client.map;
	c = client.c;
	player = client.player;
	keyobj = client.keyobj;
	canvasElement = client.canvasElement;
});