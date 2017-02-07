const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	.then(blob => blob.json()) // blob contains object of promises.
	.then(data => {
		cities.push(...data);
	});

function findMatches(wordToMatch, dataToMatch) {
	const regex = new RegExp(wordToMatch, 'gi');
	return dataToMatch.filter(place => {
		return place.city.match(regex) || place.state.match(regex);
	})
}

// WAT!?
function numberWithCommas(x) {
  const regex = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
  return x.toString().replace(regex, ',');
}

function displayMatches() {
	const matchedArray = findMatches(this.value, cities);
	const regex = new RegExp(this.value, 'gi');
	const html = matchedArray.map(place => {
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return `
			<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;
	}).join('');
	searchSuggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const searchSuggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);