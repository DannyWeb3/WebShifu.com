const { mainProduct, products, sizes, reviews, notifications } =
  window.__config;

const slider = () => {
  const images = lsGetProductImages();
  const slider = document.createElement("section");
  slider.classList.add("slider");
  const buttonPrev = document.createElement("button");
  buttonPrev.classList.add("swiper-button-prev");
  const buttonNext = document.createElement("button");
  buttonNext.classList.add("swiper-button-next");
  const createSliderTop = () => {
    const sliderMain = document.createElement("div");
    sliderMain.classList.add("swiper", "slider__top");
    const sliderWrapper = document.createElement("div");
    sliderWrapper.classList.add("swiper-wrapper");
    images.map((src) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      const slideImg = document.createElement("img");
      slideImg.setAttribute("src", src);
      sliderWrapper.appendChild(slide);
      slide.appendChild(slideImg);
    });
    const createBullet = () => {
      const bulletWrapper = document.createElement("div");
      bulletWrapper.classList.add("swiper-pagination");
      sliderMain.appendChild(bulletWrapper);
    };
    slider.appendChild(sliderMain);
    sliderMain.appendChild(sliderWrapper);
    // sliderMain.appendChild(buttonPrev);
    // sliderMain.appendChild(buttonNext);
    if (window.innerWidth <= 768) createBullet();
  };
  const createImgSection = () => {
    const imgSectionMain = document.createElement("div");
    imgSectionMain.classList.add("hero__gallery");
    images.map((src) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("hero__gallery-item");
      const galleryItemImg = document.createElement("img");
      galleryItemImg.setAttribute("src", src);
      imgSectionMain.appendChild(galleryItem);
      galleryItem.appendChild(galleryItemImg);
    });
    slider.appendChild(imgSectionMain);
  };
  if (window.innerWidth > 768) {
    createImgSection();
    document.querySelector("#mainHero").appendChild(slider);
  } else {
    // createSliderTop();
    createImgSection();
    document.querySelector("#mainHeroDescription").after(slider);
    // const swiper = new Swiper(".slider__top", {
    //   observer: true,
    //   observeParents: true,
    //   speed: 800,
    //   slidesPerView: 1,
    //   centeredSlides: true,
    //   preloadImages: false,
    //   loop: true,
    //   rewind: true,
    //   spaceBetween: 0,
    //   autoplay: {
    //     delay: 2000,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     clickable: true,
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //   },
    // });
  }
  let root = document.documentElement;
  root.style.setProperty("--swiper-navigation-size", "20px");
  root.style.setProperty("--swiper-theme-color", "rgba(39, 37, 31, 1)");
};

const selectedNameInit = () => {
  const selectedProduct = lsGetSelectedProduct();
  const selectedNameEl = document.querySelector("#selectedProductName");
  selectedNameEl.innerText = selectedProduct.name;
};

const productDescInit = (el) => {
  const selectedProduct = lsGetSelectedProduct();
  if (selectedProduct?.desc != null) {
    el.style.display = "block";
    el.innerHTML = selectedProduct.desc;
  } else {
    el.style.display = "none";
  }
};

const productVariantsInit = () => {
  const selectProductEl = document.createElement("div");
  selectProductEl.classList.add("selectProduct");
  selectProductEl.setAttribute("id", "productSelectVariants");
  const hr = document.createElement("hr");
  hr.classList.add("hr", "mt-2");
  selectProductEl.appendChild(hr);
  const textDivEl = document.createElement("div");
  textDivEl.classList.add("mb-2");
  textDivEl.innerHTML = `
  <span id="selectProductText"></span> <b id="selectedProductName"></b>
  `;
  selectProductEl.appendChild(textDivEl);
  const selectedProductVariants = document.createElement("div");
  selectedProductVariants.setAttribute("id", "selectedProductVariants");
  selectedProductVariants.classList.add("productVariants");
  selectProductEl.appendChild(selectedProductVariants);

  const selectedProduct = lsGetSelectedProduct();

  const selectProductEvent = (el, id) => {
    lsSelectProduct(id);
    const selectedEl = document.querySelector(".productVariant.selected");
    selectedEl.classList.remove("selected");
    el.classList.add("selected");
    document.querySelector(".slider").remove();
    slider();
  };

  const descEl = document.createElement("div");
  descEl.style.display = "none";
  descEl.classList.add("mt-2", "productDesc");
  descEl.setAttribute("id", "selectProductDesc");

  products.forEach((pr) => {
    const newEl = document.createElement("div");
    const imgWrapperEl = document.createElement("div");
    imgWrapperEl.classList.add("productVariant");
    if (pr.id === selectedProduct.id) {
      imgWrapperEl.classList.add("selected");
    }

    const imgEl = document.createElement("img");
    imgEl.src = pr.miniImg;

    imgWrapperEl.appendChild(imgEl);

    newEl.appendChild(imgWrapperEl);

    newEl.addEventListener("click", () => {
      selectProductEvent(imgWrapperEl, pr.id);
      selectedNameInit();
      productDescInit(descEl);
    });

    selectedProductVariants.appendChild(newEl);
  });

  selectProductEl.appendChild(descEl);

  const hr2 = document.createElement("hr");
  hr2.classList.add("hr", "mt-2", "mb-2");
  selectProductEl.appendChild(hr2);

  if (window.innerWidth > 768) {
    document.querySelector("#mainProductText").after(selectProductEl);
  } else {
    document.querySelector("#mainProductText").before(selectProductEl);
  }
};

const selectedSizeInit = () => {
  const selectedSize = lsGetSelectedSize();
  const selectedSizeEl = document.querySelector("#selectedSize");
  selectedSizeEl.innerText = selectedSize;
};

const productSizesInit = () => {
  const selectSizesEl = document.createElement("div");
  selectSizesEl.classList.add("selectSize");
  selectSizesEl.setAttribute("id", "productSelectSize");
  const textDivEl = document.createElement("div");
  textDivEl.classList.add("mb-2");
  textDivEl.innerHTML = `
  <span id="selectSizeText"></span> <b id="selectedSize"></b>
  `;
  selectSizesEl.appendChild(textDivEl);
  const selectedProductSizes = document.createElement("div");
  selectedProductSizes.setAttribute("id", "selectedSizes");
  selectedProductSizes.classList.add("productSizes");
  selectSizesEl.appendChild(selectedProductSizes);

  const selectedSizeInd = lsGetSelectedSizeInd();

  const selectProductEvent = (el, ind) => {
    lsSelectSize(ind);
    const selectedEl = document.querySelector(".productSize.selected");
    selectedEl.classList.remove("selected");
    el.classList.add("selected");
  };

  sizes.arr.forEach((s, ind) => {
    const newEl = document.createElement("div");
    newEl.classList.add("productSize");
    if (ind === selectedSizeInd) {
      newEl.classList.add("selected");
    }

    newEl.innerText = s;

    newEl.addEventListener("click", () => {
      selectProductEvent(newEl, ind);
      selectedSizeInit();
    });

    selectedProductSizes.appendChild(newEl);
  });

  if (window.innerWidth <= 768) {
    const hr2 = document.createElement("hr");
    hr2.classList.add("hr", "mt-2");
    selectSizesEl.appendChild(hr2);
  }

  document.querySelector("#productSelectVariants").after(selectSizesEl);
};

const makeStars = (el) => {
  const starsssEl = document.createElement("div");
  starsssEl.classList.add("starsss");
  for (let i = 0; i < 5; i++) {
    const starEl = document.createElement("div");
    starEl.classList.add("star");
    starEl.innerHTML = `
    <svg data-v-4cc5c858="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" aria-hidden="true">
      <path 
        d="m10.995 1.037 2.564 6.993a.2.2 0 0 0 .174.13l6.912.465-5.342 4.822a.2.2 0 0 0-.061.195l1.75 7.321-5.802-4.05a.2.2 0 0 0-.227-.002l-5.905 4.045 1.737-7.336a.2.2 0 0 0-.062-.195L1.355 8.633l6.86-.472a.2.2 0 0 0 .175-.13l2.605-6.994z" 
        fill="var(--main-color)"
        ></path>
    </svg>
    `;
    starsssEl.appendChild(starEl);
  }

  el.appendChild(starsssEl);
};

const ratingInit = () => {
  const starsEl = document.querySelector("#stars");
  makeStars(starsEl);

  const rrEl = document.querySelector("#ratingRr");
  const percentEl = document.querySelector("#ratingPercent");
  const recRatEl = document.querySelector("#ratingRecRat");

  rrEl.innerText = reviews.rr;
  percentEl.innerText = reviews.percent;
  recRatEl.innerText = reviews.rec;
};

const reviewsInit = () => {
  const reviewsEl = document.querySelector("#reviews");

  reviews.reviews.forEach((r) => {
    const reviewEl = document.createElement("div");
    reviewEl.classList.add("review");
    const headerEl = document.createElement("div");
    headerEl.style.paddingBottom = "0.5rem";
    headerEl.style.alignItems = "center";
    headerEl.style.display = "flex";
    const starsEl = document.createElement("div");
    starsEl.classList.add("stars");
    makeStars(starsEl);
    const usernameEl = document.createElement("span");
    usernameEl.classList.add("review-username");
    usernameEl.style.marginLeft = "0.5rem";
    usernameEl.innerText = r.name;
    const timeEl = document.createElement("span");
    timeEl.innerText = r.time;

    headerEl.appendChild(starsEl);
    headerEl.appendChild(usernameEl);
    headerEl.appendChild(timeEl);

    const titleEl = document.createElement("b");
    titleEl.innerText = r.header;

    const textEl = document.createElement("p");
    textEl.classList.add("mt-2");
    textEl.innerText = r.review;

    const imgDivEl = document.createElement("div");
    if (r?.image != null) {
      const imgEl = document.createElement("img");
      imgEl.style.maxHeight = "450px";
      imgEl.src = r.image;
      imgEl.classList.add("mt-2");

      imgDivEl.appendChild(imgEl);
    }

    const productDivEl = document.createElement("div");
    if (r?.product != null && getProductById(r.product) != null) {
      const pr = getProductById(r.product);
      const wrapEl = document.createElement("div");
      wrapEl.setAttribute(
        "style",
        "padding: 0.667rem; background: rgb(247, 247, 248); margin: 0.667rem 0px;"
      );
      wrapEl.style.display = "flex";
      wrapEl.style.alignItems = "center";
      const iconEl = document.createElement("img");
      iconEl.src = pr.miniImg;
      iconEl.setAttribute(
        "style",
        "width: 1.667rem; height: 1.667rem; margin-right: 1rem; border-radius: 50%;"
      );
      const prNameEl = document.createTextNode(`${pr.name} (${pr.id})`);

      wrapEl.appendChild(iconEl);
      wrapEl.appendChild(prNameEl);

      productDivEl.appendChild(wrapEl);
    }

    reviewEl.appendChild(headerEl);
    reviewEl.appendChild(titleEl);
    reviewEl.appendChild(textEl);
    if (r?.image != null) reviewEl.appendChild(imgDivEl);
    if (r?.product != null && getProductById(r.product) != null)
      reviewEl.appendChild(productDivEl);

    reviewsEl.appendChild(reviewEl);
  });
};

const notificationsInit = () => {
  let notifyWrapper = null;
  const createNotify = (item) => {
    const pathNotifyImg =
      cfg.products[Math.floor(Math.random() * cfg.products.length)].images[0];
    const { user, location, action, timeago } = item;
    notifyWrapper = document.createElement("div");
    notifyWrapper.classList.add("notifications", "show-notify");
    const notifyImg = document.createElement("img");
    notifyImg.classList.add("notifications__img");
    notifyImg.setAttribute("src", pathNotifyImg);
    const notifyTextWrapper = document.createElement("div");
    notifyTextWrapper.classList.add("notifications__text");
    const notifyTextTop = document.createElement("p");
    notifyTextTop.classList.add("notifications__text-top");
    notifyTextTop.textContent = user;
    const city = location.split("  ");
    const notifyFrom = document.createElement("span");
    notifyFrom.classList.add("notifications__location");
    notifyFrom.textContent = city[0];
    const notifyLocation = document.createElement("span");
    notifyLocation.classList.add("notifications__location");
    notifyLocation.textContent = city[1];
    notifyLocation.style.textDecoration = "underline";
    const notifyTextMiddle = document.createElement("p");
    notifyTextMiddle.classList.add("notifications__text-middle");
    notifyTextMiddle.textContent = action;
    const notifyTimeAgo = document.createElement("p");
    notifyTimeAgo.classList.add("notifications__text-time");
    notifyTimeAgo.textContent = timeago;
    const notifyOk = document.createElement("span");
    notifyOk.classList.add("notifications__text-ok");
    const notifyClose = document.createElement("button");
    notifyClose.classList.add("notifications__close");
    document.querySelector("#mainBody").appendChild(notifyWrapper);
    notifyWrapper.appendChild(notifyImg);
    notifyWrapper.appendChild(notifyTextWrapper);
    notifyTextWrapper.appendChild(notifyTextTop);
    notifyTextTop.appendChild(notifyFrom);
    notifyTextTop.appendChild(notifyLocation);
    notifyTextWrapper.appendChild(notifyTextMiddle);
    notifyTextWrapper.appendChild(notifyTimeAgo);
    notifyTimeAgo.appendChild(notifyOk);
    notifyWrapper.appendChild(notifyClose);
    notifyClose.addEventListener("click", () => {
      notifyWrapper.remove();
    });
  };
  const showNotify = (item) => {
    createNotify(item);
  };
  const hideNotify = () => {
    setTimeout(() => {
      notifyWrapper.classList.remove("show-notify");
      notifyWrapper.classList.add("hidden-notify");
      setTimeout(() => {
        notifyWrapper.remove();
      }, 1400);
    }, 5e3);
  };
  if (localStorage.getItem("__notification_1") == null) {
    setTimeout(() => {
      showNotify(notifications[0]);
      hideNotify();
      localStorage.setItem("__notification_1", "true");
    }, 15e3);
  }
  if (localStorage.getItem("__notification_2") == null) {
    setTimeout(() => {
      showNotify(notifications[1]);
      hideNotify();
      localStorage.setItem("__notification_2", "true");
    }, 25e3);
  }
};

const mainInit = () => {
  const mainProductHeader = document.querySelector("#mainProductHeader");
  const mainProductName = document.querySelector("#mainProductName");
  const mainProductOldPrice = document.querySelector("#mainProductOldPrice");
  const mainProductNewPrice = document.querySelector("#mainProductNewPrice");
  const mainProductText = document.querySelector("#mainProductText");

  mainProductHeader.innerText = mainProduct.header;
  mainProductName.innerText = mainProduct.name;
  mainProductOldPrice.innerText = mainProduct.oldPrice;
  mainProductNewPrice.innerText = mainProduct.newPrice;
  mainProductText.innerHTML = mainProduct.text;

  slider();

  productVariantsInit();
  selectedNameInit();
  const selectProductText = document.querySelector("#selectProductText");
  const selectProductDesc = document.querySelector("#selectProductDesc");
  productDescInit(selectProductDesc);
  selectProductText.innerText = mainProduct.selectText;

  if (sizes.enabled) {
    productSizesInit();
    selectedSizeInit();
    const selectSizeText = document.querySelector("#selectSizeText");
    selectSizeText.innerText = sizes.selectText;
  }

  questionsInit();
  ratingInit();
  reviewsInit();
  notificationsInit();
};

setTimeout(() => {
  if (localStorage.getItem("__is_checkout") != null) {
    openCheckout();
    checkoutInit();
  } else {
    openMain();
    mainInit();
  }
  disableLoader();
}, 1500);
