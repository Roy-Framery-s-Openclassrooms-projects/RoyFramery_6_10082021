// to display the price per day

const DomInfos = document.querySelector('.infos')

let displayDailyPriceOfPhotographer = (photographer) => {
	photographer.then(photographer => DomInfos.insertAdjacentHTML('beforeend', photographer[0].getPrice()))
}

export default displayDailyPriceOfPhotographer