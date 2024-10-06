//singleton
//object.create()

//object literals

//symbol datatype ko bhi hum only [] se hi access kr skte h
    // decalaring symbol 
     
    const mysym = Symbol("key1")

    
const JioUser = {
    //keys : values,
    name: "shilpi",//vese toh keys bhi ek string hi h but yaha automatically,rehta h toh " " lgane ki need nhi h
    "full name" : "shilpi yadav",
    phoneNo : 9999999999,
    email: "shilpi@jiouser.com",
    lastaccessed : ["monday", "tuesday", "saturday"],
    Recharged : true,
    [mysym] : "mykey1"// if we want to use it as symbol

    
}

console.log(JioUser.email);// yeh toh access ho skta h using dot, but
console.log(JioUser["full name"]);// full name kabhi bhi access nhi ho skta using dot
//yaha hame only [] ka use krna padta h 

console.log(JioUser[mysym])

//how to change the values
JioUser.email = "shilpi@gamil.com"
//want to lock the value 
Object.freeze(JioUser.email)
console.log(JioUser.email);

//creating function
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){//second method to create function
    console.log(`Hello JS user, ${this.name}`);//this use kia jo object h uske andar ke elemts ko access krne ke liye
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





