import {displaysPhotographersCards, displaysMediaById, displaysPhotographersPofilsById, displayFilters} from './query.js'
import Lightbox from './class/lightbox.js'
import Modal from './class/modal.js'
import Validator from './class/validator.js'
import {inputs, containerInput} from './configValidator.js'


if (document.title == 'Accueil') {
	displayFilters()
	displaysPhotographersCards()
}
if (document.title == 'Gallery') {
	displaysPhotographersPofilsById()

	let lightbox = async () => {
		const loadedMedia = await displaysMediaById()
		if (loadedMedia == undefined) {
			Lightbox.init()
		}
	}
	lightbox()
	setTimeout(() => {
		Modal.modalEvents()
	}, 2000)

	// form validation
	const form = document.querySelector('.form')
	const modalForm = document.querySelector('.modal')
	const validator = new Validator(inputs, containerInput)

	form.addEventListener('click', (e) => {
		e.preventDefault()
		if (validator.launchValidation()) {
			form.reset()
			modalForm.style.display ='none'
		}
	})
}

