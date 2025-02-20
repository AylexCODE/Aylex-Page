const mouse = document.querySelector(".mouse");
const mouseIcon = document.querySelectorAll(".mouse-icon");

document.body.style.cursor = "default";

if(!navigator.userAgentData.mobile){
/* --------------------*/
    mouse.style.display = "block";
    document.body.style.cursor = "none";
    
    function setMouseIcon(n){
        var index = 1;
        mouseIcon.forEach(i => {
            index === n ? i.classList.add("active") : i.classList.remove("active");
            index++;
        });
    n === -1 ? document.querySelector(".fa-a").classList.add("active") :  document.querySelector(".fa-a").classList.remove("active");
    }

    document.addEventListener('mousemove', (e) => {
        const height = mouse.offsetHeight;
        const width = mouse.offsetWidth;
        var name = e.target?.attributes?.name?.nodeValue || "nothing";

    mouse.classList.remove("super-big"); 
        if(["page-selector", "info"].includes(name)){
            mouse.classList.add("big");
            switch(name){
                case "page-selector":
                    setMouseIcon(1);
                    break;
                case "info":
                    setMouseIcon(2);
                    break;
                default:
                    setMouseIcon(0);
            }
        }else{
            mouse.classList.remove("big");
            setMouseIcon(0);
        }

        setTimeout(() => { 
            mouse.style.left = (e.clientX - width/2) +"px";
            mouse.style.top = (e.clientY - height/2) + "px";
        }, 25);
    });

    document.getElementsByTagName("main")[0].addEventListener('mouseup', (e) => {
        if((window.innerWidth/2)/3+window.innerWidth/2 > e.clientX - mouse.offsetWidth/2 && window.innerWidth/2-(window.innerWidth/2)/3 < e.clientX - mouse.offsetWidth/2 && (window.innerHeight/2)/3+window.innerHeight/2 > e.clientY - mouse.offsetHeight/2 && window.innerHeight/2-(window.innerHeight/2)/3 < e.clientY - mouse.offsetHeight/2){
            setTimeout(() => {
                mouse.classList.add("super-big"); 
                setMouseIcon(-1);
            }, 1000)
        }
    });
/* --------------------*/ 
}