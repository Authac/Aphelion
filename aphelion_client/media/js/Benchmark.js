function Benchmark() {
	Benchmark.marks = {};
}

Benchmark.start = function(name) {
	Benchmark.marks[name] = new Mark(name);
}

Benchmark.stop = function(name, output) {
	Benchmark.marks[name].stop();
	if(output !== undefined && output) {
		Benchmark.result(name);
		Benchmark.marks[name] = undefined;
	}
}

Benchmark.result = function(name) {
	if(Benchmark.marks[name] !== undefined) {
		console.log('Mark "' + name + '" took ' + Benchmark.marks[name].runTime + 'ms');
	}
}

function Mark(name) {
	this.name = name;
	this.startTime;
	this.runTime;
	
	this.start();
}

Mark.prototype.start = function() {
	var d = new Date();
	this.startTime = d.getTime();
}

Mark.prototype.stop = function() {
	var d = new Date();
	this.runTime = d.getTime() - this.startTime;
}