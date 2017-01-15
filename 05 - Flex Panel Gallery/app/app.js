const panels = document.querySelectorAll(".panel");

function toggleHidden() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	console.log(e.propertyName)
	if (e.propertyName === 'flex-grow') {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleHidden));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));