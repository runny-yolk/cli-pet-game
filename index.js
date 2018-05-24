const app = require('./app.js');
var query = require('./query.js');

var qs = [
    {
        q: 'What would you like to name your pet?',
        f: input => app('pet new '+input)
    },
    {
        q: '>',
        f: input => {
            console.log( app(input) );
            console.log();
            return 'stay';
        }
    },
];

query(qs);