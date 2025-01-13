document.addEventListener("DOMContentLoaded", function() {
    console.log("About page loaded!");

    // Add hover effect to team boxes
    document.querySelectorAll(".team-box").forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)";
            box.style.transition = "0.3s";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
        });
    });

    // Navbar and Footer Scroll Behavior
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.site-footer');
    const footerHeight = footer.offsetHeight;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Hide navbar when scrolling down, show it when scrolling up
        if (currentScroll > lastScrollTop) {
            navbar.style.top = '-60px'; // Hide the navbar
        } else {
            navbar.style.top = '0'; // Show the navbar
        }

        // Show footer when at the bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - footerHeight) {
            footer.style.bottom = '0'; // Show footer
        } else {
            footer.style.bottom = `-${footerHeight}px`; // Hide footer
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    });
});
