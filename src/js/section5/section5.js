$(document).ready(function () {

	/* Отправить с формой Тарифа Название тарифа и Цену*/
	const tariffCard = document.querySelectorAll('.tariff-card');
	let selectTariffModal = document.querySelector('#modalTariffCard')
	const modalTitle = selectTariffModal.querySelector('#modalTariffName')
	const modalInputTariffName = selectTariffModal.querySelector('input[name="tariffName"]');
	const modalInputTariffPrice = selectTariffModal.querySelector('input[name="tariffPrice"]');

	for (let i = 0; i < tariffCard.length; i++) {
		tariffCard[i].addEventListener('click', function (e) {
			const target = e.target;
			if (target.tagName == 'BUTTON') {
				const customTariffName = tariffCard[i].querySelector('.tariff-card__title').innerText;
				const customTariffPrice = tariffCard[i].querySelector('.tariff-card__price').innerText;
				modalInputTariffName.value = customTariffName;
				modalTitle.innerText = customTariffName;
				modalInputTariffPrice.value = customTariffPrice;
			}

		})
	}
})