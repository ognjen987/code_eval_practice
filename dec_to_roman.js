//DECIMAL TO ROMAN
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
		var dec = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
		var rom = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ]; 
		var romanNumber = "";

        for (var i = 0; i < dec.length; i++) {
            while (dec[i] <= line) {
                romanNumber += rom[i];
                line -= dec[i];
            }
        }
        

        console.log(romanNumber);
    }
});