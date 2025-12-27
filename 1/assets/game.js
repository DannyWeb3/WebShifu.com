const { pathImgBox, modals, locale } = window.__config;

const modalWin = () => {
  const touchSupported = window.matchMedia("(pointer: coarse)").matches;
  const modalSection = document.createElement("section");
  const modalWrapper = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalHeading = document.createElement("h2");
  const modalSubHeading = document.createElement("h3");
  document.createElement("a");
  document.createElement("h3");
  document.createElement("p");
  document.createElement("p");
  const texts = modals.win.texts;
  modalSection.classList.add("modal");
  modalSection.ariaHidden = true;
  modalSection.id = "modal";
  modalWrapper.classList.add("modal__wrapper");
  modalContent.classList.add("modal__content");
  modalHeading.classList.add("modal__heading");
  const createImage = () => {
    const modalImg = document.createElement("img");
    modalImg.className = "modal__img modal__img-animate";
    modalImg.src = "assets/prod1.jpg";
    modalImg.width = "150";
    modalContent.appendChild(modalImg);
  };
  const createModalText = (text) => {
    const modalText = document.createElement("p");
    modalText.classList.add("modal__text");
    modalHeading.textContent = texts.header;
    modalText.innerHTML = text;
    modalContent.append(modalText);
  };
  const handlerClickOk = (e) => {
    closeGame();
    // enableLoader();
    // openCheckout();
    // setTimeout(() => {
    //   checkoutInit();
    //   disableLoader();
    // }, 1500);

    const link = `}offer`
    window.location.href = link;
  };
  const createModalButton = () => {
    const modalButtonOk = document.createElement("button");
    modalButtonOk.style.display = "inline-block";
    modalButtonOk.classList.add("button", "modal__button", "modal__button-ok", "modal__button-ok-1");
    modalButtonOk.innerText = texts.button.toUpperCase();
    modalButtonOk.ariaLabel = texts.button;
    modalContent.appendChild(modalButtonOk);
    modalButtonOk.focus();
    // modalButtonOk.addEventListener("click", handlerClickOk);
    modalButtonOk.addEventListener("click", switchDivs);
  };
  function switchDivs() {
    document.getElementById("formPart").style = "display:block !important";
    document.getElementById("main").remove();
    document.getElementById("game").remove();
    document.getElementById("checkout").remove();
    var head  = document.getElementsByTagName('head')[0];
    var styles  = [], style_urls = ['assets/formstyle.css?v2', 'assets/checkout.css?v2', 'assets/form.css'];
    for (var i = style_urls.length; i >= 0; i--) {
      styles[i] = document.createElement('link');
      styles[i].rel  = 'stylesheet';
      styles[i].type = 'text/css';
      styles[i].href = style_urls[i];
      styles[i].media = 'all';
      
    }
    document.getElementById("formPart").style = "position: relative; min-height: 100%; top: 0px;";
  }
  createImage();
  document.querySelector("#boxes").appendChild(modalSection);
  modalSection.appendChild(modalWrapper);
  modalWrapper.appendChild(modalContent);
  modalContent.appendChild(modalHeading);
  modalContent.appendChild(modalSubHeading);
  createModalText(texts.text);
  createModalButton();
  document.querySelector(".boxes").style.pointerEvents = "auto";
};
const createCheckMark_createCheckMark = (modalContent) => {
  const modalLoader = document.createElement("div");
  const checkMark = document.createElement("div");
  modalLoader.classList.add("modal__loader");
  checkMark.classList.add("modal__checkmark");
  checkMark.classList.add("error");
  setTimeout(() => {
    modalLoader.classList.add("modal__loader-complete");
    checkMark.style.display = "inline-block";
  }, 1200);
  modalContent.appendChild(modalLoader);
  modalLoader.appendChild(checkMark);
};
const modalLose = (countAttempt) => {
  let texts = modals.first.texts;
  const modalSection = document.createElement("section");
  const modalWrapper = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalHeading = document.createElement("h2");
  modalSection.classList.add("modal");
  modalSection.ariaHidden = true;
  modalSection.id = "modal";
  modalWrapper.classList.add("modal__wrapper");
  modalContent.classList.add("modal__content");
  modalHeading.classList.add("modal__heading");
  modalHeading.innerText = texts.header;
  createCheckMark_createCheckMark(modalContent);
  const createModalText = () => {
    const modalTextContent = document.createElement("p");
    modalTextContent.classList.add("modal__text");
    modalTextContent.innerHTML = texts.text;
    modalContent.append(modalTextContent);
  };
  const handlerClickOk = (e) => {
    setTimeout((event) => {
      modal.remove();
    }, 200);
  };
  const createModalButton = () => {
    const modalButtonOk = document.createElement("button");
    modalButtonOk.type = "button";
    modalButtonOk.classList.add("button", "modal__button", "modal__button-ok", "modal__button-ok-2");
    modalButtonOk.innerText = texts.button.toUpperCase();
    modalButtonOk.ariaLabel = texts.button;
    modalContent.appendChild(modalButtonOk);
    modalButtonOk.focus();
    modalButtonOk.addEventListener("click", handlerClickOk);
  };
  document.querySelector("#boxes").appendChild(modalSection);
  modalSection.appendChild(modalWrapper);
  modalWrapper.appendChild(modalContent);
  modalContent.appendChild(modalHeading);
  createModalText();
  createModalButton();
  document.querySelector(".boxes").style.pointerEvents = "auto";
};
const fadeIn = (el, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    let val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      el.style.transition = "1s";
      requestAnimationFrame(fade);
    }
  })();
};
const game = () => {
  window.screen.width;
  let countAttempt = 2;
  let counterBoxes = 6;
  let countClick = null;
  const boxesWrapper = document.createElement("div");
  boxesWrapper.classList.add("boxes");
  const createBoxItem = (count) => {
    const boxItem = document.createElement("div");
    const boxInner = document.createElement("div");
    const boxFront = document.createElement("div");
    boxItem.setAttribute("id", count);
    boxItem.classList.add("box", "tremor");
    boxInner.classList.add("box__inner");
    boxFront.classList.add("box__front");
    boxesWrapper.appendChild(boxItem);
    boxItem.appendChild(boxInner);
    boxItem.appendChild(boxFront);
  };
  fadeIn(boxesWrapper, "grid");
  for (let i = 1; i <= counterBoxes; i++) createBoxItem(i);
  const openBox = (e) => {
    const activeDiv = e.target.parentElement;
    boxesWrapper.style.pointerEvents = "none";
    countClick++;
    countAttempt--;
    activeDiv.children[1].style.backgroundImage = `url(${pathImgBox.lidIOs})`;
    if (2 === countClick) {
      activeDiv.children[0].style.backgroundImage = `url(${pathImgBox.innerGift})`;
      setTimeout(modalWin, 1e3);
    } else setTimeout(modalLose, 2e3, countAttempt);
    activeDiv.classList.toggle("active");
  };
  boxesWrapper.addEventListener("click", openBox);
  document.querySelector("#boxes").appendChild(boxesWrapper);
};
const pathImg = pathImgBox.boxModal;
const modalGift = () => {
  let texts = modals.welcome.texts;
  const modalSection = document.createElement("section");
  const modalWrapper = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalHeading = document.createElement("h2");
  modalSection.classList.add("modal");
  modalSection.ariaHidden = true;
  modalSection.id = "modal";
  modalWrapper.classList.add("modal__wrapper");
  modalContent.classList.add("modal__content");
  modalHeading.classList.add("modal__heading");
  modalHeading.innerText = texts.header;
  const currentDay = new Date();
  const today = currentDay.toLocaleDateString(locale, {
    month: "long",
    day: "numeric",
  });
  const createImage = (src) => {
    const modalImg = document.createElement("img");
    modalImg.className = "modal__img";
    modalImg.src = pathImg;
    modalImg.width = "150";
    modalContent.appendChild(modalImg);
  };
  const createModalText = () => {
    const modalTextItem = document.createElement("p");
    modalTextItem.classList.add("modal__text");
    modalTextItem.innerHTML = texts.text.replace("{date}", today);
    modalContent.append(modalTextItem);
  };
  const handlerClickOk = (e) => {
    setTimeout((event) => {
      game();
      modalSection.remove();
    }, 200);
  };
  const createModalButton = () => {
    const modalButtonOk = document.createElement("button");
    modalButtonOk.type = "button";
    modalButtonOk.classList.add("button", "modal__button", "modal__button-ok", "modal__button-ok-3");
    modalButtonOk.innerText = texts.button.toUpperCase();
    modalButtonOk.ariaLabel = texts.button;
    modalContent.appendChild(modalButtonOk);
    modalButtonOk.focus();
    modalButtonOk.addEventListener("click", handlerClickOk);
  };
  document.querySelector("#boxes").appendChild(modalSection);
  modalSection.appendChild(modalWrapper);
  modalWrapper.appendChild(modalContent);
  createImage();
  modalContent.appendChild(modalHeading);
  createModalText();
  createModalButton();
};

const startGame = () => modalGift();
