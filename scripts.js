const nav = document.getElementsByTagName("nav")[0];
const navBlur = document.querySelector(".navBlur");
const navBtn = document.querySelector(".showNavBtn");
const cancelNav = document.querySelector(".cancelNav");

function toggleNav(){
    nav.classList.toggle("active");
    navBlur.classList.toggle("active");
    navBtn.classList.toggle("active");
    cancelNav.classList.toggle("active");

    navBtn.style.filter = "blur(2px)";
    if(navBtn.classList.contains("active")){
        navBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }else{
        navBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    }
    setTimeout(() => navBtn.style.filter = "", 100);
}