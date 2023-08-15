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