function Map(width, height, id) {
	this.mapElement = document.getElementById('game-background');
	this.tilesCanvas = document.getElementById('game-background').getContext('2d');
	
	this.canvasElement = document.getElementById('game-screen');
	this.c = document.getElementById('game-screen').getContext('2d');
	// assumes tile width = 32, height = 16
	this.mapElement.width = (32 * height) + (32 * width);
	this.mapElement.height = (16 * height) + (16 * width) + 200;
	
	this.canvasElement.width = (32 * height) + (32 * width);
	this.canvasElement.height = (16 * height) + (16 * width) + 200;
	
	$('canvas#game-background').css('marginTop', "-200px");
	$('canvas#game-screen').css('marginTop', "-200px");
	
	/*var f = document.getElementById('game-middle').getContext('2d');
	var selector = new ImageDisplayObject(ResourceLoader.getResource('tileoverlay.png').getFrame(0), 0, 0, this.tilesCanvas);
	var mousedown = false;
		
	$('canvas#game-screen').mousedown(function() {
		mousedown = true;
	});
		
	$('canvas#game-screen').mouseup(function() {
		mousedown = false;
	});
	
	$('canvas#game-screen').mousemove(function(e) {
		var offset = $('div#game.view').offset();
		var clientX = e.clientX - offset.left - map.marginLeft;
		var clientY = e.clientY - offset.top - map.marginTop;
			for(var yCoord = 0;yCoord < map.height;++yCoord) {
				for(var xCoord = 0;xCoord < map.width;++xCoord) {
					if(map.tiles[yCoord][xCoord].contains(clientX, clientY)) {
						if((clientY - (map.tiles[yCoord][xCoord].dy + 200)) < (Map.tileHeight / 2)) {
							if(clientX - map.tiles[yCoord][xCoord].dx > (clientY - (map.tiles[yCoord][xCoord].dy + 200) - Map.tileHeight / 2) * (-Map.tileWidth / Map.tileHeight) && clientX - map.tiles[yCoord][xCoord].dx < (clientY - (map.tiles[yCoord][xCoord].dy + 200) + Map.tileHeight / 2) * (Map.tileWidth / Map.tileHeight)) {
								selector.clear();
								selector.dx = map.tiles[yCoord][xCoord].dx;
								selector.dy = map.tiles[yCoord][xCoord].dy;
								map.flagAround(xCoord, yCoord);
								return;
							}
						} else {
							if(clientX - map.tiles[yCoord][xCoord].dx > (clientY - (map.tiles[yCoord][xCoord].dy + 200) - Map.tileHeight / 2) * (Map.tileWidth / Map.tileHeight) && clientX - map.tiles[yCoord][xCoord].dx < (clientY - (map.tiles[yCoord][xCoord].dy + 200) - ((3 * Map.tileHeight) / 2)) * (-Map.tileWidth / Map.tileHeight)) {
								selector.clear();
								selector.dx = map.tiles[yCoord][xCoord].dx;
								selector.dy = map.tiles[yCoord][xCoord].dy;
								map.flagAround(xCoord, yCoord);
								return;
							}
						}
					}
				}
			}
		});*/
	
	this.id = id;
	this.width = width;
	this.height = height;
	this.marginLeft = 0;
	this.marginTop = -200;
	this.hasToBePositioned = false;
	Map.tileHeight = 32;
	Map.tileWidth = 64;
	this.tiles = [];
	this.players = [];
	this.monsters = [];
	this.objects = [];
	this.otherObjects = [];
	this.removeQueue = [];
	this.areasToClear = [];
	this.animationTimer;
	this.flatObjects = [];
	this.moveCallback = undefined;
	//this.mapData = JSON.parse('[[{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":486}],[{"type":477},{"type":488,"object":484},{"type":488},{"type":488,"object":444},{"type":488},{"type":488,"object":482},{"type":488},{"type":488},{"type":488,"object":431},{"type":486}],[{"type":477},{"type":488,"object":475},{"type":494,"object":420},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494}],[{"type":477},{"type":488},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494}],[{"type":477},{"type":488},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494}],[{"type":477},{"type":488},{"type":494},{"type":494},{"type":494},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489}],[{"type":477},{"type":488,"object":487},{"type":494},{"type":494},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488,"object":431},{"type":488}],[{"type":477},{"type":488},{"type":494},{"type":494},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488,"object":475}],[{"type":477},{"type":488},{"type":494},{"type":494},{"type":495},{"type":488},{"type":488},{"type":488,"object":444},{"type":488,"object":488},{"type":488}],[{"type":485},{"type":485},{"type":494},{"type":494},{"type":495},{"type":485},{"type":485},{"type":485},{"type":485},{"type":485}]]');
	//this.mapData = JSON.parse('[[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":245},{"type":245},{"type":270},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":372},{"type":233},{"type":253},{"type":245},{"type":245},{"type":245},{"type":270},{"type":233},{"type":233,"object":371},{"type":233},{"type":233},{"type":233,"object":493},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233,"object":372},{"type":233},{"type":233},{"type":233},{"type":233,"object":68},{"type":253},{"type":245},{"type":245},{"type":245},{"type":270},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":297}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":101},{"type":233},{"type":233,"object":68},{"type":253},{"type":245},{"type":245},{"type":245},{"type":270},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233,"object":495},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":245},{"type":245},{"type":270},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":529},{"type":253},{"type":245},{"type":245},{"type":245},{"type":270,"object":523},{"type":233},{"type":233},{"type":233,"object":102},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":255},{"type":265},{"type":278},{"type":245},{"type":245},{"type":245},{"type":266},{"type":266},{"type":287},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":265},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":272},{"type":233,"object":529},{"type":233},{"type":233,"object":66},{"type":233,"object":66},{"type":233},{"type":233}],[{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":274},{"type":257},{"type":250},{"type":245},{"type":245},{"type":277},{"type":267},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266}],[{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":233},{"type":233,"object":1},{"type":251},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245}],[{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":265},{"type":265},{"type":278},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245}],[{"type":258},{"type":258},{"type":258},{"type":258},{"type":258},{"type":279},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":523},{"type":253},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":280},{"type":257},{"type":257},{"type":257},{"type":257},{"type":257},{"type":257}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":250},{"type":258},{"type":258},{"type":258},{"type":258},{"type":258},{"type":258},{"type":260},{"type":262},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":102},{"type":233},{"type":233,"object":529},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":495},{"type":233},{"type":233},{"type":233,"object":526},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":371}],[{"type":233},{"type":233,"object":493},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":101},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":296}]]');
	//this.mapData = JSON.parse('[[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488,"object":444},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488,"object":342},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468,"object":479},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":494},{"type":494},{"type":494},{"type":494},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488,"object":150},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468,"object":476},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468,"object":477},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488,"object":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488,"object":341},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":483},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":483},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":483},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494}],[{"type":477},{"type":488},{"type":488},{"type":488,"object":482},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":483},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494},{"type":494}],[{"type":477},{"type":488},{"type":488,"object":150},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":483},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489},{"type":489}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488,"object":444},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468,"object":475},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488,"object":484},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}],[{"type":477},{"type":488},{"type":488},{"type":488},{"type":488},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468,"object":475},{"type":469},{"type":486}],[{"type":485},{"type":485},{"type":485},{"type":485},{"type":485},{"type":483},{"type":483},{"type":483},{"type":483},{"type":495},{"type":488},{"type":488},{"type":488},{"type":488},{"type":488},{"type":467},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":468},{"type":469},{"type":486}]]');
	//this.mapData = JSON.parse('[[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330,"object":41},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233,"object":102},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":335},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":242},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":248},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":330},{"type":337},{"type":335},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":241},{"type":249},{"type":249},{"type":249,"object":66},{"type":249},{"type":249},{"type":243},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":241},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":280},{"type":259},{"type":259},{"type":259},{"type":259},{"type":259},{"type":261},{"type":330},{"type":335},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":247},{"type":246},{"type":246},{"type":246},{"type":246},{"type":246},{"type":244},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233,"object":101},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":335},{"type":332},{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":259},{"type":259},{"type":279},{"type":245},{"type":280},{"type":259},{"type":261},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":68},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233,"object":12},{"type":233},{"type":233},{"type":233},{"type":330},{"type":338},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233,"object":27},{"type":233},{"type":233,"object":101},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233,"object":97},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":322},{"type":331},{"type":326},{"type":338},{"type":338},{"type":327},{"type":331,"object":266},{"type":323},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":261},{"type":233},{"type":233},{"type":233},{"type":233,"object":29},{"type":330},{"type":338},{"type":338},{"type":335},{"type":338},{"type":335},{"type":338},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":261},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":331},{"type":331},{"type":331},{"type":331,"object":38},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":326},{"type":338},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338},{"type":327},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331}],[{"type":337},{"type":337},{"type":337},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":337},{"type":335},{"type":338},{"type":338},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":338},{"type":335},{"type":338}],[{"type":337},{"type":337},{"type":337},{"type":337},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338,"object":34},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":338},{"type":335},{"type":338,"object":235},{"type":335},{"type":338},{"type":338}],[{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":325},{"type":338},{"type":335},{"type":338},{"type":338},{"type":336},{"type":338},{"type":328},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333}],[{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":330},{"type":338},{"type":338},{"type":335},{"type":336},{"type":338},{"type":338},{"type":332},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266}],[{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":272},{"type":321},{"type":333},{"type":325},{"type":338},{"type":336},{"type":328},{"type":333},{"type":324},{"type":253},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245}],[{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":248},{"type":245},{"type":277},{"type":266},{"type":287},{"type":330},{"type":336},{"type":336},{"type":332},{"type":286},{"type":266},{"type":278},{"type":242},{"type":239},{"type":239},{"type":239},{"type":248},{"type":245},{"type":245},{"type":242},{"type":239},{"type":239},{"type":239}],[{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245,"object":26},{"type":245},{"type":245},{"type":272},{"type":330},{"type":335},{"type":336},{"type":332},{"type":253},{"type":245},{"type":245},{"type":240},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249}],[{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":281},{"type":239},{"type":248},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":242},{"type":282},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249}],[{"type":246},{"type":246},{"type":246},{"type":283},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":284},{"type":244},{"type":245},{"type":245},{"type":247},{"type":283},{"type":249},{"type":249}],[{"type":259},{"type":259},{"type":279},{"type":247},{"type":246},{"type":283},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249,"object":237},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":285},{"type":259},{"type":279},{"type":240},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":335},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":247},{"type":283},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":285},{"type":279},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245,"object":238},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233,"object":222},{"type":233},{"type":233,"object":29},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":281},{"type":239},{"type":239},{"type":239},{"type":239},{"type":282},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249}]]');
	this.mapData = JSON.parse(client.mapData[this.id]);
	var flatObjects = [26, 27, 29, 30, 31, 32, 33, 35, 157, 158, 159, 160, 161, 162, 163, 164, 170, 243, 245, 246, 247, 248, 249, 250];
	var o = undefined;
	for(var yCoord = 0;yCoord < this.height;++yCoord) {
		this.tiles[yCoord] = [];
		for(var xCoord = 0;xCoord < this.width;++xCoord) {
			if(this.mapData[yCoord] !== undefined && this.mapData[yCoord][xCoord] !== undefined) {
				this.tiles[yCoord][xCoord] = new ImageDisplayObject(ResourceLoader.getResource('tile_sheet.png').getFrame(this.mapData[yCoord][xCoord].type), (this.height - 1 - yCoord + xCoord) * (Map.tileWidth / 2), (xCoord + yCoord) * (Map.tileHeight / 2), this.tilesCanvas);
				this.tiles[yCoord][xCoord].flagForDraw();
				if(this.mapData[yCoord][xCoord].object !== undefined && flatObjects.indexOf(this.mapData[yCoord][xCoord].object) == -1) {
					this.addObject(new MapObject('image' + this.mapData[yCoord][xCoord].object + '.png', xCoord, yCoord));
				} else if(flatObjects.indexOf(this.mapData[yCoord][xCoord].object) != -1) {
					o = new ImageDisplayObject(ResourceLoader.getResource('image' + this.mapData[yCoord][xCoord].object + '.png').getFrame(0), 0, 0, this.tilesCanvas);
					o.xTile = xCoord;
					o.yTile = yCoord;
					o.dx = (this.height - 1 - o.yTile + o.xTile) * (Map.tileWidth / 2) + Map.tileWidth / 2 - o.img.width / 2;
					o.dy = (o.xTile + o.yTile) * (Map.tileHeight / 2) + Map.tileHeight - o.img.height;
					this.flatObjects.push(o);
				}
				this.tiles[yCoord][xCoord].draw(false, true);
				if(o !== undefined) {
					o.flagForDraw();
					o.draw(false, true);
					o = undefined;
				}
			} else {
				this.tiles[yCoord][xCoord] = new ImageDisplayObject(ResourceLoader.getResource('tile_sheet.png').getFrame(0), (this.height - 1 - yCoord + xCoord) * (Map.tileWidth / 2), (xCoord + yCoord) * (Map.tileHeight / 2), this.tilesCanvas);
				this.tiles[yCoord][xCoord].flagForDraw();
				this.tiles[yCoord][xCoord].draw(false);
			}
		}
	}
}

/*
 animates the map by moving it over time
*/
Map.prototype.move = function(moveX, moveY, dur, callback) {
	/* Stolen from ImageDisplayObject, a lazy hack */
	var framesToAnimate = 8;//, toX = parseInt($('canvas#bg').css('marginLeft').substr(0, $('canvas#bg').css('marginLeft').length - 2)) + moveX, toY = parseInt($('canvas#bg').css('marginTop').substr(0, $('canvas#bg').css('marginTop').length - 2)) + moveY;
	var toX = this.marginLeft + moveX, toY = this.marginTop + moveY;
	
	this.xStep = (moveX) / framesToAnimate;
	this.yStep = (moveY) / framesToAnimate;
	var self = this;
	this.moveCallback = callback;
	this.animationTimer = setInterval(function() {
		if(Math.abs(self.marginLeft - toX) < Math.abs(self.xStep) || Math.abs(self.marginTop - toY) < Math.abs(self.yStep)) {
			self.marginLeft = toX;
			self.marginTop = toY;
			self.hasToBePositioned = true;
			player.dx = -toX;
			player.dy = -toY;
			player.flagForDraw();
		} else {
			self.marginLeft += self.xStep;
			self.marginTop += self.yStep;
			self.hasToBePositioned = true;
			player.dx -= self.xStep;
			player.dy -= self.yStep;
			player.flagForDraw();
		}
		
		if(self.marginLeft == toX && self.marginTop == toY) {
			clearInterval(self.animationTimer);
			self.animationTimer = undefined;
			if(callback != undefined) {
				callback();
			}
		}
	}, dur / framesToAnimate);
}

Map.prototype.addPlayer = function(p, self) {
	self = self !== undefined ? self : false;
	this.players.push(p);
	this.otherObjects.push(p.usernameLabel);
	this.otherObjects.push(p.healthbar);
	if (self) {
		// calculate the map position relative to the player
		this.marginLeft = -((this.height - 1 - p.yTile + p.xTile) * (Map.tileWidth / 2) + (Map.tileWidth / 2 - p.img.width / 2)) + 463;
		this.marginTop = -200 + (16 * (5 - p.yTile)) + (16 * (9 - p.xTile));
		this.hasToBePositioned = true;
		
		// calculate player's position on the canvas
		p.dx = 463 - map.marginLeft;
		p.dy = -23 - map.marginTop;
		
		p.nextToX = p.dx;
		p.nextToY = p.dy;
		
		// flag anything that needs to be updated to be drawn
		this.flagObjectsRecursiveRect(p.rect());
	} else {
		this.addNPC(p);
	}
}

// return the rectangle viewport
Map.prototype.viewport = function() {
	return new Rectangle(-this.marginLeft, -this.marginTop, 960, 400);
}

Map.prototype.flagAround = function(x, y) {
	for(var i = x - 1;i <= x + 1;++i) {
		for(var j = y - 1;j <= y + 1;++j) {
			if(this.pointOnMap(j, i)) {
				this.tiles[j][i].hasToBeDrawn = true;
			}
		}
	}
}

Map.prototype.addMonster = function(m) {
	this.monsters.push(m);
	this.otherObjects.push(m.healthbar);
	this.addNPC(m);
}

// add an NPC to the map
Map.prototype.addNPC = function(p) {
	// do some isometric calculations
	p.dx = (this.height - 1 - p.yTile + p.xTile) * (Map.tileWidth / 2) + (Map.tileWidth / 2 - p.img.width / 2);
	p.dy = (p.xTile + p.yTile) * (Map.tileHeight / 2) - (p.img.height - 30);
	
	p.nextToX = p.dx;
	p.nextToY = p.dy;
	
	this.flagObjectsRecursiveRect(p.rect());
}

// check if a monster is at a certain point (x, y)
Map.prototype.monsterAtPoint = function(x, y) {
	for(var i = 0;i < this.monsters.length;++i) {
		if(this.monsters[i].xTile == x && this.monsters[i].yTile == y) {
			return true;
		}
	}
	return false;
}

// check if a player is at a certain point (x, y)
Map.prototype.playerAtPoint = function(x, y) {
	for(var i = 0;i < this.players.length;++i) {
		if(this.players[i].xTile == x && this.players[i].yTile == y) {
			return true;
		}
	}
	return false;
}

Map.prototype.removePlayer = function(pid) {
	var p = this.getPlayerByID(pid);
	this.players.splice(this.players.indexOf(p), 1);
	this.otherObjects.splice(this.otherObjects.indexOf(p.usernameLabel), 1);
	this.markAreaForClear(p.rect());
	this.markAreaForClear(p.usernameLabel.rect());
	this.removeQueue.push(p); //p.clear();
}

Map.prototype.removeMonster = function(mid) {
	var m = this.getMonsterByID(mid);
	this.monsters.splice(this.monsters.indexOf(m), 1);
	this.otherObjects.splice(this.otherObjects.indexOf(m.healthbar), 1);
	this.markAreaForClear(m.healthbar.rect());
	this.markAreaForClear(m.rect());
	this.removeQueue.push(m);//m.clear();
}

// warp a player to a specific location
Map.prototype.warpPlayer = function(pid, x, y) {
	var p = this.getPlayerByID(pid);
	p.xTile = x;
	p.yTile = y;
	if(p.isSelf) {
		if(this.animationTimer !== undefined) {
			this.animationTimer = clearInterval(this.animationTimer);
			p.canWalk = true;
		}
		this.marginLeft = -((this.height - 1 - p.yTile + p.xTile) * (Map.tileWidth / 2) + (Map.tileWidth / 2 - p.img.width / 2)) + 463;
		this.marginTop = -200 + (16 * (5 - p.yTile)) + (16 * (9 - p.xTile));
		this.hasToBePositioned = true;
		
		p.flagForDraw();
		
		p.dx = 463 - map.marginLeft;
		p.dy = -23 - map.marginTop;
		
		p.nextToX = p.dx;
		p.nextToY = p.dy;
		
		p.flagForDraw();
	} else {
		p.clearState();
		p.flagForDraw();
		
		p.dx = (this.height - 1 - p.yTile + p.xTile) * (Map.tileWidth / 2) + (Map.tileWidth / 2 - p.img.width / 2);
		p.dy = (p.xTile + p.yTile) * (Map.tileHeight / 2) - (p.img.height - 30);
		
		p.nextToX = p.dx;
		p.nextToY = p.dy;
		
		p.flagForDraw();
	}
}
// add an object to the map
Map.prototype.addObject = function(o) {
	this.objects.push(o);
	
	// isometric calculations
	o.dx = (this.height - 1 - o.yTile + o.xTile) * (Map.tileWidth / 2) + Map.tileWidth / 2 - o.img.width / 2;
	o.dy = (o.xTile + o.yTile) * (Map.tileHeight / 2) + Map.tileHeight - o.img.height;
}

// get a player by an ID
Map.prototype.getPlayerByID = function(id) {
	for(var i = 0;i < this.players.length;++i) {
		if(this.players[i].id == id) {
			return this.players[i];
		}
	}
	return false;
}
// get a monster by an ID
Map.prototype.getMonsterByID = function(id) {
	for(var i = 0;i < this.monsters.length;++i) {
		if(this.monsters[i].id == id) {
			return this.monsters[i];
		}
	}
	return false;
}

// check if a point is within the map bounds
Map.prototype.pointOnMap = function(x, y) {
	return (x >= 0 && y >= 0 && x < this.width && y < this.height);
}

// check if a tile can be walked onto
Map.prototype.pointIsWalkable = function(x, y) {
	return this.pointOnMap(x, y) && !this.objectOnPoint(x, y);
}

// clear any objects at a certain point
Map.prototype.clearPlayersAtPoint = function(x, y) {
	var playersAndObjects = this.players.concat(this.objects).concat(this.monsters);
	for(var i = 0;i < playersAndObjects.length;++i) {
		if(playersAndObjects[i].xTile == x && playersAndObjects[i].yTile == y) {
			if(playersAndObjects[i].hasToBeDrawn) {
				playersAndObjects[i].clear();
			}
		}
	}
	for(var i = 0;i < this.removeQueue.length;++i) {
		this.removeQueue[i].clear();
	}
	this.removeQueue = [];
}

Map.prototype.drawPlayersAtPoint = function(x, y) {
	var playersAndObjects = this.players.concat(this.objects).concat(this.monsters);
	//console.log(this.otherObjects);
	for(var i = 0;i < playersAndObjects.length;++i) {
		if(playersAndObjects[i].xTile == x && playersAndObjects[i].yTile == y) {
			playersAndObjects[i].draw(false);
		}
	}
}

Map.prototype.objectOnPoint = function(x, y) {
	var playersAndObjects = this.players.concat(this.objects).concat(this.monsters).concat(this.flatObjects);
	for(var i = 0;i < playersAndObjects.length;++i) {
		if(playersAndObjects[i].xTile == x && playersAndObjects[i].yTile == y) {
			return true;
		}
	}
	return false;
}

/*
	Given an object this will recursively flag objects around it that need to be drawn due to that object
*/
Map.prototype.flagObjectsRecursive = function(obj) {
	var inRange = this.objectsInRange(obj);
	//console.log(inRange);
	for(var i = 0;i < inRange.length;++i) {
		if(!inRange[i].hasToBeDrawn) {
			inRange[i].flagForDraw();
			this.flagObjectsRecursive(inRange[i]);
		}
	}
}

/*
	Given a region on the screen that needs to be redrawn this function flags anything else that
	is touching it and so needs to be redrawn as well
*/
Map.prototype.flagObjectsRecursiveRect = function(rect) {	
	//console.log('called');
	var inRange = this.objectsInRangeRect(rect);
	var found = [rect];
	for(var i = 0;i < inRange.length;++i) {
		if(!inRange[i].hasToBeDrawn) {
			if(inRange[i].rect().overlaps(this.viewport())) {
				inRange[i].flagForDraw();
				//inRange[i].clear();
				//c.strokeRect(inRange[i].rect().x, inRange[i].rect().y, inRange[i].rect().width, inRange[i].rect().height);
				found.push(inRange[i].rect());
				found = found.concat(this.flagObjectsRecursiveRect(inRange[i].rect()));
			}
		}
	}
	return found;
}

Map.prototype.clearNecessaryPlayers = function() {
	/*var l = this.players.concat(this.monsters);
	for(var i = 0;i < l.length;++i) {
		if(l[i].hasToBeDrawn) {
			this.flagObjectsRecursive(l[i]);
		}
	}*/
	var found = [];
	for (var i = 0;i < this.areasToClear.length;++i) {
		found = found.concat(this.flagObjectsRecursiveRect(this.areasToClear[i]));
	}
	found = found.unique();
	this.areasToClear = [];
	for (var i = 0;i < found.length;++i) {
		found[i].clear();
	}
	for (var i = 0;i < this.removeQueue.length;++i) {
		this.removeQueue[i].clear();
	}
	this.removeQueue = [];
}

Map.prototype.getPlayersAtPoint = function(x, y) {
	var found = [];
	for (var i = 0;i < this.players.length;++i) {
		if (this.players[i].xTile == x && this.players[i].yTile == y) {
			found.push(this.players[i]);
		}
	}
	return found;
}

/*
	given a map object this returns any objects touching it
*/
Map.prototype.objectsInRange = function(o) {
	var found = [], playersAndObjects = this.players.concat(this.objects).concat(this.monsters).concat(this.otherObjects);
	for(var i = 0;i < playersAndObjects.length;++i) {
		if(playersAndObjects[i] == o || !playersAndObjects[i].rect().overlaps(this.viewport())) {
			continue;
		}
		if(o.overlaps(playersAndObjects[i])) {
			found.push(playersAndObjects[i]);
		}
	}
	return found;
}
/*
	given a rectangle this returns any objects touching it
*/
Map.prototype.objectsInRangeRect = function(rect) {
	var found = [], playersAndObjects = this.players.concat(this.objects).concat(this.monsters).concat(this.otherObjects);
	for(var i = 0;i < playersAndObjects.length;++i) {
		if(playersAndObjects[i].rect().equals(rect)) {
			continue;
		}
		if(rect.overlaps(playersAndObjects[i].rect())) {
			found.push(playersAndObjects[i]);
		}
	}
	return found;
}

/*
	Clears the parts that need to be cleared..
*/
Map.prototype.clear = function() {
	var l = this.players.concat(this.monsters);
	for(var i = 0;i < l.length;++i) {
		if(l[i].hasToBeDrawn) {
			this.flagObjectsRecursive(l[i]);
		}
	}
}

Map.prototype.markAreaForClear = function(rect) {
	if(rect.overlaps(this.viewport())) {
		this.areasToClear.push(rect);
	}
}
/*
	clears map animation
*/
Map.prototype.destroy = function() {
	if (this.animationTimer != undefined && this.moveCallback != undefined) {
		this.moveCallback();
	}
	this.animationTimer = clearInterval(this.animationTimer);
}

/*
	map drawing function that gets called every step
*/
Map.prototype.draw = function() {
	var x, y;
	
	//this.clear();
	// this really marks them
	this.clearNecessaryPlayers();
	/*
		if the map itself needs to be positioned i.e. if you moved we adjust it
	*/
	if(this.hasToBePositioned) {
		$('canvas#game-background').css('marginLeft', this.marginLeft + "px");
		$('canvas#game-background').css('marginTop', this.marginTop + "px");
		$('canvas#game-screen').css('marginLeft', this.marginLeft + "px");
		$('canvas#game-screen').css('marginTop', this.marginTop + "px");
		this.hasToBePositioned = false;
		$('#client').trigger({type: 'viewport', force: true});
	} else {
		$('#client').trigger({type: 'viewport', force: false});
	}
	
	
	//tmp
	/*for(var i = 0;i < this.width + this.height;++i) {
		if(this.width > this.height) {
			if(i < this.height) {
				x = 0;
				y = i;
				while(y >= 0 && x <= this.width) {
					this.clearPlayersAtPoint(x, y);
					--y;
					++x;
				}
			} else {
				x = i - this.height + 1;
				y = this.height - 1;
				while(y >= 0 && x < this.width) {
					this.clearPlayersAtPoint(x, y);
					--y;
					++x;
				}
			}
		} else {
			if(i < this.width) {
				y = 0;
				x = i;
				while(x >= 0 && y <= this.height) {
					this.clearPlayersAtPoint(x, y);
					--x;
					++y;
				}
			} else {
				y = i - this.width + 1;
				x = this.width - 1;
				while(x >= 0 && y < this.height) {
					this.clearPlayersAtPoint(x, y);
					--x;
					++y;
				}
			}
		}
	}*/
	
	/*for(var i = 0;i < this.width + this.height;++i) {
		if(this.width > this.height) {
			if(i < this.height) {
				x = 0;
				y = i;
				while(y >= 0 && x <= this.width) {
					this.tiles[y][x].draw(false);
					--y;
					++x;
				}
			} else {
				x = i - this.height + 1;
				y = this.height - 1;
				while(y >= 0 && x < this.width) {
					this.tiles[y][x].draw(false);
					--y;
					++x;
				}
			}
		} else {
			if(i < this.width) {
				y = 0;
				x = i;
				while(x >= 0 && y <= this.height) {
					this.tiles[y][x].draw(false);
					--x;
					++y;
				}
			} else {
				y = i - this.width + 1;
				x = this.width - 1;
				while(x >= 0 && y < this.height) {
					this.tiles[y][x].draw(false);
					--x;
					++y;
				}
			}
		}
	}*/
	
	

	// draw all the objects on the layer in the right order
	for(var i = 0;i < this.width + this.height;++i) {
		if(this.width > this.height) {
			if(i < this.height) {
				x = 0;
				y = i;
				while(y >= 0 && x <= this.width) {
					this.drawPlayersAtPoint(x, y);
					--y;
					++x;
				}
			} else {
				x = i - this.height + 1;
				y = this.height - 1;
				while(y >= 0 && x < this.width) {
					this.drawPlayersAtPoint(x, y);
					--y;
					++x;
				}
			}
		} else {
			if(i < this.width) {
				y = 0;
				x = i;
				while(x >= 0 && y <= this.height) {
					this.drawPlayersAtPoint(x, y);
					--x;
					++y;
				}
			} else {
				y = i - this.width + 1;
				x = this.width - 1;
				while(x >= 0 && y < this.height) {
					this.drawPlayersAtPoint(x, y);
					--x;
					++y;
				}
			}
		}
	}
}