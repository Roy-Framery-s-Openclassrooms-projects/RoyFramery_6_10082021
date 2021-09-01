export default class Filter {
	constructor(filter) {
		this.filter = filter
	}

	dom = {
		filtersList : document.querySelector('.header__filter-list')
	}

	displayfilter = () => {
		return this.dom.filtersList.insertAdjacentHTML('beforeend', `
		<li class="header__filter-list-item">
			<a href="./index.html?tag=${this.filter}" class="header__filter-tag">#${this.filter}</a>
		</li>
		`)
	}
}