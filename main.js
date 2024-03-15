window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const scrolltopbtn = document.querySelector(".scrolltotop-btn");
window.addEventListener("scroll", function () {
    scrolltopbtn.classList.toggle("active", window.scrollY > 500);
});

scrolltopbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// window.addEventListener("scroll", () => {

//     const sections = document.querySelectorAll("section");
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {

//         let sectionHeight = current.offsetHeight;
//         let sectionTop = current.offsetTop - 50;
//         let id = current.getAttribute("id");
//         if (scrolly > sectionTop && scrollY <= sectionTop + sectionHeight){
//         document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
//         }
//         else {
//             document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
//         }
//     });
// });