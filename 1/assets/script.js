var answers = document.querySelectorAll('.inn-q-select'),
  lastQnum = document.querySelectorAll('#inn-last-q-item .inn-q-select').length;

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    $('.main-slider').removeClass('invisible')
    $('.loader').hide()
  }, 1000)
  $(".js-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".js-slider-nav",
  }),
  $(".js-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".js-slider-for",
    dots: !1,
    focusOnSelect: !0,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIie3WMUpDQRAG4A9BrOwEwcrCA9hYWqVKq43ewXgJ4yGs9Ao5gJJGUPEMgoFUYieCKHkWz8DbJaCoO49Afth2P2bZnR0WmZOs4hbV17qKQJcwaKAV7iPg0wx9xlZpdB+TBvqOTml0Gy/Sao9Ko+sYZeh5aXQZwwy9xkpp+CxDH9UnUDTHGfqKndJoR31rp+gEB6XRTTxJqz0pjcJdhg7UHevP+W6T6j+Q32TWUfej8F28SS/XYRTe08JzmiZvIGNsRMCttUxYw0OGX0TAzP4We1H4nnQQ+EA3Cu9Lqw4ZfWhx2KMeb28a8GUUvMiP8wl+P2e4Vi0+4AAAAABJRU5ErkJggg==\"></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==\"></button>",
  })

  $('.colors__item').click(function () {
    let t = $(this);
    $('.colors__item').each(function () {
      $(this).removeClass('--active');
    });
    t.addClass('--active');
    $('#selectedColor').text(t.data('selected'));
    // $('.js-slider-for img').each(function (i) {
    //   $(this).attr('src', `./assets/${t.data('color')}-${i + 1}.webp`)
    // })
  });

  $('.sizes>li').click(function () {
    $('.sizes>li').each(function () {
      $(this).removeClass('--active');
    });
    $(this).addClass('--active');
  });
  $('.gender>li').click(function () {
    $('.gender>li').each(function () {
      $(this).removeClass('--active');
    });
    $(this).addClass('--active');
  });
});

$('#textarea').on('keyup', function () {
  $(this).val().length
    ? $('#commentBtn').removeAttr('disabled')
    : $('#commentBtn').attr('disabled', 'disabled');
}),
  $('#commentBtn').on('click', function () {
    $('#commentsList').prepend(
      '<li class="comment__item"><div class="comment__container">\n      <div class="comment__avatar"><img src="./assets/unnamed.png" alt="" /></div>\n       <div class="comment__content">\n <div class="comment__name">User</div>\n<div class="comment__text">\n' +
        $('#textarea').val() +
        ' </div>\n </div>\n       <div class="comment__time">\n <span>1 min</span>\n <span>like</span>\n <span>comment</span>\n </div>\n     </div></li>',
    ),
      $('#textarea').val(''),
      $('#commentBtn').attr('disabled', 'disabled');
  });

function toNext(e) {
  '1' == e.value &&
    (

      document.getElementsByClassName('first-step')[0].classList.add('animate__animated'),
    document.getElementsByClassName('first-step')[0].classList.add('animate__fadeOut'),
    document.getElementsByClassName('comments')[0].classList.add('animate__animated'),
    document.getElementsByClassName('comments')[0].classList.add('animate__fadeOut'),
    document.getElementsByClassName('con-body-ln2')[0].classList.add('animate__fadeOut'),
    document.getElementsByClassName('con-body-ln2')[0].classList.add('animate__fadeOut'),
    setTimeout(function () {
      document.getElementsByClassName('first-step')[0].style.display = 'none';
      document.getElementsByClassName('comments')[0].style.display = 'none';
      document.getElementsByClassName('con-body-ln2')[0].style.display = 'none';
    }, 500));
  var t = e.parentElement.parentElement,
    a = t.nextElementSibling;
  t.classList.add('animate__animated'),
    t.classList.add('animate__fadeOut'),
    setTimeout(function () {
      t.style.display = 'none';
    }, 490),
    setTimeout(function () {
      a.classList.add('animate__animated'),
        a.classList.add('animate__fadeIn'),
        (a.style.display = 'block');
    }, 490);
}

var states = [
    document.getElementById('inn-q-progress-state1'),
    document.getElementById('inn-q-progress-state2'),
    document.getElementById('inn-q-progress-state3'),
    document.getElementById('inn-q-progress-state4'),
  ],
  dones = [
    document.getElementById('inn-q-progress-dones2'),
    document.getElementById('inn-q-progress-dones3'),
    document.getElementById('inn-q-progress-dones4'),
  ],
  loadImg = document.getElementById('inn-q-progress-loading'),
  loadBgCol = document.getElementById('content-changeCol');

function drawloader() {
  setTimeout(function () {
    (dones[0].style.display = 'block'),
      dones[0].classList.add('animate__animated'),
      dones[0].classList.add('animate__fadeInUp');
  }, 1500),
    setTimeout(function () {
      (states[0].style.display = 'block'),
        states[0].classList.add('animate__animated'),
        states[0].classList.add('animate__fadeOut'),
        (dones[0].style.color = '#34ae21'),
        loadImg.classList.add('animate__animated'),
        loadImg.classList.add('animate__bounceIn'),
        (loadBgCol.style.backgroundImage =
          'linear-gradient(to right, #e3ffdf,#fff,#fff,#fff,#e3ffdf)');
    }, 2300),
    setTimeout(function () {
      (states[0].style.display = 'none'),
        (states[1].style.display = 'block'),
        states[1].classList.add('animate__animated'),
        states[1].classList.add('animate__fadeIn'),
        dones[0].classList.add('animate__animated'),
        dones[0].classList.add('animate__fadeOut'),
        loadImg.classList.remove('animate__animated'),
        loadImg.classList.remove('animate__bounceIn'),
        (loadBgCol.style.backgroundImage = 'linear-gradient(to right, #fff,#fff,#fff,#fff,#fff)');
    }, 3500),
    setTimeout(function () {
      (dones[0].style.display = 'none'),
        (dones[1].style.display = 'block'),
        dones[1].classList.add('animate__animated'),
        dones[1].classList.add('animate__fadeInUp');
    }, 5500),
    setTimeout(function () {
      (states[1].style.display = 'block'),
        states[1].classList.add('animate__animated'),
        states[1].classList.add('animate__fadeOut'),
        (dones[1].style.color = '#34ae21'),
        loadImg.classList.add('animate__animated'),
        loadImg.classList.add('animate__bounceIn'),
        (loadBgCol.style.backgroundImage =
          'linear-gradient(to right, #e3ffdf,#fff,#fff,#fff,#e3ffdf)');
    }, 6300),
    setTimeout(function () {
      (states[1].style.display = 'none'),
        (states[2].style.display = 'block'),
        states[2].classList.add('animate__animated'),
        states[2].classList.add('animate__fadeIn'),
        dones[1].classList.add('animate__animated'),
        dones[1].classList.add('animate__fadeOut'),
        loadImg.classList.remove('animate__animated'),
        loadImg.classList.remove('animate__bounceIn'),
        (loadBgCol.style.backgroundImage = 'linear-gradient(to right, #fff,#fff,#fff,#fff,#fff)');
    }, 7500),
    setTimeout(function () {
      (dones[1].style.display = 'none'),
        (dones[2].style.display = 'block'),
        dones[2].classList.add('animate__animated'),
        dones[2].classList.add('animate__fadeInUp');
    }, 9500),
    setTimeout(function () {
      (states[2].style.display = 'block'),
        states[2].classList.add('animate__animated'),
        states[2].classList.add('animate__fadeOut'),
        (dones[2].style.color = '#34ae21'),
        loadImg.classList.add('animate__animated'),
        loadImg.classList.add('animate__bounceIn'),
        (loadBgCol.style.backgroundImage =
          'linear-gradient(to right, #e3ffdf,#fff,#fff,#fff,#e3ffdf)');
    }, 10300),
    setTimeout(function () {
      (states[2].style.display = 'none'),
        (states[3].style.display = 'block'),
        states[3].classList.add('animate__animated'),
        states[3].classList.add('animate__fadeIn'),
        dones[2].classList.add('animate__animated'),
        dones[2].classList.add('animate__fadeOut'),
        loadImg.classList.remove('animate__animated'),
        loadImg.classList.remove('animate__bounceIn'),
        (loadBgCol.style.backgroundImage = 'linear-gradient(to right, #fff,#fff,#fff,#fff,#fff)');
    }, 11500),
    setTimeout(function () {
      document.getElementById('verif-content').classList.add('animate__animated'),
        document.getElementById('verif-content').classList.add('animate__fadeOut');
    }, 13500),
    setTimeout(function () {
      (document.getElementById('verif-content').style.display = 'none'),
        (document.getElementById('prize-content-1').style.display = 'block'),
        document.getElementById('prize-content-1').classList.add('animate__animated'),
        document.getElementById('prize-content-1').classList.add('animate__fadeIn');
    }, 14000),
    setTimeout(function () {
      // document.getElementById('con-footer').classList.add('animate__animated');
      // document.getElementById('con-footer').classList.add('animate__fadeOut');
      // setTimeout(function () {
      //   document.getElementById('con-footer').style.display = 'none';
      // }, 600);
      (document.getElementById('prize-content-2').style.display = 'block'),
        document.getElementById('prize-content-2').classList.add('animate__animated'),
        document.getElementById('prize-content-2').classList.add('animate__fadeIn'),
        (document.getElementById('nothing-id').style.display = 'none'),
        // (document.getElementById('comments').style.display = 'block'),
        // document.getElementsByClassName('comments').classList.remove('animate__fadeOut'),
        // document.getElementsByClassName('comments').classList.add('animate__fadeIn'),
        // (document.getElementById('con-footer').style.display = 'block'),
        // document.getElementById('con-footer').classList.remove('animate__fadeOut'),
        // document.getElementById('con-footer').classList.add('animate__fadeIn');

      // Scroll to prize-content-2
      document.getElementById('prize-content-2').scrollIntoView({ behavior: 'smooth' });
      let qty = 35;
      const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
      const qtyInterval = setInterval(() => {
        // qty == 2 ? clearInterval(qtyInterval) : qty = qty - random(3, 8);
        // qty - random(1, 3) <= 2 ? clearInterval(qtyInterval) : (qty = qty - random(3, 8));
        qty = qty - random(3, 8)
        $('#qty').text(qty);
        if (qty <= 0) {
          $('#qty').text(1);
          clearInterval(qtyInterval);
        }


      }, 5000);
      // const qtyInterval = setInterval(() => {
      //   if (qty <= 0) {
      //     $('#qty').text(1);
      //     clearInterval(qtyInterval);
      //   }
      //   qty = qty - random(3, 8);
      //   $('#qty').text(qty);
      // }, 5000);
    }, 15000);
}

function assignClickHandlers() {
  answers = document.querySelectorAll('.inn-q-select');
  for (var i = 0; i < answers.length; i++) {
    if (i < answers.length - lastQnum) {
      answers[i].onclick = function () {
        toNext(this);
      };
    } else {
      answers[i].onclick = function () {
        toNext(this);
        // document.getElementById('comments').classList.add('animate__animated');
        // document.getElementById('comments').classList.add('animate__fadeOut');
        // document.getElementById('con-footer').classList.add('animate__animated');
        // document.getElementById('con-footer').classList.add('animate__fadeOut');
        setTimeout(function () {
          // document.getElementById('comments').style.display = 'none';
          // document.getElementById('con-footer').style.display = 'none';
          document.getElementById('content-changeCol').style.backgroundImage = 'none';
          drawloader();
        }, 600);
      };
    }
  }
}

document.getElementById('btn-claim').onclick = function () {
  var e = document.getElementById('modal-prize');
  e.classList.add('mod-con-bg');
  e.children[0].classList.add('mod-con-inn');
  e.classList.remove('hidden');
  var t = document.getElementById('prize-ln2-desc').innerText;
  //document.getElementById('modal-head-prod').innerHTML = t; // Corrected to innerHTML
  //document.getElementById('modal-head-prod2').innerHTML = t; // Corrected to innerHTML
  assignClickHandlers(); // Make sure handlers are assigned after DOM manipulation
};

assignClickHandlers(); // Initial assignment of click handlers

// const qhed = document.querySelectorAll('.qeus-head') || [],
//   ques = document.querySelectorAll('.qeus-text') || [],
//   qnum = document.querySelectorAll('.qeus-numb') || [];

// for (var qn = 0; qn < qnum.length; qn++) {
//   qhed[qn].innerText = 'Timberland customer survey campaign';
//   qnum[qn].innerText = 'Question ' + (qn + 1) + ' of ' + qnum.length + ':';
// }

// let qtexxtt = [
//   'How did you first hear about Timberland?',
//   'Social media',
//   'In-store advertising',
//   'Recommendations from friends or family',
//   'Online search',
//   'Other source',
//   'How would you rate your interest in UGG Classic Mini Ultra?',
//   'Very interested',
//   'Curious to know more',
//   'Would like to see it',
//   'Not interested',
//   'How often do you update your winter footwear?',
//   'Every season',
//   'Once a year',
//   'When something stands out',
//   'Rarely',
//   'What is most important when choosing winter footwear?',
//   'Warmth',
//   'Durability',
//   'Style',
//   'Versatility',
//   'How do you find out about new products from UGG?',
//   'Social media',
//   'Friends',
//   'Reviews',
//   'Stores',
//   'How important is product exclusivity to you?', // This line has <br> for line break
//   'Very important',
//   'Important',
//   'Interesting',
//   'Not important',
//   'How would you describe your experience with UGG?',
//   'Excellent',
//   'Satisfactory',
//   'Neutral',
//   'Some concerns',
//   'How would you use a pair of UGG Classic Mini Ultra?',
//   'Wear daily',
//   'Style with outfits',
//   'Gift it',
// ];

// for (var dsq = 0, incq = 0; dsq < qtexxtt.length; dsq++) {
//   ques[dsq].innerHTML = qtexxtt[dsq]; // Changed to innerHTML to allow <br> to be rendered correctly
// }
