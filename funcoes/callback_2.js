const fs = require("fs");
const path = require("path");

const myPath = path.join(__dirname, "dados.txt");

// readyFile
const fn = (_, data) => console.log(data.toString());
console.log("not async");
fs.readFile(myPath, fn);

// readyFileSync

console.log("Carregando..");
const data = fs.readFileSync(myPath);
console.log(data.toString());
