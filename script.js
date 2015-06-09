// var c = document.getElementById("myCanvas");
var c = $('#myCanvas')[0];

// console.log(c);
// console.log(c1);

var draw = false;
var color = 'black';
var shape = 'round';



$('table#colorSelector td').on('click', function(event){
	color = event.target.id;
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
	ctx.fillRect(x, y, size, size);
};

var shapes = ['roud' : drawRound, 'square' : drawSquare];

window.onmousedown = function() {
	draw = true;
};

window.onmouseup = function() {
	draw = false;
};


c.onmousemove = function(event) {
	if (draw) {
		// console.log(event);
		var x = event.offsetX, y = event.offsetY;
		var ctx = c.getContext("2d");
		ctx.fillStyle = "#FF0000";
		ctx.strokeStyle = '#FF0000';
		// ctx.fillRect(x, y, 25, 25);

		// window.setTimeout(function(){
		// 	ctx.clearRect ( x , y, 25, 25);
		// }, 1000);
		ctx.beginPath();
		ctx.arc(x, y, 12, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();

		// window.setTimeout(function(){
		// 	ctx.fillStyle = "green";
		// 	ctx.fillRect(x, y, 16, 16);
		// }, 1200);

		// window.setTimeout(function(){
		// 	ctx.clearRect ( x , y, 16, 16);
		// }, 1400);

		// window.setTimeout(function(){
		// 	ctx.fillStyle = "blue";
		// 	ctx.fillRect(x, y, 12, 12);
		// }, 1600);

		// window.setTimeout(function(){
		// 	ctx.clearRect ( x , y, 12, 12);
		// }, 1800);

		// window.setTimeout(function(){
		// 	ctx.fillStyle = color;
		// 	ctx.fillRect(x, y, 8, 8);
		// }, 2000);

		// window.setTimeout(function(){
		// 	ctx.clearRect ( x , y, 25, 25);
		// }, 2200);
	}

};