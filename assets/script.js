window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.getElementById("myImg").className = "slideUp";
    // console.log(8);
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);

    document.querySelector(".navbar").classList.add("bg-black");
    // document.querySelectorAll(".nav-link")[0].classList.add("text-white");
    // document.querySelectorAll(".nav-link")[1].classList.add("text-white");
    // document.querySelectorAll(".nav-link")[2].classList.add("text-white");
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.add("text-white");
    });
  } else {
    document.querySelector(".navbar").classList.remove("bg-black");
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.remove("text-white");
    });
  }
}
