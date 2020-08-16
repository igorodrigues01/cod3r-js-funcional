const cartSession = [
  { name: "Caneca", quantity: 5, price: 5.99 },
  { name: "Caderno", quantity: 10, price: 15.99 },
  { name: "Caneta", quantity: 50, price: 0.99 },
  { name: "Lápis", quantity: 100, price: 0.5 },
];

// ******************* Map Original
const getName = (product) => product.name;
console.log(cartSession.map(getName));

const getSubTotal = (product) => {
  const coin = product.quantity * product.price;
  return coin.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
console.log(cartSession.map(getSubTotal));

// ********************** Recriando Map
