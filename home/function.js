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