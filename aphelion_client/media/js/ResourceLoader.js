function ResourceLoader() {
	ResourceLoader.resources = [];
	ResourceLoader.resource_num = 0;
	ResourceLoader.loaded = 0;
	ResourceLoader.complete = false;
	ResourceLoader.onload = function() { };
	ResourceLoader.sheets = [];
	ResourceLoader.loadedSources = [];
}

ResourceLoader.addResource = function(src, frameWidth, frameHeight, numberToLoad, name) {
	if(ResourceLoader.loadedSources.indexOf(src) != -1) {
		return;
	}
	ResourceLoader.loadedSources.push(src);
	numberToLoad = numberToLoad === undefined ? 1 : numberToLoad;
	var newRes = {img: new Image(), name: (name == undefined) ? src : name};
	newRes.img.src = '/content/resources/' + src;
	ResourceLoader.resources.push(newRes);
	newRes.img.onload = function() {
		var sheet = {name: src, sheet: new SpriteSheet(this, frameWidth === undefined ? this.width : frameWidth, frameHeight === undefined ? this.height : frameHeight)};
		ResourceLoader.sheets.push(sheet);
		sheet.sheet.loadFrames(0, numberToLoad, function() {
			if(++ResourceLoader.loaded >= ResourceLoader.resource_num) {
				ResourceLoader.onload();
			}
		});
	}
	++ResourceLoader.resource_num;
}

ResourceLoader.addResourceSpecific = function(src, frameWidth, frameHeight, framesToLoad, name) {
	var resIndex = ResourceLoader.sheetExists(src);
	if(resIndex != -1) {
		ResourceLoader.sheets.splice(resIndex, 1);
	}
	var newRes = {img: new Image(), name: (name == undefined) ? src : name};
	newRes.img.src = '/content/resources/' + src;
	ResourceLoader.resources.push(newRes);
	newRes.img.onload = function() {
		var sheet = {name: src, sheet: new SpriteSheet(this, frameWidth, frameHeight)};
		ResourceLoader.sheets.push(sheet);
		for(var i = 0;i < framesToLoad.length;++i) {
			sheet.sheet.loadFrame(framesToLoad[i], function() {
				if(++ResourceLoader.loaded >= ResourceLoader.resource_num) {
					ResourceLoader.onload();
				}
			});
		}
	}
	// right now for this each frame is considered a resource
	ResourceLoader.resource_num += framesToLoad.length;
}

ResourceLoader.sheetExists = function(name) {
	for(var i = 0;i < ResourceLoader.sheets.length;++i) {
		if(ResourceLoader.sheets[i].name == name) {
			return i;
		}
	}
	return -1;
}

ResourceLoader.getResource = function(name) {
	for(var i = 0;i < ResourceLoader.sheets.length;++i) {
		if(ResourceLoader.sheets[i].name == name) {
			return ResourceLoader.sheets[i].sheet;
		}
	}
}