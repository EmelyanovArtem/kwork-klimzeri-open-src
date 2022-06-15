function consoleBG() {
    var url = "img/bg-whitecream.jpg";
    if ($(window).scrollTop() < 5) {
      $('.header__row--top').css({'background-image': 'url("' + url + '")',
                            'background-position': 'right', 
                            'background-size': '45% 100%', 
                            'background-repeat': 'no-repeat',
                            'background-color' : 'transparent'});
        console.log(2);
    } else {
      $('.header__row--top').css({'background': 'white',
                             'box-shadow': '0px 4px 15px rgba(0, 0, 0, 0.05);'});
      console.log(1);
    }
  }
  consoleBG();

  $(window).scroll(function() {
    consoleBG();
  });