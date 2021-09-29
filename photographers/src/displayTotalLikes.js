// to display the total number of media likes
const DomInfos = document.querySelector('.infos')

/**
 * 
 * @param {object} medias
 * @returns Insert HTML Element on photographer's Profil Page 
 */
let displayTotalLikesOfPhotographer = (medias) => {
	medias.then(medias => {
		let totalLikes = 0
		medias.map(media => {
			totalLikes += media.likes 
		})
		return DomInfos.insertAdjacentHTML('beforeend', `
		<div class="infos__likes">
			<p class="infos__totalLikes">${totalLikes}</p>
			<svg role="img" class="infos__heart" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-describedby="title-${totalLikes} description-${totalLikes}">
				<title id="title-${totalLikes}">Likes</title>
				<desc id="description-${totalLikes}">Icone en forme de cœur</desc>
				<path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#000"/>
				</svg>
		</div>
		`)
	})
}

export default displayTotalLikesOfPhotographer