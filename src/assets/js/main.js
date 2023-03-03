'use strict'
;(function () {

	const VideoClick = function (event) {
		event.preventDefault()
		const a = this.closest('.video-block')
		const frame = a.querySelector('iframe')
		a.classList.add('showing-video')
		frame.setAttribute('src', `${this.getAttribute('href')}?autoplay=1`)
	}

	const Init = () => {
		document.querySelectorAll('.show-video').forEach((blockNode) => {
			blockNode.addEventListener('click', VideoClick, false)
		})
	}
	
	document.addEventListener('DOMContentLoaded', () => Init.call(Init), false)
})()



