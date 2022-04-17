const scrollToTop = document.querySelector(".scrollToTop");
const spot = document.querySelector(".spot");
const nav = document.querySelector(".nav");
const burger = document.getElementById("hamburger");
const exitBtn = document.getElementById("exit-btn")
const mobileNav = document.querySelector(".mobile-navlinks");
const navlink = document.querySelectorAll(".mobile-link");
const options = {
    root: null, 
    rootMargin: "0px", 
    threshhold: 0, 
};
const headers = document.getElementsByClassName("header"),
      contents = document.getElementsByClassName("content"),
      icons = document.getElementsByClassName("acc-icon");



burger.addEventListener("click", ()=> {
  mobileNav.classList.toggle('idk')
})
exitBtn.addEventListener("click", ()=> {
  mobileNav.classList.remove('idk')
})

for (let x = 0; x < navlink.length; x++) {
  navlink[x].addEventListener("click", () => {
    mobileNav.classList.remove('idk')
  })
}

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

