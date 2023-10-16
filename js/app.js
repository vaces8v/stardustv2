window.addEventListener('DOMContentLoaded', () => {
	(function (){
		const modeBtmnDark = document.querySelector('.buttonmode'),
				header = document.querySelector('header'),
				referenceA = document.querySelectorAll('header nav a'),
				logo = document.querySelector('.logo h1'),
				linedTextWord = document.querySelectorAll('.lined-text__word'),
				referenceButton = document.querySelector('.referenc'),
				a_li = document.querySelectorAll('span'),
				filterA = document.querySelectorAll('.filter--item a'),
				linkContenr = document.querySelectorAll('.Link');

	function toggleDark() {
		modeBtmnDark.style.color = '#333';
		modeBtmnDark.addEventListener('click', () => {
			if(modeBtmnDark.classList.contains('OFF')) {
				modeBtmnDark.classList.remove('OFF');
				modeBtmnDark.classList.add('ON');
				referenceA.forEach((e) => {
					e.style.color = '#333';});
				linedTextWord.forEach((text) => {
					text.style.color = '#333';});
					linkContenr.forEach(e => {
						e.classList.add('SecondRef');
					});
				modeBtmnDark.style.background = '#333';
				modeBtmnDark.style.color = '#ccc';
				modeBtmnDark.innerHTML = 'Dark Mode'
				header.style.background = '#fff';
				logo.style.color = '#333';
				referenceButton.style.background = '#333';
				referenceButton.style.color = '#ccc';
				filterA.forEach(text => {
					text.style.color = '#333';
				})
				document.body.style.background = '#fff';
			}
			else {
				modeBtmnDark.classList.remove('ON');
				modeBtmnDark.classList.add('OFF');
				referenceA.forEach((e, i) => {
					e.style.color = '#ccc';})
					linedTextWord.forEach((text) => {
						text.style.color = '#ccc';});
						linkContenr.forEach(e => {
							e.classList.remove('SecondRef');
						});
				modeBtmnDark.style.background = '#ccc';
				modeBtmnDark.style.color = '#333';
				modeBtmnDark.innerHTML = 'Light Mode'
				header.style.background = '#262635';
				logo.style.color = '#ccc';
				referenceButton.style.background = '#ccc';
				referenceButton.style.color = '#333';
				filterA.forEach(text => {
					text.style.color = '#ccc';
				})
				document.body.style.background = '#262635';
			}
		})
	}

	function aListAnimation() {
		a_li.forEach(element => {
			element.classList.remove('animeti');
			element.addEventListener('mouseover', () => {
				element.classList.add('animeti');
			})
		})
		a_li.forEach(element => {
			element.addEventListener('mouseout', () => {
				element.classList.remove('animeti')
			})
		})
	}


	toggleDark();
	aListAnimation();
	
	}())
})
