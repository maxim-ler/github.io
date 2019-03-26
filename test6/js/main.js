$(document).ready(function() {




    /** Socials **/
    /*$('.page-news-social').on('click', function() {
        $(this).children().slideToggle('fast');
    });*/

    $(".slider-b").on("click","a.block-botton-up", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


function del_spaces(str)
{
    str = str.replace(/\s/g, '');
    return str;
}

$('body').on('click','#feedback-new-calc-c', function(){
    var test_str = $("#summInputAuto").val().slice(0, -4);
    console.log(test_str);
    var test_calc_c = del_spaces(test_str);
    console.log(test_calc_c); 
    $("#sum500").val(test_calc_c);
    test_calc_re();
});

function test_calc_re(){
    chVal = Number($('#sum500').val().replace(/\D+/g,""));
    console.log(chVal);
    percent = 7.5;    
    $('#new-fromm-modal #month-sum').text(((chVal / 100) * percent).toFixed(0));
    $('#new-fromm-modal input[name="sum"]').attr('value', $('#new-fromm-modal #sum500').attr('value') );
    $('#new-fromm-modal input[name="month-sum"]').attr('value', $('#new-fromm-modal #month-sum').text());
}

$('#sum500').on('change', function(){
test_calc_re();
});

    /** Проверка полей ввода **/
    $('input[data-type=phone]').mask("+7 (999) 999-99-99");
    $('.phone-mask').mask("+7 (999) 999-99-99");


    // $('footer img[src="/templates/imperial/img/assg.png"]').after('<a href="/mapsite/" style=" display: block; text-decoration: underline; color: #fff;">Карта сайта</a>');




    $('input[data-type=text]').on('keyup keypress', function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) {


        } else {
            var letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ- ';
            return (letters.indexOf(String.fromCharCode(e.which)) != -1);
        }
    });

    $('input[data-type=num]').on('keyup keypress', function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) {

        } else {
            var letters = '1234567890-';
            return (letters.indexOf(String.fromCharCode(e.which)) != -1);
        }
    });

    // Валидация email
    $('input[data-type=email]').change(function() {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test($('input[data-type=email]').val())) {
            $('input[data-type=email]').removeClass('error');
            error = false;
        } else {
            $('input[data-type=email]').addClass('error');
            error = true;
        }
    });

    // Выбор даты
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
        ],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $("input[data-type=date]").datepicker();

    Share = {
        /**
         * Показать пользователю дилог шаринга в сооветствии с опциями
         * Метод для использования в inline-js в ссылках
         * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
         *
         * @example <a href="" onclick="return share.go(this)">like+</a>
         *
         * @param Object _element - элемент DOM, для которого
         * @param Object _options - опции, все необязательны
         */

        go: function(_element, _options) {
            var
                self = Share,
                options = $.extend(
                    /*{
                        type:       'vk',    // тип соцсети
                        url:        location.href,  // какую ссылку шарим
                        count_url:  location.href,  // для какой ссылки крутим счётчик
                        title:      document.title, // заголовок шаринга
                        image:        '',             // картинка шаринга
                        text:       '',             // текст шаринга
                    },*/
                    $(_element).data(), // Если параметры заданы в data, то читаем их
                    _options // Параметры из вызова метода имеют наивысший приоритет
                );


            if (self.popup(link = self[options.type](options)) === null) {
                // Если не удалось открыть попап
                if ($(_element).is('a')) {
                    // Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
                    $(_element).prop('href', link);
                    return true;
                } else {
                    // Если это не <a>, то пытаемся перейти по адресу
                    location.href = link;
                    return false;
                }
            } else {
                // Попап успешно открыт, просим браузер не продолжать обработку
                return false;
            }
        },

        // ВКонтакте
        vk: function(_options) {
            var options = $.extend({
                url: location.href,
                title: document.title,
                image: '',
                text: '',
            }, _options);

            return 'http://vkontakte.ru/share.php?' +
                'url=' + encodeURIComponent(options.url) +
                '&title=' + encodeURIComponent(options.title) +
                '&description=' + encodeURIComponent(options.text) +
                '&image=' + encodeURIComponent(options.image) +
                '&noparse=true';
        },

        // Одноклассники
        ok: function(_options) {
            var options = $.extend({
                url: location.href,
                text: '',
            }, _options);

            return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1' +
                '&st.comments=' + encodeURIComponent(options.text) +
                '&st._surl=' + encodeURIComponent(options.url);
        },

        // Facebook
        fb: function(_options) {
            var options = $.extend({
                url: location.href,
                title: document.title,
                image: '',
                text: '',
            }, _options);

            return 'http://www.facebook.com/sharer.php?s=100' +
                '&p[title]=' + encodeURIComponent(options.title) +
                '&p[summary]=' + encodeURIComponent(options.text) +
                '&p[url]=' + encodeURIComponent(options.url) +
                '&p[images][0]=' + encodeURIComponent(options.image);
        },

        // Открыть окно шаринга
        popup: function(url) {
            return window.open(url, '', 'toolbar=0,status=0,scrollbars=1,width=626,height=436');
        }
    }

    $(document).on('click', '.social_share', function() {
        Share.go(this);
    });

    $('div[data-type=okk]').on('click', function() {
        var link = encodeURIComponent($(this).data('link'));
        var mainlink = encodeURIComponent('http://microziami.assg.ru');

        // Открыть окно шаринга
        return window.open('https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl=' + mainlink + link, '', 'toolbar=0,status=0,scrollbars=1,width=626,height=436');
    });

    $('div[data-type=vkk]').on('click', function() {
        var link = encodeURIComponent($(this).data('link'));
        var mainlink = encodeURIComponent('http://microziami.assg.ru');

        // Открыть окно шаринга
        return window.open('https://vk.com/share.php?url=' + mainlink + link + '&description=&image=&noparse=true', '', 'toolbar=0,status=0,scrollbars=1,width=626,height=436');
    });

    $('div[data-type=fbb]').on('click', function() {
        var link = encodeURIComponent($(this).data('link'));
        var mainlink = encodeURIComponent('http://microziami.assg.ru');

        // Открыть окно шаринга
        return window.open('https://www.facebook.com/sharer.php?s=100&p[title]=&p[summary]=&p[url]=' + mainlink + link + '&p[images][0]=', '', 'toolbar=0,status=0,scrollbars=1,width=626,height=436');
    });



    /** Preloader **/
    /*    $(window).on('load', function () {
            var $preloader = $('#page-preloader'),
                $spinner   = $preloader.find('.spinner');
            $spinner.fadeOut();
            $preloader.fadeOut('slow');
        });*/

    if ($(".spinner").hasClass("anim") == false) {
        $(".spinner").addClass("anim");
        var i = 0;
        var j = -7;
        setInterval(function() {
            if (i < 565) {
                j = j - 70;
                i++;
                $(".spinner").css("background-position", "-5px " + j + "px");
                if (i == 565) {
                    $(".spinner").removeClass("anim");
                }
            }

        }, 25);
    }



    /** Moment **/
    var now = moment().add(1, 'day').locale('ru').format('DD MMMM YYYY');
    $('.datePost').text(now);
    $('.datePostIndex').text(now);


    /** Owl carousel **/
    $("#slider").owlCarousel({
        loop: true,
        items: 1,
        dots: true
    });



        $("#slider-test").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        mouseDrag: false,
        touchDrag: false
    });

    $("#test").owlCarousel({
        loop: true,
        items: 1,
        dots: true
    });


    $("#press").owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });

    $("#reviews-w").owlCarousel({
        items: 1,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
        loop: true,
        autoplaySpeed: 2000,
        responsive: {
            768: {
                items: 2
            }
        }

    });

    /** Fullpage **/
    $('#fullpage').fullpage({
        verticalCentered: true,
        responsiveWidth: 992
    });

    $(window).resize(function() {
        /*$('#fullpage').fullpage({
            verticalCentered: true,
            responsiveWidth: 992
        });*/
    });


    /** Высота блока **/

    /*    var calcheight = $('.calc-wrapper').height();
        var slideheight = $('section.slider').height();
        var width = $(document).width();
        var fullheight = slideheight;

        alert(calcheight);
        alert(slideheight);*/

    /*if(width <= 992) {
        $('.wrapper').height(fullheight);
        $('.wrapper').css('overflow', 'hidden');
    }*/

    /** Высота **/
    function setHeiHeight() {
        $('.slider .item').css({
            height: $(window).height() + 'px'
        });
    }
    setHeiHeight();
    $(window).resize(setHeiHeight);



    /** Fancybox **/
    $(".fancybox").fancybox({
        // scrolling: "auto",
        afterLoad: function(current, previous) {
            $("html").addClass("fancybox-margin fancybox-lock");
        },
        afterClose: function(current, previous) {
            $("html").removeClass("fancybox-margin fancybox-lock");
        }, 
        helpers: {
         overlay: {
            locked: true 
         }
      }
    });


    /** Slider pro **/
    $('.slider-pro').sliderPro({
        touchSwipe: false,
        buttons: false,
        fade: true,
        thumbnailsPosition: 'right',
        thumbnailWidth: 57,
        thumbnailHeight: 38,
        width: '100%',
        height: 121,
        autoplay: false,
        arrows: true,
        lazyLoad: true,
        orientation: 'vertical',
        breakpoints: {
            992: {
                orientation: 'horizontal',
                thumbnailsPosition: 'bottom',
                height: 200,
                thumbnailWidth: 150,
                thumbnailHeight: 100
            }
        }
    });

    /** Izi modal **/
    $(document).on('click', '.trigger', function(event) {
        event.preventDefault();
        $('#modal-name').iziModal('open');
    });
    $("#modal-name").iziModal({
        overlayClose: false,
        width: 600,
        autoOpen: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
    });
    $(".modal-close").on('click', function() {
        $('#modal-name').iziModal('close');
    });


    /** Izi modal **/
    $(document).on('click', '.triggerOneClick', function(event) {
        event.preventDefault();
        $('#one-click').iziModal('open');
        /** Проверка полей ввода **/
        $('input[data-type=phone]').mask("9-999-999-9999");
    });
    $("#one-click").iziModal({
        overlayClose: false,
        width: 600,
        autoOpen: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
    });
    $(".modal-close").on('click', function() {
        $('#one-click').iziModal('close');
    });


    /** Izi modal **/
    $(document).on('click', '.triggerAuto', function(event) {
        event.preventDefault();
        $('#auto-form').iziModal('open');
        $('input[data-type=phone]').mask("9-999-999-9999");
    });
    $("#auto-form").iziModal({
        overlayClose: false,
        width: 600,
        focusInput: false,
        autoOpen: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
    });
    $(".modal-close").on('click', function() {
        $('#auto-form').iziModal('close');
    });



    /** Subpages **/
    $('.target-item-header .datalink').on('click', function() {
        var link = $(this).data('link');

        $('.page-subtarget-item').slideUp();
        $(link).slideDown();
    });


    /** Form microzaim **/
    /*$('#cheapAgree').on('click', function() {
        if ($('#cheapAgree').prop('checked')) {
            $('#next').removeAttr('disabled');
        } else {
            $('#next').attr('disabled', 'disabled');
        }
    });*/

    /** Блокировка инпутов, пока не выбран город **/
    $('#cheapCity').change(function() {
        if ($('#cheapCity').val() != '') {
            $('input[name=cheapPersonName], input[name=cheapPersonFirstName], input[name=cheapPersonLastName], input[name=cheapPersonPhone], input[name=cheapPersonEmail]').removeAttr('disabled');
        } else {
            $('input[name=cheapPersonName], input[name=cheapPersonFirstName], input[name=cheapPersonLastName], input[name=cheapPersonPhone], input[name=cheapPersonEmail]').attr('disabled', 'disabled');
        }
    })

    $('#next').on('click', function() {
        var error = false;

        if ($('#cheapAgree').prop('checked') != true) {

            $('.testcheck').css({
                'color': 'red'
            });
            error = true;
        } else {
            $('.testcheck').css({
                'color': 'black'
            });
            error = false;
        }

        if ($('#cheapCity').val() == '') {
            $('#cheapCity + span .select2-selection').addClass('error');
            error = true;
        }
        if ($.trim($('input[name=cheapPersonName]').val()) == '') {
            $('input[name=cheapPersonName]').addClass('error');
            error = true;
        }
        if ($.trim($('input[name=cheapPersonFirstName]').val()) == '') {
            $('input[name=cheapPersonFirstName]').addClass('error');
            error = true;
        }
        if ($.trim($('input[name=cheapPersonLastName]').val()) == '') {
            $('input[name=cheapPersonLastName]').addClass('error');
            error = true;
        }
        if ($('input[name=cheapPersonPhone]').val() == '') {
            $('input[name=cheapPersonPhone]').addClass('error');
            error = true;
        }
        if ($('input[name=cheapPersonEmail]').val() == '') {
            if ($('#noMail').prop('checked') != true) {
                $('input[name=cheapPersonEmail]').addClass('error');
                error = true;
            }
        } else {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($('input[data-type=email]').val())) {
                $('input[data-type=email]').removeClass('error');
                error = false;
            } else {
                $('input[data-type=email]').addClass('error');
                error = true;
            }
        }

        if (error == false) {
            $('#step1').hide();
            $('#step2').show();
            $('.tabs-form li').removeClass('active');
            $('#link2').addClass('active');
        }
    });

    $('#cheapRegFact').on('click', function() {
        var city = $('input[name=cheapPersonCity]').val();
        var street = $('input[name=cheapPersonStreet]').val();
        var house = $('input[name=cheapPersonHouse]').val();
        var housing = $('input[name=cheapPersonHousing]').val();
        var apartament = $('input[name=cheapPersonApartament]').val();

        if ($('#cheapRegFact').prop('checked') == true) {
            $('input[name=cheapPersonCityFact]').val(city);
            $('input[name=cheapPersonStreetFact]').val(street);
            $('input[name=cheapPersonHouseFact]').val(house);
            $('input[name=cheapPersonHousingFact]').val(housing);
            $('input[name=cheapPersonApartamentFact]').val(apartament);
        }
    });


    /** Фикс инпутов **/
    $('input, textarea').on('click', function() {
        $(this).removeClass('error');
    })


    /**! Отправка формы! **/
    $("#formzaim").submit(function() {
        var form = $(this);
        var error = false;

        if ($('input[name=cheapPersonSerie]').val() == '') {
            $('input[name=cheapPersonSerie]').addClass('error');
            error = true;
        }
        if ($('input[name=cheapPersonNumber]').val() == '') {
            $('input[name=cheapPersonNumber]').addClass('error');
            error = true;
        }
        if ($.trim($('input[name=cheapPersonIssued]').val()) == '') {
            $('input[name=cheapPersonIssued]').addClass('error');
            error = true;
        }
        if ($('input[name=cheapPersonIssuedDate]').val() == '') {
            $('input[name=cheapPersonIssuedDate]').addClass('error');
            error = true;
        }
        if ($('input[name=cheapPersonBirth]').val() == '') {
            $('input[name=cheapPersonBirth]').addClass('error');
            error = true;
        }
        if ($.trim($('input[name=cheapPersonBirthGeo]').val()) == '') {
            $('input[name=cheapPersonBirthGeo]').addClass('error');
            error = true;
        }
        if ($.trim($('input[name=cheapPersonCity]').val()) == '') {
            $('input[name=cheapPersonCity]').addClass('error');
            error = true;
        }
        if ($.trim($('input[name=cheapPersonStreet]').val()) == '') {
            $('input[name=cheapPersonStreet]').addClass('error');
            error = true;
        }
        if ($('input[name=cheapPersonHouse]').val() == '') {
            $('input[name=cheapPersonHouse]').addClass('error');
            error = true;
        }
        if ($('input[name=cheapPersonApartament]').val() == '') {
            $('input[name=cheapPersonApartament]').addClass('error');
            error = true;
        }

        if ($('#cheapRegFact').prop('checked') != true) {
            if ($.trim($('input[name=cheapPersonCityFact]').val()) == '') {
                $('input[name=cheapPersonCityFact]').addClass('error');
                error = true;
            }
            if ($.trim($('input[name=cheapPersonStreetFact]').val()) == '') {
                $('input[name=cheapPersonStreetFact]').addClass('error');
                error = true;
            }
            if ($('input[name=cheapPersonHouseFact]').val() == '') {
                $('input[name=cheapPersonHouseFact]').addClass('error');
                error = true;
            }
            if ($('input[name=cheapPersonApartamentFact]').val() == '') {
                $('input[name=cheapPersonApartamentFact]').addClass('error');
                error = true;
            }
        }

        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/formz.php',
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('button[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        alert('Ваша заявка успешно отправлена');
                        $('#formzaim input').val('');
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false);
                }

            });
        }

        return false;
    });


    /**! Отправка формы "calc-new"! **/
$('body').on('click','#button_calc', function(){
    
        var error = false;

        for (var i = 0; i < $('#new-fromm-modal input[type="text"]').length; i++) {
            if ($('#new-fromm-modal input[type="text"]:eq('+i+')').val() == '') {
                $('.sucsecc-calc-new').hide();
                $('#new-fromm-modal input[type="text"]:eq('+i+')').addClass("error-calc-new");
                error = true;
            }else{
                $('#new-fromm-modal input[type="text"]:eq('+i+')').removeClass("error-calc-new");
            }
        }

    var sum_c                = $('#new-fromm-modal input[name="sum"]').val(); 
    var month_sum_c          = $('#new-fromm-modal input[name="month-sum"]').val();
    var car_model_c          = $('#new-fromm-modal input[name="car-model"]').val();
    var car_year_c           = $('#new-fromm-modal input[name="car-year"]').val();
    var car_vin_c            = $('#new-fromm-modal input[name="car-vin"]').val();
    var surname_c            = $('#new-fromm-modal input[name="surname"]').val();
    var name_c               = $('#new-fromm-modal input[name="name"]').val();
    var second_name_c        = $('#new-fromm-modal input[name="second-name"]').val();
    var date_c               = $('#new-fromm-modal input[name="date"]').val();
    var place_c              = $('#new-fromm-modal input[name="place"]').val();
    var pas_num_c            = $('#new-fromm-modal input[name="pas-num"]').val();
    var pas_kem_c            = $('#new-fromm-modal input[name="pas-kem"]').val();
    var pas_when_c           = $('#new-fromm-modal input[name="pas-when"]').val();
    var addr_1_c             = $('#new-fromm-modal input[name="addr-1"]').val();
    var addr_2_c             = $('#new-fromm-modal input[name="addr-2"]').val();
    var phone_c              = $('#new-fromm-modal input[name="phone"]').val();


console.log(sum_c);    
console.log(month_sum_c);    
console.log(car_model_c);    
console.log(car_year_c);    
console.log(car_vin_c);    
console.log(surname_c);    
console.log(name_c);    
console.log(second_name_c);    
console.log(date_c);    
console.log(place_c);    
console.log(pas_num_c);    
console.log(pas_kem_c);    
console.log(pas_when_c);    
console.log(addr_1_c);    
console.log(addr_2_c);    
console.log(phone_c);    









        if (!error) {
            $.ajax({
                type: 'POST',
                url: '/formnewauto.php',
                dataType: 'json',
                data: {
                    sum: sum_c, 
                    month_sum: month_sum_c,
                    car_model: car_model_c,
                    car_year: car_year_c,
                    car_vin: car_vin_c,
                    surname: surname_c,
                    name: name_c,
                    second_name: second_name_c,
                    date: date_c,
                    place: place_c,
                    pas_num: pas_num_c,
                    pas_kem: pas_kem_c,
                    pas_when: pas_when_c,
                    addr_1: addr_1_c,
                    addr_2: addr_2_c,
                    phone: phone_c,
                },
                success: function(data) {
                        // $('#modal-name').iziModal('open');
                        $('.sucsecc-calc-new').show();                        
                }

            });
        }

        return false;

 



});










    /**! Отправка формы "в один клик"! **/
    $("#sendoneclick").submit(function() {
        var form = $(this);
        var error = false;

        if ($('input[name=name]').val() == '') {
            $('input[name=name]').addClass('error');
            error = true;
        }

        if ($('input[name=phone]').val() == '') {
            $('input[name=phone]').addClass('error');
            error = true;
        }

        if ($('#city').val() == '') {
            $('#city + span .select2-selection').addClass('error');
            error = true;
        }

        if ($('input[name=summ]').val() == '') {
            $('input[name=summ]').addClass('error');
            error = true;
        }

        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/form.php',
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('button[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#modal-name').iziModal('open');
                        $('#sendoneclick input').val('');
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false);
                }

            });
        }

        return false;
    });

    // $('.triggerAuto').on('click', function() {
    //     $('#summsendauto').val($('#summMainAuto').text());
    // });


    $('#sendauto .test-button-new').on('click', function() {
        $('#summsendauto').val($('#summMainAuto').text());
    });

    $('#sendauto5 .test-button-new').on('click', function() {
        $('#summsendauto').val($('#summMainAuto').text());
    });




    /**! Отправка формы "автозалог"! **/
    $("#sendauto").submit(function() {
        var form = $(this);
        var error = false;

        // if ($('input[name=nameAuto]').val() == ''){
        //     $('input[name=nameAuto]').addClass('error');
        //     error = true;
        // } 

        if ($('input[name=phoneAuto]').val() == '') {
            $('input[name=phoneAuto]').addClass('error');
            error = true;
        }

        if ($('#cityAuto').val() == '') {
            $('#cityAuto + span .select2-selection').addClass('error');
            error = true;
        }
        console.log(form.serialize());
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/form.php',
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('button[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data) {
                    console.log("test");
                    console.log(data);
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#modal-name').iziModal('open');
                        $('#sendauto input').val('');
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false);
                }

            });
        }

        return false;
    });



    /**! Отправка формы "автозалог" со страницы test ! **/
    $("#sendauto5").submit(function() {
        var form = $(this);
        var error = false;

        // if ($('input[name=nameAuto]').val() == ''){
        //     $('input[name=nameAuto]').addClass('error');
        //     error = true;
        // } 

        if ($('input[name=phoneAuto]').val() == '') {
            $('input[name=phoneAuto]').addClass('error');
            error = true;
        }

        if ($('#current-city-form3').html() == '') {
            $('#cityAuto + span .select2-selection').addClass('error');
            error = true;
        }
        console.log(form.serialize());
        if (!error) {
            var data = form.serialize() + '&id_city=' + $('#current-city-form3').html();
            console.log(data);
            $.ajax({
                type: 'POST',
                url: '/formnb.php',
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('button[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data) {
                    console.log("test");
                    console.log(data);
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#modal-name').iziModal('open');
                        $('#sendauto input').val('');
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false);
                }

            });
        }

        return false;
    });






    /**! Отправка формы "автозалог"! **/
    $("#sendauto2").submit(function() {
        var form = $(this);
        var error = false;

        console.log("testbrrr");

        // if ($('input[name=nameAuto]').val() == ''){
        //     $('input[name=nameAuto]').addClass('error');
        //     error = true;
        // } 

        if ($('input[name=phoneAuto2]').val() == '') {
            $('input[name=phoneAuto2]').addClass('error');
            error = true;
        }

        if ($('#cityAuto2').val() == '') {
            $('#cityAuto2 + span .select2-selection').addClass('error');
            error = true;
        }
        console.log(form.serialize());
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/formnew.php',
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('button[type="submit"]').attr('disabled', 'disabled');
                    console.log("testbrrr2");
                },
                success: function(data) {
                    console.log("testbrrr3");
                    console.log(data);
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#modal-name').iziModal('open');
                        $('#sendauto2 input').val('');
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false);
                }

            });
        }

        return false;
    });



    /**! Отправка формы **/
    $("#main, #main2").submit(function() {
        var form = $(this);
        var error = false;

        // if (form.find('input[name=hname]').val() == '') {
        //     form.find('input[name=hname]').addClass('error');
        //     error = true;
        // }

        if (form.find('input[name=email]').val() == '') {
            form.find('input[name=email]').addClass('error');
            error = true;
        }

        // if (form.find('textarea[name=message]').val() == ''){
        //     form.find('textarea[name=message]').addClass('error');
        //     error = true;
        // }  

        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/formh.php',
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('button[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data) {
                    console.log(data);
                    console.log("отправлена");
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#modal-name').iziModal('open');
                        $('#main input, #main2 input, #main textarea, #main2 textarea').val('');
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false);
                }

            });
        }

        return false;
    });


    $('#prev, #link1').on('click', function() {
        $('#step2').hide();
        $('#step1').show();
        $('.tabs-form li').removeClass('active');
        $('#link1').addClass('active');
    });

    $('#send').on('click', function(event) {
        event.preventDefault();
        $('#modal-name').iziModal('open');
    });

    /** Career **/
    $('.career-item').on('click', function() {
        $(this).children('.career-content').slideToggle('fast');
    });

    /** FAQ **/
    $('.faq-item').on('click', function() {
        $(this).children('.faq-content').slideToggle('fast');
    });

    /** Cheap **/
    $('.cheap-target-item-header').on('click', function() {
        $(this).parent().parent().parent().parent().next().slideToggle('fast');
    });

    /** Land FAQ **/
    $('.land-faq-item').on('click', function() {
        $(this).children('.land-faq-content').slideToggle('fast');
    });


    /** Views **/
    $('.page-cheap-views').addClass($.cookie('view'));


    if ($.cookie('view') != '') {
        $('.cheap-view-item ').removeClass('active');
        var view = $.cookie('view');
        $('#' + view).addClass('active');
    }


    $('#default').on('click', function() {
        $('.cheap-view-item').removeClass('active');
        $(this).addClass('active');
        $('.page-cheap-views').removeClass('cart').removeClass('inline');
        $.cookie('view', '');
    });
    $('#cart').on('click', function() {
        $('.cheap-view-item').removeClass('active');
        $(this).addClass('active');
        $('.page-cheap-views').addClass('cart').removeClass('inline');
        $.cookie('view', 'cart');
    });
    $('#inline').on('click', function() {
        $('.cheap-view-item').removeClass('active');
        $(this).addClass('active');
        $('.page-cheap-views').addClass('inline').removeClass('cart');
        $.cookie('view', 'inline');
    });


    if (window.location.toString().indexOf('/kontakty') > 0) {
        /** Google map **/
        var mapVol;
        var mapCher;
        var infoboxes = [];

        var stylesArray =
            [{
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "hue": "#ff0000"
                }]
            }]

        function init() {
            var mapVolInit = document.getElementById('map_vol');
            var mapCherInit = document.getElementById('map_cher');

            var styledMap = new google.maps.StyledMapType(stylesArray, {
                name: "Styled Map"
            });


            var mapVol = new google.maps.Map(mapVolInit, {
                center: new google.maps.LatLng(59.218644, 39.8707916),
                zoom: 12,
                scrollwheel: false,
                navigationControl: false,
                panControl: false,
                // mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                },
                disableDoubleClickZoom: true
            });

            var mapCher = new google.maps.Map(mapCherInit, {
                center: new google.maps.LatLng(59.111547, 37.939557),
                zoom: 12,
                scrollwheel: false,
                navigationControl: false,
                panControl: false,
                // mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                },
                disableDoubleClickZoom: true
            });

            var geocoder = new google.maps.Geocoder();

            mapVol.mapTypes.set('map_style', styledMap);
            mapVol.setMapTypeId('map_style');

            mapCher.mapTypes.set('map_style', styledMap);
            mapCher.setMapTypeId('map_style');


            geocoder.geocode({
                'address': 'Санкт-Петербург, Санкт-Петербург'
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    //map.setCenter(results[0].geometry.location);

                    //marker_1 = new google.maps.Marker({
                    //    position: results[0].geometry.location,
                    //    position: new google.maps.LatLng(59.22113172, 39.87974882),
                    //    icon: '/templates/imperial/img/geotag.png',
                    //    map: mapVol
                    //});

                    marker_2 = new google.maps.Marker({
                        position: results[0].geometry.location,
                        position: new google.maps.LatLng(59.2105669, 39.84882832),
                        icon: '/templates/imperial/img/geotag.png',
                        map: mapVol
                    });

                    marker_3 = new google.maps.Marker({
                        position: results[0].geometry.location,
                        position: new google.maps.LatLng(59.2143012, 39.88951206),
                        icon: '/templates/imperial/img/geotag.png',
                        map: mapVol
                    });

                    marker_4 = new google.maps.Marker({
                        position: results[0].geometry.location,
                        position: new google.maps.LatLng(59.21614624, 39.92562532),
                        icon: '/templates/imperial/img/geotag.png',
                        map: mapVol
                    });

                    //Победы 58Б
                    //marker_5 = new google.maps.Marker({
                    //    position: results[0].geometry.location,
                    //    position: new google.maps.LatLng(59.129399, 37.9264546),
                    //    icon: '/templates/imperial/img/geotag.png',
                    //    map: mapCher
                    //});

                    marker_6 = new google.maps.Marker({
                        position: results[0].geometry.location,
                        position: new google.maps.LatLng(59.093848, 37.92031),
                        icon: '/templates/imperial/img/geotag.png',
                        map: mapCher
                    });

                    marker_7 = new google.maps.Marker({
                        position: results[0].geometry.location,
                        position: new google.maps.LatLng(59.120413, 37.998454),
                        icon: '/templates/imperial/img/geotag.png',
                        map: mapCher
                    });

                    marker_8 = new google.maps.Marker({
                        position: results[0].geometry.location,
                        position: new google.maps.LatLng(59.125602, 37.917809),
                        icon: '/templates/imperial/img/geotag.png',
                        map: mapCher
                    });

                } else {
                    console.log('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
        init();
    }

    /** Plugin tabs **/
    /*(function($){				
    	jQuery.fn.lightTabs = function(options){

    		var createTabs = function(){
    			tabs = this;
    			i = 0;
    			
    			showPage = function(i){
    				$(tabs).children("div").children("div").hide();
    				$(tabs).children("div").children("div").eq(i).show();
    				$(tabs).children("ul").children("li").removeClass("active");
    				$(tabs).children("ul").children("li").eq(i).addClass("active");
    			}
    								
    			showPage(0);				
    			
    			$(tabs).children("ul").children("li").each(function(index, element){
    				$(element).attr("data-page", i);
    				i++;                        
    			});
    			
    			$(tabs).children("ul").children("li").click(function(){
    				showPage(parseInt($(this).attr("data-page")));

    				init();
    			});				
    		};		
    		return this.each(createTabs);
    	};	
    })(jQuery);*/


    /** Tabs **/
    /*$(".tabs").lightTabs();*/


    /** Select 2 **/
    $('select').select2({
        minimumResultsForSearch: -1
    });


var $example = $('.js-example-programmatic').select2();

$("#cityAuto2").on("click", function () { $example.val("CA").trigger("change"); });


    $('.mm-listview').append('<button class="button mobile-button triggerOneClick">Займ в один клик</button>')


    /** Mmenu **/
    $html = $('html');
    
    var city_title = '';


 function readyuuu() {
    ymaps.ready(initcustom);
  }
  window.onload = function() {
     ymaps.ready(initcustom);
  };
  document.addEventListener("DOMContentLoaded", readyuuu);


    function initcustom() {
        // Данные о местоположении, определённом по IP 
        var geolocation = ymaps.geolocation;
        var d_city = geolocation.city;
        if (d_city=='Вологда') {
            city_title = '<a href="tel:+78172295555" style="margin-top: -20px;"><div class="icon-phone"><img src="/templates/imperial/img/phone.svg" alt="" /></div><div class="mmenu-phone"><div class="mmenu-phone-item" style="margin-top: 7px;">8 (8172) 295555</div><div class="mmenu-phone-text"></div></div></a>'; 
                        
            if ($.fn.mmenu) {
                
                        var API = $('#menu')
                            .mmenu({
                                extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
                                counters: true,
                                dividers: {
                                    fixed: true
                                },
                                navbar: {
                                    title: city_title
                                },
                                navbars: [{
                                    position: 'top',
                                    content: ['searchfield']
                                }, {
                                    position: 'top'
                                }, {
                                    position: 'bottom',
                                }],
                                searchfield: {
                                    resultsPanel: true
                                },
                                setSelected: {
                                    parent: true
                                }
                
                            }, {
                                searchfield: {
                                    clear: true
                                }
                
                            })
                            .data('mmenu');
                
                        var $burger = $('#hamburger')
                            .on('click',
                                function(e) {
                                    e.preventDefault();
                                    if ($html.hasClass('mm-opened')) {
                                        API.close();
                                    } else {
                                        API.open();
                                    }
                                }
                            )
                            .children('.hamburger');
                
                        API.bind('closed', function() {
                            setTimeout(function() {
                                $burger.removeClass('is-active');
                            }, 100);
                        });
                        API.bind('opened', function() {
                            setTimeout(function() {
                                $burger.addClass('is-active');
                            }, 100);
                        });
                    }
                    $('.vol-form').click();
                    $('.vol').click();

                    var $test = $('#cityAuto2').select2();
                    $test.val("Вологда").select2('destroy').select2();

        }
        else if (d_city=='Череповец') {
            city_title = '<a href="tel:+78202575050" style="margin-top: -20px;"><div class="icon-phone"><img src="/templates/imperial/img/phone.svg" alt="" /></div><div class="mmenu-phone"><div class="mmenu-phone-item" style="margin-top: 7px;">8 (8202) 575050</div><div class="mmenu-phone-text"></div></div></a>';   
                        
            if ($.fn.mmenu) {
                
                        var API = $('#menu')
                            .mmenu({
                                extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
                                counters: true,
                                dividers: {
                                    fixed: true
                                },
                                navbar: {
                                    title: city_title
                                },
                                navbars: [{
                                    position: 'top',
                                    content: ['searchfield']
                                }, {
                                    position: 'top'
                                }, {
                                    position: 'bottom',
                                }],
                                searchfield: {
                                    resultsPanel: true
                                },
                                setSelected: {
                                    parent: true
                                }
                
                            }, {
                                searchfield: {
                                    clear: true
                                }
                
                            })
                            .data('mmenu');
                
                        var $burger = $('#hamburger')
                            .on('click',
                                function(e) {
                                    e.preventDefault();
                                    if ($html.hasClass('mm-opened')) {
                                        API.close();
                                    } else {
                                        API.open();
                                    }
                                }
                            )
                            .children('.hamburger');
                
                        API.bind('closed', function() {
                            setTimeout(function() {
                                $burger.removeClass('is-active');
                            }, 100);
                        });
                        API.bind('opened', function() {
                            setTimeout(function() {
                                $burger.addClass('is-active');
                            }, 100);
                        });
                    }
                    $('.cher-form').click();
                    $('.cher').click();

                    var $test = $('#cityAuto2').select2();
                    $test.val("Череповец").select2('destroy').select2();

        }
        else {
            city_title = '<a href="tel:+78005005909" style="margin-top: -20px;"><div class="icon-phone"><img src="/templates/imperial/img/phone.svg" alt="" /></div><div class="mmenu-phone"><div class="mmenu-phone-item">8 800 5005-909</div><div class="mmenu-phone-text">Звонок бесплатный по России</div></div></a>';
            
            if ($.fn.mmenu) {
                
                        var API = $('#menu')
                            .mmenu({
                                extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
                                counters: true,
                                dividers: {
                                    fixed: true
                                },
                                navbar: {
                                    title: city_title
                                },
                                navbars: [{
                                    position: 'top',
                                    content: ['searchfield']
                                }, {
                                    position: 'top'
                                }, {
                                    position: 'bottom',
                                }],
                                searchfield: {
                                    resultsPanel: true
                                },
                                setSelected: {
                                    parent: true
                                }
                
                            }, {
                                searchfield: {
                                    clear: true
                                }
                
                            })
                            .data('mmenu');
                
                        var $burger = $('#hamburger')
                            .on('click',
                                function(e) {
                                    e.preventDefault();
                                    if ($html.hasClass('mm-opened')) {
                                        API.close();
                                    } else {
                                        API.open();
                                    }
                                }
                            )
                            .children('.hamburger');
                
                        API.bind('closed', function() {
                            setTimeout(function() {
                                $burger.removeClass('is-active');
                            }, 100);
                        });
                        API.bind('opened', function() {
                            setTimeout(function() {
                                $burger.addClass('is-active');
                            }, 100);
                        });
                    }
        }        
    };

    // if ($.fn.mmenu) {

    //     var API = $('#menu')
    //         .mmenu({
    //             extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
    //             counters: true,
    //             dividers: {
    //                 fixed: true
    //             },
    //             navbar: {
    //                 title: city_title
    //             },
    //             navbars: [{
    //                 position: 'top',
    //                 content: ['searchfield']
    //             }, {
    //                 position: 'top'
    //             }, {
    //                 position: 'bottom',
    //             }],
    //             searchfield: {
    //                 resultsPanel: true
    //             },
    //             setSelected: {
    //                 parent: true
    //             }

    //         }, {
    //             searchfield: {
    //                 clear: true
    //             }

    //         })
    //         .data('mmenu');

    //     var $burger = $('#hamburger')
    //         .on('click',
    //             function(e) {
    //                 e.preventDefault();
    //                 if ($html.hasClass('mm-opened')) {
    //                     API.close();
    //                 } else {
    //                     API.open();
    //                 }
    //             }
    //         )
    //         .children('.hamburger');

    //     API.bind('closed', function() {
    //         setTimeout(function() {
    //             $burger.removeClass('is-active');
    //         }, 100);
    //     });
    //     API.bind('opened', function() {
    //         setTimeout(function() {
    //             $burger.addClass('is-active');
    //         }, 100);
    //     });
    // }



    /** Select city **/
    $('#current-city').on('click', function() {
        $(this).next().toggle();
    })

    $('.vol').on('click', function() {
        $.cookie('user-city', 'vol');
        $.cookie('user-status', 'on');
        $('.options-city, #content-cher').hide();
        $('#content-vol').show();
        $('#current-city').empty().text('Вологда');
        $('input[name=selectedcity]').val('vol')
        init();
    })

    $('.cher').on('click', function() {
        $.cookie('user-city', 'cher');
        $.cookie('user-status', 'on');
        $('.options-city, #content-vol').hide();
        $('#content-cher').show();
        $('#current-city').empty().text('Череповец');
        $('input[name=selectedcity]').val('cher')
        init();
    })


    /** Current city form **/
    function indicator_city_function() {
        var indicator_city_custom = $('#main input, #main textarea, #main button').attr("disabled");
        console.log(indicator_city_custom);
        if (indicator_city_custom != "disabled") {
            $('#current-city-form').removeClass('animation-city-custom');
        } else {
            $('#current-city-form').addClass('animation-city-custom');
        }
        return false;
    }
    indicator_city_function();
    $('#current-city-form').on('click', function() {
        $(this).next().toggle();
        $(this).children('input').hide();
    })

    $('.vol-form').on('click', function() {
        $('.options-city').hide();
        $('#current-city-form').empty().text('Вологда');
        $('input[name=selectedcity]').val('vol');
        $('#main input, #main textarea, #main button').removeAttr('disabled');
        indicator_city_function();
    })

    $('.cher-form').on('click', function() {
        $('.options-city').hide();
        $('#current-city-form').empty().text('Череповец');
        $('input[name=selectedcity]').val('cher');
        $('#main input, #main textarea, #main button').removeAttr('disabled');
        indicator_city_function();
    })



    /** Current city form **/
    function indicator_city_function2() {
        var indicator_city_custom = $('#main2 input, #main textarea, #main2 button').attr("disabled");
        console.log(indicator_city_custom);
        if (indicator_city_custom != "disabled") {
            $('#current-city-form2').removeClass('animation-city-custom');
        } else {
            $('#current-city-form2').addClass('animation-city-custom');
        }
        return false;
    }
    indicator_city_function2();
    $('#current-city-form2').on('click', function() {
        $(this).next().toggle();
        $(this).children('input').hide();
    })

    $('.vol-form').on('click', function() {
        $('.options-city').hide();
        $('#current-city-form2').empty().text('Вологда');
        $('input[name=selectedcity]').val('vol');
        $('#main2 input, #main2 textarea, #main button').removeAttr('disabled');
        indicator_city_function2();
    })

    $('.cher-form').on('click', function() {
        $('.options-city').hide();
        $('#current-city-form2').empty().text('Череповец');
        $('input[name=selectedcity]').val('cher');
        $('#main2 input, #main textarea, #main2 button').removeAttr('disabled');
        indicator_city_function2();
    })

    /** Current city form **/
    function indicator_city_function3() {
        var indicator_city_custom3 = $('#sendauto5 button').attr("disabled");
        console.log(indicator_city_custom3);
        if (indicator_city_custom3 != "disabled") {
            $('#current-city-form3').removeClass('animation-city-custom');
        } else {
            $('#current-city-form3').addClass('animation-city-custom');
        }
        return false;
    }
    indicator_city_function3();
    $('#current-city-form3').on('click', function() {
        $(this).next().toggle();
        $(this).children('input').hide();
    })

    $('#sendauto5 .vol-form').on('click', function() {
        $('#sendauto5 .options-city').hide();
        $('#current-city-form3').empty().text('Вологда');
        $('#sendauto5 input[name=selectedcity]').val('vol');
        $('#sendauto5 input, #sendauto5 button').removeAttr('disabled');
        indicator_city_function3();
    })

    $('#sendauto5 .cher-form').on('click', function() {
        $('#sendauto5 .options-city').hide();
        $('#current-city-form3').empty().text('Череповец');
        $('#sendauto5 input[name=selectedcity]').val('cher');
        $('#sendauto5 input, #sendauto5 textarea, #sendauto5 button').removeAttr('disabled');
        indicator_city_function3();
    })




    /** Select user city **/
    // $('#modal-vol').on('click', function() {
    //     $.cookie('user-city', 'vol');
    //     $.cookie('user-status', 'on');
    //     $('.options-city, #content-cher').hide();
    //     $('#content-vol').show();
    //     $('#current-city').empty().text('Вологда');
    //     $('#select-user-city').iziModal('close');
    //     init();
    // })

    // $('#modal-cher').on('click', function() {
    //     $.cookie('user-city', 'cher');
    //     $.cookie('user-status', 'on');
    //     $('.options-city, #content-vol').hide();
    //     $('#content-cher').show();
    //     $('#current-city').empty().text('Череповец');
    //     $('#select-user-city').iziModal('close');
    //     init();
    // })

    // if ($.cookie('user-city') == 'vol') {
    //     $('#current-city').text('Вологда');
    //     $('input[name=selectedcity]').val('vol');
    //     $('#content-vol').show();
    //     $('#content-cher').hide();
    // }

    // if ($.cookie('user-city') == 'cher') {
    //     $('#current-city').text('Череповец');
    //     $('input[name=selectedcity]').val('cher');
    //     $('#content-cher').show();
    //     $('#content-vol').hide();
    // }

    /** Select faq **/
    $('#current-faq').on('click', function() {
        $(this).next().toggle();
    })

    $('.faq1').on('click', function() {
        $(this).parent().hide();
        $('#current-faq').empty().text('оформлению займа');
        $('input[name=selectedtype]').val('type1')
    })

    $('.faq2').on('click', function() {
        $(this).parent().hide();
        $('#current-faq').empty().text('погашению займа');
        $('input[name=selectedtype]').val('type2')
    })


    /** Page form **/


    /* YA_goals */
    $('.ya-goal-debt').on('click', function(e) {
        yaCounter46067934.reachGoal('zadolzenost');
        console.log("test");
    });
    $('.ya-goal-rest').on('click', function(e) {
        yaCounter46067934.reachGoal('otdyh');
        console.log("test");
    });
    $('.ya-goal-auto').on('click', function(e) {
        yaCounter46067934.reachGoal('avto');
        console.log("test");
    });
    $('.ya-goal-pensioner').on('click', function(e) {
        yaCounter46067934.reachGoal('pensiya');
        console.log("test");
    });
    $('.ya-goal-health').on('click', function(e) {
        yaCounter46067934.reachGoal('lechenie');
        console.log("test");
    });
    $('.ya-goal-education').on('click', function(e) {
        yaCounter46067934.reachGoal('obrazovanie');
        console.log("test");
    });
    $('.ya-goal-build').on('click', function(e) {
        yaCounter46067934.reachGoal('stroika');
        console.log("test");
    });
    $('.ya-goal-feast').on('click', function(e) {
        yaCounter46067934.reachGoal('prazdnik');
        console.log("test");
    });
    $('.ya-goal-businnes').on('click', function(e) {
        yaCounter46067934.reachGoal('bisness');
        console.log("test");
    });


    /* YA_goals END*/

});