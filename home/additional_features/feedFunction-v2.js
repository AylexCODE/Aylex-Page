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