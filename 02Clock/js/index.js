function setTime() {
	//set variables to get classes
	const secondHand = document.querySelector(".second-hand");
	const minsHand = document.querySelector(".minute-hand");
	const hourHand = document.querySelector(".hour-hand");
	const now = new Date();
	//get current date
	//set seconds of current date
	const seconds = now.getSeconds();
	const secondsDegree = seconds / 60 * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;
	//stop hands running backward back to position
	if (secondsDegree == 90) {
		secondHand.style.transition = "none";
	} else {
		secondHand.style.transition = "all 0.05s";
		secondHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
	}

	//set minutes of current date
	const minutes = now.getMinutes();
	const minutesDegree = minutes / 60 * 360 + seconds / 60 * 6 + 90;
	minsHand.style.transform = `rotate(${minutesDegree}deg)`;
	if (minutesDegree == 90) {
		minsHand.style.transition = "none";
	} else {
		minsHand.style.transition = "all 0.05s";
		minsHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
	}

	//set hour of current date
	const hours = now.getHours();
	const hoursDegree = hours / 12 * 360 + minutes / 60 * 30 + 90;
	hourHand.style.transform = `rotate(${hoursDegree}deg)`;
	if (hoursDegree == 90) {
		hourHand.style.transition = "none";
	} else {
		hourHand.style.transition = "all 0.05s";
		hourHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
	}
}

//repeat every second
setInterval(setTime, 1000);

setTime();