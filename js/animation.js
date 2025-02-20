let isAnimating = false, activeArticle = 1, prevMode, transitionOffset = 0, isMobile = navigator.userAgentData.mobile;

document.addEventListener("DOMContentLoaded", (e) => {
    let articles = document.getElementsByTagName("article");
    let tweak, showingStatus = [true]; for(let i = 0; i < articles.length; i++){showingStatus.push(false)}
    
    gsap.registerPlugin(Observer);
    window.setWindow = function(index, mode, type){
        isAnimating = true;
        setTimeout(() => { isAnimating = false }, isMobile ? 250 : 0);
        let scrollAnimate = gsap.timeline({
            defaults: {
                ease: "power1.inOut",
                duration: 0
            }
        });
        
        let y = mode == "up" ? "0dvh" : "-100dvh";

        function setTweak(customMode, showAnimate, indexOffset){
            if(customMode && showAnimate){
                y = "0dvh";
                activeArticle = 1;
            }
            if(customMode && !showAnimate){
                activeArticle = 1;
            }
            tweak = scrollAnimate.to(articles[activeArticle-1+indexOffset], {
                duration: 0,
                y: y,
                ease: "power1.inOut"
            });
        }
        
        if(type == "all"){
            setTweak(false, false, index-1);
            for(let i = 0; i < articles.length; i++){
                if(i > index-1){
                    setTweak(true, true, i);
                    showingStatus[i+1] = false;
                }else if(i == index-1){
                    setTweak(true, false, i);
                    showingStatus[i+1] = true;
                }
                tweak.play();
            }
            activeArticle = index == 0 ? 1 : index;
            prevMode = index == 0 ? "up" : "down";
        }else{
            if(index > 0 && index <= articles.length){
                switch(mode){
                    case "up":
                        showingStatus[activeArticle] = false;
                        if(index != 1 && mode == prevMode){
                            activeArticle--;
                        }
                        
                        setTweak(false, true, 0);
                        tweak.play();
                        
                        let i = 1;
                        while(!showingStatus[index-i]){
                          activeArticle--;
                          i++;
                        }
                    break;
                    case "down":
                        if(index != articles.length && mode == prevMode){
                            activeArticle++;
                        }
                        
                        showingStatus[index] = true;
                        setTweak(false, true, 0);
                        tweak.play();
                        break;
                    default:
                }
                prevMode = mode;
            }
            portfolioScrollable = false;
        }
    }
    
    let scrollUpMobile = isMobile ? "down" : "up";
    let scrollDownMobile = isMobile ? "up" : "down";
    Observer.create({
        target: window,
        type: "wheel, touch, pointer",
        wheelSpeed: isMobile ? -1 : 0,
        tolerance: 10,
        onUp: () => !isAnimating && setWindow(activeArticle, scrollUpMobile, "one"), // -
        onDown: () => !isAnimating && setWindow(activeArticle, scrollDownMobile, "one"), // +
        preventDefault: true,
        id: "mainObserver"
    });
    
    window.scrollFromTo = function(mode){
        switch(mode){
            case "next":
                setWindow(activeArticle, "up", "one");
                break;
            case "previous":
                setWindow(activeArticle, "down", "one");
                break;
        }
    }
});

/*
document.addEventListener("DOMContentLoaded", (e) => {
    let articles = document.getElementsByTagName("article");
    let tweak;
    
    gsap.registerPlugin(Observer);
    window.setWindow = function(index, mode, type){
        isAnimating = true;
        setTimeout(() => { isAnimating = false }, isMobile ? 250 : 0);
        let scrollAnimate = gsap.timeline({
            defaults: {
                ease: "power1.inOut",
                duration: 0
            },
        // onComplete: () => isAnimating = false
        });
        
        let y = mode == "up" ? "0dvh" : "-100dvh";
        if(isMobile) y = mode == "up" ? "0dvh" : "-100dvh";

        function setTweak(){
            tweak = scrollAnimate.to(articles[activeArticle-1], {
                duration: 0,
                y: y,
                ease: "power1.inOut"
            });
        }

        if(index > 0 && index <= articles.length){
            switch(mode){
                case "up":
                    if(index != 1 && mode == prevMode){
                        activeArticle--;
                    }
                    setTweak();
                    tweak.play();
                break;
                case "down":
                    if(index != articles.length && mode == prevMode){
                        activeArticle++;
                    }
                    setTweak();
                    tweak.play();
                    break;
                default:
            }
            prevMode = mode;
        }
    }
            
    Observer.create({
        target: window,
        type: "wheel, touch, pointer",
        wheelSpeed: isMobile ? -1 : 0,
        tolerance: 10,
        onUp: () => !isAnimating && setWindow(activeArticle, "up", "one"), // -
        onDown: () => !isAnimating && setWindow(activeArticle, "down", "one"), // +
        preventDefault: true
    });
});
*/

/*
document.addEventListener("DOMContentLoaded", (e) => {
    let articles = document.getElementsByTagName("article");
    let tweak;
    
    gsap.registerPlugin(Observer);
    window.setWindow = function(index, mode, type){
        isAnimating = true;
        setTimeout(() => { isAnimating = false }, isMobile ? 250 : 0);
        let scrollAnimate = gsap.timeline({
            defaults: {
                ease: "power1.inOut",
                duration: 0
            },
        // onComplete: () => isAnimating = false
        });
        
        let y = mode == "up" ? "0dvh" : "-100dvh";
        if(isMobile) y = mode == "up" ? "0dvh" : "-100dvh";

        function setTweak(customMode, showAnimate, indexOffset){
            if(customMode && showAnimate){
                y = "0dvh";
                activeArticle = 1;
            }
            if(customMode && !showAnimate){
                activeArticle = 1;
            }
            tweak = scrollAnimate.to(articles[activeArticle-1+indexOffset], {
                duration: 0,
                y: y,
                ease: "power1.inOut"
            });
        }
        if(type == "all"){
            for(let i = 0; i < articles.length; i++){
                if(i < index){
                    setTweak(true, false, i);
                }else{
                    setTweak(true, true, i);
                }
                tweak.play();
            }
            activeArticle = index == 0 ? 1 : index;
            prevMode = "down";
        }else{
            if(index > 0 && index <= articles.length){
                switch(mode){
                    case "up":
                        if(index != 1 && mode == prevMode){
                            activeArticle--;
                        }
                        setTweak(false, true, 0);
                        tweak.play();
                    break;
                    case "down":
                        if(index != articles.length && mode == prevMode){
                            activeArticle++;
                        }
                        setTweak(false, true, 0);
                        tweak.play();
                        break;
                    default:
                }
                prevMode = mode;
            }
        }
    }
            
    Observer.create({
        target: window,
        type: "wheel, touch, pointer",
        wheelSpeed: isMobile ? -1 : 0,
        tolerance: 10,
        onUp: () => !isAnimating && setWindow(activeArticle, "up", "one"), // -
        onDown: () => !isAnimating && setWindow(activeArticle, "down", "one"), // +
        preventDefault: true
    });
});
*/