import {parseDataToJson, getPhotographers, getTagsFromPhotographers} from './service/api.js'


const dom = {
	photographersContainer : document.querySelector('.photographers'),
	filtersList : document.querySelector('.header__filter-list')
}

// to display tags in the header
const tags = getTagsFromPhotographers(parseDataToJson())
tags.then( tags =>
	tags.map( tag => dom.filtersList.insertAdjacentHTML('beforeend', tag.displayFilter))
)

// get tag param to filter
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const paramTag = urlParams.get('tag')

// to display photographers cards
const photographers = getPhotographers(parseDataToJson())
photographers.then(photographers => {
	photographers.map(photographer => {
		if (paramTag == null) {
			dom.photographersContainer.insertAdjacentHTML('beforeend', photographer.photographerCard)
		} else {
			for (const tag of photographer.tags) {
				if (paramTag == tag) {
					dom.photographersContainer.insertAdjacentHTML('beforeend', photographer.photographerCard)
				}
			}
		}
	})
})

// display "go to content" link

const contentLink = document.querySelector('.anchor')

window.addEventListener('scroll', () => {
	contentLink.style.display = 'block'
})