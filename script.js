document.addEventListener("DOMContentLoaded", function() {
    console.log("About page loaded!");

    // Navbar scroll behavior
    let lastScrollTop = 0; // Keep track of the last scroll position
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");

    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-125px"; // Hide the navbar (adjusted to -125px)
        } else {
            // Scrolling up
            navbar.style.top = "0"; // Show the navbar
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

    // Hamburger menu functionality
    hamburger.addEventListener("click", function() {
        sidebar.classList.toggle("active"); // Toggle the 'active' class on the sidebar
    });
});
