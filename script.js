document.addEventListener('DOMContentLoaded', () => {
    // Variable to track the number of items in the cart
    let cartCount = 0;

    // Get the cart button element
    const cartButton = document.getElementById('cart-button');

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Function to update the cart count display
    const updateCartDisplay = () => {
        cartButton.textContent = `🛒 Cart (${cartCount})`;
    };

    // Add event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the product name from the parent element
            const productName = event.target.closest('.product-item').getAttribute('data-name');
            
            // Increment cart count
            cartCount++;
            
            // Update the display
            updateCartDisplay();

            // Provide user feedback
            alert(`"${productName}" added to cart! Total items: ${cartCount}`);
        });
    });

    // Handle form submission (Contact Form)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission (since this is a landing page example)
        
        // Simple success message
        alert('Thank you for your message! We will get back to you shortly.');
        
        // Optionally reset the form
        contactForm.reset();
    });

    // Initial display update
    updateCartDisplay();
});
