// function declaration
function goodMorning() {
  console.log("Good Morning!");
}
goodMorning();

// function express
const goodMorningExpress = function () {
  console.log("Good Morning Express");
};
goodMorningExpress();

// function params
function goodMoringParams(a, b) {
  return `Good Morning ${a}`;
}
console.log(goodMoringParams("Igor"));

// function Params NaN/undefined
function goodMoringParamsNan(a, b) {
  return `Good Morning ${a} ${b}`;
}
console.log(goodMoringParamsNan("Igor"));

// function params default
function goodMoringParamsDefault(a = ":)", b = ";/") {
  return `Good Morning ${a} e ${b}`;
}
console.log(goodMoringParamsDefault());
