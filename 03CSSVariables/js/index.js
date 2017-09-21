const inputs = document.querySelectorAll('.controlls input');
//select all inputs and asign it to inputs

function handleUpdate(){
	const pixles = this.dataset.sizing || '';
	//dataset accesses data-sizing. We need this info to get the px. 
	document.documentElement.style.setProperty(`--${this.name}`, this.value + pixles);
	//as we've set the name and css variable name to the same we can use that to change the CSS property of this
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//change on both 'change' and 'mousemove' eventlistener