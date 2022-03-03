const page2 = document.querySelector(".about-container");
const scrollToTop = document.querySelector(".scrollToTop");
const spot = document.querySelector(".spot");
const nav = document.querySelector(".nav");
const options = {
    root: null, 
    rootMargin: "0px", 
    threshhold: 0, 
};

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
observer.observe(page2);
function removeScrollFromView() {
  scrollToTop.removeEventListener("transitionend", removeScrollFromView)
  if (scrollToTop.classList.contains("showScrollToTop")) return
  scrollToTop.style.bottom = "-200px"
}




const navbarObserver = new IntersectionObserver((entries) => {
    const isVisible = entries[0].isIntersecting;

    if (isVisible) {
        nav.classList.remove("fixed-top");
    } else 
    {nav.classList.add("fixed-top")
    }
})

navbarObserver.observe(spot);


