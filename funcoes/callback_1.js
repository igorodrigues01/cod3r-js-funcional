function exec(fn, a, b) {
  return fn(a, b);
}

function soma(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const r1 = exec(soma, 5, 5);
const r2 = exec(subtract, 25, 5);

console.log(r2);

function fn() {
  console.log("Executando....");
}

fn();

// setInterval(fn, 1000);
