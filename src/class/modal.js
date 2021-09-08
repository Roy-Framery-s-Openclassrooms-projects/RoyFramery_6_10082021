export default class Modal {

	// DOM    
	static element = {
		contact : document.querySelector('.photographer__contactButton'),
		modal : document.querySelector('.modal'),
		close : document.querySelector('.modal__close')
	}

	static modalEvents = () => {
		document.querySelector('.photographer__contactButton').addEventListener('click', () => { this.launchModal() })

		document.querySelector('.modal__close').addEventListener('click', () => {this.closeModal()})
	}

	// launch modal form
	static launchModal = () => {
		document.querySelector('.modal').style.display = 'block'}

	// close modal form
	static closeModal = () => {
		this.element.modal.style.display = 'none'
	}
}