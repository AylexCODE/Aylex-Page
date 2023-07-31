const recommendationDialogue = document.getElementById("contacts");
const theDialogue = document.querySelector(".recommendDialogue");

    function recommendDialogue() {
        theDialogue.classList.add("feedback");
    }

    recommendationDialogue.addEventListener("mouseover", recommendDialogue);

    function autoFocusFeed() {
        document.getElementById("messageFeed").focus();
    }

const project1 = document.querySelector(".project1-content");
const project1Detect = document.querySelector(".project1");

    function hoverProject1() {
        project1.classList.add("hover");
        project1Detect.classList.add("hover")
    }

    function hoverProject01() {
        project1.classList.remove("hover");
        project1Detect.classList.remove("hover")
    }

project1Detect.addEventListener("mouseover", hoverProject1);
project1Detect.addEventListener("mouseout", hoverProject01);