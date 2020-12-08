(function () {
  function htmlStyle() {
    var baseWidth = 750;
    var width = document.documentElement.clientWidth;

    if (width >= baseWidth) {
      $('html').attr('style', "font-size:10px");
      $('.light-list').attr('style', '');
    } else {
      var val = Math.ceil(width / baseWidth * 10);
      $('html').attr('style', "font-size:" + val + "px");

      var _scale = width / baseWidth;
      var _late = Math.floor((1 - _scale) * 10) * 10;
      $('.light-list').attr('style', 'transform:scale(' + _scale.toFixed(2) + ') translate(-' + _late.toFixed(0) + '%,-' + _late.toFixed(0) + '%)');
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


  // 打印1

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
    }, 200);
  }

  print($('#print_con'), ['Based On Substrate Developent', 'Safer, Faster And More Stable', 'ファントムアグリーメント', '幻影协议'], 0)

  print($('#print_con1'), ['Privace Protection Asset Safety'], 0)

})();