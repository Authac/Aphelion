<html>
<head>
<title>Aphelion Map Editor</title>
<style>html, body { padding: 0; margin: 0; overflow: hidden; }
canvas { position: absolute; }
</style>
<script src="/media/js/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/media/js/ResourceLoader.js"></script>
<script type="text/javascript" src="/media/js/ImageDisplayObject.js"></script>
<script type="text/javascript" src="/media/js/SpriteSheet.js"></script>
<script type="text/javascript" src="/media/js/MapObject.js"></script>
<script type="text/javascript">
function MapObject(img, x, y, c) {
	this.xTile = x;
	this.yTile = y;
	
	this.setVars(img, x, y, c);
}
MapObject.prototype = new ImageDisplayObject;

function MapWall(img, x, y, c) {
	this.xTile = x;
	this.yTile = y;
	
	this.setVars(img, x, y, c);
}
MapWall.prototype = new ImageDisplayObject;

function Map(width, height) {
	this.mapElement = document.getElementById('c');
	this.tilesCanvas = document.getElementById('c').getContext('2d');
	this.frontElement = document.getElementById('f');
	this.objectElement = document.getElementById('o');
	
	this.mapElement.width = (32 * yHeight) + (32 * xWidth);
	this.mapElement.height = (16 * yHeight) + (16 * xWidth);
	
	this.frontElement.width = (32 * yHeight) + (32 * xWidth);
	this.frontElement.height = (16 * yHeight) + (16 * xWidth);
	
	this.objectElement.width = (32 * yHeight) + (32 * xWidth);
	this.objectElement.height = (16 * yHeight) + (16 * xWidth);

	this.width = width;
	this.height = height;
	Map.tileHeight = 32;
	Map.tileWidth = 64;
	this.tiles = [];
	this.players = [];
	this.objects = [];
	this.previews = [];
	this.otherObjects = [];
	this.tileInfo = [];
	
	for (var yCoord = 0;yCoord < this.height;++yCoord) {
		this.tiles[yCoord] = [];
		this.tileInfo[yCoord] = [];
		for (var xCoord = 0;xCoord < this.width;++xCoord) {
			this.tileInfo[yCoord][xCoord] = {type: 0};
			this.tiles[yCoord][xCoord] = new ImageDisplayObject(ResourceLoader.getResource('tile_sheet.png').getFrame(0), (this.height - 1 - yCoord + xCoord) * (Map.tileWidth / 2), (xCoord + yCoord) * (Map.tileHeight / 2) - 200, this.tilesCanvas);
			this.tiles[yCoord][xCoord].hasToBeDrawn = true;
		}
	}
	
	this.draw();
}

Map.prototype.addObject = function(o) {
	o.dx = (this.height - 1 - o.yTile + o.xTile) * (Map.tileWidth / 2) + Map.tileWidth / 2 - o.img.width / 2;
	o.dy = (o.xTile + o.yTile) * (Map.tileHeight / 2) + Map.tileHeight - o.img.height - 200;
	
	this.objects.push(o);
}

Map.prototype.addPreview = function(o) {
	if (!this.objectOnPoint(o.xTile, o.yTile)) {
		o.dx = (this.height - 1 - o.yTile + o.xTile) * (Map.tileWidth / 2) + Map.tileWidth / 2 - o.img.width / 2;
		o.dy = (o.xTile + o.yTile) * (Map.tileHeight / 2) + Map.tileHeight - o.img.height - 200;
		
		this.previews.push(o);
	}
}

Map.prototype.clearPreview = function() {
	for (var i = 0;i < this.previews.length;++i) {
		this.previews[i].clear();
	}
	this.previews = [];
}

Map.prototype.addWall = function(o) {
	o.dx = (this.height - 1 - o.yTile + o.xTile) * (Map.tileWidth / 2) + Map.tileWidth / 2 - o.img.width / 2;
	o.dy = (o.xTile + o.yTile) * (Map.tileHeight / 2) + Map.tileHeight - o.img.height - 200;
	
	this.objects.push(o);
}

Map.prototype.removeObject = function(x, y) {
	for (var i = 0;i < this.objects.length;++i) {
		if (this.objects[i].xTile == x && this.objects[i].yTile == y) {
			this.objects[i].clear();
			this.tileInfo[y][x].object = undefined;
			this.objects.splice(i, 1);
		}
	}
}

Map.prototype.objectOnPoint = function(x, y) {
	for (var i = 0;i < this.objects.length;++i) {
		if (this.objects[i].xTile == x && this.objects[i].yTile == y) {
			return true;
		}
	}
	return false;
}

Map.prototype.drawObjectsAtPoint = function(x, y) {
	for (var i = 0;i < this.objects.length;++i) {
		if (this.objects[i].xTile == x && this.objects[i].yTile == y) {
			this.objects[i].hasToBeDrawn = true;
			this.objects[i].draw(false);
		}
	}
	for (var i = 0;i < this.previews.length;++i) {
		if (this.previews[i].xTile == x && this.previews[i].yTile == y) {
			console.log('drawing preview');
			this.previews[i].hasToBeDrawn = true;
			this.previews[i].draw(false);
		}
	}
}

Map.prototype.pointOnMap = function(x, y) {
	return (x >= 0 && y >= 0 && x < this.width && y < this.height);
}

Map.prototype.flagAround = function(x, y) {
	for (var i = x - 1;i <= x + 1;++i) {
		for (var j = y - 1;j <= y + 1;++j) {
			if (this.pointOnMap(i, j)) {
				this.tiles[j][i].hasToBeDrawn = true;
			}
		}
	}
}

Map.prototype.draw = function() {
	for (var yCoord = 0;yCoord < this.height;++yCoord) {
		for (var xCoord = 0;xCoord < this.width;++xCoord) {
			//this.tiles[yCoord][xCoord].flagForDraw();
			if (this.tiles[yCoord][xCoord].hasToBeDrawn) {
				this.tiles[yCoord][xCoord].draw(false);
			}
		}
	}
	for (var i = 0;i < this.objects.length;++i) {
		this.objects[i].clear();
	}
	var x, y;
	for (var i = 0;i < this.width + this.height;++i) {
		if (this.width > this.height) {
			if (i < this.height) {
				x = 0;
				y = i;
				while(y >= 0 && x <= this.width) {
					this.drawObjectsAtPoint(x, y);
					--y;
					++x;
				}
			} else {
				x = i - this.height + 1;
				y = this.height - 1;
				while(y >= 0 && x < this.width) {
					this.drawObjectsAtPoint(x, y);
					--y;
					++x;
				}
			}
		} else {
			if (i < this.width) {
				y = 0;
				x = i;
				while(x >= 0 && y <= this.height) {
					this.drawObjectsAtPoint(x, y);
					--x;
					++y;
				}
			} else {
				y = i - this.width + 1;
				x = this.width - 1;
				while(x >= 0 && y < this.height) {
					this.drawObjectsAtPoint(x, y);
					--x;
					++y;
				}
			}
		}
	}
}

Map.prototype.export = function() {
	console.log(JSON.stringify(this.tileInfo));
}

Map.prototype.import = function(data) {
	this.tileData = JSON.parse(data);
}

var map;
var xWidth = <?php echo isset($_GET['x']) ? $_GET['x'] : 10; ?>;
var yHeight = <?php echo isset($_GET['y']) ? $_GET['y'] : 10; ?>;

var objectdata = {
	well : {
		filename: 'well.png',
		width: 63,
		height: 100
	}
};

$(function() {
	ResourceLoader();
	ResourceLoader.addResource('tile_sheet.png', 64, 32, 567);
	//ResourceLoader.addResource('nite.png', 192, 128, 12);
	//ResourceLoader.addResource('well.png', 63, 100, 1);
	ResourceLoader.addResource('tileoverlay.png', 64, 32, 5);
	//ResourceLoader.addResource('sandcastle.png', 84, 98, 1);
	ResourceLoader.addResource('erase.png', 100, 100, 1);
	for (var i = 1;i <= 538;++i) {
		ResourceLoader.addResource('image' + i + '.png');
	}
	
	for (var i = 2;i <= 1065;++i) {
		ResourceLoader.addResource('wall' + i + '.png');
	}
	
	var objects = ['well.png', 'sandcastle.png'];
	
	$('#tile-button').click(function() {
		$('#tiles').show();
		$('#walls').hide();
		$('#objects').hide();
	});
	
	$('#object-button').click(function() {
		$('#tiles').hide();
		$('#walls').hide();
		$('#objects').show();
	});
	
	$('#wall-button').click(function() {
		$('#tiles').hide();
		$('#walls').show();
		$('#objects').hide();
	});
	
	ResourceLoader.onload = function() {
		for (var i = 0;i < 567;++i) {
			var img = ResourceLoader.getResource('tile_sheet.png').getFrame(i);
			$('#tiles').append(img);
			$(img).data('tile_id', i);
			$(img).click(function() {
				selectedType = 'tile';
				var im = new Image();
				im.src = $(this).prop('src');
				currentTile = im;
				$('#selected-object').html(currentTile);
				currentTileId = $(this).data('tile_id');
			});
		}
		

		$('#erase').click(function() {
			selectedType = 'remove';
			var img = ResourceLoader.getResource('erase.png').getFrame(0);
			$('#selected-object').html(img);
		});
		
		for (var i = 1;i <= 538;++i) {
			var img = ResourceLoader.getResource('image' + i + '.png').getFrame(0);
			$('#objects').append(img);
			$(img).data('object_id', i);
			$(img).click(function() {
				tileSelected = false;
				selectedType = 'object';
				var im = new Image();
				im.src = $(this).prop('src');
				currentObject = im;
				$('#selected-object').html(currentObject);
				currentObjectId = $(this).data('object_id');
			});
		}
		
		for (var i = 2;i <= 1065;++i) {
			var img = ResourceLoader.getResource('wall' + i + '.png').getFrame(0);
			$('#walls').append(img);
			$(img).data('wall_id', i);
			$(img).click(function() {
				selectedType = 'wall';
				var im = new Image();
				im.src = $(this).prop('src');
				currentWall = im;
				$('#selected-object').html(currentWall);
				currentWallId = $(this).data('wall_id');
			});
		}
		
		map = new Map(xWidth, yHeight);
		var f = document.getElementById('f').getContext('2d');
		var ol = document.getElementById('o').getContext('2d');
		var currentTile = $('#tiles img:first');
		var currentTileId = 0;
		var currentObject, currentObjectId;
		var currentWall, currentWallId;
		var tileSelected = true;
		var selectedType = 'tile';
		var selector = new ImageDisplayObject(ResourceLoader.getResource('tileoverlay.png').getFrame(0), 0, 0, f);
		var mousedown = false;
		
		$('#tiles img:first').click();
		
		$('#o').mousedown(function() {
			mousedown = true;
		});
		
		$('#o').mouseup(function() {
			mousedown = false;
		});
		
		function processClick(xCoord, yCoord) {
			switch (selectedType) {
				case 'tile':
					map.tiles[yCoord][xCoord].clear();
					map.tiles[yCoord][xCoord].img = currentTile;
					map.tileInfo[yCoord][xCoord].type = currentTileId;
					map.flagAround(xCoord, yCoord);
				break;
				case 'object':
					if (map.objectOnPoint(xCoord, yCoord)) {
						map.removeObject(xCoord, yCoord);
					}
					map.addObject(new MapObject(currentObject, xCoord, yCoord, ol));
					map.tileInfo[yCoord][xCoord].object = currentObjectId;
				break;
				case 'wall':
					map.addObject(new MapObject(currentWall, xCoord, yCoord, ol));
					map.tileInfo[yCoord][xCoord].object = currentObjectId;
				break;
				case 'remove':
				if (map.objectOnPoint(xCoord, yCoord)) {
					map.removeObject(xCoord, yCoord);
				}
				break;
			}
			map.draw();
		}
		
		$('#o').click(function(e) {
			var clientX = e.clientX + $('#container').scrollLeft();
			var clientY = e.clientY + $('#container').scrollTop();
			
			for (var yCoord = 0;yCoord < map.height;++yCoord) {
				for (var xCoord = 0;xCoord < map.width;++xCoord) {
					if (map.tiles[yCoord][xCoord].contains(clientX, clientY)) {
						if ((clientY - (map.tiles[yCoord][xCoord].dy + 200)) < (Map.tileHeight / 2)) {
							if (clientX - map.tiles[yCoord][xCoord].dx > (clientY - (map.tiles[yCoord][xCoord].dy + 200) - Map.tileHeight / 2) * (-Map.tileWidth / Map.tileHeight) && clientX - map.tiles[yCoord][xCoord].dx < (clientY - (map.tiles[yCoord][xCoord].dy + 200) + Map.tileHeight / 2) * (Map.tileWidth / Map.tileHeight)) {
								processClick(xCoord, yCoord);
								return;
							}
						} else {
							if (clientX - map.tiles[yCoord][xCoord].dx > (clientY - (map.tiles[yCoord][xCoord].dy + 200) - Map.tileHeight / 2) * (Map.tileWidth / Map.tileHeight) && clientX - map.tiles[yCoord][xCoord].dx < (clientY - (map.tiles[yCoord][xCoord].dy + 200) - ((3 * Map.tileHeight) / 2)) * (-Map.tileWidth / Map.tileHeight)) {
								processClick(xCoord, yCoord);
								return;
							}
						}
					}
				}
			}
		});
		
		function processMove(xCoord, yCoord) {
			selector.clear();
			selector.dx = map.tiles[yCoord][xCoord].dx;
			selector.dy = map.tiles[yCoord][xCoord].dy;
			selector.hasToBeDrawn = true;
			selector.draw();
			
			switch(selectedType) {
				case 'object':
				case 'wall':
					if (selectedType == 'object') {
						var preview = new MapObject(currentObject, xCoord, yCoord, ol);
					} else {
						var preview = new MapObject(currentWall, xCoord, yCoord, ol);
					}
					preview.alpha = 0.5;
					map.clearPreview();
					map.addPreview(preview);
					map.draw();
				break;
			}
		}
		
		$('#o').mousemove(function(e) {
			var clientX = e.clientX + $('#container').scrollLeft();
			var clientY = e.clientY + $('#container').scrollTop();

			for (var yCoord = 0;yCoord < map.height;++yCoord) {
				for (var xCoord = 0;xCoord < map.width;++xCoord) {
					if (map.tiles[yCoord][xCoord].contains(clientX, clientY)) {
						if ((clientY - (map.tiles[yCoord][xCoord].dy + 200)) < (Map.tileHeight / 2)) {
							if (clientX - map.tiles[yCoord][xCoord].dx > (clientY - (map.tiles[yCoord][xCoord].dy + 200) - Map.tileHeight / 2) * (-Map.tileWidth / Map.tileHeight) && clientX - map.tiles[yCoord][xCoord].dx < (clientY - (map.tiles[yCoord][xCoord].dy + 200) + Map.tileHeight / 2) * (Map.tileWidth / Map.tileHeight)) {
								processMove(xCoord, yCoord);
								
								if (mousedown) {
									processClick(xCoord, yCoord);
								}
								
								return;
							}
						} else {
							//console.log('bottom dog');
							//console.log('position: ' + (clientX - map.tiles[yCoord][xCoord].dx));
							//console.log('lower bound: ' + (clientY - (map.tiles[yCoord][xCoord].dy + 200) +  Map.tileHeight / 2) * (-Map.tileWidth / Map.tileHeight));
							//console.log('upper bound: ' + (clientY - (map.tiles[yCoord][xCoord].dy + 200) + ((3 * Map.tileHeight) / 2)) * (Map.tileWidth / Map.tileHeight));
							//console.log('y pos: ' + (clientY - (map.tiles[yCoord][xCoord].dy + 200)));
							if (clientX - map.tiles[yCoord][xCoord].dx > (clientY - (map.tiles[yCoord][xCoord].dy + 200) - Map.tileHeight / 2) * (Map.tileWidth / Map.tileHeight) && clientX - map.tiles[yCoord][xCoord].dx < (clientY - (map.tiles[yCoord][xCoord].dy + 200) - ((3 * Map.tileHeight) / 2)) * (-Map.tileWidth / Map.tileHeight)) {
								processMove(xCoord, yCoord);
								
								if (mousedown) {
									processClick(xCoord, yCoord);
								}
								
								return;
							}
						}
					}
				}
			}
		});
	}
});
</script>
</head>

<body>
<div id="container" style="height: 400px; overflow: scroll;">
	<div style="width: 800px; height: 500px; position: relative;">
		<canvas id="c" width="100%" height="100%"></canvas>
		<canvas id="f" width="100%" height="100%"></canvas>
		<canvas id="o" width="100%" height="100%"></canvas>
	</div>
</div>
<button id="tile-button">Tiles</button> <button id="object-button">Objects</button> <button id="wall-button">Walls & Buildings</button> <button id="erase">Erase Object</button> (Click then click the object on the map)
<div style="max-height: 250px; max-width: 100%;position:absolute;bottom:0;">

	<div id="tiles" style="max-height: 250px;float: left; width: 100%;overflow-y: scroll;">
	</div>
	
	<div id="objects" style="display: none;background: #fafafa; float: left; width: 100%;overflow-y: scroll;max-height: 250px;">
	</div>
	
	<div id="walls" style="display: none;background: #fafafa; float: right; width: 100%;overflow-y: scroll;max-height: 250px;">
	</div>
	
	<div style="clear: both;"></div>

</div>
<div style="position: fixed; top: 1em; right: 1em;">Selected: <br /><span id="selected-object"></span></span></div>
</body>
</html>