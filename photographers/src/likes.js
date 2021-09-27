// to increase or decrease the likes of a media and the total of likes
let increaseOrDecreaseLikesAndTotalLikes = () => {
	const likesElements = document.querySelectorAll('.media__likes')
	likesElements.forEach(like => {
		['click', 'keyup'].forEach(event => like.addEventListener(event , (e) => {
			let totalLikes = document.querySelector('.infos__totalLikes')
			if(e.key == 'Enter') {
				if (!like.classList.contains('media__liked')) {
					increaseLikesAndTotalLikes(totalLikes, like)
				} else {
					decreaseLikesAndTotalLikes(totalLikes, like)
				}    
			} else if (e.type == 'click') {
				if (!like.classList.contains('media__liked')) {
					increaseLikesAndTotalLikes(totalLikes, like)
				} else {
					decreaseLikesAndTotalLikes(totalLikes, like)
				}
			}
		}))
	})
}
let increaseLikesAndTotalLikes = (totalLikes, like) => {
	++totalLikes.innerText
	++like.children[0].innerText
	like.classList.add('media__liked')
}
let decreaseLikesAndTotalLikes = (totalLikes, like) => {
	--totalLikes.innerText
	--like.children[0].innerText
	like.classList.remove('media__liked')
}
export default increaseOrDecreaseLikesAndTotalLikes