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

// sort method

const numbers = [10, 9, 23, 7, 12];
const sort = numbers.sort((a, b) => {
  return a - b;
});

console.log(sort);

const products = [
  { productId: '1', productPrice: 900, productModel: 'p1' },
  { productId: '2', productPrice: 300, productModel: 'p2' },
  { productId: '3', productPrice: 800, productModel: 'p3' },
  { productId: '4', productPrice: 500, productModel: 'p4' },
  { productId: '5', productPrice: 250, productModel: 'p5' },
];

const sorted = products.slice(0).sort((a, b) => {
  return a.productPrice - b.productPrice;
});

console.log(products);
console.log(sorted);

// every
const userCart2 = [
  { name: 'Iphone', price: 20000, category: 'mobile' },
  { name: 'samsung', price: 20000, category: 'mobile' },
];

const ans = userCart2.every((number) => {
  return number.price < 30000;
});

console.log(ans);
