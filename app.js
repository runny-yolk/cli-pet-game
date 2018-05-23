function Pet(name){
    this.name = name;
}
Pet.prototype = {
    happiness: 0,
    carry: 10,
    held: {}
}

var pets = {
    
};

var pet = new Pet('');

var box = {
    food: 0
};

var items = [
    {
        type: 'brick',
        weight: 10,
        value: 5
    },
    {
        type: 'food'
    }
]

var commands = {
    find: item => {
        if(item) console.log(pet.name, 'is searching for '+item+'...');
        else console.log(pet.name, 'is searching...');

        
    },
    feed: () => {
        if(box.food <= 0) return 'You have no food to feed with. Ask your pet to find some!';

        pet.happiness++
        return pet.name+' is happier for being fed.';
    },
    pat: () => {
        pet.happiness++
        return pet.name+' is happier for being patted.';
    },
    slap: () => {
        pet.happiness--
        return 'Please do not abuse '+pet.name+'.';
    },
    name: newname => {
        var oldname = pet.name;
        pet.name = newname;

        pets[newname] = pet;
        delete pets[oldname];

        var rando = Math.random();

        if (rando < 0.1) {
            pet.happiness++;
            return 'Name changed to '+newname+'. It likes its new name!';
        }
        else if (rando > 0.9) {
            pet.happiness--;
            return 'Name changed to '+newname+'. It does not like its new name..';
        }
        else return 'Name changed to '+newname;
    },
    pet: arg => {
        arg = arg.match(/(\w*)\s*(.*)/);

        if(arg[1] === 'happiness') return pet.name+'\'s happiness is '+pet.happiness.toString(10);

        if(arg[1] === 'switch') {
            var name = arg[2];
            if(!pets[name]) return 'You don\'t own a pet by that name.';
            
            pet = pets[name];
            return 'Pet switched to '+name;
        }

        if(arg[1] === 'new') {
            if(!arg[2]) return 'Please give your new pet a name.';

            var newname = arg[2];
            pets[newname] = new Pet(newname);
            pet = pets[newname];
            return 'New pet '+newname+' created successfully!';
        }

        return;
    }
}

module.exports = function (input) {
    input = input.match(/(\w*)\s*(.*)/);

    if(input === null) return 'Invalid command';

    var command = input[1];
    var arg = input[2];

    if (commands[command] === undefined) return 'Invalid command';
    else {
        var returnval = commands[command](arg);

        if (returnval === undefined) return 'Invalid argument(s) '+arg+' for command '+command;
        else return returnval;
    }
}