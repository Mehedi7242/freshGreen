function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}
function buyNowAlert() {
    alert('Successfully added to the cart!');
}


   
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');


productForm.addEventListener('submit', function(event) {
  event.preventDefault();


  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;
  const productPrice = document.getElementById('productPrice').value;
  const productImage = document.getElementById('productImage').value;


  if (productName && productDescription && productPrice && productImage) {

    const productItem = document.createElement('li');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <img src="${productImage}" alt="${productName}" class="product-image">
      <h3>${productName}</h3>
      <p>${productDescription}</p>
      <p><strong>Price:</strong> ${productPrice} currency</p>
    `;

    productList.appendChild(productItem);

    productForm.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});



console.log('hello')



document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Login Successful!');
});


document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
      alert('Passwords do not match.');
});
