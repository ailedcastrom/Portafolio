const year = document.getElementById("year");

document.querySelectorAll('href="#"').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
    });
});

year.textContent = new Date().getFullYear();

