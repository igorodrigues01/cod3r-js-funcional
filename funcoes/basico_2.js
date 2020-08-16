// função soma
function soma(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(soma(3)(4)(1));

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function somar(a, b) {
  return a + b;
}

// calcular(5)(1)(subtrair);
// calcular(5)(5)(somar);

function nameComplete(nome) {
  return function (fn) {
    return fn(nome);
  };
}

function tratarDados(a) {
  if (a) {
    if (typeof a === "string") {
      return a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      return "Não é uma string!";
    }
  } else {
    return "Não definido";
  }
}

console.log(nameComplete("")(tratarDados));
