const process = require("process");
const http = require("http");

const url = process.argv[2];

http.get(process.argv[2], (response) =>
  response.on("data", (data) => {
    console.log(data.toString());
  })
);
