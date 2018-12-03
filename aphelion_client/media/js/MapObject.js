function MapObject(type, x, y) {
	this.xTile = x;
	this.yTile = y;
	
	this.setVars(ResourceLoader.getResource(type).getFrame(0), x, y, c);
	
	this.flagForDraw();
}
MapObject.prototype = new ImageDisplayObject;