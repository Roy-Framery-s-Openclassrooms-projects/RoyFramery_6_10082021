/**
 * Create a Validator
 */
export default class Validator {
	/**
	 * 
	 * @param {object} inputs Inputs in the form
	 * @param {HTMLElement[]} containerInput Container for each labels/inputs
	 */
	constructor(inputs, containerInput) {
		this.inputs = inputs
		this.containerInput = containerInput
	}
	valid = true
	// methods for the validation

	/**
	 * to check if the first name or last name 
	 * is not empty or if it have 2 letters minimum
	 * 
	 * @param {HTMLElement} element The DOM element to test
	 * @param {string} regex The regex we want to test
	 * @returns {boolean} Validation is correct or uncorrect
	 */
	nameValidation = (element, regex) => element.value == '' || element.value.length < 2 || !regex.test(element.value) ? false : true

	/**
	 * to check if the email is correct 
	 * @param {HTMLElement} element The DOM element to test
	 * @param {string} regex The regex we want to test
	 * @returns {boolean} Validation is correct or uncorrect
	 */
	emailValidation = (element, regex) => !regex.test(element.value) ? false : true

	/**
	 * To check if the text area is correct 
	 * @param {HTMLElement} element The DOM element to test
	 * @param {string} regex The regex we want to test
	 * @returns {boolean} Validation is correct or uncorrect
	 */
	textareaValidation = (element, regex) => !regex.test(element.value) ? false : true

	/**
	 * to remove error messages
	 */
	removeErrorMessage = () => {
		this.valid = true
		Array.from(this.containerInput).map((field) => {
			field.removeAttribute('data-error-visible')
		})
	}

	/**
	 * 
	 * @returns A boolean
	 */
	launchValidation = () => {

		this.removeErrorMessage()

		// a loop that will go through all the inputs 
		for (const input in this.inputs) {
			switch (input) {
			case 'firstname':
				if (!this.nameValidation(this.inputs[input].element, this.inputs[input].regex)) {
					this.inputs[input].element.parentNode.setAttribute('data-error-visible', true)
					this.valid = false
				}
				break

			case 'lastname':
				if (!this.nameValidation(this.inputs[input].element, this.inputs[input].regex)) {
					this.inputs[input].element.parentNode.setAttribute('data-error-visible', true)
					this.valid = false
				}
				break

			case 'email':
				if (!this.emailValidation(this.inputs[input].element, this.inputs[input].regex)) {
					this.inputs[input].element.parentNode.setAttribute('data-error-visible', true)
					this.valid = false
				}
				break

			case 'message':
				if (!this.textareaValidation(this.inputs[input].element, this.inputs[input].regex)) {
					this.inputs[input].element.parentNode.setAttribute('data-error-visible', true)
					this.valid = false
				}
				break

			default : 
				break
			}
		}
		return this.valid
	}
}