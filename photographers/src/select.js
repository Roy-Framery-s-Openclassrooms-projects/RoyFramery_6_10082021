let displaySelectOptions = () => {
	let select = document.querySelector('.filter__custom-select')
	select.addEventListener('click', () => {
		const option = document.querySelector('.filter__custom-menu')
		const arrow = document.querySelector('.filter__custom-arrow', 'before')
		if (!option.classList.contains('filter__show')) {
			option.classList.add('filter__show')
			arrow.style.transform = 'rotate(180deg)'
		} else {
			arrow.style.transform = 'rotate(0deg)'
			option.classList.remove('filter__show')
		}
	})
}

let hideSelectedOptionInSelect = (filter, dom) => {
	dom.forEach(option => {
		if (option.getAttribute('value') == filter) {
			option.classList.add('filter__selected')
		}
	})
}

let removeClassToHideDuplicateOptionInSelect = (filter, dom) => {
	dom.forEach(option => {
		if (option.getAttribute('value') != filter) {
			option.classList.remove('filter__selected')
		}
	})
}

export {displaySelectOptions, hideSelectedOptionInSelect, removeClassToHideDuplicateOptionInSelect}