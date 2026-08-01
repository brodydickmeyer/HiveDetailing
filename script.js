const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const currentYear = document.getElementById("currentYear");

function updateHeader() {
    if (window.scrollY > 40) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}

function closeMenu() {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
    const menuIsOpen = mainNav.classList.toggle("open");

    menuToggle.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen ? "true" : "false"
    );
});

mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeader);

updateHeader();

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}