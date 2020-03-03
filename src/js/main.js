$(document).ready(function () {
    $('.phone').mask("+7(999)999-99-99");
    const openModalForm = document.querySelector('#open-modal')
    const overlayBg = document.querySelector('#overlay')
    const modalBody = overlayBg.querySelector('.modal-wrapper')
    const closeModal = overlayBg.querySelector('.modal-close')
    const bodyElement = document.querySelector('body')

    /*клик по кнопке*/
    openModalForm.addEventListener('click', function () {
        overlayBg.classList.add('active')
        bodyElement.classList.add('no-scroll')
    })
    /*клик по темному фону за модальным окном*/
    overlayBg.addEventListener('click', function () {

        this.classList.remove('active')
        bodyElement.classList.remove('no-scroll')
    })
    /*клик по крестику в модальном окне*/
    closeModal.addEventListener('click', function () {
        overlayBg.classList.remove('active')
        bodyElement.classList.remove('no-scroll')
    })
    /*клик по телу модального окна*/
    modalBody.addEventListener('click', function (e) {
        e.stopImmediatePropagation()
    })
    /*закрыть модальное окно при ресайзе экрана*/
    window.addEventListener('resize', function () {
        overlayBg.classList.remove('active')
        bodyElement.classList.remove('no-scroll')
    })

    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mailer.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                $(th).find('.succes').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });
    // Кнопка быстрой прокрутки вверх
    $('#backTop').hide();

    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('#backTop').fadeIn();
        } else {
            $('#backTop').fadeOut();
        }
    })

})