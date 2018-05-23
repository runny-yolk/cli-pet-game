const app = require('./app.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getinput(){
    rl.question('> ', input => {
        
        console.log( app(input) );
        console.log();
    
        getinput();
    });
}

rl.question('What would you like to name your pet? ', input => {
    app('pet new '+input);

    getinput();
});
