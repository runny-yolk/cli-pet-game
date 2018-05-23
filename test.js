var arr = [];

var qs = [
    {
        q: 'This is a question?',
        f: function(input){
            arr.push(input);
        }
    },
    {
        q: 'This is another!?',
        f: function(input){
            arr.push(input);
        }
    },
];

require('./query.js')(qs, function(){
    console.log(arr);
});