// // Preloader
// document.getElementByID(window).on('load', function(){
//   document.getElementByID("#status").fadeOut();
//   document.getElementByID("#preloader").delay(350).fadeOut();
// });

function myFunctionPap() {
  var dots = document.getElementById("dots-pap");
  var moreText = document.getElementById("more-pap");
  var btnText = document.getElementById("myBtn-pap");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionAtt() {
  var dots = document.getElementById("dots-att");
  var moreText = document.getElementById("more-att");
  var btnText = document.getElementById("myBtn-att");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionMen() {
  var dots = document.getElementById("dots-men");
  var moreText = document.getElementById("more-men");
  var btnText = document.getElementById("myBtn-men");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
