const panels = document.querySelectorAll('.panel');

function toggleActive(e){
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
}

function toggleOpen(){
	this.classList.toggle('open');
};

panels.forEach(panels => panels.addEventListener('click', toggleOpen));
panels.forEach(panels => panels.addEventListener('transitionend', toggleActive));