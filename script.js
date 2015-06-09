// var c = document.getElementById("myCanvas");
var c = $('#myCanvas')[0];

// console.log(c);
// console.log(c1);

var drawing = false;
var color = 'black';
var shape = 'round';
var x = 0, y = 0;



$('table#colorSelector td').on('click', function(event){
	color = event.target.id;
});

$('table#shapeSelector td').on('click', function(event){
	shape = event.target.id;
});

var drawRound = function (x, y, size, color) {
	var ctx = c.getContext("2d");
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.stroke();
};

var drawSquare = function (x, y, size, color) {
	var ctx = c.getContext("2d");
	ctx.fillStyle = color;
	ctx.fillRect(x, y, size* Math.PI/2, size* Math.PI/2);
};

var draw = function () {
	if (shape === 'round') {
		drawRound(x, y, 12, color);
	}
	else if (shape === 'square') {
		drawSquare(x, y, 12, color);
	}
};


c.onmousedown = function() {
	drawing = true;
	x = event.offsetX;
	y = event.offsetY;
	draw();
};

c.onmouseup = function() {
	drawing = false;
	x = event.offsetX;
	y = event.offsetY;
};



c.onmousemove = function(event) {
	x = event.offsetX;
	y = event.offsetY;
	if(drawing){
		draw();
	}

};