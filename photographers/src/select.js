let displaySelectOptions = () => {
	let select = document.querySelector('.filter__custom-select')
	select.addEventListener('click', () => {
		const select = document.querySelector('.filter__custom-menu')
		const arrow = document.querySelector('.filter__custom-arrow', 'before')
		if (!select.classList.contains('filter__show')) {
			select.classList.add('filter__show')
			arrow.style.transform = 'rotate(180deg)'
		} else {
			arrow.style.transform = 'rotate(0deg)'
			select.classList.remove('filter__show')
		}
	})
}

let hideSelectedOptionInSelect = (filter, dom) => {
	dom.forEach(option => {
		// console.log(option.classList.add('hello'))
		if (option.getAttribute('value') == filter) {
			option.classList.add('filter__selected')
			console.log(option.classList)
		}
	})
}
export {displaySelectOptions, hideSelectedOptionInSelect}