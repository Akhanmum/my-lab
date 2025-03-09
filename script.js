document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach((element) => {
            element.classList.add("show");
        });
    }, 1000); // 1-second delay after page load
});

// Intersection Observer for Scroll Animation
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, 1000); // 1-second delay when scrolled into view
                observer.unobserve(entry.target); // Stop observing after appearing
            }
        });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
);

// Apply animation to the required sections
document.querySelectorAll(".about-container, .about-text, .about-image").forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
});
