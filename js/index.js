(function () {
  function htmlStyle() {
    var baseWidth = 750;
    var width = document.documentElement.clientWidth;

    if (width >= baseWidth) {
      $('html').attr('style', "font-size:10px");

      $('.light-list').attr('style', '');
      $('.world').attr('style', '');
    } else {
      var val = Math.ceil(width / baseWidth * 10);
      $('html').attr('style', "font-size:" + val + "px");

      var _scale = width / baseWidth;

      $('.light-list').attr('style', 'transform:scale(' + _scale.toFixed(2) + ')');
      $('.world').attr('style', 'transform:scale(' + _scale.toFixed(2) + ')');
    }
  }

  htmlStyle();
  $(window).on('resize', function () {
    htmlStyle();
  });


  $('#menus').on('click', function () {
    $('#body').addClass('mobile');
  });

  $('#close').on('click', function () {
    $('#body').removeClass('mobile');
  });


  // print1

  function print(id, arr, index) {
    var max = arr.length;
    var pos = index;
    var i = 0;
    var val = arr[pos].split('');
    var len = val.length;
    var html = ''

    var setInter = setInterval(function () {
      html += val[i];
      id.html(html);
      i++;

      if (i >= len) {
        clearInterval(setInter);
        setInter = null
        pos++;
        if (pos >= max) {
          pos = 0;
        }
        var setTime = setTimeout(function () {
          id.html('');
          print(id, arr, pos);
          setTime = null;
        }, 1000);
      }
    }, 80);
  }

  print($('#print_con'), ['Based On Substrate Development', 'Safer, Faster And More Stable', 'ファントムアグリーメント', '_ _ _ _ 幻影協議'], 0)

  print($('#print_con1'), ['Privacy Protection', 'Asset Safety', 'Free Circulation'], 0)


  //scroll

  function scroll() {
    var base = 180;

    var bodyHeight = $('body').height();
    var height = document.documentElement.clientHeight;
    var max = bodyHeight - height;

    var article2 = $('.article2');
    var top2 = article2.offset().top;
    var height2 = article2.height();

    var article5 = $('.article5');
    var top5 = article5.offset().top;
    var height5 = article5.height();

    var article7 = $('.article7');
    var top7 = article7.offset().top;
    var height7 = article7.height();

    var article6 = $('.article6');
    var top6 = article6.offset().top;

    var article8 = $('.article8');
    var top8 = article8.offset().top;
    var height8 = article8.height();

    var article9 = $('.article9');
    var top9 = article9.offset().top;
    var height9 = article9.height();

    var bot2 = $('.article2-bottom').offset().top;
    var bot2height = $('.article2-title').outerHeight();
    var bot6 = $('.article6-bottom').offset().top;
    var bot6height = $('.article6-sticky').outerHeight();

    $(window).on('scroll', function () {
      var _that = $(this);
      var top = _that.scrollTop();

      if (top > bot2) {
        $('.content-module-con').attr('style', '--gregoss:45');
      } else if (top < top2) {
        $('.content-module-con').attr('style', '--gregoss:0');
      } else {
        var _gregoss = ((top - top2) / bot2height * 45).toFixed(0);
        $('.content-module-con').attr('style', '--gregoss:' + _gregoss);
      }

      if (top > bot6) {
        $('.power-list').attr('style', '--progess:1');
      } else if (top < top6) {
        $('.power-list').attr('style', '--progess:0');
      } else {
        var _progess = ((top - top6) / bot2height).toFixed(2);
        $('.power-list').attr('style', '--progess:' + _progess);
      }


      if (top >= top2 - base && top < top2 + height2) {
        article2.addClass('animation');
      } else if (top >= top5 - base && top < top5 + height5) {
        article5.addClass('animation');
      } else if (top >= max || (top >= top7 - base && top < top7 + height7)) {
        article7.addClass('animation');
      } else if (top >= max || (top >= top8 - base && top < top8 + height8)) {
        article8.addClass('animation');
      } else if (top >= max || (top >= top9 - base && top < top9 + height9)) {
        article9.addClass('animation');
      }

    });
  }

  scroll();


  $('.weixin').on('mouseenter', function () {
    $('.weixin-img').show();
  }).on('mouseleave', function () {
    $('.weixin-img').hide();
  });
})();