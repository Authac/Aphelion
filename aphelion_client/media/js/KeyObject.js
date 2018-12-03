function KeyObject() {
	this.object = {};
	
	var self = this;
	$(document.documentElement).keydown(function(e) { self.keyPress(e); });
	$(document.documentElement).keyup(function(e) { self.keyRelease(e); });
}

KeyObject.prototype.keyPress = function(e) {
	this.object[e.keyCode] = true;
}

KeyObject.prototype.keyRelease = function(e) {
	delete this.object[e.keyCode];
}

KeyObject.prototype.keyDown = function(keyCode) {
	return keyCode in this.object;
}

var downCounter = {
	left: 0, right: 0, up: 0, down: 0
};