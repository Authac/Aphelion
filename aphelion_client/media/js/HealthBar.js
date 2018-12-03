function HealthBar(x, y) {
	this.x = x;
	this.y = y;
	this.health = 0.5;
	this.hasToBeDrawn = false;
}

HealthBar.prototype.draw = function() {
	if (this.rect().overlaps(map.viewport())) {
		c.drawImage(
			ResourceLoader.getResource('healthbars.png').getFrame(0),
			0,
			0,
			39,
			7,
			this.x,
			this.y,
			39,
			7
		);
		
		var barFrame = 1;
		if(this.health <= 1/3) {
			barFrame = 2;
		}
		if(this.health <= 1/10) {
			barFrame = 3;
		}
		
		c.drawImage(
			ResourceLoader.getResource('healthbars.png').getFrame(barFrame),
			0,
			0,
			Math.ceil(this.health * 39),
			7,
			this.x,
			this.y,
			Math.ceil(this.health * 39),
			7
		);
	}
	this.hasToBeDrawn = false;
}

HealthBar.prototype.rect = function() {
	return new Rectangle(this.x, this.y, 39, 7);
}

HealthBar.prototype.flagForDraw = function() {
	this.hasToBeDrawn = true;
}