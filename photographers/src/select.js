/**
 * 
 */
let displaySelectOptions = () => {
	let select = document.querySelector('.filter__custom-select')
	select.addEventListener('click', () => {
		const option = document.querySelector('.filter__custom-menu')
		const arrow = document.querySelector('.filter__custom-arrow', 'before')
		// if the class is not present in the HTML Element then we add it
		if (!option.classList.contains('filter__show')) {
			option.classList.add('filter__show')
			arrow.style.transform = 'rotate(180deg)'
		}
		// else we remove it 
		else {
			arrow.style.transform = 'rotate(0deg)'
			option.classList.remove('filter__show')
		}
	})
}

/**
 * Hide the duplicated option that is selected in the select
 * @param {string} filter 
 * @param {NodeListOf<Element>} dom reach options of select
 */
let hideSelectedOptionInSelect = (filter, dom) => {
	console.log(filter)
	console.log(dom)
	dom.forEach(option => {
		if (option.getAttribute('value') == filter) {
			option.classList.add('filter__selected')
		}
	})
}

/**
 * Remove the class from a duplicate option hidden in a select
 * @param {string} filter 
 * @param {NodeListOf<Element>} dom reach options of select
 */
let removeClassToHideDuplicateOptionInSelect = (filter, dom) => {
	dom.forEach(option => {
		if (option.getAttribute('value') != filter) {
			option.classList.remove('filter__selected')
		}
	})
}

export {displaySelectOptions, hideSelectedOptionInSelect, removeClassToHideDuplicateOptionInSelect}