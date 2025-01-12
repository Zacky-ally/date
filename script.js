// script.js
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const theme = this.closest('.theme-card').querySelector('h2').textContent;
        
        // WhatsApp phone number in international format (without dashes)
        const phoneNumber = '60183507254'; // Replace with your WhatsApp number

        // Creating the message dynamically based on the selected theme
        const message = `Hey! I want to do a date night: "${theme}". Let’s plan it together!`;

        // Encode the message
        const encodedMessage = encodeURIComponent(message);

        // Create the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp with the pre-filled message
        window.open(whatsappUrl, '_blank');
    });
});

