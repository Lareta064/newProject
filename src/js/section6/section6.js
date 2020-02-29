$(document).ready(function () {
	let favorIcons = document.querySelectorAll('.product-card .favor-icon');

	for (let i = 0; i < favorIcons.length; i++) {
		favorIcons[i].addEventListener('click', function () {
			this.classList.toggle('active');
		})

	}
})