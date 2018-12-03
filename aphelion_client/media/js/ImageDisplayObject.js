function ImageDisplayObject(image, dx, dy, canvas) {
	this.setVars(image, dx, dy, canvas);
}

ImageDisplayObject.prototype.flagForDraw = function() {
	this.hasToBeDrawn = true;
	if(map !== undefined) {
		map.markAreaForClear(this.rect());
	}
}

ImageDisplayObject.prototype.rect = function() {
	return new Rectangle(this.dx, this.dy + 200, this.img.width, this.img.height);
}

ImageDisplayObject.prototype.setVars = function(image, dx, dy, canvas) {
	this.img = image;
	this.dx = dx;
	this.dy = dy;
	this.canvas = canvas;
	this.framesToAnimate;
	this.hasToBeDrawn = false;
	this.scaleX = 1;
	this.alpha = 1.0;
	this.highlight = false;
	this.currentlyAnimating = false;
	this.nextdx;
	this.nextdy;
	this.nextToX = dx;
	this.nextToY = dy;
	this.moveTimer;
	this.animationTimer = null;
	this.nextCurrentStill;
	this.nextScaleX;
}

/*
	Takes another ImageDisplayObject and returns whether or not they overlap
*/
ImageDisplayObject.prototype.overlaps = function(o) {
	return (this.dx < (o.dx + o.img.width) && (this.dx + this.img.width) > o.dx && this.dy + 200 < (o.dy + 200 + o.img.height) && (this.dy + 200 + this.img.height) > o.dy);
}

ImageDisplayObject.prototype.contains = function(x, y) {
	return (x > this.dx && x < this.dx + this.img.width && y > this.dy + 200 && y < this.dy + 200 + this.img.height);
}

/* to do : maybe add a force parameter */
ImageDisplayObject.prototype.draw = function(clear, force) {
	force = force === undefined ? false : force;
	if (this.hasToBeDrawn) {
		if (map !== undefined && map.viewport !== undefined)
			var viewport = map.viewport();
		if (force || map === undefined || map.viewport === undefined || this.rect().overlaps(viewport)) {
			if (clear == undefined || clear) {
				this.clear();
			}
			if (this.alpha != 1.0) {
				this.canvas.globalAlpha = this.alpha;
			}
			if (this.scaleX == -1) {
				this.canvas.save();
				this.canvas.translate(canvasElement.width - (canvasElement.width / 2 - this.dx) - (canvasElement.width / 2 - this.dx - this.img.width), 0);
				this.canvas.scale(-1.0, 1.0);
				this.canvas.drawImage(
					this.img,
					Math.round(this.dx),
					Math.round(this.dy + 200)
				);
				this.canvas.restore();
			} else {
				this.canvas.drawImage(
					this.img,
					Math.round(this.dx),
					Math.round(this.dy + 200)
				);
				if (this.highlight) {
					//c.fillRect(this.dx + 20, this.dy + 10, 10, 10);
				}
			}
			this.canvas.globalAlpha = 1.0;
			this.hasToBeDrawn = false;
		}
	}
}

ImageDisplayObject.prototype.clear = function() {
	this.canvas.clearRect(this.dx, this.dy + 200, this.img.width, this.img.height);
}

/* stops animations/movements */
ImageDisplayObject.prototype.clearState = function() {
	if(this.moveTimer !== undefined) {
		this.moveTimer = clearInterval(this.moveTimer);
		this.flagForDraw();
		this.dx = this.nextToX;
		this.dy = this.nextToY;
		this.flagForDraw();
	}
	if(this.animationTimer != null) {
		clearInterval(this.animationTimer);
		this.animationTimer = null;
		this.img = this.nextCurrentStill;
		this.scaleX = this.nextScaleX;
		this.flagForDraw();
	}
}

ImageDisplayObject.prototype.move = function(toX, toY, dur, callback) {
	if(this.moveTimer !== undefined) {
		this.moveTimer = clearInterval(this.moveTimer);
		this.flagForDraw();
		this.dx = this.nextToX;
		this.dy = this.nextToY;
		this.flagForDraw();
	}
	var framesToAnimate = 8;
	this.nextToX = toX;
	this.nextToY = toY;
	this.xStep = Math.floor((toX - this.dx) / framesToAnimate);
	this.yStep = Math.floor((toY - this.dy) / framesToAnimate);
	var self = this;
	this.moveTimer = setInterval(function() {
		//self.flagForDraw();
		//map.clearNecessaryPlayers();
		var r1 = self.rect();
		if(Math.abs(self.dx - toX) < Math.abs(self.xStep) || Math.abs(self.dy - toY) < Math.abs(self.yStep)) {
			self.dx = toX;
			self.dy = toY;
		} else {
			self.dx += self.xStep;
			self.dy += self.yStep;
		}
		//self.flagForDraw();
		//map.clearNecessaryPlayers();
		var r2 = self.rect();
		
		map.markAreaForClear(new Rectangle(Math.min(r1.x, r2.x), Math.min(r1.y, r2.y), Math.max(r1.x + r1.width, r2.x + r2.width), Math.max(r1.y + r1.height, r2.y + r2.height)));
		
		if(self.dx == toX && self.dy == toY) {
			self.moveTimer = clearInterval(self.moveTimer);
			if(callback != undefined) {
				callback();
			}
		}
	}, dur / framesToAnimate);
}

// yes, I know I'm a bad person for putting this here.
ImageDisplayObject.prototype.animate = function(sheet, frames, dur, count, callback) {
	if(count == undefined) {
		count = 1;
	}
	if(this.animationTimer != null) {
		clearInterval(this.animationTimer);
		this.animationTimer = null;
		this.img = this.nextCurrentStill;
		this.scaleX = this.nextScaleX;
		this.flagForDraw();
	}
	
	var currentCount = 0, currentFrame = 0, self = this, currentStill = this.img, currentScaleX = this.scaleX;
	
	var animationHandler = function() {
		self.img = sheet.getFrame(Math.abs(frames[currentFrame]) - 1);
		self.scaleX = frames[currentFrame] < 0 ? -1 : 1;
		self.flagForDraw();
		if(++currentFrame >= frames.length) {
			currentFrame = 0;
			if(++currentCount >= count && count != 0) {
				clearInterval(self.animationTimer);
				self.animationTimer = null;
				setTimeout(function() {
					self.img = self.nextCurrentStill;
					self.scaleX = self.nextScaleX;
					self.flagForDraw();
					if(callback != undefined) {
						callback();
					}
				}, dur / frames.length);
			}
		}
	};
	
	/* start with one */
	animationHandler();
	
	this.animationTimer = setInterval(animationHandler, dur / frames.length);
}