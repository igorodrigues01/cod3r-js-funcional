const listProducts = [
  { name: "Caneca", quantity: 5, price: 5.99 },
  { name: "Caderno", quantity: 10, price: 15.99 },
  { name: "Caneta", quantity: 50, price: 0.99 },
  { name: "Lápis", quantity: 100, price: 0.5 },
];

// *********** filter original
const getStockDown = (product) => product.quantity <= 5;
// console.log(listProducts.filter(getStockDown));

// *********** recriando filter v1
function myFilter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) newArray.push(arr[i]);
  }
  return newArray;
}

// *********** recriando filter v2
Array.prototype.myFilter = function (fn) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

console.log(listProducts.myFilter(getStockDown));
