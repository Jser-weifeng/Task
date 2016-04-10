var oslideLeftIn = document.getElementById('slideLeftIn');
var oslideRightIn = document.getElementById('slideRightIn');
var oslideLeftOut = document.getElementById('slideLeftOut');
var oslideRightOut = document.getElementById('slideRightOut');
var oldArr = document.getElementById('numBox').getElementsByTagName('div');
var arr = [];

for(var i = 0; i < oldArr.length; i++) {
	arr.push(oldArr[i].innerText);
}

function textSplit(value) {
  return value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(d){return d != '';});
}

function $alert(txt) {
	document.getElementById('err').innerText = txt;

	setTimeout(function() {
		document.getElementById('err').innerText = '';
	}, 3000);
}

function render() {
	var strHTML = '';
	for(var i in arr) {

		strHTML += '<div>' + arr[i] + '</div>';
	}
	document.getElementById('numBox').innerHTML = strHTML;
}

function slideLeftIn(num) {
	if (textSplit(num).length === 0) {
		$alert('请输入文本内容');
	}
	for(var i in textSplit(num)) {
		arr.unshift(textSplit(num)[i]);
	}
	render();
	return arr;
}

function slideRightIn(num) {
	if (textSplit(num).length === 0) {
		$alert('请输入文本内容');
	}
	for(var i in textSplit(num)) {
		arr.push(textSplit(num)[i]);
	}
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
	
var aInput = document.getElementById('aTextarea');

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
var searchInput = document.getElementById('searchInput');
var searchBtn = document.getElementById('search');

searchBtn.onclick = function() {
	var flag = false;
	if (searchInput.value.length > 0) {
		for(var i in arr) {
			document.getElementById('numBox').getElementsByTagName('div')[i].style.backgroundColor = 'black';
			if (arr[i] === searchInput.value) {
				document.getElementById('numBox').getElementsByTagName('div')[i].style.backgroundColor = 'red';
				flag = true;
			}
		}
		if (!flag) {
			$alert('没有查询到相关记录');
		}
	} else {
		$alert('请输入查询文本');
	}
}