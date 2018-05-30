const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = function(qs){
    return new Promise(function(resolve, reject){
        var qnum = 0;
    
        var ask = function(){
            if(!qs[qnum]) {
                rl.close();
                return resolve();
            }
    
            rl.question(qs[qnum].q, async function(input) {
                var returnval = await qs[qnum].f(input);
                if (returnval !== 'stay') qnum++;
                ask();
            });
        };
    
        ask();
    });
};