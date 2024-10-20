document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById('cta-button');

    // Add click event listener for the CTA button
    ctaButton.addEventListener('click', () => {
        alert('Welcome to CodeCruncher! Let\'s get coding!');
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent actual form submission for now
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
        } else {
            alert('Please fill in all fields.');
        }
    });
});
