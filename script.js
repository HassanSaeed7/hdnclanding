const scrollToTop = document.querySelector(".scrollToTop");
const spot = document.querySelector(".spot");
const nav = document.querySelector(".nav");
const options = {
    root: null, 
    rootMargin: "0px", 
    threshhold: 0, 
};
const headers = document.getElementsByClassName("header"),
      contents = document.getElementsByClassName("content"),
      icons = document.getElementsByClassName("acc-icon");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToTop.style.bottom = "1rem"
      scrollToTop.classList.add("showScrollToTop")
    } else {
      if (scrollToTop.classList.contains("showScrollToTop") && entry.boundingClientRect.y > 0) {
        scrollToTop.classList.remove("showScrollToTop")
        scrollToTop.addEventListener("transitionend", removeScrollFromView)
      }
    }
  })
}); 

observer.observe(spot);



function removeScrollFromView() {
  scrollToTop.removeEventListener("transitionend", removeScrollFromView)
  if (scrollToTop.classList.contains("showScrollToTop")) return
  scrollToTop.style.bottom = "-200px"
}




let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollPos = currentScrollPos;
}





for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {

      for (let j = 0; j < contents.length; j++) {
          if (i == j) {
              icons[j].innerHTML = contents[j].getBoundingClientRect().height === 0 ? "-" : "+";
              contents[j].classList.toggle("content-transition");
          } else {
              icons[j].innerHTML = "+";
              contents[j].classList.remove("content-transition");
          }
      }

  });
}

