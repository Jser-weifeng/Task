// 创建tag标签
var creatTag = {
	arr: new Array(),
	_init: function() {
		var tagsInput = document.getElementById('tagsInput');
		creatTag._onkeyup(tagsInput);
		
		var tags = document.getElementById('tags');
		creatTag._hoverTags(tags);
	},
	_trim: function(str) {
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	},
	_maxNum: function(num) {
		if (creatTag.arr.length >= num) {
			creatTag.arr.shift(creatTag.arr[0]);
			var x = document.getElementById('tags').getElementsByTagName('div')[0];
			x.parentNode.removeChild(x);
		}
	},
	_unique: function(value) {
		var flag = true;
		for (var i = 0; i < creatTag.arr.length; i++ ) {
			if (creatTag._trim(value) === creatTag.arr[i]) {
				flag = false;
			}
		}
		return flag;
	},
	_clean: function(obj) {
		obj.value = '';
	},
	_$alert: function(txt, id) {
		document.getElementById(id).innerText = txt;

		setTimeout(function() {
			document.getElementById(id).innerText = '';
		}, 3000);
	},
	_delTags: function() {
		if (this.arr.length > 10) {
			this.arr.shift(0);
		}
	},
	_hoverTags: function(tag) {
		tag.onmouseover = function(e) {
			if (e.target.parentNode.id === 'tags') {
				var divs = tags.getElementsByTagName('div');
				for(var i = 0; i < divs.length; i++) {
					if (e.target.innerText == divs[i].innerText) {
						var value = divs[i].innerText;
						divs[i].style.backgroundColor = 'red';
						divs[i].innerText = '删除节点:' + value;
						divs[i].onclick = function(i) {
							this.parentNode.removeChild(this);
						};
					}
				}
			}
		};
		tag.onmouseout = function(e) {
			if (e.target.parentNode.id === 'tags') {
				var divs = tags.getElementsByTagName('div');
				for(var i = 0; i < divs.length; i++) {
					if (e.target.innerText == divs[i].innerText) {
						divs[i].style.backgroundColor = 'black';
						var value = divs[i].innerText;
						divs[i].innerText = value.split('删除节点:')[1];
					}
				}
			}
		}
	},
	_onkeyup: function(obj) {
		obj.onkeyup = function(e) {
			keyCode = e.which || e.keyCode;
			if (keyCode === 13 || keyCode === 188 || keyCode === 32) {
				if (!creatTag._unique(obj.value)) {
					creatTag._clean(obj);	
					creatTag._$alert('不能添加重复标签', 'errTag');
					return;
				}
				
				creatTag._maxNum(10);
				creatTag.arr.push(creatTag._trim(obj.value));
				creatTag._render();
				creatTag._clean(obj);
			}
		}
	},
	_render: function() {
		var oTags = document.getElementById('tags');
		oTags.innerHTML += '<div>' + creatTag.arr[creatTag.arr.length - 1] + '</div>';
	}
}

creatTag._init();