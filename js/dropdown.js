// Toggle dropdown on mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    
    // Toggle dropdown on click for mobile
    dropbtn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
