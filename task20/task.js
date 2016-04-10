var oslideLeftIn = document.getElementById('slideLeftIn');
var oslideRightIn = document.getElementById('slideRightIn');
var oslideLeftOut = document.getElementById('slideLeftOut');
var oslideRightOut = document.getElementById('slideRightOut');
var oOrder = document.getElementById('order');
var oldArr = document.getElementById('numBox').getElementsByTagName('div');
var arr = [];

for(var i = 0; i < oldArr.length; i++) {
	arr.push(oldArr[i].style.height.split('px')[0]);
}

function isValid(value) {
	if(!/^\d+$/.test(value)) {
		alert('请输入正整数');
	} else if( value > 100 || value < 10){
		alert('请输入10到100的正整数');
	} else if(arr.length > 60	) {
		alert('队列元素最多可添加60个');
	} else {
		return true;
	}
}

function render() {
	var strHTML = '';
	for(var i in arr) {

		strHTML += '<div style="height:' + arr[i] + 'px;"></div>';
	}
	document.getElementById('numBox').innerHTML = strHTML;
}

function slideLeftIn(num) {
	if(isValid(num)) {
		arr.unshift(num);
		render();
		return arr;
	}
}

function slideRightIn(num) {
	if(isValid(num)) {
		arr.push(num);
		render();
		return arr;
	}
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

function order(arr) {
	arr.sort(function(a, b) {
		return a - b; 
	});
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
oOrder.onclick = function() {
	order(arr);
}
