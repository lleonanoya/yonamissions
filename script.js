// Simple welcome message for the commission website.
console.log("Welcome to Leona's commission page! ♡");

// Highlight the current navigation link while scrolling.
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.fontWeight = "normal";

        if (link.getAttribute("href") === "#" + current) {
            link.style.fontWeight = "bold";
        }
    });
});
