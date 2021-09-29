import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default class Modal {

	// DOM    
	static element = {
		contact : document.querySelector('.photographer__contactButton'),
		modal : document.querySelector('.modal'),
		close : document.querySelector('.modal__close')
	}

	/**
	 * Method to init modal's event
	 */
	static modalEvents = () => {
		document.querySelector('.photographer__contactButton').addEventListener('click', () => { this.launchModal() })

		document.querySelector('.modal__close').addEventListener('click', () => {this.closeModal()})

		document.addEventListener('keyup', this.onKeyUp.bind(this))
	}
	/**
	 * 
	 * @param {KeyboardEvent} e 
	 */
	static onKeyUp (e) {
		if (e.key === 'Escape') this.closeModal()
	}
	
	/**
	 * launch modal form and add focus on first
	 */
	static launchModal = () => {
		disableBodyScroll(document.body)
		document.querySelector('.modal').style.display = 'flex'
		document.querySelectorAll('.form__text')[0].focus()
	}

	/**
	 * Close modal form
	 */
	static closeModal = () => {
		enableBodyScroll(document.body)
		this.element.modal.style.display = 'none'
		document.removeEventListener('keyup', this.onKeyUp)
		document.querySelector('.photographer__contactButton').focus()
	}
}