 let count = 0;
  let cout = 0;
let posTop1 = window.pageYOffset;

    $('.hamburger').on('click',function(){
      count++;
      $('.hamburger').toggleClass('is-active');
      $('.menu-opened').addClass('animate')
      $('body').css({'overflow':'hidden'})
      if(count % 2 == 0){
        $('body').css({'overflow':'scroll'})
        $('.menu-opened').removeClass('animate')
       $('.menu-opened').addClass('animateOut')
   //    $('.hamburger').removeClass('is-active')
      }
    })
    $('ul li a').on('click',function(){
      count = 0;
          $('body').css({'overflow':'scroll'})
        $('.menu-opened').removeClass('animate')
         $('.hamburger').removeClass('is-active')
    })
    $(window).on('scroll',function(a){
     let posTop = window.pageYOffset;
     cout++;
     console.log(posTop)
     if(posTop == 0){
       $('main').removeClass('scrolled')
     }
      else{
 $('main').addClass('scrolled')
      }
    })
    if(posTop1 > 0){
       $('main').addClass('scrolled')
    }
const select = document.querySelector('select');
const allLang = ['EN', 'RU', 'UA'];


select.addEventListener('change', changeURLLanguage);


function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#EN';
        location.reload();
    }
    select.value = hash;
     document.querySelector('title').innerHTML = langArr['EN'];
      for (let key in langArr) {
        let elem = document.querySelector('.lang-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}
changeLanguage()
//$(window).on('resize',function(){
 // if(window.innerWidth <= 590){
//$('.langSw').append($('.selectMain'))
//$(window).off('resize')
//  }
//})

