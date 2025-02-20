const header = document.getElementsByTagName("header")[0];
const nav = document.getElementsByTagName("nav")[0];

const info_close = document.querySelector(".close-info-ontouch");
const info_iconBars = document.querySelector(".info_icon > i:nth-child(1)");
const info_iconXmark = document.querySelector(".info_icon > i:nth-child(2)");
const portfolio_wrapper = document.querySelector(".portfolio-wrapper");
const portfolio_nav = document.querySelector(".portfolio-nav");
const portfolio_nav_btns = document.querySelectorAll(".portfolio-nav > button");
const portfolio_nav_highlight = document.createElement("button");

const images = document.getElementsByTagName("img");
const projects_card = document.getElementsByName("project");
const lang_card = document.getElementsByName("lang");
const card_gap = (projects_card[0].offsetTop + projects_card[0].offsetHeight) + projects_card[1].offsetTop;
let portfolio_content_container = [];
let portfolio_content_type = [];

let animateCards, cardsAnimation;

window.onload = (e) => {
    const isMobile = navigator.userAgentData.mobile;
    document.getElementsByTagName("section")[0].style.display = "none";
    document.getElementsByTagName("main")[0].style.opacity = "1";

    header.style.animation = "slide-in 1s ease-in-out";
    header.style.visibility = "visible";
    
    info_iconXmark.style.display = "none";
    
    portfolio_nav_highlight.style.position = "absolute";
    portfolio_nav_highlight.style.height = portfolio_nav_btns[0].offsetHeight +"px";
    portfolio_nav_highlight.style.width = portfolio_nav_btns[0].offsetWidth +"px";
    portfolio_nav_highlight.style.backgroundColor = "#FFFFFF20";
    portfolio_nav_highlight.style.left = portfolio_nav_btns[0].offsetLeft +"px";
    portfolio_nav_highlight.style.transition = "0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    portfolio_nav_highlight.style.pointerEvents = "none";

    portfolio_nav.appendChild(portfolio_nav_highlight);
    
    projects_card.forEach((element) => {
        portfolio_content_container.push(element);
        element.style.height = document.querySelector(".portfolio-wrapper").offsetHeight/2 +"px";
    });
    
    lang_card.forEach((element) => {
        portfolio_content_container.push(element);
        element.style.height = document.querySelector(".portfolio-wrapper").offsetHeight/2 +"px";
        element.style.opacity = "0";
        element.style.display = "none";
    });
    
    portfolio_content_container.forEach((element) => {
        if(!portfolio_content_type.includes(element.attributes.name.value)) portfolio_content_type.push(element.attributes.name.value);
    });
    
    let project_current_scroll = 0, prevScrollDirection = "NA", maxScroll = projects_card[projects_card.length-2].offsetTop, minScroll = projects_card[0].offsetHeight;
    let scrollUpM = isMobile ? "down" : "up", scrollDownM = isMobile ? "up" : "down",isScrolling = false, isScrollable = false;
    
    gsap.registerPlugin(Observer);
    
    const main_Observer = Observer.getById("mainObserver");
    function setPortfolioScrolling(mode){
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 250);
        
        if(prevScrollDirection == mode && isScrollable){
            switch(mode){
                case "up":
                    scrollFromTo("next");
                    break;
                case "down":
                    scrollFromTo("previous");
                    break;
            }
            prevScrollDirection = "NA";
        }
        
        isScrollable = false;
        switch(mode){
            case "up":
                if(project_current_scroll > 0){
                    project_current_scroll-=(minScroll+card_gap);
                    portfolio_scrolling(project_current_scroll);
                }else{
                    isScrollable = true;
                }
            break;
            case "down":
                if(project_current_scroll <= maxScroll){
                    project_current_scroll+=(minScroll+card_gap);
                    portfolio_scrolling(project_current_scroll);
                }else{
                    isScrollable = true;
                }
            break;
        }
        prevScrollDirection = mode;
    }
    
    Observer.create({
        target: document.querySelector(".portfolio-wrapper"),
        type: "wheel, touch, pointer",
        wheelSpeed: isMobile ? -1 : 0,
        tolerance: 10,
        onUp: () => !isScrolling && setPortfolioScrolling(scrollUpM),
        onDown: () => !isScrolling && setPortfolioScrolling(scrollDownM),
        onHover: () => main_Observer.disable(),
        onHoverEnd: () => main_Observer.enable()
    });
    
    animateCards = gsap.timeline({
        defaults: {
            duration: 0,
            ease: "power1.inOut"
        }
    });
    isMobile ? lockDesign() : '';
}

function show_info_buttons() {
    info_close.classList.toggle("active");
    show_selection();
};

function show_selection(){
    info_iconXmark.style.animation = "fade-rotate-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    info_iconBars.style.animation = "fade-rotate-left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    if(info_close.classList.contains("active")){
        nav.style.height = "8.25rem";
        nav.style.display = "block";
        nav.style.backgroundColor =  "rgba(255, 255, 255, 0.102)";
        
        info_iconXmark.style.display = "block";
        info_iconBars.style.display = "none";
    }else{
        nav.style.height = "0rem";
        nav.style.backgroundColor = "rgba(255, 255, 255, 0)";
        
        info_iconXmark.style.display = "none";
        info_iconBars.style.display = "block";
    }
}

let activePortfolio = 0;
function portfolio_navigator(n){
    for(let i = 0; i < portfolio_nav_btns.length; i++){
        if(i == n){
            portfolio_nav_btns[i].classList.add("enabled");
            portfolio_nav_btns[i].classList.remove("disabled");
            portfolio_nav_highlight.style.left = portfolio_nav_btns[i].offsetLeft +"px";
        }else{
            portfolio_nav_btns[i].classList.remove("enabled");
            portfolio_nav_btns[i].classList.add("disabled");
        }
    }
    if(n != activePortfolio) portfolio_CardsAnimation(n), activePortfolio = n, portfolio_scrolling(0);
}

function portfolio_scrolling(current_scroll){
    portfolio_wrapper.scrollTo({
        top: current_scroll,
        left: 0,
        behavior: "smooth"
    });
}

function portfolio_CardsAnimation(n){
    let x = 100;
    portfolio_content_container.forEach((element) => {
        x != 100 ? x = 100 : x = -100;
        if(element.attributes.name.value == portfolio_content_type[n]){
            cardsAnimation = animateCards.to(element, {
                opacity: 0,
                x: x
            })
            .to(element, {
                opacity: 1,
                x: 0
            }, "+=0.2");
            element.style.display = "block";
        }else{
            cardsAnimation = animateCards.to(element, {
                opacity: 1,
                x: x
            })
            .to(element, {
                opacity: 0,
                x: x
            });
            element.style.display = "none";
        }
        cardsAnimation.play();
    });
}

function image_error(){
    images[0].onerror = '';
    images[0].src = "";
}
    
    // let project_current_scroll = 0, prevScrollDirection = "NA", maxScroll = projects_card[projects_card.length-2].offsetTop, minScroll = projects_card[0].offsetHeight;
    // let scrollUpM = isMobile ? "down" : "up", scrollDownM = isMobile ? "up" : "down", scrollReset = false, scrollValue = 0;
    
    // gsap.registerPlugin(Observer);
    
    // const main_Observer = Observer.getById("mainObserver");
    
    // function setPortfolioScrolling(mode){
    //     setTimeout(() => { 
    //         if(scrollReset && prevScrollDirection === mode) {
    //             scrollValue++;
    //             scrollReset = false;
    //         }
    //     }, 250);
        
    //     setTimeout(() => {
    //         scrollValue = 0;
    //         portfolioScrollable = false
    //     }, 1000);
        
    //     if(scrollValue == 0){
    //         portfolioScrollable = true;
    //         scrollValue = 0;
    //     }
        
    //     switch(mode){
    //         case "up":
    //             if(project_current_scroll > 0){
    //                 project_current_scroll-=minScroll;
    //                 portfolio_scrolling(scrollDownM, project_current_scroll);
    //             }else{
    //                 if(prevScrollDirection === mode && !scrollReset) scrollReset = true;
    //             }
    //         break;
    //         case "down":
    //             if(project_current_scroll <= maxScroll){
    //                 project_current_scroll+=minScroll;
    //                 portfolio_scrolling(scrollUpM, project_current_scroll);
    //             }else{
    //                 if(prevScrollDirection === mode && !scrollReset) scrollReset = true;
    //             }
    //         break;
    //     }
        
    //     prevScrollDirection = mode;
    // }
    
    // Observer.create({
    //     target: document.querySelector(".portfolio-wrapper"),
    //     type: "wheel, touch, pointer",
    //     wheelSpeed: isMobile ? -1 : 0,
    //     tolerance: 10,
    //     onUp: () => setPortfolioScrolling(scrollUpM),
    //     onDown: () => setPortfolioScrolling(scrollDownM),
    //     onHover: () => portfolioScrollable ? main_Observer.enable() : main_Observer.disable(),
    //     onHoverEnd: () => main_Observer.enable()
    // });
    
// document.onreadystatechange = (e) => {
//     if (document.readyState !== "complete"){
//         document.getElementsByTagName("section")[0].style.display = "none";
//         document.getElementById("main-bg").style.opacity = "1";

//         nav.style.animation = "slide-in 1s ease-in-out";
//         nav.style.visibility = "visible";
//     }
// }