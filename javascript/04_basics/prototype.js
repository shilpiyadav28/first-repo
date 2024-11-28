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

function Smartphone (company, model) {
    this.company = company,
    this.model = model
};

function tablet (company, model){
    this.company = company,
    this.model = model
};
 let myPhone = new Smartphone ("iphone", "13");
 console.log(myPhone);

 
 









