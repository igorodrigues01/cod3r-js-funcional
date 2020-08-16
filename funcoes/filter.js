const listProducts = [
  { name: "Caneca", quantity: 5, price: 5.99 },
  { name: "Caderno", quantity: 10, price: 15.99 },
  { name: "Caneta", quantity: 50, price: 0.99 },
  { name: "Lápis", quantity: 100, price: 0.5 },
];

// *********** filter original
const getStockDown = (product) => product.quantity <= 5;
console.log(listProducts.filter(getStockDown));

// *********** recriar filter
