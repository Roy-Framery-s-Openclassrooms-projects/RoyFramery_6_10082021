import {parseDataToJson, getPhotographersById, getMediaByPhotographerId} from '../src/service/api.js'
import Lightbox from './src/class/Lightbox.js'
import Modal from './src/class/Modal.js'
import Validator from './src/class/Validator.js'
import {inputs, containerInput} from './src/configValidator.js'
import displayTotalLikesOfPhotographer from './src/displayTotalLikes.js'
import displayDailyPriceOfPhotographer from './src/displayDailyPrice.js'
import increaseOrDecreaseLikesAndTotalLikes from './src/likes.js'
import {displaySelectOptions, hideSelectedOptionInSelect, removeClassToHideDuplicateOptionInSelect} from './src/select.js'

const dom = {
	inputSelect : document.querySelector('.filter__select'),
	photographerHeader : document.querySelector('.photographer'),
	nameInForm : document.querySelector('.modal__head'),
	media : document.querySelector('.media'),
	form : document.querySelector('.form'),
	modalForm : document.querySelector('.modal'),
	selectMenu : document.querySelector('.filter__custom-menu'),
	selectOption : document.querySelectorAll('.filter__custom-option'),
}

// To get Id in Url's params
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const paramId = urlParams.get('id')

// To display photographer header
const photographers = getPhotographersById(parseDataToJson(), paramId)
photographers.then(photographers => 
	photographers.map(photographer => {
		dom.photographerHeader.innerHTML = photographer.photographerHeader
		dom.form.insertAdjacentHTML('beforebegin', photographer.photographerNameInForm)
	})
)

// To display media by Id and Filter
let filter = dom.selectOption[0].getAttribute('data-value')

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
	hideSelectedOptionInSelect(filter, dom.selectOption)
}

displayMediaByPhotographerById(paramId, filter)

// Change the order of Media by creating a click listener on select's options
// And by changing value of the select 
dom.selectOption.forEach(option => option.addEventListener('click', () => {
	filter = option.getAttribute('data-value')
	displayMediaByPhotographerById(paramId, filter)
	removeClassToHideDuplicateOptionInSelect(filter, dom.selectOption)
	dom.inputSelect.setAttribute('data-value', option.innerText) 
	// need to initialize the lightboxand likes after the order of the media
	setTimeout(() => {
		Lightbox.init()
		increaseOrDecreaseLikesAndTotalLikes()
	}, 1000)
}))

// Change the order of Media by creating a keyup listener on select's options
// And by changing value of the select 
dom.selectOption.forEach(option => option.addEventListener('keyup', (e) => {
	if (e.key == 'Enter') {
		filter = option.getAttribute('data-value')
		displayMediaByPhotographerById(paramId, filter)
		removeClassToHideDuplicateOptionInSelect(filter, dom.selectOption)
		dom.inputSelect.setAttribute('data-value', option.innerText) 
		dom.inputSelect.focus()
		dom.selectMenu.classList.remove('filter__show')
	}
	// need to initialize the lightbox and likes after the order of the media
	setTimeout(() => {
		Lightbox.init()
		increaseOrDecreaseLikesAndTotalLikes()
	}, 1500)
}))

// To validate the form
const validator = new Validator(inputs, containerInput)

dom.form.addEventListener('click', (e) => {
	e.preventDefault()
	// if the condition return true, then reset the form and close the modal
	if (validator.launchValidation()) {
		dom.form.reset()
		dom.modalForm.style.display ='none'
	}
})

// To fill the card about total of likes and daily price
displayTotalLikesOfPhotographer(getMediaByPhotographerId(parseDataToJson(), paramId))
displayDailyPriceOfPhotographer(photographers)


// to init modal, lightbox, select event and init event listener on likes elements
setTimeout(() => {
	Modal.modalEvents()
	Lightbox.init()
	increaseOrDecreaseLikesAndTotalLikes()
	displaySelectOptions()
}, 1000)

