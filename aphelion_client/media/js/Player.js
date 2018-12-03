function Player(username, gender, skin, x, y, health, maxHealth, isSelf) {
	this.xTile = x;
	this.yTile = y;
	this.dir = 3;
	this.canWalk = true;
	this.isWalking = false;
	this.isSelf = isSelf == undefined ? true : isSelf;
	this.id = -1;
	this.username = username;
	this.drawName = true;
	this.isSitting = false;
	this.skin = skin;
	this.resource = ResourceLoader.getResource('basesheet' + ((gender == 0) ? 'm' : 'f') + '_' + this.skin + '.png');
	this.gender = gender;
	this.healthbar = new HealthBar(0, 0);
	this.health = health;
	this.maxHealth = maxHealth;
	this.healthbar.health = this.health / this.maxHealth;
	this.drawHealthBar = false;
	this.removeHealthBarTimer;
	this.nowall = false;
	
	this.admin = false;
	
	this.setVars(this.resource.getFrame(0), x, y, c);
	
	this.usernameLabel = new TextLabel(this.username, this.dx + (this.img.width / 2), this.dy + 200);
	this.usernameLabel.font = "11px verdana";
	this.usernameLabel.textAlign = "center";
	this.usernameLabel.fillStyle = "#FFFFFF";
	
	this.flagForDraw();
	//this.setVars(ResourceLoader.getResource('fakebase.png'), 0, 0, 54, 106, this.x, this.y, 54, 106);
	
	/*c.save();
	c.translate(canvasElement.width - (canvasElement.width / 2 - x) - (canvasElement.width / 2 - x - this.img.width), 0);
	c.scale(-1.0, 1.0);
	this.draw();
	c.restore();*/
	
	this.idleAnimationTimer;
	
	var self = this;
}
Player.prototype = new ImageDisplayObject;

Player.prototype.flagForDraw = function() {
	// username text
	var uRect = this.usernameLabel.rect();
	map.markAreaForClear(uRect);
	if(this.bubble !== undefined) {
		this.bubble.data('needsToBePositioned', true);
	}
	
	if(this.drawHealthBar) {
		var uRect = this.healthbar.rect();
		map.markAreaForClear(uRect);
	}
	//c.strokeRect(uRect.x, uRect.y, uRect.width, uRect.height);
	ImageDisplayObject.prototype.flagForDraw.call(this);
}

Player.prototype.setSkin = function(skin) {
	this.skin = skin;
	this.resource = ResourceLoader.getResource('basesheet' + ((this.gender == 0) ? 'm' : 'f') + '_' + this.skin + '.png');
	switch(this.dir) {
		case 0:
			this.img = this.resource.getFrame(0);
			this.scaleX = -1;
		break;
		case 1:
			this.img = this.resource.getFrame(1);
			this.scaleX = -1;
		break;
		case 2:
			this.img = this.resource.getFrame(1);
			this.scaleX = 1;
		break;
		case 3:
			this.img = this.resource.getFrame(0);
			this.scaleX = 1;
		break;
	}
	this.flagForDraw();
}

Player.prototype.enableWalk = function() {
	//var self = this;
	//setTimeout(function() {
		this.canWalk = true;
	//}, 100);
	
}

Player.prototype.toggleSit = function() {
	this.isSitting = !this.isSitting;
	this.setStill();
	this.flagForDraw();
}

Player.prototype.attacked = function(newHealth) {
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

Player.prototype.turn = function(dir) {
	if(!this.canWalk || this.isSitting) {
		return false;
	}
	this.dir = dir;

	switch(dir) {
		case 0:
			this.img = this.resource.getFrame(0);
			this.scaleX = -1;
		break;
		case 1:
			this.img = this.resource.getFrame(1);
			this.scaleX = -1;
		break;
		case 2:
			this.img = this.resource.getFrame(1);
			this.scaleX = 1;
		break;
		case 3:
			this.img = this.resource.getFrame(0);
			this.scaleX = 1;
		break;
	}
	//map.flagTiles((this.xTile - 4) < 0 ? 0 : this.xTile - 4, (this.yTile - 4) < 0 ? 0 : this.yTile - 4, 7, 7);
	this.flagForDraw();
	return true;
}

Player.prototype.setStill = function() {
	if(!this.isSitting) {
		switch(this.dir) {
			case 0:
				this.nextCurrentStill = this.resource.getFrame(0);
				this.nextScaleX = -1;
			break;
			case 1:
				this.nextCurrentStill = this.resource.getFrame(1);
				this.nextScaleX = -1;
			break;
			case 2:
				this.nextCurrentStill = this.resource.getFrame(1);
				this.nextScaleX = 1;
			break;
			case 3:
				this.nextCurrentStill = this.resource.getFrame(0);
				this.nextScaleX = 1;
			break;
		}
	} else {
		switch(this.dir) {
			case 0:
				this.img = this.resource.getFrame(19);
				this.scaleX = -1;
			break;
			case 1:
				this.img = this.resource.getFrame(20);
				this.scaleX = -1;
			break;
			case 2:
				this.img = this.resource.getFrame(20);
				this.scaleX = 1;
			break;
			case 3:
				this.img = this.resource.getFrame(19);
				this.scaleX = 1;
			break;
		}
	}
}

Player.prototype.walk = function(dir) {
	if((!this.canWalk && this.isSelf) || this.isSitting) {
		return false;
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
	
	if(this.isSelf && !map.pointIsWalkable(oldX, oldY) && !this.nowall) {
		$('#client').trigger({
			type: 'turn',
			dir: dir
		});
		return;
	}
	
	this.xTile = oldX;
	this.yTile = oldY;
	
	var self = this;
	//console.log(this.xTile + ', ' + this.yTile);
	this.setStill();
	if(this.isSelf) {
		$('#client').trigger({
			type: 'walk',
			dir: dir
		});
		//console.log('so I told that MAP to move');
		switch(dir) {
			case 0:
				this.animate(this.resource, [-3, -4, -5, -6], 400, 1);
				map.move(-32, -16, 400, function() {
					self.enableWalk();
				});
			break;
			case 1:
				this.animate(this.resource, [-7, -8, -9, -10], 400, 1);
				map.move(-32, 16, 400, function() {
					self.enableWalk();
				});
			break;
			case 2:
				this.animate(this.resource, [7, 8, 9, 10], 400, 1);
				map.move(32, 16, 400, function() {
					self.enableWalk();
				});
			break;
			case 3:
				this.animate(this.resource, [3, 4, 5, 6], 400, 1);
				map.move(32, -16, 400, function() {
					self.enableWalk();
				});
			break;
		}
	} else {
		switch(dir) {
			case 0:
				this.animate(this.resource, [-3, -4, -5, -6], 400, 1);
				this.move(this.nextToX + 32, this.nextToY + 16, 400, function() {
					self.enableWalk();
				}); 
			break;
			case 1:
				this.animate(this.resource, [-7, -8, -9, -10], 400, 1);
				this.move(this.nextToX + 32, this.nextToY - 16, 400, function() {
					self.enableWalk();
				});
			break;
			case 2:
				this.animate(this.resource, [7, 8, 9, 10], 400, 1);
				this.move(this.nextToX - 32, this.nextToY - 16, 400, function() {
					self.enableWalk();
				});
			break;
			case 3:
				this.animate(this.resource, [3, 4, 5, 6], 400, 1);
				this.move(this.nextToX - 32, this.nextToY + 16, 400, function() {
					self.enableWalk();
				});
			break;
		}
	}
	
	this.canWalk = false;
}

Player.prototype.draw = function(clear) {
	if (this.hasToBeDrawn && this.drawName && !this.drawHealthBar) {
		this.usernameLabel.x = this.dx + (this.img.width / 2);
		this.usernameLabel.y = this.dy + 200;
		this.usernameLabel.draw();
		//$('#client').trigger('viewport');
	}
	if (this.drawHealthBar) {
		this.healthbar.x = this.dx + (this.img.width / 2) - 19;
		this.healthbar.y = this.dy + 200 - 10;
		this.healthbar.draw();
	}
	ImageDisplayObject.prototype.draw.call(this, clear);
}

Player.prototype.attack = function() {
	if(!this.canWalk || this.isSitting) {
		return false;
	}
	
	this.canWalk = false;
	
	if(this.isSelf) {
		var oldX = this.xTile, oldY = this.yTile;
	
		switch(this.dir) {
			case 0: ++oldX; break;
			case 1: --oldY; break;
			case 2: --oldX; break;
			case 3: ++oldY; break;
		}
		if(map.monsterAtPoint(oldX, oldY)) {
			$('#client').trigger({
				type: 'attack monster'
			});
		} else if(map.playerAtPoint(oldX, oldY)) {
			$('#client').trigger({
				type: 'arenaAttack'
			});
		}
	}
	
	audio.playSFX('attack-soft');
	
	var self = this;
	this.setStill();
	switch(this.dir) {
		case 0:
			this.animate(this.resource, [-13, -14], 400, 1, function() {
				self.enableWalk();
			});
		break;
		case 1:
			this.animate(this.resource, [-15, -16], 400, 1, function() {
				self.enableWalk();
			});
		break;
		case 2:
			this.animate(this.resource, [15, 16], 400, 1, function() {
				self.enableWalk();
			});
		break;
		case 3:
			this.animate(this.resource, [13, 14], 400, 1, function() {
				self.enableWalk();
			});
		break;
	}
	
	return true;
}
