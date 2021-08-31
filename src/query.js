import Photographer from './class/photographer.js'
import Media from './factoryPattern/media.js'

let getPhotographers = async () => {
	// const url = '../fisheyeData.json'
	const url = 'http://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'

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

let displaysPhotographersPofils = async () => {
	const photographers = await getPhotographers()
	let i = 0
	let photographerCard = {}
	for (const photographer of photographers) {
		photographerCard[i] = new Photographer(photographer.name, photographer.city, photographer.country, photographer.tags, photographer.tagline, photographer.price, photographer.portrait, photographer.id) 
		photographerCard[i].constructCardPhotographer()
		i++
	}
}

// Fetch to get media 
let getMedia = async () => {
	// const url = '../../fisheyeData.json'
	const url = 'http://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/fisheyeData.json'
	const response = await fetch(url)
	if (response.ok) {
		const data = await response.json()
		return data.media
	} else {
		console.error(response.status)
	}
}
// display image by Id
let displaysMedia = async () => {
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
// display video by Id
export {displaysPhotographersPofils, displaysMedia}