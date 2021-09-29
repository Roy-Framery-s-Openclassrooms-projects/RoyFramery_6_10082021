// @ts-check
/**
 * to reach all the inputs and configure the validation
 * @type {object} inputs
 * @property {HTMLElement} element
 * @property {object} regex
 */
const inputs = {
	firstname: {
		element: document.querySelector('#firstname'),
		regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
	}, 
	lastname: {
		element: document.querySelector('#lastname'),
		regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ\s]{2,}$/,
	},
	email: {
		element: document.querySelector('#email'),
		regex : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	},
	message: {
		element: document.querySelector('#textArea'),
		regex: /^[a-zA-Z\-,.?!;*'")(_<>\séëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{1,}$/
	}
}

/**
 * to reach all containers of labels/inputs that display error messages for the form validation
 * @type {NodeListOf<Element>}
 */
const containerInput = document.querySelectorAll('.form__data')

export {inputs, containerInput}