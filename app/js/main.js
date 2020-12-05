$(function () {

    $('.blog-page__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 7 14" version="1.1"><g><path d="M 0.867188 6.535156 L 4.585938 2.816406 C 4.84375 2.558594 5.257812 2.558594 5.511719 2.816406 L 6.128906 3.433594 C 6.386719 3.691406 6.386719 4.105469 6.128906 4.359375 L 3.496094 7 L 6.132812 9.636719 C 6.390625 9.894531 6.390625 10.308594 6.132812 10.5625 L 5.515625 11.183594 C 5.257812 11.441406 4.84375 11.441406 4.589844 11.183594 L 0.871094 7.464844 C 0.609375 7.207031 0.609375 6.792969 0.867188 6.535156 Z M 0.867188 6.535156 "/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 7 14" version="1.1"><g><path d="M 6.132812 7.464844 L 2.414062 11.183594 C 2.15625 11.441406 1.742188 11.441406 1.488281 11.183594 L 0.871094 10.566406 C 0.613281 10.308594 0.613281 9.894531 0.871094 9.640625 L 3.503906 7.003906 L 0.871094 4.367188 C 0.613281 4.109375 0.613281 3.695312 0.871094 3.441406 L 1.484375 2.816406 C 1.742188 2.558594 2.15625 2.558594 2.410156 2.816406 L 6.128906 6.535156 C 6.390625 6.792969 6.390625 7.207031 6.132812 7.464844 Z M 6.132812 7.464844 "/></g></svg></button>',
        infinite: false,
    });

    $('.product-tabs__top-item').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
        
    })

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true,
    });

    $('.shop-content__filter-btn').on('click', function () {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    })

    $('.button-list').on('click', function () {
        $('.product-item').addClass('product-item--list');
    })

    $('.button-grid').on('click', function () {
        $('.product-item').removeClass('product-item--list');
    })

    $('.select-style, .product-one__num').styler();

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000
    });

    $('.star').rateYo({
        starWidth: '17px',
        normalFill: '#ccccce',
        ratedFill: '#ffc35b',
        readOnly: true,
        starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="ccccce" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
    });

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__clock');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);
});