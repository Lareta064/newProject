$(document).ready(function () {
	/* покрасить сердечко по клику в красный цвет*/
	let favorIcons = document.querySelectorAll('.product-card .favor-icon');

	for (let i = 0; i < favorIcons.length; i++) {
		favorIcons[i].addEventListener('click', function () {
			this.classList.toggle('active');
		})
	}
	$('.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		dotsSpeed: 800
	})
	let i = 1;
	$('.owl-dot').each(function () {
		$(this).find('span').html(i);
		i++;
	});

	/* Отправить с формой Карточки Товара Название Товара и Цену*/
	const productCard = document.querySelectorAll('.product-card');
	const productOrderModal = document.querySelector('#modalProductCard')
	const modalInputProductName = productOrderModal.querySelector('input[name="productName"]');
	const modalInputProductPrice = productOrderModal.querySelector('input[name="productPrice"]');

	for (let i = 0; i < productCard.length; i++) {
		productCard[i].addEventListener('click', function (e) {
			const target = e.target;
			if (target.tagName == 'BUTTON') {
				const customProductName = productCard[i].querySelector('.product-card__title').innerText;
				const customProductPrice = productCard[i].querySelector('.price-value').innerText;
				modalInputProductName.value = customProductName;
				modalInputProductPrice.value = customProductPrice;
			}

		})
	}
})