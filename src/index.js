import {displaysPhotographersPofils, displaysMedia} from './query.js'
// http://localhost:8080
if (document.title == 'Accueil') displaysPhotographersPofils()
if (document.title == 'Gallery') displaysMedia()