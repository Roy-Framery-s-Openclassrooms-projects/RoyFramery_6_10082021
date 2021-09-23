// to increase or decrease the likes of a media and the total of likes
let increaseOrDecreaseLikesAndTotalLikes = () => {
	const likesElements = document.querySelectorAll('.media__likes')
	likesElements.forEach(like => like.onclick = () => { 
		let totalLikes = document.querySelector('.infos__totalLikes')
		if (!like.classList.contains('media__liked')) {
			++totalLikes.innerText
			++like.children[0].innerText
			like.classList.add('media__liked')
		} else {
			--totalLikes.innerText
			--like.children[0].innerText
			like.classList.remove('media__liked')
		}
	})
}

export default increaseOrDecreaseLikesAndTotalLikes