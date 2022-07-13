// viewport change smp / tablet
$(function(){
    var ua = navigator.userAgent;
    if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPad') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
    } else {
        $('head').prepend('<meta name="viewport" content="width=1310">');
    }
});

// header burger menu
$(function() {
    var $header = $('header');
    // Nav Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > 350) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });
    // Nav Toggle Button
    $('#nav-toggle').click(function(){
        $header.toggleClass('is-openMenu');
    });
});


// page top
$(function(){
    $(window).bind("scroll", function() {
    // トップから100px以上スクロールしたら
    if ($(this).scrollTop() > 100) {
     // ページトップのリンクをフェードインする
        $(".l-pagetop").fadeIn();
    } else { // それ以外は
     // ページトップのリンクをフェードアウトする
        $(".l-pagetop").fadeOut();
    }
})
   });

// pc only
document.addEventListener('DOMContentLoaded', function () {
  var mql = window.matchMedia('screen and (max-width: 768px)');

  function checkBreakPoint(mql) {
    if (mql.matches) {
      // スマホ向け
    } else {
      // PC向け
      $(function(){
        var $megaMenu = $('.l-globalNav li');
        $megaMenu.on({
          // ホバー時
          'mouseenter' : function(){
            var $this = $(this);
            SetMegaMenuHover = setTimeout(function(){
               $this.children('.l-globalNav2nd').stop().slideDown(300);
            }, 500);
          },
          // ホバーから離れた時
          'mouseleave' : function(){
            var $this = $(this);
            setTimeout(function(){
              $this.children('.l-globalNav2nd').stop().delay(100).slideUp(300);
            },500);
            clearTimeout(SetMegaMenuHover);
          }
        });
      });
    }
  }

  // ブレイクポイントの瞬間に発火
  mql.addListener(checkBreakPoint);

  // 初回チェック
  checkBreakPoint(mql);
});

$(function(){

  var backingElement = document.querySelector('a#goback');
  if (backingElement != null) {
    $(backingElement).attr('href', GetPreviousURL);
  }

  var timer = false;
  var prewidth = $(window).width();
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
          var nowWidth = $(window).width();
          if(prewidth !== nowWidth){
      // リロード
              location.reload();
          }
          prewidth = nowWidth;
      }, 200);
  });
});

// smp only
jQuery(document).ready(function($) {
  // pc
  if (window.matchMedia( '(min-width: 767px)' ).matches) {
// a link disable
  $('a.link-disable').click(function(){
    return false;
  })
  // smp
  } else {
// accordion default close
$(function() {
  var $accCloseOpen = $('.btn-acc:not(.is-open)'),
      $accCloseContents = $('.wrap-acc');
  $accCloseContents.hide(); //contentsを全て隠す
    $accCloseOpen.click(function(e) {
      e.preventDefault(); //a link disable
      $(this).next().slideToggle(); //open
    });
});

  };
});


// smp only
jQuery(document).ready(function($) {
  // pc
  if (window.matchMedia( '(min-width: 767px)' ).matches) {
// a link disable
  $('a.link-disable').click(function(){
    return false;
  })
  // smp
  } else {
// accordion default open
$(function() {
  var $accOpenClose = $('.btn-acc.is-open');
  $accOpenClose.next().show();
    $accOpenClose.click(function(e) {
      e.preventDefault(); //a link disable
      $(this).next().slideToggle(); //close
    });
});

  };
});



// carousel
$(function(){
      if($('.slide_selector')[0]) {
        $('.slide_selector').slick({
            autoplay:true,
            dots:true,
            autoplaySpeed:4000
          });
      }
});

// japan custom
// --------------------------------------------------

// sampleSystem
$(function(){
  if($('#datepickerDelivery')[0]){
    $('#datepickerDelivery').datepicker();
  }
});
$(function(){
  if($('#datepickerStart')[0]){
    $('#datepickerStart').datepicker();
  }
});


// objectFit
$(function(){
    if($('.img-objectFit')[0]) {
		objectFitImages('img.img-objectFit');
    }
});

// accordion
$(function(){
    if($('#l-tabAccordion')[0]) {
      $('#l-tabAccordion').easyResponsiveTabs({
          type: 'default', //Types: default, vertical, accordion
          width: 'auto', //auto or any width like 600px
          fit: true,   // 100% fit in a container
          closed: 'accordion', // Start closed if in accordion view
      });
    }
});

 // ブロック図
 $(function(){
    if($('.imgmap')[0]) {

jQuery(document).ready(function($) {
  // pc
  if (window.matchMedia( '(min-width: 767px)' ).matches) {

 function imgmap() {
	// スクロールして何ピクセルでアニメーションさせるか
	var px_change	= 1000;

	// スクロールのイベントハンドラを登録
	window.addEventListener('scroll', function(e){
		// 変化するポイントまでスクロールしたらクラスを追加
		if ( $(window).scrollTop() > px_change ) {
			$(".imgmap").addClass("fixed");
			$(".img_dummy").addClass("fixed");

		// 変化するポイント以前であればクラスを削除
		} else if ( $(".imgmap").hasClass("fixed") ) {
			$(".imgmap").removeClass("fixed");
			$(".img_dummy").removeClass("fixed");
		}
	});
}
window.onload = imgmap();

  // smp
  } else {

  };
});

  }
});

//PDF Window
function pdf(url){
	console.log(url);
	val = encodeURIComponent(url);
/*
if(!isNaN(num)){
        val = "~/media/" + val + ".ashx";
  } else {
*/
        val = "~/media/Files/KOA/notDLfile/" + val + ".ashx";
	var result = "";
	for (var i = 0; i < val.length; i++) {
		result += String.fromCharCode(val.charCodeAt(i) + 5);
	}

	win=window.open("/pdfviewer/web/viewer.html?file="+result+"","host","status=0,toolbar=0,scrollbars=1,width=700,height=850,location=no,menubar=no,resizable=1");
}

// SP ハンバーガーメニュー accデフォルトオープン
$(function(){
$('.btn-globalNavAccMobile').click(function(){
  $(this).next('.wrap-globalNavAccMobile').slideToggle();
});
});

// side acc
$(function(){
      if($('.btn-side-acc')[0]) {
        $('.btn-side-acc:not(.is-active-open)').bind('click', function() {

            if ($(this).hasClass('is-open')) {
              // 閉じる

              $(this).removeClass('is-open');
              $(this).next('.wrap-side-acc').slideUp();

            } else {
              // 開く
              $('.btn-side-acc.is-open').removeClass('is-open').next('.wrap-side-acc').slideUp();
              $('.btn-side-acc.is-active-open').removeClass('is-open').next('.wrap-side-acc').slideUp();

              $(this).addClass('is-open');
              $(this).next('.wrap-side-acc').slideDown();

              }
            });
          }

});

// accordion default open
$(function() {
  var $accOpenClose = $('.btn-side-acc.is-active-open');
  $accOpenClose.next().show();
    $accOpenClose.click(function(e) {
      e.preventDefault(); //a link disable
      $(this).toggleClass('is-close').next().slideToggle(); //close
    });
});

$(window).load(function () {

  $('div:not(.l-answer) >.fxb-basic').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.col-2').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
    $(box).find('.col-2').height(maxHeight);

		$(box).find('.col-3').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
    $(box).find('.col-3').height(maxHeight);

		$(box).find('.col-4').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.col-4').height(maxHeight);
  });

  $('div:not(.l-answer) >.fxb-card').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.fxb-cardA').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
    $(box).find('.fxb-cardA').height(maxHeight);
  });

  $('div:not(.l-answer) >.fxb-cardA').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('._image img').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
    $(box).find('._image img').height(maxHeight);
  });

  $('div:not(.l-answer) >.fxb-basic').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.fxb-cardA').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
    $(box).find('.fxb-cardA').height(maxHeight);

		$(box).find('.fxb-cardB').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
    $(box).find('.fxb-cardB').height(maxHeight);
  });

  $('div:not(.l-answer) >.l-utilityNav').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('ul li').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
    $(box).find('ul li').height(maxHeight);
  });

});

$(function(){
    if($('#agree')[0]) {
    $('#submit').prop('disabled', true);
    $('#agree').on('click', function() {
        if ($(this).prop('checked') == false) {
                  $('.table-dl.chk th a').css({'pointer-events':'none','background-color':'#AAA'});
                  $('.table-dl.chk td a').css({'pointer-events':'none','background-color':'#AAA'});
        } else {
                  $('.table-dl.chk th a').css({'pointer-events':'auto','background-color':'#F80'});
                  $('.table-dl.chk td a').css({'pointer-events':'auto','background-color':'#F80'});
        }
    });
  }
});


// faq accordion
$(function(){
    if($('.btn-accFaq')[0]) {

// faq accordion default close
$(function() {
  var $accSprite = $('.btn-accFaq.is-active:not(.is-show)'),
      $accContents = $('.is-active + .wrap-accFaq');
  $accContents.hide(); //contentsを全て隠す
  $accSprite.each(function() {
    var flag = "close"; //flagを初期値を設定
    $(this).click(function(e) {
      e.preventDefault(); //aタグのリンク無効化
      $(this).toggleClass('is-open').next().slideToggle(); //クラスを追加してすぐ次の要素をスライド
    });
  });
});

// faq accordion default open
$(function() {
  var $accOpenClose = $('.btn-accFaq.is-active.is-show');
  $accOpenClose.next().show();
    $accOpenClose.click(function(e) {
      e.preventDefault(); //a link disable
      $(this).toggleClass('is-close').next().slideToggle(); //close
    });
});

  // faq accordion default all open and close
$(function() {

    $('.btn-accAllOpan').click(function () {
      var $btn = $(this);
      $btn.toggleClass('is-active');
      $('.btn-accFaq:not(.is-show)').each(function(index){
          var $this = $(this);

          if($this.hasClass('is-active')){
            if($btn.hasClass('is-active')){
              $this.addClass('is-open');
              $this.next().slideDown();
            } else {
                $this.removeClass('is-open');
                $this.next().slideUp();
            }
          }
      });

      });
});

}
});

// carousel
$(function(){
    if($('.slide_selectorJapan')[0]) {

$(function(){
  var slideWrapper = $(".slide_selectorJapan"),
      iframes = slideWrapper.find('.embed-player'),
      lazyImages = slideWrapper.find('.slide-image'),
      lazyCounter = 0;

  // POST commands to YouTube or Vimeo API
  function postMessageToPlayer(player, command){
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), "*");
  }

  // When the slide is changing
  function playPauseVideo(slick, control){
    var currentSlide, slideType, startTime, player, video;

    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];
    player = currentSlide.find("iframe").get(0);
    startTime = currentSlide.data("video-start");

    if (slideType === "vimeo") {
      switch (control) {
        case "play":
          if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
            currentSlide.addClass('started');
            postMessageToPlayer(player, {
              "method": "setCurrentTime",
              "value" : startTime
            });
          }
          postMessageToPlayer(player, {
            "method": "play",
            "value" : 1
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "method": "pause",
            "value": 1
          });
          break;
      }
    } else if (slideType === "youtube") {
      switch (control) {
        case "play":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "mute"
          });
          postMessageToPlayer(player, {
            "event": "command",
            "func": "playVideo"
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "pauseVideo"
          });
          break;
      }
    } else if (slideType === "video") {
      video = currentSlide.children("video").get(0);
      if (video != null) {
        if (control === "play"){
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }

  // Resize player
  function resizePlayer(iframes, ratio) {
    if (!iframes[0]) return;
    var win = $(".slide_selectorJapan"),
        width = win.width(),
        playerWidth,
        height = win.height(),
        playerHeight,
        ratio = ratio || 16/9;

    iframes.each(function(){
      var current = $(this);
      if (width / ratio < height) {
        playerWidth = Math.ceil(height * ratio);
        current.width(playerWidth).height(height).css({
          left: (width - playerWidth) / 2,
           top: 0
          });
      } else {
        playerHeight = Math.ceil(width / ratio);
        current.width(width).height(playerHeight).css({
          left: 0,
          top: (height - playerHeight) / 2
        });
      }
    });
  }

  // DOM Ready
  $(function() {
    // Initialize
    slideWrapper.on("init", function(slick){
      slick = $(slick.currentTarget);
      setTimeout(function(){
        playPauseVideo(slick,"play");
      }, 1000);
      resizePlayer(iframes, 16/9);
    });
    slideWrapper.on("beforeChange", function(event, slick) {
      slick = $(slick.$slider);
      playPauseVideo(slick,"pause");
    });
    slideWrapper.on("afterChange", function(event, slick) {
      slick = $(slick.$slider);
      playPauseVideo(slick,"play");
    });
    slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
      lazyCounter++;
      if (lazyCounter === lazyImages.length){
        lazyImages.addClass('show');
        // slideWrapper.slick("slickPlay");
      }
    });

    //start the slider
    slideWrapper.slick({
      autoplay:true,
      autoplaySpeed:7500,
      lazyLoad:"progressive",
      speed:500,
      arrows:true,
      dots:true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: 'calc((100% - 980px)/2)',
      cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
    });
  });

  // Resize event
  $(window).on("resize.slickVideoPlayer", function(){
    resizePlayer(iframes, 16/9);
  });
});

  }
});

// サイドメニュー（accordion）5階層を展開
$(function () {
  // 選択済みクラス名（.is-active）から5階層のデータを取得
  var $5active = $('.l-localNav5th li .is-active');

  // 親にクラスを追加して、展開する
  if ($5active.length > 0) {
    var $parent = $5active.closest('.l-side-acc');
    $parent.find('.btn-side-acc').addClass('is-open');
    $parent.find('.wrap-side-acc').show();
  }
});

// SP ハンバーガーメニュー acc
$(function(){
      if($('.btn-globalNavAccMobile')[0]) {
        $('.btn-globalNavAccMobile').bind('click', function() {

            if ($(this).hasClass('is-open')) {
              // 閉じる

              $(this).removeClass('is-open');
              $(this).next('.wrap-globalNavAccMobile').slideUp();

            } else {
              // 開く
              $('.btn-globalNavAccMobile.is-open').removeClass('is-open').next('.wrap-globalNavAccMobile').slideUp();

              $(this).addClass('is-open');
              $(this).next('.wrap-globalNavAccMobile').slideDown();

              }
            });
          }
});

// サイドメニュー（accordion）5階層を展開
$(function () {
    // 選択済みクラス名（.is-active）から5階層のデータを取得
    var $5active = $('.l-localNav5th li .is-active');

    // 親にクラスを追加して、展開する
    if ($5active.length > 0) {
        var $parent = $5active.closest('.l-side-acc');
        $parent.find('.btn-side-acc').addClass('is-open');
        $parent.find('.wrap-side-acc').show();
    }
});

function GetPreviousURL(){
  var ref = document.referrer;
  if (ref === '') return '/';
  return ref;
}
