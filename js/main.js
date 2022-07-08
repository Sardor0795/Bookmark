const elBtnWrapper = document.querySelector(".js-btnWrapper");
const elsFeatureBlock = document.querySelectorAll(".js-featureBlock");

const elSimple = document.querySelector(".simple");
const elSpeedy = document.querySelector(".speedy");
const elEasy = document.querySelector(".easy");

const elsAccordionWrapper = document.querySelectorAll(".accordion__wrapper")
const elsAccordionBtn = document.querySelectorAll(".accordion__btn");


const opener = {
  featureBtn: "features__btn--active",
  elHide: "el-hider",
  elShow: "el-shower",
  accordionOpen: "accordion__wrapper--open",
}

const closeAllAccordions = function () {
  elsAccordionWrapper.forEach(function (elAccordionWrapper) {
    elAccordionWrapper.classList.remove(opener.accordionOpen)
  })
}


elBtnWrapper.addEventListener("click", function (evt) {

  if ( evt.target.classList.contains("features__btn")) {

    if( evt.target.previousElementSibling ){

      if ( evt.target.previousElementSibling.classList.contains(opener.featureBtn) ) {
        evt.target.previousElementSibling.classList.remove(opener.featureBtn);
      }

      if( evt.target.previousElementSibling.previousElementSibling ) {
          if ( evt.target.previousElementSibling.previousElementSibling.classList.contains(opener.featureBtn)
          ) {
            evt.target.previousElementSibling.previousElementSibling.classList.remove(opener.featureBtn);
          }
      }
    }

    if( evt.target.nextElementSibling ){

      if ( evt.target.nextElementSibling.classList.contains(opener.featureBtn) ) {
        evt.target.nextElementSibling.classList.remove(opener.featureBtn);
      }

      if( evt.target.nextElementSibling.nextElementSibling ) {
          if ( evt.target.nextElementSibling.nextElementSibling.classList.contains(opener.featureBtn)
          ) {
            evt.target.nextElementSibling.nextElementSibling.classList.remove(opener.featureBtn);
          }
      }
    }

    evt.target.classList.add(opener.featureBtn);


    if ( evt.target.classList.contains("easy-btn") ) {

        elSimple.classList.add(opener.elHide)
        elSimple.classList.remove(opener.elShow)

        elSpeedy.classList.add(opener.elHide)
        elSpeedy.classList.remove(opener.elShow)

        elEasy.classList.remove(opener.elHide);
        elEasy.classList.add(opener.elShow);

    }  else if ( evt.target.classList.contains("speedy-btn") ) {

        elSimple.classList.add(opener.elHide)
        elSimple.classList.remove(opener.elShow)

        elEasy.classList.add(opener.elHide)
        elEasy.classList.remove(opener.elShow)

        elSpeedy.classList.remove(opener.elHide);
        elSpeedy.classList.add(opener.elShow);

    } else if ( evt.target.classList.contains("simple-btn") ) {

        elSpeedy.classList.add(opener.elHide)
        elSpeedy.classList.remove(opener.elShow)

        elEasy.classList.add(opener.elHide)
        elEasy.classList.remove(opener.elShow)

        elSimple.classList.remove(opener.elHide);
        elSimple.classList.add(opener.elShow);
    }

  }
});

elsAccordionBtn.forEach(function (elAccordionBtn) {
  elAccordionBtn.addEventListener("click", function () {

    closeAllAccordions();

    elAccordionBtn.closest(".accordion__wrapper").classList.add(opener.accordionOpen)
  })
})