const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = function(qs, cb){
    var qnum = 0;

    var ask = function(){
        if(!qs[qnum]) {
            rl.close();
            return (cb && (typeof cb === 'function') ? cb() : undefined);
        }

        rl.question(qs[qnum].q+' ', input => {
            var returnval = qs[qnum].f(input);
            if (returnval !== 'stay') qnum++;
            ask();
        });
    };

    ask();
};