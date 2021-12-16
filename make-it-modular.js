const myModule = require("./mymodule");
var dir = process.argv[2];
var extension = process.argv[3];
myModule(dir, extension, (err, files) => {
  if (err) throw err;
  files.map((file) => console.log(file));
});
