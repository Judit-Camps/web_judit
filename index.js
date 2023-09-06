// Javascript

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
    });
});


const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach((el) => observer.observe(el));

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


