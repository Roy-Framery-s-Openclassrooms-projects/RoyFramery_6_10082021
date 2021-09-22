export default class Filter {
	constructor(filter) {
		this.filter = filter
	}

	get displayFilter() {
		return `
		<li class="header__filter-list-item">
			<a href="./index.html?tag=${this.filter}" class="header__filter-tag">#${this.filter}</a>
		</li>
		`
	}
}