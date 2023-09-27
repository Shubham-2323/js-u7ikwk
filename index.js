// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const userCart = [
//   { name: 'Iphone', price: 90000, category: 'mobile' },
//   { name: 'samsung', price: 40000, category: 'mobile' },
// ];
// console.log(userCart);

// const totalPrice = userCart.reduce((totalSum, currentValue) => {
//   return totalSum + currentValue.price;
// }, 0);

// console.log(totalPrice);

// // sort method

// const numbers = [10, 9, 23, 7, 12];
// const sort = numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(sort);

// const products = [
//   { productId: '1', productPrice: 900, productModel: 'p1' },
//   { productId: '2', productPrice: 300, productModel: 'p2' },
//   { productId: '3', productPrice: 800, productModel: 'p3' },
//   { productId: '4', productPrice: 500, productModel: 'p4' },
//   { productId: '5', productPrice: 250, productModel: 'p5' },
// ];

// const sorted = products.slice(0).sort((a, b) => {
//   return a.productPrice - b.productPrice;
// });

// console.log(products);
// console.log(sorted);

// // every
// const userCart2 = [
//   { name: 'Iphone', price: 20000, category: 'mobile' },
//   { name: 'samsung', price: 20000, category: 'mobile' },
// ];

// const ans = userCart2.every((number) => {
//   return number.price < 30000;
// });

// console.log(ans);

// const fucntion = (name, age) => {
//   const prop = {
//     name: name,
//     age: age,
//   };

//   const intro = `My name is ${prop.name} and my age is ${prop.age}`;
//   return intro;
// };
// console.log(fucntion('shubh', 12));

// loops

// for (let i = 0; i < 1000; ) {
//   console.log(i);
// }

// console.log(fruits);

// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log('Walking east one step');
// }

// sum of n natural number
console.log('abcd');

function sum(n) {
  let total = 0;
  for (i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

console.log(sum(5));
