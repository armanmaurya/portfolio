document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach((t) => t.classList.remove("active-tab"));
            // Hide all tab contents
            contents.forEach((content) => content.classList.add("hidden"));

            // Add active class to clicked tab
            tab.classList.add("active-tab");
            // Show corresponding tab content
            const target = document.getElementById(tab.dataset.tab);
            target.classList.remove("hidden");
        });
    });
});
