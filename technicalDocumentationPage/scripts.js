document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            
            // Remove 'active' class from all links
            navLinks.forEach(item => {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});
