(()=>{"use strict";document.querySelector(".map"),document.querySelector(".page").querySelector(".modal").querySelector(".list");var e=document.querySelectorAll(".footer__button"),t=(document.querySelector(".about"),document.querySelector(".questions"),document.querySelector(".price"),document.querySelector(".contacts"),document.querySelectorAll("#section"));function o(e){t.forEach((function(e){e.classList.add("hidden")})),document.querySelector(".".concat(e)).classList.remove("hidden")}o(window.location.hash.slice(1)),e.forEach((function(t){t.addEventListener("click",(function(c){var r;r=t,e.forEach((function(e){e.classList.remove("footer__button_active")})),r.classList.add("footer__button_active"),o(t.dataset.section)}))}))})();