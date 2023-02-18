const btn = document.querySelector(".switch-btn");
const contant = document.querySelector(".video-container");

btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        contant.pause();
    }
    else {
        btn.classList.remove("slide");
        contant.play();
    }
});


