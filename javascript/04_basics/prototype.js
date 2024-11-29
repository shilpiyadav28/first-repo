// prototype means properties of the elment  and the 
//use of prototype is taking / copying the properties of other element into it

let ladiesWear = {
    sarees : "silk",
    suits : "anarkali",
}
let mensWear = {
    dhoti : "cotton",
    kurta : "silk",
    __proto__ : ladiesWear,

}; 

console.log(`mensWear` , mensWear.__proto__);

// another mthod to creating prototype :
 

let phone = {
    ram : 4,
}

let laptop ={
    harddisk : 256,
}

Object.setPrototypeOf(laptop, phone); //(in, of)

console.log(`laptop`, Object.getPrototypeOf(laptop));
console.log(laptop);

// **********************************************************************
 // constructor functions ---- it is similar to the functions but if it defines in oops/ class or objects then we say this
// constructor functions and class when we made , 
//the first letter of the variable name should be in capital

function Smartphone (company, model) {
    this.company = company,
    this.model = model
};

function tablet (company, model){
    this.company = company,
    this.model = model
};
 let myPhone = new Smartphone ("iphone", "13");  /// here we made an object 
 console.log(myPhone);

//  ******************************************************************************
  // we can add function itself in the constructor function

function Tea(type){
    this.type = type;
    this.describe = function(){           // we see we can add functionsinto into it
        return `this is a cup of ${this.type}`
    };
}

let blackTea = new Tea ("blackTea");
console.log(blackTea.describe());

// one more example of prototype chain

function Animal (type){              // this is our class having name Animal
    this.type = type;
}

Animal.prototype.sound = function(){          // here we can see that prototype chaining is used
    return `this is the sound of ${this.type}`
}

let dog = new Animal ("dog")
console.log(dog.sound());

let cat = new Animal("cat")
console.log(cat.sound());

// ******************************************************************************
//ERRORS ------it will throw error when " new" keywoard is not used while creating objects

function drink(type){
    
    if(!new.target){
        throw new Error("You forgot to add new keyword while creating the object");
        
    }
    this.type = type;
}
let coffee = new drink ("coffee");
//let chai =  drink ("chai");            // here we got the error 

console.log(coffee);
//console.log(chai);
// ******************************************************************************

// classes how we make classes 

class FootWear {              // this is a class
    constructor (size, type){            
        this.size = size;
        this.type = type;
      
    }
    sample() {     //  this is a method ---in class functions are known as methods
        return `size No  ${this.size} of the ${this.type} `;
    }

}
let myfootwear = new FootWear ("5", "heels");  // this is the object 
console.log(myfootwear.sample());















