import Photographer from './class/photographer.js'
import Media from './class/media.js'
import Filter from './class/filter.js'

let getPhotographers = async () => {
	const url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'
	const response = await fetch(url)
	if (response.ok) {
		const data = await response.json()
		const photographers = data.photographers

		// to get params
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const paramTag = urlParams.get('tag')
		if (paramTag == null) {
			return photographers
		} else {
			let dataphotographers = []
			for (const photographer of photographers) {
				for (const tag of photographer.tags) { 
					if (tag == paramTag) {
						dataphotographers.push(photographer)
					} 
				}
			}
			return dataphotographers
		}
	} else {
		console.error(response.status)
	}
}

let displaysPhotographersCards = async () => {
	const photographers = await getPhotographers()
	let i = 0
	let photographerCard = {}
	for (const photographer of photographers) {
		photographerCard[i] = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tags, photographer.tagline, photographer.price, photographer.portrait, photographer.id) 
		photographerCard[i].constructCardPhotographer()
		i++
	}
}

let getPhotographerById = async () => {
	const url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'
	const response = await fetch(url)
	if (response.ok) {
		// // to get params
		const queryString = window.location.search
		const urlParams = new URLSearchParams(queryString)
		const paramId = urlParams.get('id')

		const data = await response.json()
		const photographers = data.photographers
		for (let photographer of photographers) {
			if (photographer.id == paramId) return photographer
		}
	} else {
		console.error(response.status)
	}
}

let displaysPhotographersPofilsById = async () => {
	const photographer = await getPhotographerById()
	const photographerInfo = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tags, photographer.tagline, photographer.price, photographer.portrait, photographer.id)
	photographerInfo.constructCardPhotographer()
}

// Fetch to get media 
let getMedia = async () => {
	const url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'
	const response = await fetch(url)
	if (response.ok) {
		const data = await response.json()
		return data.media
	} else {
		console.error(response.status)
	}
}

let displaysMediaById = async () => {
	const medias = await getMedia()
	const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
	const id = urlParams.get('id')
	let i = 0
	let mediaArray= {}
	for (const media of medias) {
		if (media.photographerId == id) {
			if (media['image'] !== undefined) {
				mediaArray[i] = new Media(media.title, media.image, media.likes, 'image')
				mediaArray[i].createMedia()
			} else if (media['video'] !== undefined) {
				mediaArray[i] = new Media(media.title, media.video, media.likes, 'video')
				mediaArray[i].createMedia()
			}
			i++
		} 
			
			
			
	}
}

let getFilters = async () => {
	const url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'
	const response = await fetch(url)
	if (response.ok) {
		const data = await response.json()
		const photographers = data.photographers
		let filters = []
		for (let photographer of photographers) {
			for (let tag of photographer.tags) {
				if (!filters.includes(tag)) {
					filters.push(tag)
				}
			}
		}
		return filters
	} else {
		console.error(response.status)
	}
}

let displayFilters = async () => {
	const filters = await getFilters()
	for (let filter of filters) {
		const filterElement = new Filter(filter)
		filterElement.displayfilter()
	}
}

export {displaysPhotographersCards, displaysMediaById, displaysPhotographersPofilsById, displayFilters}