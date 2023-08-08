const scrollUpBtn = document.querySelector(".scroll-up");
const observeScrollBtn = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
            scrollUpBtn.classList.remove("scrollable");
        }
        else {
            scrollUpBtn.classList.add("scrollable");
      }};
    });

observeScrollBtn.observe(document.querySelector(".scrollUpBtnDisabled"));

const usernameHsss = document.getElementById("discord-show-toggle");
const usernameGsss = document.getElementById("google-show-toggle");
const discordShow = document.querySelector(".discord-show");
const googleShow = document.querySelector(".google-show");

    usernameHsss.onclick = function() {
        discordShow.classList.add("active");
        googleShow.classList.remove("active");
        setTimeout(() => {
            discordShow.classList.remove("active");
        }, 12000);
    }
    usernameGsss.onclick = function() {
        googleShow.classList.add("active");
        discordShow.classList.remove("active");
        setTimeout(() => {
            googleShow.classList.remove("active");
        }, 12000);
    }

    function showDiscord2(){
        discordShow.classList.add("active");
        googleShow.classList.remove("active");
        setTimeout(() => {
            googleShow.classList.remove("active");
        }, 12000);
    }    

    function showGoogle2(){
        googleShow.classList.add("active");
        discordShow.classList.remove("active");
        setTimeout(() => {
            googleShow.classList.remove("active");
        }, 12000);
    }
