    let button = document.getElementById('burger');

    let navigation = document.getElementById('menu');

    let bgnd = document.getElementById('bgnd');

    button.addEventListener('click', function () {
        navigation.classList.toggle('header__menu-visible');
        bgnd.classList.toggle('brand__overlay');
    });