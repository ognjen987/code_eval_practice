//SWAP CASE

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        
        var oldLetters = line;
        var swapCaseLetters = "";
        
        for(var i = 0; i < oldLetters.length; i++){
            if(oldLetters[i] === oldLetters[i].toLowerCase()){
                swapCaseLetters += oldLetters[i].toUpperCase();
            }else {
                swapCaseLetters += oldLetters[i].toLowerCase();
            }
            
        }
        console.log(swapCaseLetters + "\n");
        
    }
});