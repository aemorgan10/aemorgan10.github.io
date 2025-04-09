const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'item1.jpg' },
    { id: 2, name: 'Item 2', price: 15, img: 'item2.jpg' },
    { id: 3, name: 'Item 3', price: 20, img: 'item3.jpg' }
  ];
  
  let cart = [];
  
  const updateCartSummary = () => {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart" data-id="${item.id}">Remove</button>`;
      cartList.appendChild(li);
      total += item.price;
    });
    totalPrice.innerText = total;
  };
  
  const addToCart = (item) => {
    cart.push(item);
    updateCartSummary();
  };
  
  const removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateCartSummary();
  };
  
  document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
      addToCart(items[index]);
    });
  });
  
  document.getElementById('cart').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-from-cart')) {
      const id = parseInt(event.target.getAttribute('data-id'));
      removeFromCart(id);
    }
  });
  