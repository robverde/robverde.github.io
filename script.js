document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
    });

    function revealSections() {
        document.querySelectorAll("section").forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 50) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.5s ease-in-out";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});