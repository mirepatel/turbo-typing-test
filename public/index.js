// ============================
//    Creating a responsive navbar component
// ============================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElement = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    headerElement.classList.toggle("active");
})

// ============================
//    Creating a sticky responsive navbar component
// ============================

const heroSectionElement = document.querySelector(".section-hero"); //taking the reference of hero-section

const observer = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];
        // console.log(entry);
        !entry.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
    }, {
    root: null,
    threshold: 0
});

observer.observe(heroSectionElement);

// ============================
//   Scroll to top button
// ============================

// const heroSectionElement = document.querySelector(".section-hero"); //taking the reference of hero-section
const footerElement = document.querySelector(".section-footer"); //taking the reference of footer

const scrollElement = document.createElement("div");
// scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="chevron-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollElement);

// const scrollTop = () => {
//     heroSectionElement.scrollIntoView({behavior: "smooth"});
// };

scrollElement.addEventListener("click", () => {
    heroSectionElement.scrollIntoView({ behavior: "smooth" });
});

// ============================
//    Creating a sticky scroll to top button
// ============================

const observerScrolltoTop = new IntersectionObserver(
    (entries) => {
        const [entry] = entries;
        // const entry = entries[0];
        // console.log(entry);
        !entry.isIntersecting ? scrollElement.classList.add("scrollTop-style") : scrollElement.classList.remove("scrollTop-style");
    }, {
    root: null,
    threshold: 0
});

observerScrolltoTop.observe(heroSectionElement);

// ============================
//   Smooth scrolling effects
// ============================

const portfolioElement = document.querySelector(".section-portfolio"); //taking the reference of portfolio-section
const portfoliolinkElement = document.querySelector(".portfolio-link"); //taking the reference of portfolio-link from navbar

portfoliolinkElement.addEventListener("click", (e) => {
    e.preventDefault();
    portfolioElement.scrollIntoView({ behavior: "smooth" });
});

const contactElement = document.querySelector(".section-contact"); //taking the reference of contact-section
const hireMeBtnElement = document.querySelector(".hireme-btn"); //taking the reference of hire-me-btn

hireMeBtnElement.addEventListener("click", (e) => {
    e.preventDefault();
    contactElement.scrollIntoView({ behavior: "smooth" });
});