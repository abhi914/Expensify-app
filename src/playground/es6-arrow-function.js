let add = function(a,b) {
    console.log(arguments);
    return a + b;
};


let addArrow = (a,b) => { 
    // console.log(arguments);  NOT POSSIBLE IN ARROW FUNCTION
    return a + b;
}


// addArrow(2,5);



const user = {
    name: 'Andrew',
    cities: ['Gwalior','Jabalpur','delhi'],
    printPlacesLived: function() {
       return  this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3,4,5,6,7],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());