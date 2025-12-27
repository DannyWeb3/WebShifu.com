document.addEventListener('DOMContentLoaded', () => {
  $('.color1').click(function (e) {
    e.preventDefault();

    $('.color1').addClass('my-selected', 200);
    $('.color2').removeClass('my-selected');
    $('.color3').removeClass('my-selected');
    $('.color4').removeClass('my-selected');
    $('.color5').removeClass('my-selected');
    $('.color6').removeClass('my-selected');
    $('.color7').removeClass('my-selected');

    $('.chosen-item1').fadeIn(400);
    $('.chosen-item2').hide();
    $('.chosen-item3').hide();
    $('.chosen-item4').hide();
    $('.chosen-item5').hide();
    $('.chosen-item6').hide();
    $('.chosen-item7').hide();
  });

  $('.color2').click(function (e) {
    e.preventDefault();

    $('.color2').addClass('my-selected', 200);
    $('.color1').removeClass('my-selected');
    $('.color3').removeClass('my-selected');
    $('.color4').removeClass('my-selected');
    $('.color5').removeClass('my-selected');
    $('.color6').removeClass('my-selected');
    $('.color7').removeClass('my-selected');

    $('.chosen-item2').fadeIn(400);
    $('.chosen-item1').hide();
    $('.chosen-item3').hide();
    $('.chosen-item4').hide();
    $('.chosen-item5').hide();
    $('.chosen-item6').hide();
    $('.chosen-item7').hide();
  });

  $('.color3').click(function (e) {
    e.preventDefault();

    $('.color3').addClass('my-selected', 200);
    $('.color1').removeClass('my-selected');
    $('.color2').removeClass('my-selected');
    $('.color4').removeClass('my-selected');
    $('.color5').removeClass('my-selected');
    $('.color6').removeClass('my-selected');
    $('.color7').removeClass('my-selected');

    $('.chosen-item3').fadeIn(400);
    $('.chosen-item1').hide();
    $('.chosen-item2').hide();
    $('.chosen-item4').hide();
    $('.chosen-item5').hide();
    $('.chosen-item6').hide();
    $('.chosen-item7').hide();
  });

  $('.color4').click(function (e) {
    e.preventDefault();

    $('.color4').addClass('my-selected', 200);
    $('.color1').removeClass('my-selected');
    $('.color2').removeClass('my-selected');
    $('.color3').removeClass('my-selected');
    $('.color5').removeClass('my-selected');
    $('.color6').removeClass('my-selected');
    $('.color7').removeClass('my-selected');

    $('.chosen-item4').fadeIn(400);
    $('.chosen-item1').hide();
    $('.chosen-item2').hide();
    $('.chosen-item3').hide();
    $('.chosen-item5').hide();
    $('.chosen-item6').hide();
    $('.chosen-item7').hide();
  });

  $('.color5').click(function (e) {
    e.preventDefault();

    $('.color5').addClass('my-selected', 200);
    $('.color1').removeClass('my-selected');
    $('.color2').removeClass('my-selected');
    $('.color3').removeClass('my-selected');
    $('.color4').removeClass('my-selected');
    $('.color6').removeClass('my-selected');
    $('.color7').removeClass('my-selected');

    $('.chosen-item5').fadeIn(400);
    $('.chosen-item1').hide();
    $('.chosen-item2').hide();
    $('.chosen-item3').hide();
    $('.chosen-item4').hide();
    $('.chosen-item6').hide();
    $('.chosen-item7').hide();
  });

  $('.color6').click(function (e) {
    e.preventDefault();

    $('.color6').addClass('my-selected', 200);
    $('.color1').removeClass('my-selected');
    $('.color2').removeClass('my-selected');
    $('.color3').removeClass('my-selected');
    $('.color4').removeClass('my-selected');
    $('.color5').removeClass('my-selected');
    $('.color7').removeClass('my-selected');

    $('.chosen-item6').fadeIn(400);
    $('.chosen-item1').hide();
    $('.chosen-item2').hide();
    $('.chosen-item3').hide();
    $('.chosen-item4').hide();
    $('.chosen-item5').hide();
    $('.chosen-item7').hide();
  });

  $('.color7').click(function (e) {
    e.preventDefault();

    $('.color7').addClass('my-selected', 200);
    $('.color1').removeClass('my-selected');
    $('.color2').removeClass('my-selected');
    $('.color3').removeClass('my-selected');
    $('.color4').removeClass('my-selected');
    $('.color5').removeClass('my-selected');
    $('.color6').removeClass('my-selected');

    $('.chosen-item7').fadeIn(400);
    $('.chosen-item1').hide();
    $('.chosen-item2').hide();
    $('.chosen-item3').hide();
    $('.chosen-item4').hide();
    $('.chosen-item5').hide();
    $('.chosen-item6').hide();
  });
});
