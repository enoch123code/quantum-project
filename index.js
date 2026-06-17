document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
            pages.forEach(page => page.classList.remove("active"));
            const targetPageId = `page-${link.getAttribute("data-page")}`;
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add("active");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });
});

function goToPage(pageId) {
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");
    navLinks.forEach(nav => nav.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.classList.add("active");
    const matchingLink = document.querySelector(`[data-page="${pageId}"]`);
    if (matchingLink) matchingLink.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}
