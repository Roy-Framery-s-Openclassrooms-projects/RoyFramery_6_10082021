// to display the price per day

const DomInfos = document.querySelector('.infos')

/**
 * 
 * @param {array} photographer 
 */
let displayDailyPriceOfPhotographer = (photographer) => {
	photographer.then(photographer => {
		// getPrice() is a method in Photographer Class
		DomInfos.insertAdjacentHTML('beforeend', photographer[0].getPrice())
	})
}

export default displayDailyPriceOfPhotographer