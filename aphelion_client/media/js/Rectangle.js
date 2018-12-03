function Rectangle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Rectangle.prototype.overlaps = function(rect) {
	return (this.x < (rect.x + rect.width) && (this.x + this.width) > rect.x && this.y < (rect.y + rect.height) && (this.y + this.height) > rect.y);
}

Rectangle.prototype.equals = function(rect) {
	return rect.x == this.x && rect.y == this.y && rect.width == this.width && rect.height == this.height;
}

Rectangle.prototype.clear = function() {
	c.clearRect(this.x, this.y, this.width, this.height);
}