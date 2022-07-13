var regions = {
    'NorthAmerica': { url: 'http://www.koaspeer.com/' },
    'SouthAmerica': { url: 'http://www.koaspeer.com/' },
    'Europe': { url: 'http://www.koaeurope.de/' },
    'Africa': { url: 'http://www.koaeurope.de/' },
    'Oceania': { url: 'http://www.koaspore.com.sg/' },
    'Central_Asia': { url: 'http://www.koaeurope.de/' },
    'Hongkong_China': { url: 'http://www.koaglobal.com/' },
    'Japan_Korea': { url: 'http://www.koaglobal.com/' },
    'Taipei': { url: 'http://www.koadah.com/' },
    'Kaohsiung': { url: 'http://www.koaglobal.com.tw' },
    'Northern_Asia': { url: 'http://www.koaeurope.de/' },
    'South_Eastern_Asia': { url: 'http://www.koaspore.com.sg' },
    'Southern_Asia': { url: 'http://www.koaspore.com.sg' },
    'Western_Asia': { url: 'http://www.koaeurope.de/' },
    }

; (function ($) {

    $.fn.btnClick = function (options) {

        if (this.length > 1)
            throw new Exception('Target Setting Error.');
        var ele = this,
        defaults = {
            open_btn_class: '.is-openRegion',
            close_btn_class: '.close',
            content_class: '.is-content',
            modal_shadow: true
        },
        setting = $.extend(options, defaults),
        util = {
            window_height: null,
            window_width: null,
            modal_height: ele.find(setting.content_class).height(),
            modal_width: ele.find(setting.content_class).width(),
            top_position: null,
            left_position: null,
            position_fixer: function (window_size, modal_size) {
                return (parseInt(window_size / 2) - parseInt(modal_size / 2)) + 'px';
            }
        };
        ele.addClass('close');
        $(document).on('click', setting.open_btn_class, function () {
            disp(util, ele, setting);
        });

        $(document).on('click', setting.content_class, function (eve) {
            eve.stopPropagation();
        });

        $(document).on('click', setting.close_btn_class, function () {

            ele.find(setting.content_class).fadeOut('fast', function () {
                ele.fadeOut();
            });
        });


        return this;
    };


    function disp(util, ele, setting) {
        util.window_height = $(window).height();
        util.window_width = $(window).width();
        util.top_position = util.position_fixer(util.window_height, util.modal_height);
        util.left_position = util.position_fixer(util.window_width, util.modal_width)
        ele.fadeIn(function () {
            ele.find(setting.content_class).css({
                'top': util.top_position,
                'left': util.left_position
            }).fadeIn();
        });
    }

    function setCountryURL(region) {
        if (!regions[region]) return null;
        return regions[region].url;
    }

    function callWindow(url, region) {
        window.location.href = url;
    }

    $(function () {

        $('.l-regionPC area, .l-regionPC a, .l-regionSP a').each(function () {
            var region = regions[$(this).data('region')];
            if (region) {
                $(this).on('click', {region : $(this).data('region')}, function (event) {
                    var url = setCountryURL(event.data.region);
                    callWindow(url, event.data.region);
                });
            }
        })
        $('#is-region').btnClick();
        $("#regionAsia").click(function () {
            $('.bg-tertiary').toggleClass('is-openCountry');
        });
        $('#mapWorld').mapster({
            singleSelect: true,
            clickNavigate: true,
            render_highlight: { altImage: 'https://www.koaglobal.com/common/images/countory/img_country_on.png' },
            mapKey: 'region',
            fill: true, altImage: 'https://www.koaglobal.com/common/images/countory/img_country_on.png',
            fillOpacity: 1,
        });
    });

}(jQuery));
