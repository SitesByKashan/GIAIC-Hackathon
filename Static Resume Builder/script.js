document.addEventListener('DOMContentLoaded', function () {
    var navbarLinks = document.querySelectorAll('.navbar a');
    var sections = document.querySelectorAll('section');
    function updateActiveLinkAndSection() {
        var index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }
        // Remove 'active' class from all links
        navbarLinks.forEach(function (link) { return link.classList.remove('active'); });
        // Add 'active' class to the current link
        navbarLinks[index].classList.add('active');
        // Remove 'highlight' class from all sections
        sections.forEach(function (section) { return section.classList.remove('highlight'); });
        // Add 'highlight' class to the current section
        sections[index].classList.add('highlight');
    }
    // Call the function to set the initial active link and section
    updateActiveLinkAndSection();
    // Update the active link and section on scroll
    window.addEventListener('scroll', updateActiveLinkAndSection);
    // Smooth scrolling and highlighting when a link is clicked
    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var _a;
            event.preventDefault();
            var targetId = (_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1);
            var targetSection = document.getElementById(targetId || '');
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjusted for fixed navbar
                    behavior: 'smooth',
                });
                // Use a timeout to allow scroll to complete before highlighting
                setTimeout(function () {
                    // Ensure the clicked link and target section are highlighted
                    navbarLinks.forEach(function (navLink) { return navLink.classList.remove('active'); });
                    link.classList.add('active');
                    sections.forEach(function (section) { return section.classList.remove('highlight'); });
                    targetSection.classList.add('highlight');
                }, 500); // Adjust the timeout duration if needed
            }
        });
    });
});
