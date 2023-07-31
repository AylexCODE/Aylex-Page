const scrollUpBtn = document.querySelector(".scroll-up");
const scrollUpA = document.getElementById("aboutMe");
const scrollUpS = document.getElementById("skills");
const scrollUpP= document.getElementById("projects");
const scrollUpC = document.getElementById("contacts");
const hideScrollUpBtn = document.getElementById("home");

    function showScrollUp() {
        scrollUpBtn.classList.add("scrollable");
    }

    function hideScrollUp() {
        scrollUpBtn.classList.remove("scrollable");
    }

scrollUpA.addEventListener("mouseover", showScrollUp);
scrollUpS.addEventListener("mouseover", showScrollUp);
scrollUpP.addEventListener("mouseover", showScrollUp);
scrollUpC.addEventListener("mouseover", showScrollUp);
hideScrollUpBtn.addEventListener("mouseover", hideScrollUp);