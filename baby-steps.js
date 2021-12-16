const sum = (a, b, d) => a + b + d;
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const d = Number(process.argv[4]);
console.log(`${sum(a, b, d)}`);
