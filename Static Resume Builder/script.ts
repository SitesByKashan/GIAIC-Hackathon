document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
  
    function updateActiveLinkAndSection() {
      let index = sections.length;
  
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
      // Remove 'active' class from all links
      navbarLinks.forEach((link) => link.classList.remove('active'));
      // Add 'active' class to the current link
      navbarLinks[index].classList.add('active');
  
      // Remove 'highlight' class from all sections
      sections.forEach((section) => section.classList.remove('highlight'));
      // Add 'highlight' class to the current section
      sections[index].classList.add('highlight');
    }
  
    // Call the function to set the initial active link and section
    updateActiveLinkAndSection();
  
    // Update the active link and section on scroll
    window.addEventListener('scroll', updateActiveLinkAndSection);
  
    // Smooth scrolling and highlighting when a link is clicked
    navbarLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId || '');
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjusted for fixed navbar
            behavior: 'smooth',
          });
  
          // Use a timeout to allow scroll to complete before highlighting
          setTimeout(() => {
            // Ensure the clicked link and target section are highlighted
            navbarLinks.forEach((navLink) => navLink.classList.remove('active'));
            link.classList.add('active');
            sections.forEach((section) => section.classList.remove('highlight'));
            targetSection.classList.add('highlight');
          }, 500); // Adjust the timeout duration if needed
        }
      });
    });
  });
  