import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

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
			const titles = document.querySelectorAll('.media__title')
			const index = gallery.indexOf(e.currentTarget.getAttribute('href'))
			new Lightbox(e.currentTarget.getAttribute('href'), gallery, titles, index)
		}))
	}

	/**
	 * 
	 * @param {string} url Image's URL
	 * @param {string[]} media lightbox media paths
	 */
	constructor(url, media, titles, index) {
		this.element = this.buildDOM()
		this.media = media
		this.titles = titles
		this.index = index
		this.loadMedia(url, this.titles, this.index)
		this.onKeyUp = this.onKeyUp.bind(this)
		document.body.appendChild(this.element)
		disableBodyScroll(this.element)
		document.addEventListener('keyup', this.onKeyUp)
		document.querySelector('.lightbox__next').focus()
		document.querySelector('.main').setAttribute('aria-hidden', true)
	}

	/**
	 * 
	 * @param {string} url Image's URL
	 */
	loadMedia (url, titles, index) {
		this.url = null
		const imageContainer = this.element.querySelector('.lightbox__image')
		// to display a loader
		const loader = document.createElement('div')
		loader.classList.add('lightbox__loader')
		
		// const imageContainer = document.createElement('div')
		// to display the close button
		imageContainer.innerHTML = '<button class="lightbox__close lightbox__button" tabindex="0">Close dialog</button>'
		imageContainer.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
		
		imageContainer.appendChild(loader)

		// container.appendChild(imageContainer)
		this.url = url
		// for images
		if (url.includes('.jpg')) {
			const image = new Image()
			
			image.onload = () => {
				imageContainer.removeChild(loader)
				imageContainer.appendChild(image)
			}
			image.classList.add('lightbox__media')
			image.src = url
		}
		// for videos
		if (url.includes('.mp4')) {
			let video = document.createElement('VIDEO')
			video.onloadeddata = () => {
				imageContainer.removeChild(loader)
				imageContainer.appendChild(video)
			}
			video.setAttribute('src', url)
			video.setAttribute('controls', 'controls')
			video.classList.add('lightbox__media')
		}

		// // display title
		let titleArray = []
		titles.forEach(title => {
			titleArray.push(title.innerHTML)
		})

		const lightboxContainer = this.element.querySelector('.lightbox__container')
		const title = document.querySelector('.lightbox__title')
		if(title) {
			lightboxContainer.removeChild(title)
		}
		const titleElement = document.createElement('h2')
		titleElement.classList.add('lightbox__title')
		titleElement.innerHTML = titleArray[index]
		lightboxContainer.appendChild(titleElement)
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
		enableBodyScroll(this.element)
		window.setTimeout(() => {
			this.element.parentElement.removeChild(this.element)
		}, 500)
		document.removeEventListener('keyup', this.onKeyUp)
		document.querySelector('.main').setAttribute('aria-hidden', false)
		const media = document.querySelectorAll('.media__thumb')
		media.forEach(media => {
			if (media.getAttribute('src') == this.url) {
				media.parentNode.focus()
			}
		})
	}

	/**
	 * Close the lightbox
	 * @param {MouseEvent|KeyboardEvent} e 
	 */
	next (e) {
		e.preventDefault()
		let position = this.media.findIndex(media => media === this.url)
		if (position === this.media.length - 1) { position = -1 }
		this.index = this.index + 1
		if(this.index == 10) { this.index = 0 }
		this.loadMedia(this.media[position + 1], this.titles, this.index )
	}

	/**
	 * Close the lightbox
	 * @param {MouseEvent|KeyboardEvent} e 
	 */
	previous (e) {
		e.preventDefault()
		let position = this.media.findIndex(media => media === this.url)
		if (position === 0) { position = this.media.length }
		this.index = this.index - 1
		if(this.index == -1) { this.index = this.media.length - 1 }
		this.loadMedia(this.media[position - 1], this.titles, this.index)
	}


	/**
	 * 
	 * @param {string} url Image's URL
	 * @return {HTMLElement}
	 */
	buildDOM () {
		const dom = document.createElement('div')
		dom.classList.add('lightbox')
		dom.setAttribute('aria-label', 'image closeup view')
		dom.innerHTML = `<button class="lightbox__next lightbox__button" tabindex="0">Next image</button>
			<button class="lightbox__previous lightbox__button" tabindex="0">Previous image</button>
			<div class="lightbox__container" aria-label="image closeup view">
				<div class="lightbox__image"></div>
			</div>`
		dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
		dom.querySelector('.lightbox__previous').addEventListener('click', this.previous.bind(this))
		return dom
	}

}

