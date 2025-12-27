const { countryCode, cart } = window.__config;
const cfg = window.__config;

const checkoutInit = () => {
  localStorage.setItem("__is_checkout", "true");
  var input = document.querySelector("#phoneField");

  IMask(input, {
    mask: "000000000000000",
  });

  const iti = window.intlTelInput(input, {
    utilsScript: "assets/intTelInput_utils.js",
    allowDropdown: false,
    initialCountry: countryCode,
    nationalMode: true,
    separateDialCode: true,
  });

  const countryCodeHiddenField = document.querySelector(
    "#countryCodeHiddenField"
  );
  const dialCode = iti.getSelectedCountryData().dialCode;
  countryCodeHiddenField.value = dialCode;

  const checkoutMobileOffer = document.querySelector("#checkoutMobileOffer");
  const checkoutPcOffer = document.querySelector("#checkoutPcOffer");
  const checkoutCurrentPhoto = document.querySelector("#checkoutCurrentPhoto");
  const checkoutOfferName = document.querySelector("#checkoutOfferName");
  const checkoutOfferSize = document.querySelector("#checkoutOfferSize");
  const checkoutOldPrice = document.querySelector("#checkoutOldPrice");
  const checkoutNewPrice = document.querySelector("#checkoutNewPrice");
  const deliveryHeader = document.querySelector("#deliveryHeader");
  const cityFieldLabel = document.querySelector("#cityFieldLabel");
  const addressFieldLabel = document.querySelector("#addressFieldLabel");
  const zipFieldLabel = document.querySelector("#zipFieldLabel");
  const paymentHeader = document.querySelector("#paymentHeader");
  const paymentMethodLabel = document.querySelector("#paymentMethodLabel");
  const personalInfoHeader = document.querySelector("#personalInfoHeader");
  const nameFieldLabel = document.querySelector("#nameFieldLabel");
  const familyFieldLabel = document.querySelector("#familyFieldLabel");
  const phoneFieldLabel = document.querySelector("#phoneFieldLabel");
  const emailFieldLabel = document.querySelector("#emailFieldLabel");
  const checkoutTotalTitle = document.querySelector("#checkoutTotalTitle");
  const checkoutTotalSubtotalTitle = document.querySelector(
    "#checkoutTotalSubtotalTitle"
  );
  const checkoutTotalSubtotalAmount = document.querySelector(
    "#checkoutTotalSubtotalAmount"
  );
  const checkoutTotalDeliveryTitle = document.querySelector(
    "#checkoutTotalDeliveryTitle"
  );
  const checkoutTotalDeliveryAmount = document.querySelector(
    "#checkoutTotalDeliveryAmount"
  );
  const checkoutTotalTotalTitle = document.querySelector(
    "#checkoutTotalTotalTitle"
  );
  const checkoutTotalTotalAmount = document.querySelector(
    "#checkoutTotalTotalAmount"
  );
  const submitButton = document.querySelector("#submitButton");

  const pr = lsGetSelectedProduct();

  checkoutCurrentPhoto.src = pr.images?.[0];
  checkoutOfferName.innerText = `${cfg.mainProduct.name}: ${pr.name}`;
  if (cfg.sizes.enabled) {
    checkoutOfferSize.innerText = `${cart.main.size}: ${lsGetSelectedSize()}`;
  } else {
    checkoutOfferSize.remove();
  }
  checkoutOldPrice.innerText = cart.main.oldPrice;
  checkoutNewPrice.innerText = cart.main.newPrice;

  deliveryHeader.innerText = cart.steps.delivery.title;
  cityFieldLabel.innerText = cart.steps.delivery.fields.city.field;
  addressFieldLabel.innerText = cart.steps.delivery.fields.address.field;
  zipFieldLabel.innerText = cart.steps.delivery.fields.zip.field;

  paymentHeader.innerText = cart.steps.payment.title;
  paymentMethodLabel.innerText = cart.steps.payment.creditCard;

  personalInfoHeader.innerText = cart.steps.personal.title;
  nameFieldLabel.innerText = cart.steps.personal.fields.name.field;
  familyFieldLabel.innerText = cart.steps.personal.fields.family.field;
  phoneFieldLabel.innerText = cart.steps.personal.fields.phone.field;
  emailFieldLabel.innerText = cart.steps.personal.fields.email.field;

  checkoutTotalTitle.innerText = cart.main.title;
  checkoutTotalSubtotalTitle.innerText = cart.main.subTotal.title;
  checkoutTotalSubtotalAmount.innerText = cart.main.subTotal.amount;
  checkoutTotalDeliveryTitle.innerText = cart.main.delivery.title;
  checkoutTotalDeliveryAmount.innerText = cart.main.delivery.amount;
  checkoutTotalTotalTitle.innerText = cart.main.total.title;
  checkoutTotalTotalAmount.innerText = cart.main.total.amount;

  submitButton.innerText = cart.main.checkoutButton;
  checkoutPcOffer.innerHTML = checkoutMobileOffer.innerHTML;
};
