const elBtnWrapper = document.querySelector(".js-btnWrapper");
const elsFeatureBlock = document.querySelectorAll(".js-featureBlock");

const elSimple = document.querySelector(".simple");
const elSpeedy = document.querySelector(".speedy");
const elEasy = document.querySelector(".easy");

const elsAccordionWrapper = document.querySelectorAll(".accordion__wrapper")
const elsAccordionBtn = document.querySelectorAll(".accordion__btn");

elBtnWrapper.addEventListener("click", function (evt) {

  if ( evt.target.classList.contains("features__btn")) {

    if( evt.target.previousElementSibling ){

        if ( evt.target.previousElementSibling.classList.contains("features__btn--active") ) {
          evt.target.previousElementSibling.classList.remove("features__btn--active");
        }

        if( evt.target.previousElementSibling.previousElementSibling ) {
            if ( evt.target.previousElementSibling.previousElementSibling.classList.contains("features__btn--active")
            ) {
              evt.target.previousElementSibling.previousElementSibling.classList.remove("features__btn--active");
            }
        }
    }

    if( evt.target.nextElementSibling ){

        if ( evt.target.nextElementSibling.classList.contains("features__btn--active") ) {
          evt.target.nextElementSibling.classList.remove("features__btn--active");
        }

        if( evt.target.nextElementSibling.nextElementSibling ) {
            if ( evt.target.nextElementSibling.nextElementSibling.classList.contains("features__btn--active")
            ) {
              evt.target.nextElementSibling.nextElementSibling.classList.remove("features__btn--active");
            }
        }
    }

    evt.target.classList.add("features__btn--active");

    
    if ( evt.target.classList.contains("easy-btn") ) {

        elSimple.classList.add("el-hider")
        elSimple.classList.remove("el-shower")

        elSpeedy.classList.add("el-hider")
        elSpeedy.classList.remove("el-shower")
        
        elEasy.classList.remove("el-hider");
        elEasy.classList.add("el-shower");

    }  else if ( evt.target.classList.contains("speedy-btn") ) {

        elSimple.classList.add("el-hider")
        elSimple.classList.remove("el-shower")

        elEasy.classList.add("el-hider")
        elEasy.classList.remove("el-shower")
        
        elSpeedy.classList.remove("el-hider");
        elSpeedy.classList.add("el-shower");

    } else if ( evt.target.classList.contains("simple-btn") ) {

        elSpeedy.classList.add("el-hider")
        elSpeedy.classList.remove("el-shower")

        elEasy.classList.add("el-hider")
        elEasy.classList.remove("el-shower")
        
        elSimple.classList.remove("el-hider");
        elSimple.classList.add("el-shower");
    }
  
  }
});

elsAccordionBtn.forEach(function (elAccordionBtn) {
  elAccordionBtn.addEventListener("click", function () {
    
    elsAccordionWrapper.forEach(function (elAccordionWrapper) {
      elAccordionWrapper.classList.remove("accordion__wrapper--open")
    })

    elAccordionBtn.closest(".accordion__wrapper").classList.add("accordion__wrapper--open")
  })
})