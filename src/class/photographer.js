export default class Photographer {
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
	}

	displayTags = () => {
		let spanTags = ''
		for (let i = 0; i < this.tags.length; i++) {
			spanTags += `<span class="photographer__tag"><a href="./index.html?tag=${this.tags[i]}">#${this.tags[i]}</a></span>`
		}
		return spanTags
	}

	constructCardPhotographer = () => {
		return this.dom.photographers.insertAdjacentHTML('beforeend', `
		<acticle class="photographer">
		<a href="./public/pages/photographer.html?id=${this.id}" class="photographer__header">
		<img class="photographer__img" src="public/images/photographers/id_photos/${this.portrait}" alt="">
		<h2 class="photographer__name">${this.name}</h2>
		</a>
		<div class="photographer__content">
		<p class="photographer__location">${this.city}, ${this.country}</p>
		<p class="photographer__tagline">${this.tagline}</p>
		<p class="photographer__price">${this.price}€/jour</p>
		</div>
		<div class="photographer__tags">` + this.displayTags() + `</div>
		</acticle>
		`)
	}
}