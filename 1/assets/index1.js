$(window).on('load', function () {
  $('.loaderWrapper').fadeOut();

  function handleInputClick() {
    $('.input input')
      .on('focus click', function () {
        $(this).closest('.input').addClass('focus');
      })
      .on('blur', function () {
        if (!$(this).val()) {
          $(this).closest('.input').removeClass('focus');
        }
      });
  }

  // function initTelinput() {
  //   const input = document.querySelector('#phone');
  //   const iti = window.intlTelInput(input, {
  //     utilsScript: './assets/utils.js',
  //     initialCountry: 'auto',
  //     // initialCountry: "us",
  //     geoIpLookup: function (success, failure) {
  //       fetch('https://ipapi.co/json/')
  //         .then(res => res.json())
  //         .then(data => {
  //           console.log(data);
  //           if (data && data.country_code) {
  //             success(data.country_code);
  //           } else {
  //             success('us');
  //           }
  //         })
  //         .catch(() => {
  //           success('us');
  //         });
  //     },
  //   });
  //
  //   const hiddenInput = $('<input>').attr({
  //     type: 'hidden',
  //     name: 'full_phone',
  //     value: iti.getSelectedCountryData().dialCode,
  //   });
  //
  //   $('#phone').on('input', function () {
  //     let phone = $(this).val();
  //
  //     $('[name="full_phone"]').val(
  //       iti.getSelectedCountryData().dialCode + phone
  //     );
  //   });
  //
  //   $('.personalDetails form').append(hiddenInput);
  // }

  function handleMobileButton() {
    $('.header .button').on('click', function () {
      $('.main .content .rside').slideToggle();
    });
  }

  function handleCouponButtonClick() {
    $('.main .content .rside .coupon .button').on('click', function () {
      $('.main .content .rside .coupon').addClass('hasError');
    });
  }

  function startTimer(minutes) {
    let totalSeconds = minutes * 60;
    const display = document.getElementById('timer');

    if (window.timerInterval) clearInterval(window.timerInterval);

    function updateTimer() {
      const min = Math.floor(totalSeconds / 60);
      const sec = totalSeconds % 60;
      display.textContent =
        String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');

      if (totalSeconds <= 0) {
        clearInterval(window.timerInterval);

        $('.main .content .lside .timer p').text('Your cart is expiring soon.');
      } else {
        totalSeconds--;
      }
    }

    updateTimer();
    window.timerInterval = setInterval(updateTimer, 1000);
  }

  function handleEmailInput() {
    const domains = [
      'gmail.com',
      'yahoo.com',
      'mail.ru',
      'yandex.ru',
      'outlook.com',
    ];

    $('#email').on('input', function () {
      const val = $(this).val();
      const $suggestions = $('#email-suggestions');
      $suggestions.empty();

      // если есть хотя бы 1 символ и нет знака @
      if (val.length > 0 && !val.includes('@')) {
        domains.forEach(domain => {
          const suggestion = val + '@' + domain;
          $suggestions.append('<div>' + suggestion + '</div>');
        });
        $suggestions.show();
      } else {
        $suggestions.hide();
      }
    });

    // вставка выбранной подсказки
    $('#email-suggestions').on('click', 'div', function () {
      $('#email').val($(this).text());
      $('#email-suggestions').hide();
    });
  }

  function handleForm() {
    $('.information .button').on('click', function () {
      let isValid = true;

      $('.information input[required], .information select[required]').each(
        function () {
          const $input = $(this);

          if ($input.val().trim().length < 1) {
            $input.closest('.input').addClass('hasError');
            isValid = false;
          } else {
            $input.closest('.input').removeClass('hasError');
          }
        }
      );

      if (isValid) {
        $('.information').hide();

        $('.result .item.email .value').text($('#email').val());
        $('.result .item.shipTo .value').text(
          $('#address').val() +
            ', ' +
            $('#city').val() +
            ', ' +
            $('#country').val() +
            ', ' +
            $('#zip').val()
        );

        $('.result').show();
      }
    });

    $('.information input[required], .information select[required]').on(
      'input',
      function () {
        const $input = $(this);

        if ($input.val().trim().length > 0) {
          $input.closest('.input').removeClass('hasError');
        }
      }
    );

    $('.result .return').on('click', function () {
      $('.result').hide();
      $('.information').show();
    });
  }

  handleForm();
  handleEmailInput();
  startTimer(15);
  handleMobileButton();
  handleInputClick();
  handleCouponButtonClick();
  // initTelinput();

  const country = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BN', name: 'Brunei Darussalam' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GR', name: 'Greece' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KR', name: 'Korea, Republic of' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MX', name: 'Mexico' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MA', name: 'Morocco' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PA', name: 'Panama' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russia' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'ES', name: 'Spain' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TR', name: 'Turkey' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'US', name: 'United States' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'ZW', name: 'Zimbabwe' },
  ];

  const select = document.getElementById('country');

  country.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.name;
    opt.textContent = c.name;
    select.appendChild(opt);
  });
});
