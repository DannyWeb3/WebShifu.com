function datehax() {
  var e = new Date();
  e.setDate(e.getDate());
  var a = e.getYear();
  a < 1e3 && (a += 1900);
  e.getDay();
  var t = e.getMonth(),
    r = e.getDate();
  r < 10 && (r = '0' + r);
  Array(
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    'Dimanche',
);

return (
  new Array(
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    'Décembre',
  )[t] +
  ' ' +
  r +
  ', ' +
  a
);
}
function datenhax() {
  var e = new Date();
  e.setDate(e.getDate());
  var a = e.getYear();
  a < 1e3 && (a += 1900);
  var t = e.getMonth() + 1;
  return t < 10 && (t = '0' + t), e.getDate() + '/' + t + '/' + a;
}
function datenhay() {
  var e = new Date();
  e.setDate(e.getDate());
  var a = e.getYear();
  return a < 1e3 && (a += 1900), a + '';
}
function startTimer(e, a) {
  var t,
    r,
    n = e;
  setInterval(function () {
    (t = parseInt(n / 60, 10)),
      (r = parseInt(n % 60, 10)),
      (t = t < 10 ? '' + t : t),
      (r = r < 10 ? '0' + r : r),
      (a.innerHTML =
        "<span class='con-time-block'>" +
        t +
        "</span>:<span class='con-time-block'>" +
        r +
        '</span>'),
      --n < 0 && (n = e);
  }, 1e3);
}
// window.onload = function () {
//     startTimer(390, document.querySelector("#time"));
// };
