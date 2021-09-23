import {parseDataToJson, getPhotographersById, getMediaByPhotographerId} from '../src/service/api.js'
import Lightbox from './src/class/Lightbox.js'
import Modal from './src/class/Modal.js'
import Validator from './src/class/Validator.js'
import {inputs, containerInput} from './src/configValidator.js'
import displayTotalLikesOfPhotographer from './src/displayTotalLikes.js'
import displayDailyPriceOfPhotographer from './src/displayDailyPrice.js'
import increaseOrDecreaseLikesAndTotalLikes from './src/likes.js'
import {displaySelectOptions, hideSelectedOptionInSelect} from './src/select.js'


const dom = {
	photographerHeader : document.querySelector('.photographer'),
	nameInForm : document.querySelector('.modal__head'),
	media : document.querySelector('.media'),
	form : document.querySelector('.form'),
	modalForm : document.querySelector('.modal'),
	selectOption : document.querySelectorAll('.filter__custom-option'),
	filterOption : document.querySelectorAll('.filter__custom-option'),
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
let filter = dom.selectOption[0].getAttribute('value')

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
		})
	)
	hideSelectedOptionInSelect(filter, dom.filterOption)
}

displayMediaByPhotographerById(paramId, filter)

// let removeClassToHideDuplicateOptionInSelect = (filter) => {
// 	dom.filterOption.forEach(option => {
// 		if (option.value != filter) {
// 			option.classList.remove('filter__selected')
// 		}
// 	})
// }
// TODO: faire une boucle dans les option-custom pour créer des eventListener au click pour chaque élément !
// // dom.select.addEventListener('change', () => {
// // 	filter = dom.select.value
// // 	hideSelectedOptionInSelect(filter)
// // 	displayMediaByPhotographerById(paramId, filter)
// // })
// removeClassToHideDuplicateOptionInSelect(filter)

// To validate the form
const validator = new Validator(inputs, containerInput)

dom.form.addEventListener('click', (e) => {
	e.preventDefault()
	if (validator.launchValidation()) {
		dom.form.reset()
		dom.modalForm.style.display ='none'
	}
})

// To fill the card about total of likes and daily price
displayTotalLikesOfPhotographer(getMediaByPhotographerId(parseDataToJson(), paramId))
displayDailyPriceOfPhotographer(photographers)


// to init modal, lightbox and init event listener on likes elements
setTimeout(() => {
	Modal.modalEvents()
	Lightbox.init()
	increaseOrDecreaseLikesAndTotalLikes()
}, 1000)


displaySelectOptions()
