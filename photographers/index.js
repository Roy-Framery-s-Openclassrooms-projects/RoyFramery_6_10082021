import {parseDataToJson, getPhotographersById, getMediaByPhotographerId} from '../src/service/api.js'
import Lightbox from '../src/class/lightbox.js'
import Modal from '../src/class/Modal.js'
import Validator from '../src/class/Validator.js'
import {inputs, containerInput} from '../src/configValidator.js'

const dom = {
	photographerHeader : document.querySelector('.photographer'),
	nameInForm : document.querySelector('.modal__head'),
	media : document.querySelector('.media'),
	form : document.querySelector('.form'),
	modalForm : document.querySelector('.modal'),
	select : document.querySelector('.filter__select'),
	filterOption : document.querySelectorAll('.filter__option'),
	infos : document.querySelector('.infos')
}

// To get Id in Url's params
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const paramId = urlParams.get('id')

// To display photographer header
const photographers = getPhotographersById(parseDataToJson(), paramId)
photographers.then(photographers => 
	photographers.map(photographer => dom.photographerHeader.innerHTML = photographer.photographerHeader)
)


// To display media by Id and Filter

let filter = dom.select.value
/**
 * 
 * @param {number} id Id in the Url's params
 * @param {string} filter option in the select element
 */
let displayMediaByPhotographerById = (id, filter) => {
	let media = getMediaByPhotographerId(parseDataToJson(), id, filter)
	dom.media.innerHTML = ''
	media.then(media => 
		media.map(media => {
			dom.media.innerHTML += media.createMedia()
			hideSelectedOptionInSelect(filter)
		})
	)
}

displayMediaByPhotographerById(paramId, filter)

let hideSelectedOptionInSelect = (filter) => {
	dom.filterOption.forEach(option => {
		if (option.value == filter) {
			option.classList.add('filter__selected')
		}
	})
}

let removeClassToHideDuplicateOptionInSelect = (filter) => {
	dom.filterOption.forEach(option => {
		if (option.value != filter) {
			option.classList.remove('filter__selected')
		}
	})
}

dom.select.addEventListener('change', () => {
	filter = dom.select.value
	hideSelectedOptionInSelect(filter)
	removeClassToHideDuplicateOptionInSelect(filter)
	displayMediaByPhotographerById(paramId, filter)
})

// to init modal and lightbox
setTimeout(() => {
	Modal.modalEvents()
	Lightbox.init()
}, 1000)

// To validate the form
const validator = new Validator(inputs, containerInput)

dom.form.addEventListener('click', (e) => {
	e.preventDefault()
	if (validator.launchValidation()) {
		dom.form.reset()
		dom.modalForm.style.display ='none'
	}
})



let displayTotalLikesAndPriceADayOfPhotographer = (photographer, medias) => {
	medias.then(medias => {
		let totalLikes = 0
		medias.map(media => {
			totalLikes += media.likes 
		})
		return dom.infos.insertAdjacentHTML('beforeend', `
			<div class="infos__likes">
				<p class="infos__totalLikes">${totalLikes}</p>
				<svg role="image" class="infos__heart" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<title id="title">Likes</title>
				<desc id="description">Icone en forme de cœur</desc>
				<path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#000"/>
				</svg>
			</div>
		`)
	})
	photographer.then(photographer => dom.infos.insertAdjacentHTML('beforeend', photographer[0].getPrice()))
}
displayTotalLikesAndPriceADayOfPhotographer(photographers, getMediaByPhotographerId(parseDataToJson(), paramId))
