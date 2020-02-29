$(document).ready(function () {
	// animate
	wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		mobile: true, // default
		offset: 110, // через сколько пикселей сработает
		live: true // для мобильных оставить или убрать анимацию
	});
	wow.init();
	new WOW().init();
	// end animated
	$(function () {

		var target_block = $(".partners"); // Ищем блок 
		var blockStatus = true;

		$(window).scroll(function () {

			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

			if (scrollEvent && blockStatus) {

				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

				$({
					numberValue: 0
				}).animate({
					numberValue: 500
				}, {

					duration: 1500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",

					step: function (val) {

						$(".animate-num").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

					}

				});

			}

		});

	});
})