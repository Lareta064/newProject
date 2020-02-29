$(document).ready(function () {
	/* покрасить сердечко по клику в красный цвет*/
	let favorIcons = document.querySelectorAll('.product-card .favor-icon');

	for (let i = 0; i < favorIcons.length; i++) {
		favorIcons[i].addEventListener('click', function () {
			this.classList.toggle('active');
		})
	}

	/* клик по пагинации (аналог табов)*/
	const paginationToggles = document.querySelectorAll('.pagination-item');
	const productsPage = document.querySelectorAll('.products-page');

	for (let i = 0; i < paginationToggles.length; i++) {
		paginationToggles[i].addEventListener('click', function () {
			for (toggle of paginationToggles) {
				toggle.classList.remove('active');
			}
			this.classList.add('active');
			const thisData = this.getAttribute('data-toggle');
			for (let page of productsPage) {
				page.classList.remove('active');
				const pageData = page.getAttribute('data-index');
				if (pageData == thisData) {
					page.classList.add('active');
				}
			}
		})
	}
})