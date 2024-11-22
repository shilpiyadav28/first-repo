// questions on for loop
// write a for loop that loops through the array and stops when get the "chai"

let tea = [ "green tea", "oolong tea", "chai", "black tea"];

let selctedTeas = [];
for (let i=0; i < tea.length; i++){
    if (tea[i] === "chai"){
        break;
    }
    selctedTeas.push(tea[i]);
}

console.log(selctedTeas);


//2 write a for loop that loops through the array and skips the "paris" and store other places in new "VisitedPalces"

let places = [ "london", "america", "paris", "france", "japan"];

let visitedPlaces = [];

for (let i=0; i<places.length; i++){
    
    if (places[i]=== "paris" || places[i]=== "Paris"){
        continue;
    }
    visitedPlaces.push(places[i]);
 
}
console.log(visitedPlaces);

// for-of loop 
// let mylist =[2, 5,6,7]
// for loop is used to iterate the loop to get the values from array, string , sets ( to get the values directly)
// for (const i of mylist) {
//     // i is the element name and mylist is the object
// }
//for-in loop is used to iterate find the key-values

// 6. stop the loop when "berlin" found

let citipoupulation = {
    india : 13000000,
    london : 750000,
    "New York" : 370000,
    berlin : 980000,
    paris : 870000,
}
let populationTable ={};
for (const i in citipoupulation) {
    // console.log (key + " : " + object[key]) // to get both key and values
        //console.log(i + " : " + citipoupulation[i]);
        if (i === "berlin" || i=== "Berlin"){
            break;
        }
        populationTable[i] = citipoupulation[i];
        //console.log(i + " : " + citipoupulation[i]);
    
}

// skip the loop which is having morethan 3M population

let population = {
    india : 13000000,
    london : 75000,
    "New York" : 370000,
    berlin : 98000,
    paris : 8700,
};
let largeCities = {};
for (const i in population) {
    if (population[i]>=300000){
        continue;
    }
    largeCities[i] = population[i]
    console.log(i + " : " + largeCities[i]);
    
    
}

// forEach loop
// it is a inbulit function or method to iterate an array to give output one by one without using external variables;
// syntax 
// array.forEach(function(currentValue, index, array){
    //   eg:  console.log(index +":" + currentValue) 


    //hum esko ese bhi likh skte h or alag ek function bhi bna skte h , or call kr ste h
// function loop (currentValue, index, array){
    //console.log(index +":" + currentValue)
//});

//});

let array = [ "sanjay", "jhon", "alice"];

array.forEach(function(value,index) {  // value and index are variable names , it can be anything
    console.log(index + ":" + value);
});


// 7 using for Each loop stop the loop when chai is found

let drinks = ["coke", "maazza", "pepsi" , "chai", "milk"]
let givenOrder = [];
drinks.forEach(function(v){
    if(v === "chai" || v === "Chai"){
        return;   // break yaha use nhi hoga kyuki we are in loop but although we are in function;
    }
    givenOrder.push(v);

})
console.log(givenOrder);

//8 iterate the loop skip "delhi"

let tour = ["chandigadh", "jibhi", "delhi", "himachal", "manali"];
let vistingPlaces = [];
tour.forEach(function(place){
    if( place ==="delhi" || place ==="Delhi"){
        return;  // yaha skip ke liye return use krne pr bhi yeh har element ke liye loop run hoooga
    }
    vistingPlaces.push(place);
})

console.log(vistingPlaces);












