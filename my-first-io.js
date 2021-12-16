const fs = require("fs");
const file = fs.readFileSync(process.argv[2]).toString().split("\n").length;
console.log(file - 1);
// console.log(process.argv)
