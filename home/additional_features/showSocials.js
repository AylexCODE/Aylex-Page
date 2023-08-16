const discordShowsss = document.querySelector(".discordShowsss");
const googleShowsss = document.querySelector(".googleShowsss");
/*
    usernameHsss.onclick = function() {
        discordShowsss.classList.add("active");
        googleShowsss.classList.remove("active");
        setTimeout(() => {
            discordShowsss.classList.remove("active");
        }, 12000);
    }
    usernameGsss.onclick = function() {
        googleShowsss.classList.add("active");
        discordShowsss.classList.remove("active");
        setTimeout(() => {
            googleShowsss.classList.remove("active");
        }, 12000);
    }
*/
    function showDiscord2() {
        discordShowsss.classList.add("active");
        googleShowsss.classList.remove("active");
        setTimeout(() => {
            googleShowsss.classList.remove("active");
        }, 12000);
    }    

    function showGoogle2() {
        googleShowsss.classList.add("active");
        discordShowsss.classList.remove("active");
        setTimeout(() => {
            googleShowsss.classList.remove("active");
        }, 12000);
    }

const project1 = document.querySelector(".project1-content");
const project1Detect = document.querySelector(".project1");
    
    function hoverProject1() {
        project1.classList.add("hover");
        project1Detect.classList.add("hover");
    }
    
    function hoverProject01() {
        project1.classList.remove("hover");
        project1Detect.classList.remove("hover");
    }
    
project1Detect.addEventListener("mouseover", hoverProject1);
project1Detect.addEventListener("mouseout", hoverProject01);