// Simple JavaScript for adding products to the cart
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
