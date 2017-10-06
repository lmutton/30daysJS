//1. get all check boxes

const checkBox = document.querySelectorAll('.inbox input[type="checkbox"]');

function isChecked(e){
	console.log('checked');
}

checkBox.forEach(checkBox => checkBox.addEventListener('click', isChecked));