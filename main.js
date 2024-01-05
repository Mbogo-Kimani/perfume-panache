document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.getElementById('subscribeButton');
    const subscribeFormContainer = document.getElementById('subscribeFormContainer');
    const subscribeForm = document.getElementById('subscribeForm');

    subscribeButton.addEventListener('click', function () {
        subscribeFormContainer.style.display = 'block';
    });

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Subscription request received for ${email}.`);
        // You can send the subscription data to your server here
    });

    const productListing = document.querySelector('.product-list');

    // Sample product data
    const products = [
        { id: 1, name: 'Product A', description: 'Description of Product A', image: 'product1.jpg' },
        { id: 2, name: 'Product B', description: 'Description of Product B', image: 'product2.jpg' },
        { id: 3, name: 'Product C', description: 'Description of Product C', image: 'product3.jpg' },
    ];

    // Generate product items
    products.forEach(product => {
        addProduct(product);
    });

    // Function to add a product item
    function addProduct(product) {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        `;
        productListing.appendChild(productItem);
    }

    // Contact section icons animation
    const contactIcons = document.querySelectorAll('.contact-icon');
    contactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            icon.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseleave', function () {
            icon.style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Existing JavaScript code

    // Contact form submission logic
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const emailContact = document.getElementById('emailContact').value;
        const feedback = document.getElementById('feedback').value;

        // You can add your logic here to handle the form submission
        console.log('Name:', name);
        console.log('Email:', emailContact);
        console.log('Feedback or Question:', feedback);
    });
});
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
  }
  