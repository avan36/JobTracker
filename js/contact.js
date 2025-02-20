document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const closePopup = document.querySelector('.close-popup');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        setTimeout(() => {
            successMessage.style.display = 'flex';
            form.reset();
        }, 1000);
    });

    closePopup.addEventListener('click', function() {
        successMessage.style.display = 'none';
    });

    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === successMessage) {
            successMessage.style.display = 'none';
        }
    });

    // Add floating label behavior
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('active');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.classList.remove('active');
            }
        });
    });
}); 