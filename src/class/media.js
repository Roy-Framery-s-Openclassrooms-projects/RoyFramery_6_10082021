export default class Media {
	constructor( title, filename, likes, typeMedia) {
		this.title = title
		this.filename = filename
		this.likes = likes
		this.typeMedia = typeMedia
	}
	dom = {
		media : document.querySelector('.media'),
	}
	createMedia() {
		switch (this.typeMedia) {
		case 'image':
			return new Image(this.title, this.filename, this.likes).createImage()
		case 'video':
			return new Video(this.title, this.filename, this.likes).createVideo()

		default:
			break
		}
	}
}

class Image extends Media{
	constructor( title, filename, likes) {
		super(title, filename, likes)
	}
	createImage() {
		return this.dom.media.insertAdjacentHTML('beforeend',
			`<artcle class="media__card">
				<a href="../images/photographers/photos/${this.filename}">
					<img src="../images/photographers/photos/${this.filename}" class="media__thumb">
				</a>
				<div class="media__content">
					<h2 class="media__title">${this.title}</h2>
					<div class="media__likes">
						<p class="media__number">${this.likes}</p>
						<svg role="image" class="media__heart" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<title id="title">Likes</title>
							<desc id="description">Icone en forme de cœur</desc>
							<path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
						</svg>
					</div>
				</div>
			</artcle>`)
	}
}

class Video extends Media{
	constructor( title, filename, likes) {
		super(title, filename, likes)
	}
	createVideo() {
		return this.dom.media.insertAdjacentHTML('beforeend',
			`<artcle class="media__card">
				<a href="../images/photographers/videos/${this.filename}" >
				<div class="media__playIcon"></div>
					<video class="media__thumb">
						<source src="../images/photographers/videos/${this.filename}"
						type="video/mp4">
					</video>
				</a>
				<div class="media__content">
					<h2 class="media__title">${this.title}</h2>
					<div class="media__likes">
						<p class="media__number">${this.likes}</p>
						<svg role="image" class="media__heart" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<title id="title">Likes</title>
							<desc id="description">Icone en forme de cœur</desc>
							<path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
						</svg>
					</div>
				</div>
			</artcle>`)
	}
}