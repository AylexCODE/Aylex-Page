const CC111 = document.querySelectorAll(".CC111");
const CC111key = document.querySelector(".CC111key");

const AllCC111 = () => {
    CC111.forEach( (CC111List) => {
        CC111List.classList.toggle("show");
  })       
}

function CC111show() {
    CC111key.classList.toggle("active");
    return AllCC111();
}

const CC112 = document.querySelectorAll(".CC112");
const CC112key = document.querySelector(".CC112key");

const AllCC112 = () => {
    CC112.forEach( (CC112List) => {
        CC112List.classList.toggle("show");
    })
}

function CC112show() {
    CC112key.classList.toggle("active");
    return AllCC112();
}

const GEMMW = document.querySelectorAll(".GEMMW");
const GEMMWkey = document.querySelector(".GEMMWkey");

const AllGEMMW = () => {
    GEMMW.forEach( (GEMMWList) => {
        GEMMWList.classList.toggle("show");
    })
}

function GEMMWshow() {
    GEMMWkey.classList.toggle("active");
    return AllGEMMW();
}

const GEUS = document.querySelectorAll(".GEUS");
const GEUSkey = document.querySelector(".GEUSkey");

const AllGEUS = () => {
    GEUS.forEach( (GEUSList) => {
        GEUSList.classList.toggle("show");
    })
}

function GEUSshow() {
    GEUSkey.classList.toggle("active");
    return AllGEUS();
}

// CC111key.addEventListener("click", mobileMenu);
/*
CC111key.addEventListener('click',()=>{
  CC111.forEach(el => {
    el.classList.toggle("show");
  })
})
*/