//Dark and light mode toggle
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

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
}

//Drop down menu for mobile
const mDropdownMenu = document.querySelector(".selectionBtn");
const mSelection = document.querySelector(".dropdown-selection");
const mActiveDetector = document.querySelector(".activeDetector");
const mDropdownIcon = document.querySelector(".selectionBtn i");
const mContactsBtn = document.querySelector(".mContacts");
const mContactsOpacity = document.querySelector(".mContactsAlign");

    mDropdownMenu.onclick = function() {
        mSelection.classList.add("open");
        mActiveDetector.classList.add("active");
        mContactsBtn.classList.add("open");
        const menuIsOpen = mSelection.classList.contains("open");
        mContactsOpacity.classList.add("open");
            
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
        mContactsOpacity.classList.remove("open");

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
        mContactsOpacity.classList.remove("open");
        
        mDropdownIcon.classList = menuIsOpen
         ? "fa-regular fa-circle-xmark"
         : "fa-solid fa-bars"
    }

//Drop drop for contacts mobile
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
    
//Full year date counter
const date = new Date(); 
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
    
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    
document.getElementById("currentDate").innerHTML = month + " " + day + ", " + year ;

//Typing animation //home
const typedTextSpan = document.querySelector(".decent");
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
 
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

homeType();

const usernameHsss = document.querySelector(".discord-usernamesss a");
const usernameGsss = document.querySelector(".google-usernamesss a");

    usernameHsss.onclick = function() {
        usernameHsss.classList.add("active");
    } 
