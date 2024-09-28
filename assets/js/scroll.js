// Vanilla JavaScript solution
document.addEventListener('DOMContentLoaded', function() {
    const navbarHeight = 60; // Height of your navbar in pixels

    // Select all links with href starting with '#'
    const links = document.querySelectorAll('a[href^="#"]');

    // Add smooth scrolling to all anchor links
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
