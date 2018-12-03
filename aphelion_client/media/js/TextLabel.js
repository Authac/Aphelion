function TextLabel(label, x, y) {
	this.label = label;
	this.x = x;
	this.y = y;
	this.font = "11px verdana";
	this.textAlign = "center";
	this.fillStyle = "#FFFFFF";
	this.hasToBeDrawn = false;
	this.textWidth;
}

TextLabel.prototype.draw = function() {
	if(this.rect().overlaps(map.viewport())) {
		c.font = this.font;
		c.textAlign = this.textAlign;
		c.fillStyle = this.fillStyle;
		c.fillText(this.label, Math.floor(this.x), Math.floor(this.y));
		this.hasToBeDrawn = false;
	}
}

TextLabel.prototype.flagForDraw = function() {
	this.hasToBeDrawn = true;
}

TextLabel.prototype.rect = function() {
	if(this.textWidth === undefined) {
		this.textWidth = c.measureText(this.label).width;
	}
	return new Rectangle(this.x - this.textWidth / 2 - 12, this.y - 10, this.textWidth + 2 + 22, 13);
}