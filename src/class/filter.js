/**
 * Class to create a filter
 */
export default class Filter {
	/**
	 * 
	 * @param {string} filter 
	 */
	constructor(filter) {
		this.filter = filter
	}

	/**
	 * To construct the Dom Element of a tag in the header of the Home page
	 * @return A string that correspond to a Dom Element that contain the filter
	 */
	get displayFilter() {
		return `
		<li class="header__filter-list-item">
			<a href="./index.html?tag=${this.filter}" class="header__filter-tag">#${this.filter}</a>
		</li>
		`
	}
}