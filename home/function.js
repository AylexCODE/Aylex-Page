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

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
}

//Dropdown Selection
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