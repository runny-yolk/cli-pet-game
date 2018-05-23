const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = function(qs, callback){
    var qnum = 0;

    var ask = function(){
        if(!qs[qnum]) {
            rl.close();
            return callback();
        }

        rl.question(qs[qnum].q+' ', input => {
            var returnval = qs[qnum].f(input);
            if (returnval !== 'stay') qnum++;
            ask();
        });
    };

    ask();
};