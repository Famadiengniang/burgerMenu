const Links = document.querySelectorAll('nav li');

icons.addEventListener("click", () => {
    nav.classList.toggle("active")
});

Links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("active");
    });
});

