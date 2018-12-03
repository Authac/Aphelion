var PACKET_INIT = 0,
	PACKET_PING = 1,
	PACKET_CHAT = 2,
	PACKET_PLAYER = 3;

var PACKET_REQUEST = 0,
	PACKET_REPLY = 1,
	PACKET_UPDATE = 2,
	PACKET_ALERT = 3,
	PACKET_WALK = 4,
	PACKET_TURN = 5,
	PACKET_ATTACK = 6,
	PACKET_ADD = 7,
	PACKET_REMOVE = 8;

function PacketBuilder(f, a) {
	this.data = '';
	this.family;
	this.action;
	
	this.setID(f, a);
}

PacketBuilder.prototype.setID = function(f, a) {
	this.family = f;
	this.action = a;
}

PacketBuilder.prototype.addChar = function(c) {
	this.data += String.fromCharCode(c);
}

PacketBuilder.prototype.addShort = function(s) {
	this.addChar(s & 0XFF);
	this.addChar((s >> 8) & 0XFF);
}

PacketBuilder.prototype.addString = function(str) {
	this.data += str + String.fromCharCode(0);
}

PacketBuilder.prototype.get = function() {
	return  String.fromCharCode(this.family) + String.fromCharCode(this.action) + this.data;
}

function PacketReader(data) {
	this.data = data;
	this.family = this.getChar();
	this.action = this.getChar();
}

PacketReader.prototype.getChar = function() {
	var c = this.data[0];
	this.data = this.data.substr(1);
	return c.charCodeAt(0);
}

PacketReader.prototype.getShort = function() {
	var byte0 = this.getChar(),
		byte1 = this.getChar();
	return (byte1 << 8)|(byte0);
}

PacketReader.prototype.getString = function() {
	var nullPos = this.data.indexOf(String.fromCharCode(0)),
		str = this.data.substr(0, nullPos);
	this.data = this.data.substr(nullPos + 1);
	return str;
}