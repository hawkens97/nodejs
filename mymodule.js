var fs = require("fs");
var path = require("path");

module.exports = function (dir, extension, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    list = list.filter((file) => {
      return path.extname(file) === "." + extension;
    });

    callback(null, list);
  });
};
