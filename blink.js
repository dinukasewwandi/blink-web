document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 992) {

    document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

      everyitem.addEventListener('mouseover', function (e) {

        let el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }

      });
      everyitem.addEventListener('mouseleave', function (e) {
        let el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }


      })
    });

  }

});

// test 2 start
var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
  },
});

// ---------------------------------------disclouser--------------------------------------------------
function toggleDisclosure(btnID) {
  // Get the button that triggered this
  var theButton = document.getElementById(btnID);
  // If the button is not expanded...
  if (theButton.getAttribute("aria-expanded") == "false") {
    // Now set the button to expanded
    theButton.setAttribute("aria-expanded", "true");
  // Otherwise button is not expanded...
  } else {
    // Now set the button to collapsed
    theButton.setAttribute("aria-expanded", "false");
  }
}


// --------------------------------map---------------------------------------------------------------

// add this js for homepage map
function clickfunc(obj) {
  var t = $(obj).text();
  // document.getElementById("map_search").innerHTML = t;
  document.getElementById("map_search").value = t;
}
function findProject() {
  var page = document.getElementById("map_search").value;
  window.location = page + ".html";
  return false;
}
// add this js for homepage map



