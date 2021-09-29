import Photographer from '../class/Photographer.js'
import Media from '../../photographers/src/class/Media.js'
import Filter from '../class/Filter.js'

/**
 * Function that get Data of an URL and parsed as Json format
 * @returns parsed data as json format
 */
let parseDataToJson = async () => {
	const url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'
	const response = await fetch(url)
	if (response.ok) {
		return response.json()
	} else {
		console.error(response.status)
	}
}

/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new Photographer class for each photographer
 * @param {object} jsonData parsed data as json format
 * @returns an array of instantiations of the Photographer class
 */
let getPhotographers = async(jsonData) => {
	const data = await jsonData
	const photographers = data.photographers
	let photographersArray = []
	photographers.map(data => {
		photographersArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id))
	})
	return photographersArray
}

/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new Photographer class according to the photographer's id
 * @param {object} jsonData parsed data as json format
 * @param {number} id The id of the photographer get in URL's parameter
 * @returns An instantiations of the Photographer class
 */
let getPhotographersById = async(jsonData, id) => {
	const data = await jsonData
	const photographers = data.photographers
	let photographerArray = []
	photographers.map(data => {
		// if the Id in URL's parameter is the same as the photographer's id, then create an instance of Photographer
		if (id == data.id) {
			photographerArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id))
		}
	})
	return photographerArray
}

/**
 * Function that waiting parsed Data as Json format
 * and instantiates new filter class for each tags
 * @param {object} jsonData parsed data as json format
 * @returns An array of instantiations of the filter class
 */
let getTagsFromPhotographers = async(jsonData) => {
	const data = await jsonData
	const photographers = data.photographers
	let filters = []
	// Loop to remove duplicate tags
	for (let photographer of photographers) {
		for (let tag of photographer.tags) {
			if (!filters.includes(tag)) {
				filters.push(tag)
			}
		}
	}
	let tags = []
	// Loop to create instanciation of filter for each tags
	filters.map(filter => 
		tags.push(new Filter(filter))
	)
	return tags
}

/**
 * Function that waiting parsed Data as Json format 
 * and uses a loop to instantiate a new media class according to the media's id
 * @param {object} jsonData parsed data as json format
 * @param {number} id The id of the photographer get in URL's parameter
 * @param {string} filter option in the select element on photographer's profil page
 * @returns An array of instantiations of Media for each media
 */
let getMediaByPhotographerId = async(jsonData, id, filter) => {
	const data = await jsonData
	const media = data.media
	let mediaArray = []
	media.map(media => {
		// if the Id in URL's parameter is the same as the media's id, then create an instance of Photographer
		if (id == media.photographerId) {
			mediaArray.push(new Media( media.title, media['image'] ? media.image : media.video, media.likes, media.altTxt, media['image'] ? 'image' : 'video', media.date))
		}
	})
	sortMediaByFilter(mediaArray, filter)
	return mediaArray
}

/**
 * Sorts an array according to the filter passed in parameter
 * @param {object[]} media Array of instantiations of the media class
 * @param {string} filter option in the select element on photographer's profil page
 * @returns An array of objects sorted by a filter 
 */
let sortMediaByFilter = (media, filter) => {
	switch (filter) {
	case 'likes':
		return media.sort((a,b) => {
			return  b[filter] - a[filter]
		}) 
	case 'title':
		return media.sort((a,b) => {
			if(a[filter] < b[filter]) { return -1 }
			if(a[filter] > b[filter]) { return 1 }
			return 0
		}) 
	case 'date':
		return media.sort((a,b) => {
			return new Date(b[filter]) - new Date(a[filter])
		}) 
	default:
		break
	}
}

export {parseDataToJson, getPhotographers, getTagsFromPhotographers, getPhotographersById, getMediaByPhotographerId}