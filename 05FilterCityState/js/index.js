const endPoint =
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

fetch(endPoint)
	.then(cityList => cityList.json())
	.then(data => cities.push(...data));
//fetch data from enpoint then push data into cities empty array

function findMatch(wordToMatch, cities) {
	//filter through cities
	return cities.filter(place => {
		//words to match globally and case insensitive
		const regex = new RegExp(wordToMatch, "gi");
		//return words that match regex
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) {
	//adds comma to numbers
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
	//an array of input
	const matchArray = findMatch(this.value, cities);
	const html = matchArray
		.map(place => {
			const regex = new RegExp(this.value, "gi");
			const cityName = place.city.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);
			const stateName = place.state.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);

			return `
			<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="pop">${numberWithCommas(place.population)}</span>
			</li>
		`;
		})
		.join("");
	suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);