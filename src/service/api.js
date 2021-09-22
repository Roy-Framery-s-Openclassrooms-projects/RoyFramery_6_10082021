import Photographer from '../class/Photographer.js'
import Media from '../class/Media.js'
import Filter from '../class/Filter.js'

let parseDataToJson = async () => {
	const url = 'https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'
	const response = await fetch(url)
	if (response.ok) {
		return response.json()
	} else {
		console.error(response.status)
	}
}

let getMedias = async (data) => {
	const datas = await data
	const medias = datas.media
	medias.map(data => {
		return data
	})
}

let getPhotographers = async(jsonData) => {
	const data = await jsonData
	const photographers = data.photographers
	let photographersArray = []
	photographers.map(data => {
		photographersArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id))
	})
	return photographersArray
}

let getPhotographersById = async(jsonData, id) => {
	const data = await jsonData
	const photographers = data.photographers
	let photographerArray = []
	photographers.map(data => {
		if (id == data.id) {
			photographerArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id))
		}
	})
	return photographerArray
}

let getTagsFromPhotographers = async(photographersData) => {
	const data = await photographersData
	const photographers = data.photographers
	let filters = []
	for (let photographer of photographers) {
		for (let tag of photographer.tags) {
			if (!filters.includes(tag)) {
				filters.push(tag)
			}
		}
	}
	let tags = []
	filters.map(filter => 
		tags.push(new Filter(filter))
	)
	return tags
}

let getMediaByPhotographerId = async(jsonData, id, filter) => {
	const data = await jsonData
	const media = data.media
	let mediaArray = []
	media.map(media => {
		if (id == media.photographerId) {
			mediaArray.push(new Media( media.title, media['image'] ? media.image : media.video, media.likes, media['image'] ? 'image' : 'video', media.date))
		}
	})
	sortMediaByFilter(mediaArray, filter)
	return mediaArray
}

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

export {parseDataToJson, getMedias, getPhotographers, getTagsFromPhotographers, getPhotographersById, getMediaByPhotographerId}