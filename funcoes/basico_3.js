// Arrow function
const soma = (a) => {
  return (b) => {
    return (c) => a + b + c;
  };
};

// Arrow function simplificando
const somaSimplificando = (a) => (b) => (c) => a + b + c;
console.log(somaSimplificando(1)(2)(1));
