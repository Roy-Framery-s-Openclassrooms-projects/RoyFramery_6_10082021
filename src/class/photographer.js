/**
 * Class to create a photographer
 */
export default class Photographer {
	/**
	 * 
	 * @param {string} name name of the photographer
	 * @param {string} city City where the photographer live
	 * @param {string} country Country where the photographer live
	 * @param {string[]} tags An array an array of tags 
	 * @param {string} tagline The tagline of the photographer
	 * @param {number} price The price dayliprice of the photographer
	 * @param {string} portrait The file name with the extension of his portrait
	 * @param {number} id The id of the photographer
	 */
	constructor( name, city, country, tags, tagline, price, portrait, id) {
		this.name = name
		this.city = city
		this.country = country
		this.tags = tags
		this.tagline = tagline
		this.price = price
		this.portrait = portrait
		this.id = id
	}
	dom = {
		photographers : document.querySelector('.photographers'),
		photographer : document.querySelector('.photographer'),
		nameInForm : document.querySelector('.modal__head')
	}
	/**
	 *  Construct the Dom Element of the price on photographer's profil page
	 * @returns A string that contain the DOM element with the price
	 */
	getPrice = () => {
		return `
		<p class="infos__price">${this.price}€ / jour</p>
		`
	}

	/**
	 * Construct all tags in the photographer's card on home page
	 * @returns A string that contain all Dom Elements for each tag
	 */
	tagsForPhotographersCards = () => {
		let spanTags = ''
		for (let i = 0; i < this.tags.length; i++) {
			spanTags += `<span class="photographer__tag"><a href="./index.html?tag=${this.tags[i]}">#${this.tags[i]}</a></span>`
		}
		return spanTags
	}

	/**
	 * To construct a photographer's card on home page
	 * @returns A string that correspond to the DOM elements for a photographer's card on home page
	 */
	get photographerCard() {
		return `
		<acticle class="photographer">
			<a href="./photographers/index.html?id=${this.id}" class="photographer__header">
				<img class="photographer__img" src="public/images/photographers/id_photos/${this.portrait}" alt="${this.name}">
				<h2 class="photographer__name">${this.name}</h2>
			</a>
			<div class="photographer__content">
				<p class="photographer__location">${this.city}, ${this.country}</p>
				<p class="photographer__tagline">${this.tagline}</p>
				<p class="photographer__price">${this.price}€/jour</p>
			</div>
			<div class="photographer__tags">` + this.tagsForPhotographersCards() + `</div>
		</acticle>
		`
	}

	/**
	 * Construct all tags in the photographer's card on photographer's profil page
	 * @returns A string that contain all Dom Elements for each tag
	 */
	tagsForPhotographerHeader = () => {
		let spanTags = ''
		for (let i = 0; i < this.tags.length; i++) {
			spanTags += `<span class="photographer__tag"><a href="../index.html?tag=${this.tags[i]}">#${this.tags[i]}</a></span>`
		}
		return spanTags
	}

	/**
	 * To construct a photographer's card on photographer's profil page
	 * @returns A string that correspond to the DOM elements for a photographer's card on photographer's profil page
	 */
	get photographerHeader() {
		return `
		<acticle class="photographer__profil">
			<div class="photographer__body">
				<div class="photographer__content">
					<h1 class="photographer__name">${this.name}</h1>
					<p class="photographer__location">${this.city}, ${this.country}</p>
					<p class="photographer__tagline">${this.tagline}</p>
					<div class="photographer__tags">` + this.tagsForPhotographerHeader() + `</div>
				</div>
				<button class="photographer__contactButton">Contactez-moi</button>
			</div>
			<img class="photographer__img" src="../public/images/photographers/id_photos/${this.portrait}" alt="${this.name}">
		</acticle>
		`
	}

	/**
	 *  Construct the Dom Element withe the photographer's name for the contact form on photographer's profil page
	 * @returns A string that contain the DOM element with the photographer's name
	 */
	get photographerNameInForm() {
		return `
			<h1 class="modal__head" id="contact">Contactez-moi </br> ${this.name}</h1>
		`   
	}

}