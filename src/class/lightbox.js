/**
 * @property {HTMLElement} element
 * @property {string[]} images lightbox image paths
 * @property {string} url image currently displayed
 */
export default class Lightbox {
	static init () {
		const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'))
		const gallery = links.map(link => link.getAttribute('href'))
		links.forEach(link => link.addEventListener('click', e => {
			e.preventDefault()
			new Lightbox(e.currentTarget.getAttribute('href'), gallery)
		}))
	}

	/**
	 * 
	 * @param {string} url Image's URL
	 * @param {string[]} media lightbox media paths
	 */
	constructor(url, media) {
		this.element = this.buildDOM(url)
		this.media = media
		this.loadMedia(url)
		this.onKeyUp = this.onKeyUp.bind(this)
		document.body.appendChild(this.element)
		document.addEventListener('keyup', this.onKeyUp)
	}

	/**
	 * 
	 * @param {string} url Image's URL
	 */
	loadMedia (url) {
		this.url = null
		const container = this.element.querySelector('.lightbox__container')
		
		// to display a loader
		const loader = document.createElement('div')
		loader.classList.add('lightbox__loader')
		
		// to display the close button
		container.innerHTML = '<button class="lightbox__close lightbox__button">Fermer</button>'
		container.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
		
		container.appendChild(loader)
		this.url = url
		// for images
		if (url.includes('.jpg')) {
			const image = new Image()
			
			image.onload = () => {
				container.removeChild(loader)
				container.appendChild(image)
			}
			image.classList.add('lightbox__media')
			image.src = url
		}
		// for videos
		if (url.includes('.mp4')) {
			let video = document.createElement('VIDEO')
			video.onloadeddata = () => {
				container.removeChild(loader)
				container.appendChild(video)
			}
			video.setAttribute('src', url)
			video.setAttribute('controls', 'controls')
			video.classList.add('lightbox__media')
		}
	}

	/**
	 * 
	 * @param {KeyboardEvent} e 
	 */
	onKeyUp (e) {
		if (e.key === 'Escape') {
			this.close(e)
		} else if (e.key === 'ArrowLeft') {
			this.previous(e)
		}else if (e.key === 'ArrowRight') {
			this.next(e)
		}
	}

	/**
	 * Close the lightbox
	 * @param {MouseEvent|KeyboardEvent} e 
	 */
	close (e) {
		e.preventDefault()
		this.element.classList.add('fadeout')
		window.setTimeout(() => {
			this.element.parentElement.removeChild(this.element)
		}, 500)
		document.removeEventListener('keyup', this.onKeyUp)
	}

	/**
	 * Close the lightbox
	 * @param {MouseEvent|KeyboardEvent} e 
	 */
	next (e) {
		e.preventDefault()
		let position = this.media.findIndex(media => media === this.url)
		if (position === this.media.length - 1) position = -1
		this.loadMedia(this.media[position + 1])
	}

	/**
	 * Close the lightbox
	 * @param {MouseEvent|KeyboardEvent} e 
	 */
	previous (e) {
		e.preventDefault()
		let position = this.media.findIndex(media => media === this.url)
		if (position === 0) position = this.media.length
		this.loadMedia(this.media[position - 1])
	}


	/**
	 * 
	 * @param {string} url Image's URL
	 * @return {HTMLElement}
	 */
	buildDOM () {
		const dom = document.createElement('div')
		dom.classList.add('lightbox')
		dom.innerHTML = `<button class="lightbox__next lightbox__button">Suivant</button>
			<button class="lightbox__previous lightbox__button">Précédent</button>
			<div class="lightbox__container" aria-label="image closeup view">
			</div>`
		dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
		dom.querySelector('.lightbox__previous').addEventListener('click', this.previous.bind(this))
		return dom
	}

}

