/* GOOGLE__POST__DATA NOT VALID */


export function postToGoogle(settingObjForm, buyersName, status = "") {
  let gName = settingObjForm.postParams.first_name;
  let gSurname = settingObjForm.postParams.last_name;
  let gEmail = settingObjForm.postParams.email;
  let gPhone = settingObjForm.postParams.phone;
  const nameOffers = settingObjForm.postParams.nameOffer

  let gCode = settingObjForm.postParams.country_code;
  let gComment = `Buyer- ${buyersName}; Offer - ${nameOffers} ; ${settingObjForm.postParams.comment}`;

  $.ajax({
    url: `https://docs.google.com/forms/d/e/1FAIpQLSfvqErImR1DGf6ahiyPZO0bvb4djTFRHsEYsyoPsSSopJaDtw/formResponse?`,
    data: {
      // name

      "entry.589905411": gName,
      // lastName
      "entry.909645996": gSurname,
      // phone
      "entry.1615923569": gPhone,
      // E-mail
      "entry.234763282": gEmail,
      // site
      "entry.1496456896": window.location.href,

      "entry.454578089": getCookie("_subid"),
      "entry.837032061": nameOffers,
      "entry.1145078352": gCode,
      "entry.1070028394": gComment,
      "entry.1690874065": status,

      "entry.1162687375": 'NEW',
      "entry.658900268": '',
      "entry.1997603055": '',

    },
    type: "POST",
    dataType: "xml",
    success: function (d) {},
  });
  return false;
}

/* ------------------------ */