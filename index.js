// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const userCart = [
  { name: 'Iphone', price: 90000, category: 'mobile' },
  { name: 'samsung', price: 40000, category: 'mobile' },
];
console.log(userCart);

const totalPrice = userCart.reduce((totalSum, currentValue) => {
  return totalSum + currentValue.price;
}, 0);

console.log(totalPrice);
