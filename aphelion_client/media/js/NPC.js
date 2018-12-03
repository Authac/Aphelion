function NPC(x, y, mhp, hp, sheet) {
	this.xTile = x;
	this.yTile = y;
	this.dir = 0;
	this.canWalk = true;
	this.isWalking = false;
	this.sheet = sheet;
	this.id = -1;
	this.username = 'Sheep';
	this.healthbar = new HealthBar(0, 0);
	this.drawHealthBar = false;
	this.maxHealth = mhp;
	this.health = hp;
	this.healthbar.health = this.health / this.maxHealth;
	
	this.setVars(ResourceLoader.getResource(this.sheet).getFrame(0), x, y, c);
	
	this.flagForDraw();
	//this.setVars(ResourceLoader.getResource('fakebase.png'), 0, 0, 54, 106, this.x, this.y, 54, 106);
	
	/*c.save();
	c.translate(canvasElement.width - (canvasElement.width / 2 - x) - (canvasElement.width / 2 - x - this.img.width), 0);
	c.scale(-1.0, 1.0);
	this.draw();
	c.restore();*/
	
	this.removeHealthBarTimer;
	
	this.idleAnimationTimer;
	var self = this;
}
NPC.prototype = new ImageDisplayObject;

NPC.prototype.enableWalk = function() {
	this.canWalk = true;
}

NPC.prototype.flagForDraw = function() {
	// username text
	if(this.drawHealthBar) {
		var uRect = this.healthbar.rect();
		map.markAreaForClear(uRect);
	}
	//c.strokeRect(uRect.x, uRect.y, uRect.width, uRect.height);
	ImageDisplayObject.prototype.flagForDraw.call(this);
}

NPC.prototype.draw = function(clear) {
	if(this.drawHealthBar) {
		this.healthbar.x = this.dx + (this.img.width / 2) - 19;
		this.healthbar.y = this.dy + 200 - 10;
		this.healthbar.draw();
	}
	ImageDisplayObject.prototype.draw.call(this, clear);
}

NPC.prototype.idleAnimation = function(bool) {
	if(bool) {
		var hack = this, aniSeq = 0;
		this.idleAnimationTimer = setInterval(function() {
			switch(hack.dir) {
				case 0:
					hack.img = ResourceLoader.getResource(this.sheet).getFrame(aniSeq);
				break;
				case 1:
					hack.img = ResourceLoader.getResource(this.sheet).getFrame(aniSeq + 4);
				break;
				case 2:
					hack.img = ResourceLoader.getResource(this.sheet).getFrame(aniSeq + 4);
				break;
				case 3:
					hack.img = ResourceLoader.getResource(this.sheet).getFrame(aniSeq);
				break;
			}
			hack.flagForDraw();
			//map.flagTiles((hack.xTile - 4) < 0 ? 0 : hack.xTile - 4, (hack.yTile - 4) < 0 ? 0 : hack.yTile - 4, 7, 7);
			if(++aniSeq >= 4) {
				aniSeq = 0;
			}
		}, 500);
	} else {
		
	}
}

NPC.prototype.attacked = function(newHealth) {
	var attack = this.health - newHealth;
	this.health -= attack;
	this.healthbar.health = this.health / this.maxHealth;
	this.drawHealthBar = true;
	if(this.removeHealthBarTimer !== undefined) {
		clearTimeout(this.removeHealthBarTimer);
		this.removeHealthBarTimer = undefined;
	}
	var self = this;
	this.removeHealthBarTimer = setTimeout(function() {
		self.drawHealthBar = false;
		map.removeQueue.push(self.healthbar.rect());
		clearTimeout(self.removeHealthBarTimer);
		self.removeHealthBarTimer = undefined;
	}, 3000);
}

NPC.prototype.dead = function() {
	var self = this;
	var t = setInterval(function() {
		self.alpha -= 1.0 / 15;
		if (self.alpha < 1.0 / 15) {
			self.alpha = 0;
			clearInterval(t);
			map.removeMonster(self.id);
		}
	}, 400 / 45);
}

NPC.prototype.setStill = function() {
	switch(this.dir) {
		case 0:
			this.nextCurrentStill = ResourceLoader.getResource(this.sheet).getFrame(0);
			this.nextScaleX = -1;
		break;
		case 1:
			this.nextCurrentStill = ResourceLoader.getResource(this.sheet).getFrame(1);
			this.nextScaleX = -1;
		break;
		case 2:
			this.nextCurrentStill = ResourceLoader.getResource(this.sheet).getFrame(1);
			this.nextScaleX = 1;
		break;
		case 3:
			this.nextCurrentStill = ResourceLoader.getResource(this.sheet).getFrame(0);
			this.nextScaleX = 1;
		break;
	}
}

NPC.prototype.turn = function(dir) {
	if(true || !this.canWalk) {
		//return false;
	}
	this.dir = dir;
	switch(dir) {
		case 0:
			this.img = ResourceLoader.getResource(this.sheet).getFrame(0);
			this.scaleX = -1;
		break;
		case 1:
			this.img = ResourceLoader.getResource(this.sheet).getFrame(1);
			this.scaleX = -1;
		break;
		case 2:
			this.img = ResourceLoader.getResource(this.sheet).getFrame(1);
			this.scaleX = 1;
		break;
		case 3:
			this.img = ResourceLoader.getResource(this.sheet).getFrame(0);
			this.scaleX = 1;
		break;
	}
	this.flagForDraw();
}

NPC.prototype.walk = function(dir) {
	if(!this.canWalk) {
		//console.log('i was told not to walk so soon');
		//return false;
	}
	this.dir = dir;
	
	this.turn(dir);
	
	var oldX = this.xTile, oldY = this.yTile;
	
	switch(dir) {
		case 0: ++oldX; break;
		case 1: --oldY; break;
		case 2: --oldX; break;
		case 3: ++oldY; break;
	}
	
	if(!map.pointIsWalkable(oldX, oldY)) {
		console.log('occupod');
		//return;
	}
	
	this.xTile = oldX;
	this.yTile = oldY;
	
	var self = this;
	
	this.setStill();
	switch(dir) {
		case 0:
			this.animate(ResourceLoader.getResource(this.sheet), [-3, -4, -5, -6], 450, 1);
			this.move(this.nextToX + 32, this.nextToY + 16, 450, function() {
				self.enableWalk();
			}); 
		break;
		case 1:
			this.animate(ResourceLoader.getResource(this.sheet), [-7, -8, -9, -10], 450, 1);
				this.move(this.nextToX + 32, this.nextToY - 16, 450, function() {
				self.enableWalk();
			});
		break;
		case 2:
			this.animate(ResourceLoader.getResource(this.sheet), [7, 8, 9, 10], 450, 1);
			this.move(this.nextToX - 32, this.nextToY - 16, 450, function() {
				self.enableWalk();
			});
		break;
		case 3:
			this.animate(ResourceLoader.getResource(this.sheet), [3, 4, 5, 6], 450, 1);
			this.move(this.nextToX - 32, this.nextToY + 16, 450, function() {
				self.enableWalk();
			});
		break;
	}
	
	this.canWalk = false;
}

NPC.prototype.attack = function(dir) {
	if( !this.canWalk) {
		//return false;
	}
	
	this.canWalk = false;
	
	this.turn(dir);
	
	var self = this;
	this.setStill();
	switch(this.dir) {
		case 0:
			this.animate(ResourceLoader.getResource(this.sheet), [-11, -12], 550, 1, function() {
				self.enableWalk();
			});
		break;
		case 1:
			this.animate(ResourceLoader.getResource(this.sheet), [-13, -14], 550, 1, function() {
				self.enableWalk();
			});
		break;
		case 2:
			this.animate(ResourceLoader.getResource(this.sheet), [13, 14], 550, 1, function() {
				self.enableWalk();
			});
		break;
		case 3:
			this.animate(ResourceLoader.getResource(this.sheet), [11, 12], 550, 1, function() {
				self.enableWalk();
			});
		break;
	}
	
	return true;
}
