// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the page from reloading/jumping

            // 1. Remove 'active' class from all navigation links
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // 2. Add 'active' class to the clicked link
            link.classList.add("active");

            // 3. Hide all pages by removing their 'active' class
            pages.forEach(page => page.classList.remove("active"));

            // 4. Find the target page using the 'data-page' attribute and show it
            const targetPageId = `page-${link.getAttribute("data-page")}`;
            const targetPage = document.getElementById(targetPageId);
            
            if (targetPage) {
                targetPage.classList.add("active");
            }
        });
    });
});
