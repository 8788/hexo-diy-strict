/**
 * @fileOverview 
 * @authors Bubblings
 */

;(function () {

	// backTop
	var backTop = document.getElementById('back-top');

	backTop.onclick = function () {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	};

	// show or hide backTop
	function toggleBackTop(scrollTop) {
		if (scrollTop >= 400) {
			backTop.style.display = 'block';
		} else {
			backTop.style.display = 'none';
		}		
	}



	// catalog
	var catalog = document.getElementById('fixed');
	var catalogList = catalog.getElementsByTagName('ul')[0];
	var main = document.getElementsByTagName('main')[0];
	var offsetTop = getOffset(catalog).top;
	var titles;
	try {
		titles = main.querySelectorAll('h2, h3');
	} catch(e) {
		titles = main.getElementsByTagName('h2');
	}
	var len = titles.length;

	var res = '';
	for (var i = 0; i < len; i++) {
		var cur = titles[i];
		if (cur.tagName.toLowerCase() === 'h2') {
			res += '<li><a href="#' + cur.id + '">' + cur.innerHTML + '</a></li>';
		} else {
			res += '<li class="sub-title"><a href="#' + cur.id + '">' + cur.innerHTML + '</a></li>';
		}
		
	}
	catalogList.innerHTML = res;

	// get offset
	function getOffset(ele) {
		var t = 0, l = 0;
		while (ele.offsetParent) {
			t += ele.offsetTop;
			l += ele.offsetLeft;
			ele = ele.offsetParent;
		}
		return {
			top: t,
			left: l
		};
	}

	// fixed or static
	function fixedCatalog(scrollTop) {
		if (scrollTop >= offsetTop) {
			catalog.style.position = 'fixed';
			catalog.style.top = '10px';
			catalog.style.width = '240px';
		} else {
			catalog.style.position = 'static';
		}
	}


	window.onscroll = function () {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		toggleBackTop(scrollTop);
		fixedCatalog(scrollTop);
	};
})();