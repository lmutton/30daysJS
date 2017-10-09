//get all check boxes
const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const inputText = document.querySelector('.itemName');

let lastChecked;

function handleCheck(e) {
	let inBetween = false;
	//check for shift key
	//and check if they are checking not unchecking
	//this.checked lets us know if a checkbox is ticked or not
	if (e.shiftKey && this.checked) {
		//if both are true loop over each checkbox
		checkBoxes.forEach(checkbox => {
			//if the check box is this or lastchecked
			if (checkbox === this || checkbox === lastChecked) {
				//then if false will equal true and if true will equal false
				inBetween = !inBetween;
			}
			//as inbetween will be set to true between this and lastChecked
			if (inBetween) {
				//we can go ahead and tick the inbetween checkboxes
				//using .checked = true;
				checkbox.checked = true;
			}
		});
	}	
	lastChecked = this;
}


checkBoxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));