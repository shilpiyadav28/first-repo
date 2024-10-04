// dates

let mydate = new Date();
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleTimeString());

//there are many formats to define a date 
//let myCreatedDate = new Date(2023, 0, 23)// in single digit month will be start from 0 : january-0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);//generally yeh time miliseconds ma show krta h
// console.log(myCreatedDate.getTime());//with .get we have differnt methods , 
//which we use by press ctrl+space
// console.log(Math.floor(Date.now()/1000));// to get time in seconds this the way

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { // yeh most imp h esma hum apni date or bhi jada format ma la skte h jese hame need h 
    weekday: "long",
})