//Light and Dark Mode Toggle
var toggle = document.querySelector(".navText");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";


    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
}

//Dropdown Selection
const mDropdownMenu = document.querySelector(".selectionBtn");
const mSelection = document.querySelector(".dropdown-selection");
const mActiveDetector = document.querySelector(".activeDetector");
const mDropdownIcon = document.querySelector(".selectionBtn i");
const mContactsBtn = document.querySelector(".mContacts");

    mDropdownMenu.onclick = function() {
        mSelection.classList.add("open");
        mActiveDetector.classList.add("active");
        mContactsBtn.classList.add("open");
        const menuIsOpen = mSelection.classList.contains("open");
            
        mDropdownIcon.classList = menuIsOpen
         ? "fa-regular fa-circle-xmark"
         : "fa-solid fa-bars"
    }

    mSelection.onclick = function() {
        mSelection.classList.remove("open");
        mActiveDetector.classList.remove("active");
        mContactsBtn.classList.remove("open");
        mContactsDropdown.classList.remove("open");
        mContactsBG.classList.remove("active");
        const menuIsOpen = mSelection.classList.contains("open");

        mDropdownIcon.classList = menuIsOpen
         ? "fa-regular fa-circle-xmark"
         : "fa-solid fa-bars"
    }

    mActiveDetector.onclick = function() {
        mSelection.classList.remove("open");
        mActiveDetector.classList.remove("active");
        mContactsBtn.classList.remove("open");
        mContactsDropdown.classList.remove("open");
        mContactsBG.classList.remove("active");
        const menuIsOpen = mSelection.classList.contains("open");
        
        mDropdownIcon.classList = menuIsOpen
         ? "fa-regular fa-circle-xmark"
         : "fa-solid fa-bars"
    }

//Contacts Dropdown
const mContacts = document.querySelector(".mContacts");
const mContactsDropdown = document.querySelector(".mContacts-Dropdown");
const mContactsBG = document.querySelector(".mContactsBG");

    mContacts.onclick = function() {
        mContactsDropdown.classList.toggle("open");
        mContactsBG.classList.toggle("active");
    }

    mContacts.onclick = function() {
        mContactsDropdown.classList.toggle("open");
        mContactsBG.classList.toggle("active");
    }

//Typing Animation //Home
const typedTextSpan = document.querySelector(".homeTyping");
const cursorSpan = document.querySelector(".cursor");
 
const textArray = ["HTML.", "CSS.", "JS."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
 
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("isTyping")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("isTyping");
        setTimeout(erase, newTextDelay);
    }
}
 
    function erase() {
        if (charIndex > 0) {
        if(!cursorSpan.classList.contains("isTyping")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("isTyping");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}
 
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

homeType();