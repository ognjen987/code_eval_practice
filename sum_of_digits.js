//SUM OF DIGITS CODEEVAL
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !=="") {
        var number = line;
        var output = [];
        var sumNumber = number.toString();
    
        for(var i = 0, len = sumNumber.length; i < len; i += 1){
        	output.push(+sumNumber.charAt(i));
        }

        for(var i = 0, sum = 0; i < output.length; sum += output[i++]){
            
        }

        process.stdout.write(sum + "\n");
    }
});