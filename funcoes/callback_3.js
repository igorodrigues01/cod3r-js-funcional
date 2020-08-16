const nums = [1, 2, 4, 5];
const dobro = (n) => n * 2;
// console.log(nums.map(dobro));

const nomes = ["Bia", "Ana", "Julia", "Beca"];
const primeiraLetra = (n) => n[0];
const letra = nomes.map(primeiraLetra);

// console.log(letra);

/*  --------------- Carrinho do desafio ------------------ */

const cart = [
  { name: "caneca", quantity: 10, price: 7.99 },
  { name: "caneta", quantity: 2, price: 2.59 },
  { name: "Monitor", quantity: 5, price: 657.99 },
  { name: "folhas", quantity: 15, price: 0.99 },
];

// Nome do produto
const getName = cart.map((product) => product.name);
// Sub total individual de produtos
const getTotal = cart.map((product) => {
  // Resultado do subtotal individual(quantidade x valor)
  let priceInReal = product.quantity * product.price;
  // convertendo valor para real(toLocaleString)
  return priceInReal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
});

console.table(getName);
console.table(getTotal);
