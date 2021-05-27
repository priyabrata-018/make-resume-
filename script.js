// var skills=prompt("which type of developer : ")
// var names=prompt("Enter your Name : ")
// var mails=prompt("Enter your Mail Id : ")

// var a1st=prompt("Enter 1st skill : ")
// var a1st_per = parseInt(prompt("Enter 1st percent : ", "0"));
// var a2nd = prompt("Enter 2nd skill : ")
// var a2nd_per = parseInt(prompt("Enter 2nd percent : ", "0"));
// var a3rd = prompt("Enter 3rd skill : ")
// var a3rd_per = parseInt(prompt("Enter 3rd percent : ", "0"));
// var a4th = prompt("Enter 4th skill : ")
// var a4th_per = parseInt(prompt("Enter 4th percent : ", "0"));
// var a5th = prompt("Enter 5th skill : ")
// var a5th_per = parseInt(prompt("Enter 5th percent : ", "0"));
// var a6th = prompt("Enter 6th skill : ")
// var a6th_per = parseInt(prompt("Enter 6th percent : ", "0"));
// var a7th = prompt("Enter 7th skill : ")
// var a7th_per = parseInt(prompt("Enter 7th percent : ", "0"));

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [20,30,60,80,90,80,79];
// const progressBarPercents = [a1st_per,a2nd_per,a3rd_per,a4th_per,a5th_per,a6th_per,a7th_per];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});




// document.getElementById("skill").innerHTML=skills;
// document.getElementById("myname").innerHTML=names;
// document.getElementById("mails").innerHTML=mails;

// document.getElementById("1st").innerHTML=a1st;
// document.getElementById("2nd").innerHTML=a2nd;
// document.getElementById("3rd").innerHTML=a3rd;
// document.getElementById("4th").innerHTML=a4th;
// document.getElementById("5th").innerHTML=a5th;
// document.getElementById("6th").innerHTML=a6th;
// document.getElementById("7th").innerHTML=a7th;


// var pbox=document.getElementById("mybox")
// pbox.style.display="block";