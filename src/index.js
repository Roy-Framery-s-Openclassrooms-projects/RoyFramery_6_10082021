import Photographer from './class/photographer.js'
// http://localhost:8080
fetch('../fisheyeData.json')
	.then(response => {
		if (!response.ok) {
			throw new Error('HTTP error ' + response.status)
		}
		return response.json()
	})
	.then(json => {
		var i = 0
		var photographerCard = {}
		for (const photographer of json.photographers) {
			photographerCard[i] = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tags, photographer.tagline, photographer.price, photographer.portrait) 
			photographerCard[i].constructCardPhotographer()
			i++
		}
	})
	.catch(function () {
		this.dataError = true
	})
