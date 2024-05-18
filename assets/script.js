window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.querySelector(".navbar").classList.add("bg-black");
    document.querySelector("header").classList.add("sticky-lg-top");
    document.querySelector("header").style.transition = "all 0.5s ease 10s";
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.add("text-white");
    });
  } else {
    document.querySelector(".navbar").classList.remove("bg-black");
    document.querySelector("header").classList.remove("sticky-lg-top");
    // document.querySelector("header").classList.remove("fixed-lg-top");
    document.querySelector("header").style.transition = "";

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.remove("text-white");
    });
  }
}
