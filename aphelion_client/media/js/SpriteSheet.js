function SpriteSheet(sheet, fw, fh) {
	this.sheet = sheet;
	this.frameWidth = fw;
	this.frameHeight = fh;
	this.frames = [];
}

SpriteSheet.prototype.loadFrames = function(s, f, callback) {
	var sheetCols = this.sheet.width / this.frameWidth;
	var loadedFramesCounter = 0;
	
	for(var i = s;i < f;++i) {
		this.loadFrame(i, function() {
			if(++loadedFramesCounter >= f) {
				callback();
			}
		});
	}
}

SpriteSheet.prototype.loadFrame = function(n, callback) {
	var sheetCols = this.sheet.width / this.frameWidth;
	var row = Math.floor(Math.abs(n) / sheetCols);
	var col = Math.abs(n) - (row * sheetCols);
	
	var myCanvas = document.createElement('canvas');
	var myCanvasContext = myCanvas.getContext('2d');
	
	myCanvas.width = this.frameWidth;
	myCanvas.height = this.frameHeight;
	
	myCanvasContext.drawImage(
		this.sheet,
		col * this.frameWidth,
		row * this.frameHeight,
		this.frameWidth,
		this.frameHeight,
		0,
		0,
		this.frameWidth,
		this.frameHeight
	);
	
	var imgObject = new Image();
	imgObject.onload = function() {
		if(callback !== undefined) {
			callback();
		}
	}
	imgObject.src = myCanvas.toDataURL();
	this.frames[n] = imgObject;
}

SpriteSheet.prototype.getFrame = function(n) {
	return this.frames[n];
}