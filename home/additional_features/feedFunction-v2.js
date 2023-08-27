const feedBackDialogue = document.querySelector(".recommendDialogue");
const showDialogue = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
            feedBackDialogue.classList.add("feedback");
            console.log("DIALOGUE!");
        }
        else {
      }};
    });


showDialogue.observe(document.querySelector(".dialogueShow"));

function autoFocusFeed() {
    document.getElementById("messageFeed").focus();
}

const hideNotify = document.querySelector(".optimizedNotify");

    hideNotify.onclick = function() {
        hideNotify.classList.add("hide");
    }

const WeCovered = document.querySelector(".WeCovered1st");
const showJourneyOptions = document.querySelector(".SelectJourney");
const smallLoadJourney = document.querySelector(".smallLoadJ");
const nav1stYear = document.querySelector(".cover1stNav");
const showJDisclaimer = document.querySelectorAll(".showJDisclaimer")
    
    function selectJourney() {
        showJourneyOptions.classList.toggle("show");
        smallLoadJourney.classList.toggle("load");
        return JDisclaimer();
    }
    
     function showLearned1st() {
        WeCovered.classList.toggle("open");
        nav1stYear.classList.toggle("show");
    }
    
    const JDisclaimer = () => {
        showJDisclaimer.forEach( (wholeSelectJourney) => {
            wholeSelectJourney.classList.toggle("animating");
        })
    }

const disMessage = document.querySelector(".disclaimerMessage");

    function closeAll() {
        showJourneyOptions.classList.toggle("show");
        smallLoadJourney.classList.toggle("load");
        return JDisclaimer();
    }

disMessage.addEventListener("click", closeAll);

const toggleTip = document.querySelector(".toggle-tip");

    function hideToggleTip() {
        toggleTip.classList.add("hide");
    }