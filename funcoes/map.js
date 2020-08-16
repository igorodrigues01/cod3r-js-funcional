const cartSession = [
  { name: "Caneca", quantity: 5, price: 5.99 },
  { name: "Caderno", quantity: 10, price: 15.99 },
  { name: "Caneta", quantity: 50, price: 0.99 },
  { name: "Lápis", quantity: 100, price: 0.5 },
];

// ******************* Map Original
const getName = (product) => product.name;
// console.log(cartSession.map(getName));

const getSubTotal = (product) => {
  const coin = product.quantity * product.price;
  return coin.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
// console.log(cartSession.map(getSubTotal));

// ********************** Recriando Map v1
function myMap(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i, arr));
  }
  return newArray;
}

// console.log(myMap(cartSession, getName));
// console.log(myMap(cartSession, getSubTotal));

// ********************** Recriando Map v2

Array.prototype.myMap = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i], i, this));
  }
  return newArray;
};

console.log(cartSession.myMap(getName));
console.log(cartSession.myMap(getSubTotal));
