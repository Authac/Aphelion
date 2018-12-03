function bit_rol(a,b){return a<<b|a>>>32-b}function safe_add(a,b){var c=(a&65535)+(b&65535);var d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}function md5_ii(a,b,c,d,e,f,g){return md5_cmn(c^(b|~d),a,b,e,f,g)}function md5_hh(a,b,c,d,e,f,g){return md5_cmn(b^c^d,a,b,e,f,g)}function md5_gg(a,b,c,d,e,f,g){return md5_cmn(b&d|c&~d,a,b,e,f,g)}function md5_ff(a,b,c,d,e,f,g){return md5_cmn(b&c|~b&d,a,b,e,f,g)}function md5_cmn(a,b,c,d,e,f){return safe_add(bit_rol(safe_add(safe_add(b,a),safe_add(d,f)),e),c)}function binl_md5(a,b){a[b>>5]|=128<<b%32;a[(b+64>>>9<<4)+14]=b;var c=1732584193;var d=-271733879;var e=-1732584194;var f=271733878;for(var g=0;g<a.length;g+=16){var h=c;var i=d;var j=e;var k=f;c=md5_ff(c,d,e,f,a[g+0],7,-680876936);f=md5_ff(f,c,d,e,a[g+1],12,-389564586);e=md5_ff(e,f,c,d,a[g+2],17,606105819);d=md5_ff(d,e,f,c,a[g+3],22,-1044525330);c=md5_ff(c,d,e,f,a[g+4],7,-176418897);f=md5_ff(f,c,d,e,a[g+5],12,1200080426);e=md5_ff(e,f,c,d,a[g+6],17,-1473231341);d=md5_ff(d,e,f,c,a[g+7],22,-45705983);c=md5_ff(c,d,e,f,a[g+8],7,1770035416);f=md5_ff(f,c,d,e,a[g+9],12,-1958414417);e=md5_ff(e,f,c,d,a[g+10],17,-42063);d=md5_ff(d,e,f,c,a[g+11],22,-1990404162);c=md5_ff(c,d,e,f,a[g+12],7,1804603682);f=md5_ff(f,c,d,e,a[g+13],12,-40341101);e=md5_ff(e,f,c,d,a[g+14],17,-1502002290);d=md5_ff(d,e,f,c,a[g+15],22,1236535329);c=md5_gg(c,d,e,f,a[g+1],5,-165796510);f=md5_gg(f,c,d,e,a[g+6],9,-1069501632);e=md5_gg(e,f,c,d,a[g+11],14,643717713);d=md5_gg(d,e,f,c,a[g+0],20,-373897302);c=md5_gg(c,d,e,f,a[g+5],5,-701558691);f=md5_gg(f,c,d,e,a[g+10],9,38016083);e=md5_gg(e,f,c,d,a[g+15],14,-660478335);d=md5_gg(d,e,f,c,a[g+4],20,-405537848);c=md5_gg(c,d,e,f,a[g+9],5,568446438);f=md5_gg(f,c,d,e,a[g+14],9,-1019803690);e=md5_gg(e,f,c,d,a[g+3],14,-187363961);d=md5_gg(d,e,f,c,a[g+8],20,1163531501);c=md5_gg(c,d,e,f,a[g+13],5,-1444681467);f=md5_gg(f,c,d,e,a[g+2],9,-51403784);e=md5_gg(e,f,c,d,a[g+7],14,1735328473);d=md5_gg(d,e,f,c,a[g+12],20,-1926607734);c=md5_hh(c,d,e,f,a[g+5],4,-378558);f=md5_hh(f,c,d,e,a[g+8],11,-2022574463);e=md5_hh(e,f,c,d,a[g+11],16,1839030562);d=md5_hh(d,e,f,c,a[g+14],23,-35309556);c=md5_hh(c,d,e,f,a[g+1],4,-1530992060);f=md5_hh(f,c,d,e,a[g+4],11,1272893353);e=md5_hh(e,f,c,d,a[g+7],16,-155497632);d=md5_hh(d,e,f,c,a[g+10],23,-1094730640);c=md5_hh(c,d,e,f,a[g+13],4,681279174);f=md5_hh(f,c,d,e,a[g+0],11,-358537222);e=md5_hh(e,f,c,d,a[g+3],16,-722521979);d=md5_hh(d,e,f,c,a[g+6],23,76029189);c=md5_hh(c,d,e,f,a[g+9],4,-640364487);f=md5_hh(f,c,d,e,a[g+12],11,-421815835);e=md5_hh(e,f,c,d,a[g+15],16,530742520);d=md5_hh(d,e,f,c,a[g+2],23,-995338651);c=md5_ii(c,d,e,f,a[g+0],6,-198630844);f=md5_ii(f,c,d,e,a[g+7],10,1126891415);e=md5_ii(e,f,c,d,a[g+14],15,-1416354905);d=md5_ii(d,e,f,c,a[g+5],21,-57434055);c=md5_ii(c,d,e,f,a[g+12],6,1700485571);f=md5_ii(f,c,d,e,a[g+3],10,-1894986606);e=md5_ii(e,f,c,d,a[g+10],15,-1051523);d=md5_ii(d,e,f,c,a[g+1],21,-2054922799);c=md5_ii(c,d,e,f,a[g+8],6,1873313359);f=md5_ii(f,c,d,e,a[g+15],10,-30611744);e=md5_ii(e,f,c,d,a[g+6],15,-1560198380);d=md5_ii(d,e,f,c,a[g+13],21,1309151649);c=md5_ii(c,d,e,f,a[g+4],6,-145523070);f=md5_ii(f,c,d,e,a[g+11],10,-1120210379);e=md5_ii(e,f,c,d,a[g+2],15,718787259);d=md5_ii(d,e,f,c,a[g+9],21,-343485551);c=safe_add(c,h);d=safe_add(d,i);e=safe_add(e,j);f=safe_add(f,k)}return Array(c,d,e,f)}function binl2rstr(a){var b="";for(var c=0;c<a.length*32;c+=8)b+=String.fromCharCode(a[c>>5]>>>c%32&255);return b}function rstr2binl(a){var b=Array(a.length>>2);for(var c=0;c<b.length;c++)b[c]=0;for(var c=0;c<a.length*8;c+=8)b[c>>5]|=(a.charCodeAt(c/8)&255)<<c%32;return b}function str2rstr_utf16be(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(a.charCodeAt(c)>>>8&255,a.charCodeAt(c)&255);return b}function str2rstr_utf16le(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(a.charCodeAt(c)&255,a.charCodeAt(c)>>>8&255);return b}function str2rstr_utf8(a){var b="";var c=-1;var d,e;while(++c<a.length){d=a.charCodeAt(c);e=c+1<a.length?a.charCodeAt(c+1):0;if(55296<=d&&d<=56319&&56320<=e&&e<=57343){d=65536+((d&1023)<<10)+(e&1023);c++}if(d<=127)b+=String.fromCharCode(d);else if(d<=2047)b+=String.fromCharCode(192|d>>>6&31,128|d&63);else if(d<=65535)b+=String.fromCharCode(224|d>>>12&15,128|d>>>6&63,128|d&63);else if(d<=2097151)b+=String.fromCharCode(240|d>>>18&7,128|d>>>12&63,128|d>>>6&63,128|d&63)}return b}function rstr2any(a,b){var c=b.length;var d,e,f,g,h;var i=Array(Math.ceil(a.length/2));for(d=0;d<i.length;d++){i[d]=a.charCodeAt(d*2)<<8|a.charCodeAt(d*2+1)}var j=Math.ceil(a.length*8/(Math.log(b.length)/Math.log(2)));var k=Array(j);for(e=0;e<j;e++){h=Array();g=0;for(d=0;d<i.length;d++){g=(g<<16)+i[d];f=Math.floor(g/c);g-=f*c;if(h.length>0||f>0)h[h.length]=f}k[e]=g;i=h}var l="";for(d=k.length-1;d>=0;d--)l+=b.charAt(k[d]);return l}function rstr2b64(a){try{b64pad}catch(b){b64pad=""}var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var d="";var e=a.length;for(var f=0;f<e;f+=3){var g=a.charCodeAt(f)<<16|(f+1<e?a.charCodeAt(f+1)<<8:0)|(f+2<e?a.charCodeAt(f+2):0);for(var h=0;h<4;h++){if(f*8+h*6>a.length*8)d+=b64pad;else d+=c.charAt(g>>>6*(3-h)&63)}}return d}function rstr2hex(a){try{hexcase}catch(b){hexcase=0}var c=hexcase?"0123456789ABCDEF":"0123456789abcdef";var d="";var e;for(var f=0;f<a.length;f++){e=a.charCodeAt(f);d+=c.charAt(e>>>4&15)+c.charAt(e&15)}return d}function rstr_hmac_md5(a,b){var c=rstr2binl(a);if(c.length>16)c=binl_md5(c,a.length*8);var d=Array(16),e=Array(16);for(var f=0;f<16;f++){d[f]=c[f]^909522486;e[f]=c[f]^1549556828}var g=binl_md5(d.concat(rstr2binl(b)),512+b.length*8);return binl2rstr(binl_md5(e.concat(g),512+128))}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function any_hmac_md5(a,b,c){return rstr2any(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)),c)}function b64_hmac_md5(a,b){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function any_md5(a,b){return rstr2any(rstr_md5(str2rstr_utf8(a)),b)}function b64_md5(a){return rstr2b64(rstr_md5(str2rstr_utf8(a)))}function hex_md5(a){return rstr2hex(rstr_md5(str2rstr_utf8(a)))}var hexcase=0;var b64pad="";

var SKIN_NORMAL = 0;
var SKIN_TAN = 1;
var SKIN_YELLOW = 2;
var SKIN_SKELLY = 3;
var SKIN_PANDA = 4;
var SKIN_ORC = 5;
var SKIN_FISH = 6;

var GENDER_MALE = 0;
var GENDER_FEMALE = 1;

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

function strtolower (str) {
    return (str + '').toLowerCase();
}

function ucfirst (str) {
    str += '';
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
}

function rand (min, max) {
	var argc = arguments.length;
	if (argc === 0) {
		min = 0;
		max = 2147483647;
	} else if (argc === 1) {
		throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function NPC() {
	this.x;
	this.y;
	this.dir;
	this.map;
}

NPC.prototype.setVars = function(x, y, dir, map) {
	this.x = x;
	this.y = y;
	this.dir = dir;
	this.map = map;
}

var playerId = 0;
function Player(c, map, username, x, y, admin, gender, skin, exp, arenaKills, arenaDeaths, level, health) {
	this.client = c;
	this.id = playerId++;
	this.username = ucfirst(strtolower(username));
	this.admin = admin;
	this.gender = gender;
	this.skin = skin;
	this.exp = exp;
	this.level = level;
	this.maxHealth = 10 + 2 * this.level;
	this.health = health;
	this.hasInit = false;
	this.arenaKills = arenaKills;
	this.arenaDeaths = arenaDeaths;
	this.killStreak = 0;
	this.nowall = false;
	this.currentlyLoadingMap = false;
	this.setVars(x, y, 3, map);
}
Player.prototype = new NPC;

Player.prototype.data = function() {
	return {
		id: this.id,
		username: this.username,
		x: this.x,
		y: this.y,
		dir: this.dir,
		admin: this.admin,
		gender: this.gender,
		skin: this.skin,
		exp: this.exp,
		level: this.level,
		health: this.health,
		maxHealth: this.maxHealth,
		mapID: this.map.id
	};
}

var monsterId = 0;
function Monster(type, map, x, y, dir) {
	this.type = type;
	this.id = monsterId++;
	this.dead = false;
	this.health = 10;
	this.maxHealth = 10;
	this.exp = 20;
	this.slayers = [];
	this.setVars(x, y, dir, map);
	
	var self = this;
	// misnamed now since it's used for "actions" and not just walking.
	var walkFunc = function() {
		if(self.dead) {
			return;
		}
		var playerToAttack = self.attemptAttack();
		if(playerToAttack !== false) {
			var attack = rand(self.minAttack, self.maxAttack);
			playerToAttack.health -= attack;
			if (playerToAttack.health < 0) {
				playerToAttack.health = 0;
				sendToMap(self.map, 'monster attack', {monster: self.data(), player: playerToAttack.data()});
				warpPlayer(playerToAttack, maps[0], 0, 0);
			} else {
				sendToMap(self.map, 'monster attack', {monster: self.data(), player: playerToAttack.data()});
			}
		} else {
			var wdir = rand(0, 3);
			var cX = self.x, cY = self.y;
			switch(wdir) {
				case 0:	++cX; break;
				case 1: --cY; break;
				case 2: --cX; break;
				case 3: ++cY; break;
				default: break;
			}
			if(self.map.pointIsWalkable(cX, cY)) {
				self.x = cX;
				self.y = cY;
				self.dir = wdir;
				sendToMap(self.map, 'monster walk', {monster: self.data()});
			}
		}
		setTimeout(walkFunc, rand(2000, 3000));
	};
	this.walkTimer = setTimeout(walkFunc, 1000);
}
Monster.prototype = new NPC;

Monster.prototype.attemptAttack = function() {
	for(var i = 0;i < this.slayers.length;++i) {
		var slayer = getPlayerByUsername(this.slayers[i].username);
		if(slayer.x == this.x && slayer.y == this.y + 1) {
			this.dir = 3;
			return slayer;
		} else if(slayer.x == this.x && slayer.y == this.y - 1) {
			this.dir = 1;
			return slayer;
		} else if(slayer.x == this.x + 1 && slayer.y == this.y) {
			this.dir = 0;
			return slayer;
		} else if(slayer.x == this.x - 1 && slayer.y == this.y) {
			this.dir = 2;
			return slayer;
		}
	}
	return false;
}

Monster.prototype.data = function() {
	return {
		id: this.id,
		type: this.type,
		x: this.x,
		y: this.y,
		dir: this.dir,
		health: this.health,
		maxHealth: this.maxHealth,
		mapID: this.map.id
	};
}

Monster.prototype.die = function() {
	this.dead = true;
}

var mapData = ['[[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330,"object":41},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233,"object":102},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":335},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":242},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":248},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":330},{"type":337},{"type":335},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":241},{"type":249},{"type":249},{"type":249,"object":66},{"type":249},{"type":249},{"type":243},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":241},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":280},{"type":259},{"type":259},{"type":259},{"type":259},{"type":259},{"type":261},{"type":330},{"type":335},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":253},{"type":247},{"type":246},{"type":246},{"type":246},{"type":246},{"type":246},{"type":244},{"type":272},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233,"object":101},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":335},{"type":332},{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":259},{"type":259},{"type":279},{"type":245},{"type":280},{"type":259},{"type":261},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233,"object":68},{"type":233},{"type":330},{"type":337},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233,"object":12},{"type":233},{"type":233},{"type":233},{"type":330},{"type":338},{"type":337},{"type":332},{"type":233},{"type":233},{"type":233,"object":27},{"type":233},{"type":233,"object":101},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233,"object":97},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233},{"type":322},{"type":331},{"type":326},{"type":338},{"type":338},{"type":327},{"type":331,"object":266},{"type":323},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":245},{"type":272},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":261},{"type":233},{"type":233},{"type":233},{"type":233,"object":29},{"type":330},{"type":338},{"type":338},{"type":335},{"type":338},{"type":335},{"type":338},{"type":332},{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":285},{"type":259},{"type":261},{"type":233},{"type":233},{"type":233},{"type":233}],[{"type":331},{"type":331},{"type":331},{"type":331,"object":38},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":326},{"type":338},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338},{"type":327},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331},{"type":331}],[{"type":337},{"type":337},{"type":337},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":337},{"type":335},{"type":338},{"type":338},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":338},{"type":335},{"type":338}],[{"type":337},{"type":337},{"type":337},{"type":337},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":335},{"type":338},{"type":338},{"type":338,"object":34},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":338},{"type":335},{"type":335},{"type":338},{"type":338},{"type":335},{"type":338,"object":235},{"type":335},{"type":338},{"type":338}],[{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":325},{"type":338},{"type":335},{"type":338},{"type":338},{"type":336},{"type":338},{"type":328},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333},{"type":333}],[{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":287},{"type":330},{"type":338},{"type":338},{"type":335},{"type":336},{"type":338},{"type":338},{"type":332},{"type":286},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266},{"type":266}],[{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":272},{"type":321},{"type":333},{"type":325},{"type":338},{"type":336},{"type":328},{"type":333},{"type":324},{"type":253},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245},{"type":245}],[{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":239},{"type":248},{"type":245},{"type":277},{"type":266},{"type":287},{"type":330},{"type":336},{"type":336},{"type":332},{"type":286},{"type":266},{"type":278},{"type":242},{"type":239},{"type":239},{"type":239},{"type":248},{"type":245},{"type":245},{"type":242},{"type":239},{"type":239},{"type":239}],[{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245,"object":26},{"type":245},{"type":245},{"type":272},{"type":330},{"type":335},{"type":336},{"type":332},{"type":253},{"type":245},{"type":245},{"type":240},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249}],[{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":281},{"type":239},{"type":248},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":242},{"type":282},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249}],[{"type":246},{"type":246},{"type":246},{"type":283},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":284},{"type":244},{"type":245},{"type":245},{"type":247},{"type":283},{"type":249},{"type":249}],[{"type":259},{"type":259},{"type":279},{"type":247},{"type":246},{"type":283},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249,"object":237},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":285},{"type":259},{"type":279},{"type":240},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":335},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":247},{"type":283},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":336},{"type":336},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":285},{"type":279},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245,"object":238},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233,"object":222},{"type":233},{"type":233,"object":29},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":243},{"type":245},{"type":245},{"type":245},{"type":245},{"type":241},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":281},{"type":239},{"type":239},{"type":239},{"type":239},{"type":282},{"type":249},{"type":249}],[{"type":233},{"type":233},{"type":233},{"type":233},{"type":233},{"type":253},{"type":240},{"type":249},{"type":249},{"type":243},{"type":245},{"type":272},{"type":330},{"type":337},{"type":337},{"type":332},{"type":253},{"type":245},{"type":241},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249},{"type":249}]]', '[[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":159},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":218,"object":164},{"type":211,"object":161},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218,"object":170},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":170},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":210},{"type":215}],[{"type":380},{"type":218,"object":157},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218},{"type":218,"object":162},{"type":380},{"type":214},{"type":218}],[{"type":380},{"type":212,"object":158},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":163},{"type":218,"object":160},{"type":380},{"type":212},{"type":216}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380,"object":480},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380,"object":481},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380},{"type":380},{"type":380}],[{"type":380},{"type":380},{"type":380},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":218},{"type":380,"object":154},{"type":380},{"type":380},{"type":380},{"type":380}]]'];

function Map(w, h, id) {
	this.width = w;
	this.height = h;
	this.players = [];
	this.monsters = []; //[new Monster('trickster.png', this, rand(0, w - 1), rand(0, h - 1), 3)];
	this.id = id;
	this.mapData = JSON.parse(mapData[id]);
}

Map.prototype.pointOnMap = function(x, y) {
	return (x >= 0 && y >= 0 && x < this.width && y < this.height);
}

Map.prototype.pointIsWalkable = function(x, y) {
	return this.pointOnMap(x, y) && !this.objectOnPoint(x, y);
}

Map.prototype.objectOnPoint = function(x, y) {
	var playersAndObjects = this.players.concat(this.monsters);
	for(var i = 0;i < playersAndObjects.length;++i) {
		if(playersAndObjects[i].x == x && playersAndObjects[i].y == y) {
			return true;
		}
	}
	if(this.mapData[y][x].object !== undefined) {
		return true;
	}
	return false;
}

Map.prototype.addPlayer = function(p) {
	this.players.push(p);
}

Map.prototype.addMonster = function(m) {
	this.monsters.push(m);
}

Map.prototype.monsterAtPoint = function(x, y) {
	for(var i = 0;i < this.monsters.length;++i) {
		if(this.monsters[i].x == x && this.monsters[i].y == y) {
			return this.monsters[i];
		}
	}
	return false;
}

Map.prototype.playerAtPoint = function(x, y) {
	for(var i = 0;i < this.players.length;++i) {
		if(this.players[i].x == x && this.players[i].y == y) {
			return this.players[i];
		}
	}
	return false;
}

Map.prototype.playerData = function() {
	var pdata = [];
	for(var i = 0;i < this.players.length;++i) {
		if(!this.players[i].hasInit) {
			continue;
		}
		pdata.push(this.players[i].data());
	}
	return pdata;
}

Map.prototype.monsterData = function() {
	var mdata = [];
	for(var i = 0;i < this.monsters.length;++i) {
		mdata.push(this.monsters[i].data());
	}
	return mdata;
}

Map.prototype.removePlayer = function(p) {
	for(var i = 0;i < this.players.length;++i) {
		if(this.players[i] == p) {
			this.players.splice(i, 1);
		}
	}
}

var maps = [];
maps.push(new Map(30, 30, 0));
maps.push(new Map(20, 20, 1));

var monsterStats = [{health: 30, exp: 55, minAttack: 1, maxAttack: 3}, {health: 60, exp: 35, minAttack: 1, maxAttack: 3}, {health: 15, exp: 10, minAttack: 1, maxAttack: 3}, {health: 60, exp: 80, minAttack: 2, maxAttack: 5}, {health: 20, exp: 35, minAttack: 1, maxAttack: 3}, {health: 10, exp: 20, minAttack: 1, maxAttack: 3}, {health: 500, exp: 600, minAttack: 5, maxAttack: 8}, {health: 5000, exp: 3500, minAttack: 2, maxAttack: 5}];

var options = ['mummy.png', 'bogoman.png', 'centaur.png', 'chaos.png', 'pig.png', 'sheep.png', 'gorilla.png', 'gnoll.png'];

setInterval(function() {
	if(maps[0].monsters.length < 10) {
		var choice = rand(0, 6);
		var m = new Monster(options[choice], maps[0], rand(0, maps[0].width - 1), rand(0, maps[0].height), 3);
		m.health = monsterStats[choice].health;
		m.maxHealth = monsterStats[choice].health;
		m.exp = monsterStats[choice].exp;
		m.minAttack = monsterStats[choice].minAttack;
		m.maxAttack = monsterStats[choice].maxAttack;
		maps[0].addMonster(m);
		sendToMap(maps[0], 'monster enter', {monster: m.data()});
	}
}, 5 * 1000);

setInterval(function() {
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			maps[i].players[j].health += 3;
			if (maps[i].players[j].health >= maps[i].players[j].maxHealth) {
				maps[i].players[j].health = maps[i].players[j].maxHealth;
			}
			maps[i].players[j].client.emit('increase health', {player: maps[i].players[j].data()});
		}
	}
}, 30 * 1000);

function sendToMap(map, type, data) {
	for(var i = 0;i < map.players.length;++i) {
		if(!map.players[i].hasInit || map.players[i].currentlyLoadingMap) {
			continue;
		}
		map.players[i].client.emit(type, data);
	}
}

function sendToMapLimited(map, type, data, except) {
	for(var i = 0;i < map.players.length;++i) {
		if(map.players[i] == except || !map.players[i].hasInit || map.players[i].currentlyLoadingMap) {
			continue;
		}
		map.players[i].client.emit(type, data);
	}
}

function sendToWorld(type, data) {
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			if(!maps[i].players[j].hasInit) {
				continue;
			}
			maps[i].players[j].client.emit(type, data);
		}
	}
}

function warpPlayer(p, toMap, toX, toY) {
	p.x = toX;
	p.y = toY;
	if(p.map != toMap) {
		var oldMap = p.map;
		p.map.removePlayer(p);
		p.map = toMap;
		p.map.addPlayer(p);
		sendToMapLimited(oldMap, 'player remove', {player: p.data()}, p);
		sendToMapLimited(toMap, 'player enter', {player: p.data()}, p);
		p.client.emit('warp player', {player: p.data()});
		p.currentlyLoadingMap = true;
	} else {
		sendToMap(p.map, 'warp player', {player: p.data()});
	}
}

function playerLoggedIn(username) {
	for(var i = 0;i < my_clients.length;++i) {
		if(my_clients[i].player !== undefined && strtolower(my_clients[i].player.username) == strtolower(username)) {
			return true;
		}
	}
	return false;
}

function getPlayerByUsername(username) {
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			if(strtolower(maps[i].players[j].username) == strtolower(username)) {
				return maps[i].players[j];
			}
		}
	}
	return false;
}

function playerAttackedMonster(m, username) {
	for(var i = 0;i < m.slayers.length;++i) {
		if(m.slayers[i].username == username) {
			return m.slayers[i];
		}
	}
	return false;
}

function onlineList() {
	var list = [];
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			if(!maps[i].players[j].hasInit) {
				continue;
			}
			list.push({
				admin: maps[i].players[j].admin,
				username: maps[i].players[j].username,
				level: maps[i].players[j].level
			});
		}
	}
	list.sort(function(a, b){
		var nameA = a.username.toLowerCase(), nameB = b.username.toLowerCase()
		if (nameA < nameB) //sort string ascending
			return -1 
		if (nameA > nameB)
			return 1
		return 0 //default return value (no sorting)
	});
	return list;
}

function expToLevel(exp) {
	for(var i = 100;i >= 0;--i) {
		if(20 * Math.pow(i, 3) + 30 * Math.pow(i, 2) + 100 * i <= exp) {
			return i;
		}
	}
}

var http = require('http'),  
    io = require('socket.io').listen(8078),
	mysql_client = require('mysql').createClient(),
	my_clients = [];

// Optimize client js
io.enable('browser client minification');
io.enable('browser client etag');
io.enable('browser client gzip');  

mysql_client.host = 'localhost';
mysql_client.user = 'USER';
mysql_client.password = 'PASS';
mysql_client.database = 'DB';

io.set('log level', 2);
io.set('transports', ['websocket', 'flashsocket']);

io.sockets.on('connection', function(client){
	my_clients.push(client);
	console.log('New client found: ' + client.id);
	//console.log(client.handshake.address.address);
	client.has_init = false;
	
	client.on('init', function(data) {
		if(this.player === undefined) {
			
		}
	});
	
	client.on('ping', function(data) {
		client.emit('ping', {});
	});
	
	client.on('register', function(data) {
		if(this.player === undefined) {
			if(data.username !== undefined && data.password !== undefined && data.email !== undefined && data.gender !== undefined) {
				if(data.username.length >= 4 && data.username.length <= 12) {
					if(data.username.match(/^[a-z]+$/i)) {
						if(data.password.length >= 6 && data.password.length <= 24) {
							if(data.gender == "male" || data.gender == "female") {
								// todo: validate email
								var gender = (data.gender == 'male') ? 0 : 1;
								mysql_client.query("SELECT email FROM `accounts` WHERE username = " + mysql_client.escape(data.username) + " OR email = " + mysql_client.escape(data.email), function(err, results, fields) {
									if(err == null && results.length == 0) {
										mysql_client.query("INSERT INTO `accounts` (username, password, email, gender, map) VALUES(" + mysql_client.escape(strtolower(data.username)) + ", '" + hex_md5('$^34y54k&*yl' + data.password) + "', " + mysql_client.escape(data.email) + ", " + gender + ", 1)");
										client.emit('register success', {});
									} else if(err != null) {
										if(data.email == results[0].email) {
											client.emit('register error', {error: 'Email is already registered'});
										} else {
											client.emit('register error', {error: 'Username is already registered'});
										}
									}
								});
							}
						} else {
							client.emit('register error', {error: 'Password is invalid length'});
						}
					} else {
						client.emit('register error', {error: 'Username may only contain letters'});
					}
				} else {
					client.emit('register error', {error: 'Username is invalid length'});
				}
			} else {
				client.emit('register error', {error: 'Missing fields'});
			}
		}
	});
	
	// process a login
	client.on('login', function(data) {
		if(this.player === undefined) {
			if(data.username !== undefined && data.password !== undefined) {
				if(!playerLoggedIn(data.username)) {
					mysql_client.query("SELECT username, x, y, admin, gender, skin, experience, arena_kills, arena_deaths, map, health FROM accounts WHERE username = " + mysql_client.escape(data.username) + " AND password = '" + hex_md5('$^34y54k&*yl' + data.password) + "' LIMIT 1", function(err, results, fields) {
						if(err == null && results.length == 1) {
							client.player = new Player(client, maps[results[0].map], results[0].username, results[0].x, results[0].y, results[0].admin, results[0].gender, results[0].skin, results[0].experience, results[0].arena_kills, results[0].arena_deaths, expToLevel(results[0].experience), results[0].health);
							maps[results[0].map].addPlayer(client.player);
							
							client.emit('login success', {mapID: results[0].map});
						} else {
							client.emit('login error', {error: 'Incorrect login information'});
						}
					});
				} else {
					client.emit('login error', {error: 'Account already logged in'});
				}
			} else {
				client.emit('login error', {error: 'Missing fields'});
			}
		}
	});
	
	client.on('done loading', function(data) {
		if(client.player !== undefined && !client.player.hasInit) {
			sendToMapLimited(client.player.map, 'player enter', {
				player: client.player.data()
			}, client.player);
			
			client.emit('init', {
				map: {
					id: client.player.map.id,
					width: client.player.map.width,
					height: client.player.map.height
				},
				player: client.player.data(),
				players: client.player.map.playerData(),
				monsters: client.player.map.monsterData()
			});
			client.player.hasInit = true;
		}
	});
	
	// done loading for secondardy map, kinda slopppy
	client.on('map init', function(data) {
		if(client.player !== undefined && client.player.hasInit) {
			client.player.currentlyLoadingMap = false;
			
			client.emit('load map', {
				map: {
					id: client.player.map.id,
					width: client.player.map.width,
					height: client.player.map.height
				},
				player: client.player.data(),
				players: client.player.map.playerData(),
				monsters: client.player.map.monsterData()
			});
		}
	});
	
	// process a chat packet handle commands and things like that
	client.on('chat', function(data) {
		if(this.player !== undefined && this.player.hasInit && data.msg !== undefined && data.msg.length <= 200) {
			if(data.msg.substr(0, 1) == '~') {
				sendToWorld('global chat', {username: this.player.username, msg: data.msg.substr(1)});
			} else if(data.msg.substr(0, 6) == '$toall' && this.player.admin >= 2) {
				sendToWorld('broadcast', {player: this.player.data(), msg: data.msg.substr(7)});
			} else if(data.msg.substr(0, 6) == '#stats') {
				var kdr = this.player.arenaDeaths == 0 ? 'DNE' : roundNumber(this.player.arenaKills / this.player.arenaDeaths, 2);
				client.emit('arena stats', {msg: this.player.arenaKills + ' kills, ' + this.player.arenaDeaths + ' deaths. ' + kdr + ' KDR.'});
			} else if(data.msg.substr(0, 7) == '#nowall' && this.player.admin >= 3) {
				this.player.nowall = true;
			} else if(data.msg.substr(0, 5) == '$skin' && this.player.admin >= 2) {
				var parts = data.msg.split(' ');
				if(parts.length >= 3) {
					var player = getPlayerByUsername(parts[1]);
					if(player !== false) {
						var skinid = parseInt(parts[2]);
						if(skinid >= 0 && skinid <= 6) {
							player.skin = skinid;
							sendToMap(player.map, 'change skin', {player: player.data()});
						}
					}
				}
			} else if(data.msg.substr(0, 6) == '$spawn' && this.player.admin >= 3) {
				var parts = data.msg.split(' ');
				if(parts.length >= 2 && parts[1] == 'boss') {
					var m = new Monster('hg.png', this.player.map, this.player.x, this.player.y, 3);
					m.exp = 170000;
					m.health = 100000;
					m.maxHealth = 100000;
					m.minAttack = 20;
					m.maxAttack = 50;
					this.player.map.addMonster(m);
					sendToMap(this.player.map, 'monster enter', {monster: m.data()});
				} else if(parts.length >= 2 && parts[1] == 'apozen') {
					var m = new Monster('apozen.png', this.player.map, this.player.x, this.player.y, 3);
					m.exp = 25000;
					m.health = 35000;
					m.maxHealth = 35000;
					this.player.map.addMonster(m);
					sendToMap(this.player.map, 'monster enter', {monster: m.data()});
				} else if(parts.length >= 2 && options.indexOf(parts[1] + '.png') != -1) {
					var m = new Monster(parts[1] + '.png', this.player.map, this.player.x, this.player.y, 3);
					m.exp = monsterStats[options.indexOf(parts[1] + '.png')].exp;
					m.health = monsterStats[options.indexOf(parts[1] + '.png')].health;
					m.maxHealth = m.health;
					this.player.map.addMonster(m);
					sendToMap(this.player.map, 'monster enter', {monster: m.data()});
				}
			} else if(data.msg.substr(0, 10) == '$massspawn' && this.player.admin >= 3) {
				var parts = data.msg.split(' ');
				if(parts.length >= 3) {
					var monster = parts[1];
					var choice = 0;
					switch(monster) {
						case 'mummy.png': choice = 0; break;
						case 'bogoman.png': choice = 1; break;
						case 'centaur.png': choice = 2; break;
						case 'chaos.png': choice = 3; break;
						case 'pig.png': choice = 4; break;
						case 'sheep.png': choice = 5; break;
						case 'gorilla.png': choice = 6; break;
						case 'gnoll.png': choice = 7; break;
					}
					var numberToSpawn = parseInt(parts[2]);
					for(var i = 0;i < numberToSpawn;++i) {
						var m = new Monster(monster, this.player.map, rand(0, this.player.map.width - 1), rand(0, this.player.map.height - 1), 3);
						m.health = monsterStats[choice].health;
						m.maxHealth = monsterStats[choice].health;
						m.exp = monsterStats[choice].exp;
						this.player.map.addMonster(m);
						sendToMap(this.player.map, 'monster enter', {monster: m.data()});
					}
				}
			} else if(data.msg.substr(0, 5) == '$kick' && this.player.admin >= 2) {
				var parts = data.msg.split(' ');
				if(parts.length >= 2) {
					var p = getPlayerByUsername(parts[1]);
					if(p !== false && p.admin < this.player.admin) {
						p.client.disconnect();
					}
				}
			} else if(data.msg.substr(0, 9) == '$shutdown' && this.player.admin >= 3) {
				for(var i = 0;i < maps.length;++i) {
					for(var j = 0;j < maps[i].players.length;++j) {
						maps[i].players[j].client.disconnect();
					}
				}
			} else if(data.msg.substr(0, 5) == '$warp' && this.player.admin >= 2) {
				var parts = data.msg.split(' ');
				if(parts.length >= 5) {
					var p = getPlayerByUsername(parts[1]);
					if(p !== false) {
						var mapID = parseInt(parts[2]);
						if(mapID < maps.length) {
							var toX = parseInt(parts[3]);
							var toY = parseInt(parts[4]);
							if(toX >= 0 && toX < maps[mapID].width && toY >= 0 && toY < maps[mapID].height) {
								warpPlayer(p, maps[mapID], toX, toY);
							}
						}
					}
				}
			} else if(data.msg.substr(0, 9) == '$warptome' && this.player.admin >= 2) {
				var parts = data.msg.split(' ');
				if(parts.length >= 2) {
					var p = getPlayerByUsername(parts[1]);
					if(p !== false) {
						p.x = this.player.x;
						p.y = this.player.y;
						p.map = this.player.map;
						sendToMap(p.map, 'warp player', {player: p.data()});
					}
				}
			} else {
				sendToMapLimited(this.player.map, 'chat', {user_id: this.player.id, msg: data.msg}, this.player);
			}
		}
	});
	
	client.on('attack', function(data) {
		if(this.player !== undefined && this.player.hasInit) {
			sendToMapLimited(this.player.map, 'player attack', {player: this.player.data()}, this.player);
		}
	});
	
	client.on('arena attack', function(data) {
		if(this.player !== undefined && this.player.hasInit) {
			var oldX = this.player.x, oldY = this.player.y;
			switch(this.player.dir) {
				case 0: ++oldX; break;
				case 1: --oldY; break;
				case 2: --oldX; break;
				case 3: ++oldY; break;
			}
			if(this.player.map.id == 1 && oldX > 1 && oldY > 1 && oldX < 16 && oldY < 11) {
				var killed = this.player.map.playerAtPoint(oldX, oldY);
				if(killed !== false) {
					killed.x = 2;
					killed.y = 13;
					++killed.arenaDeaths;
					++this.player.arenaKills;
					killed.killStreak = 0;
					++this.player.killStreak;
					sendToMap(killed.map, 'warp player', {player: killed.data()});
					sendToMap(this.player.map, 'arena announcement', {msg: this.player.username + ' has eliminated ' + killed.username + '!' + ((this.player.killStreak >= 2) ? ' (' + this.player.killStreak + ' kill kill streak!)' : '')});
				}
			}
		}
	});
	
	client.on('attack monster', function(data) {
		if(this.player !== undefined && this.player.hasInit) {
			var oldX = this.player.x, oldY = this.player.y;
			switch(this.player.dir) {
				case 0: ++oldX; break;
				case 1: --oldY; break;
				case 2: --oldX; break;
				case 3: ++oldY; break;
			}
			var m = this.player.map.monsterAtPoint(oldX, oldY);
			if(m !== false) {
				var p = playerAttackedMonster(m, this.player.username);
				var damage = (m.health - (this.player.level + 1) >= 0) ? (this.player.level + 1) : m.health;
				if(p === false) {
					m.slayers.push({username: this.player.username, damage: damage});
				} else {
					p.damage += damage;
				}
				m.health -= damage;
				if(m.health > 0) {
					sendToMap(this.player.map, 'monster attacked', {monster: m.data()});
				} else {
					sendToMap(this.player.map, 'monster remove', {monster: m.data()});
					m.die();
					this.player.map.monsters.splice(this.player.map.monsters.indexOf(m), 1);
					for(var i = 0;i < m.slayers.length;++i) {
						var slayer = getPlayerByUsername(m.slayers[i].username);
						if(slayer !== false) {
							var expToGain = Math.floor((m.slayers[i].damage / m.maxHealth) * m.exp);
							slayer.exp += expToGain;
							var newLevel = expToLevel(slayer.exp);
							if(slayer.level != newLevel) {
								slayer.level = newLevel;
								slayer.client.emit('level up', {level: slayer.level});
							}
							slayer.client.emit('gain exp', {exp: expToGain, total: slayer.exp, level: slayer.level});
						}
					}
				}
			}
		}
	});
	
	client.on('walk', function(data) {
		if(this.player !== undefined && this.player.hasInit && data.direction !== undefined) {
			if(data.direction >= 0 && data.direction <= 3) {
				this.player.dir = data.direction;
				var cX = this.player.x, cY = this.player.y;
				switch(this.player.dir) {
					case 0:	++cX; break;
					case 1: --cY; break;
					case 2: --cX; break;
					case 3: ++cY; break;
					default: break;
				}
				if(this.player.map.pointIsWalkable(cX, cY) || this.player.nowall) {
					this.player.x = cX;
					this.player.y = cY;
					if(this.player.map.id == 1 && this.player.y == 19 && (this.player.x == 4 || this.player.x == 6 || this.player.x == 8 || this.player.x == 10 || this.player.x == 12 || this.player.x == 14)) {
						this.player.x = rand(2, 15);
						this.player.y = rand(2, 10);
						sendToMap(this.player.map, 'warp player', {player: this.player.data()});
					} else if(this.player.map.id == 0 && this.player.x == 0 && this.player.y >= 13 && this.player.y <= 16) {
						warpPlayer(this.player, maps[1], 18, 10);
					} else if(this.player.map.id == 1 && this.player.x == 19 && this.player.y >= 9 && this.player.y <= 11) {
						warpPlayer(this.player, maps[0], 1, 15);
					} else {
						sendToMapLimited(this.player.map, 'player walk', {player: this.player.data()}, this.player);
					}
				}
			}
		}
	});
	
	client.on('online list', function(data) {
		if(this.player !== undefined && this.player.hasInit) {
			client.emit('online list', {list: onlineList()});
		}
	});
	
	client.on('turn', function(data) {
		if(this.player !== undefined && this.player.hasInit && data.dir !== undefined) {
			if(data.dir >= 0 && data.dir <= 3) {
				this.player.dir = data.dir;
				sendToMapLimited(this.player.map, 'player turn', {player: this.player.data()}, this.player);
			}
		}
	});
	
	client.on('disconnect', function(){
		console.log('Client disconnected');
		if(this.player !== undefined) {
			var m = this.player.map;
			this.player.map.removePlayer(this.player);
			mysql_client.query("UPDATE accounts SET x = " + this.player.x + ", y = " + this.player.y + ", experience = " + this.player.exp + ", arena_kills = " + this.player.arenaKills + ", arena_deaths = " + this.player.arenaDeaths + ", map = " + this.player.map.id + ", health = " + this.player.health + " WHERE username = " + mysql_client.escape(this.player.username));
			if(this.player.hasInit) {
				sendToMap(m, 'player remove', {player: this.player.data()});
			}
		}
		for(var i = 0;i < my_clients.length;++i) {
			if(my_clients[i] == this) {
				my_clients.splice(i, 1);
			}
		}
	});
}); 