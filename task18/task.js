
var oslideLeftIn = document.getElementById('slideLeftIn');
var oslideRightIn = document.getElementById('slideRightIn');
var oslideLeftOut = document.getElementById('slideLeftOut');
var oslideRightOut = document.getElementById('slideRightOut');
var arr = [];

function isValid(value) {
	return /^\d+$/.test(value);
}

function render() {
	console.log(arr);
}

function slideLeftIn(num) {
	arr.unshift(num);
	render();
	return arr;
}

function slideRightIn(num) {
	arr.push(num);
	render();
	return arr;
}

function slideLeftOut(num) {
	arr.shift(num);
	render();
	return arr;
}

function slideRightOut(num) {
	arr.pop(num);
	render();
	return arr;
}

var aInput = document.getElementById('aInput');

oslideLeftIn.onclick = function() {
	slideLeftIn(aInput.value);
}
oslideRightIn.onclick = function() {
	slideRightIn(aInput.value);
}
oslideLeftOut.onclick = function() {
	slideLeftOut(aInput.value);
}
oslideRightOut.onclick = function() {
	slideRightOut(aInput.value);
}
