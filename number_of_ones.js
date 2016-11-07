//Number of ones
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var toBin = parseInt(line, 10).toString(2);
        console.log((toBin.match(new RegExp("1", "g")) || []).length);
    }
});