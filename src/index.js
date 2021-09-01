import {displaysPhotographersPofils, displaysMediaById, displaysPhotographersPofilsById, displayFilters} from './query.js'

if (document.title == 'Accueil') {
	displayFilters()
	displaysPhotographersPofils()
}
if (document.title == 'Gallery') {
	displaysPhotographersPofilsById()
	displaysMediaById()
}
