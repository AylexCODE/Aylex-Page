const scrollUpBtn = document.querySelector(".scroll-up");
const observeScrollBtn = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
            scrollUpBtn.classList.remove("scrollable");
        }
        else {
            scrollUpBtn.classList.add("scrollable");
      }};
    });


observeScrollBtn.observe(document.querySelector(".scrollUpBtnDisabled"));