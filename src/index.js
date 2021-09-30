import {parseDataToJson, getPhotographers, getTagsFromPhotographers} from './service/api.js'

const dom = {
	photographersContainer : document.querySelector('.photographers'),
	filtersList : document.querySelector('.header__filter-list')
}

// to display tags in the header
const tags = getTagsFromPhotographers(parseDataToJson())
tags.then( tags =>
	tags.map( tag => {
		// displatFilter is a getter of Filter Class
		dom.filtersList.insertAdjacentHTML('beforeend', tag.displayFilter)
	})
)

// get tag param to filter
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const paramTag = urlParams.get('tag')

// to display photographers cards
const photographers = getPhotographers(parseDataToJson())
photographers.then(photographers => {
	photographers.map(photographer => {
		// if there are not a tag in URL's parameter, then it insert the photographers' cards
		if (paramTag == null) {
			dom.photographersContainer.insertAdjacentHTML('beforeend', photographer.photographerCard)
		} 
		// else if there are a tag in URL's parameter, then create a loop to browse the tags of each photographer
		else {
			for (const tag of photographer.tags) {
				// if the paramter tag in the URL matches with on of the photographer's tag, 
				// then insert the photographers' cards
				if (paramTag == tag) {
					// phototographerCard is a getter of the Photographer Class
					dom.photographersContainer.insertAdjacentHTML('beforeend', photographer.photographerCard)
				}
			}
			const filterTags = document.querySelectorAll('.header__filter-tag')
			filterTags.forEach(filter => {
				if (filter.innerText.toLowerCase().includes(paramTag)){
					filter.focus()
				}
			})
		}
	})
})

// display "go to content" link on scroll
const contentLink = document.querySelector('.anchor')
window.addEventListener('scroll', () => {
	// Displays the link only if the user's screen width is greater than 1023
	if (document.documentElement.clientWidth > 1023) {
		contentLink.style.display = 'block'
	}
})
