// http://localhost:8080
fetch('../fisheyeData.json')
	.then(response => {
		if (!response.ok) {
			throw new Error('HTTP error ' + response.status)
		}
		return response.json()
	})
	.then(json => {
		console.log(json)
		for (const photographer of json.photographers) {
			let main = document.querySelector('main')
			let img = document.createElement('img')
			img.src = '../public/images/photographers/id_photos/' + photographer.portrait
			img.setAttribute('alt', 'photo de profil')
			main.appendChild(img)
		}
	})
	.catch(function () {
		this.dataError = true
	})
