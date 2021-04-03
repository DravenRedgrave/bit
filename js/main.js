$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:5,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    WariableWidth:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:3
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});

const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
      if (nav.className != 'active') {nav.className = 'active';}
      else {nav.className = '';}
  });

$(window).on("scroll",function(){
  if($(window).scrollTop()){
    $('header').addClass('black');
  }
  else {
    $('header').removeClass('black');
  }
})




$(document).ready(function() {
  $('.spoiler-title').click(function(event) {
    if($('.spoiler').hasClass('one')){
      $('.spoiler-title').not($(this)).removeClass('active');
      $('.spoiler-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })
})

$('.dot1').hover(
  function() {
    $('.dot1-info').show();
  },
  function() {
    $('.dot1-info').hide();
  }
);

$('.dot2').hover(
  function() {
    $('.dot2-info').show();
  },
  function() {
    $('.dot2-info').hide();
  }
);


$('.dot3').hover(
  function() {
    $('.dot3-info').show();
  },
  function() {
    $('.dot3-info').hide();
  }
);


$('.dot4').hover(
  function() {
    $('.dot4-info').show();
  },
  function() {
    $('.dot4-info').hide();
  }
);

$('.dot5').hover(
  function() {
    $('.dot5-info').show();
  },
  function() {
    $('.dot5-info').hide();
  }
);


$('.dot6').hover(
  function() {
    $('.dot6-info').show();
  },
  function() {
    $('.dot6-info').hide();
  }
);

$('.dot7').hover(
  function() {
    $('.dot7-info').show();
  },
  function() {
    $('.dot7-info').hide();
  }
);




$('.roadmap-item').hover(
  function() {
    $('.block-text').show();
  },
  function() {
    $('.block-text').hide();
  }
);


$('.news-item').hover(
  function() {
    $('.new-info-bbc').show();
  },
  function() {
    $('.new-info-bbc').hide();
  }
);


$('.news-item-crypto').hover(
  function() {
    $('.new-info-crypto').show();
  },
  function() {
    $('.new-info-crypto').hide();
  }
);


$('.news-item-hik').hover(
  function() {
    $('.new-info-hik').show();
  },
  function() {
    $('.new-info-hik').hide();
  }
);
