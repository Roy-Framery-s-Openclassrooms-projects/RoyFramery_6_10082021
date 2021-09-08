import {displaysPhotographersCards, displaysMediaById, displaysPhotographersPofilsById, displayFilters} from './query.js'
import Lightbox from './class/lightbox.js'
import Modal from './class/modal.js'


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
}

