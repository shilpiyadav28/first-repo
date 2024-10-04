const score =400
console.log(score);// this only give u number or it may be some other thing

const balance= new Number(100)// but if we want specific number only then we use this format,through this we get more operations on it,
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));// point ke baad kitne decimal tak value rehegi voh decide krta h 

const num1= 12.37888
const num2= 123.7888
const num3= 1123.7888
const num4= 1237.888

console.log(num1.toPrecision(3));//it is very imp, yeh bhot dhyan se number dena hoota h 
//jaise hume value 123 ya 12.3  ya tak toh chahiye hi uske baad ka precise kr na h toh esma hum 3 denge , taki 3 digit tak precise kr de 
console.log(num2.toPrecision(3));
console.log(num3.toPrecision(3));
console.log(num4.toPrecision(3));

const total=10000000
console.log(total.toLocaleString('en-IN'));// yeh numbers ma comma provide jrne ma help krta h 
//esma 'en-IN' use kia h indian comma system ko use krne ke liye, agar yeh blank rhega toh US system use kr lega.

//++++++++++++++++ MTHS+++++++++

//Math is also a function of JS

// console.log(Math);
// console.log(Math.abs(-4));//abosolute value : coverts any negative number into positive
// console.log(Math.round(4.6));// round off
// console.log(Math.ceil(4.2));// round off but takes upper value eg. here it will take 5
// console.log(Math.floor(4.9));// round off but takes lower value, here it takes 4
// console.log(Math.min(4, 3, 6, 8));// gives min value=3
// console.log(Math.max(4, 3, 6, 8));// gives max=8

console.log(Math.random());//gives any random value from 0 to 1
console.log((Math.random()*10) + 1);// but we want minimum value should be one not 0, thus we multiply by 10 and add 1
console.log(Math.floor(Math.random()*10) + 1); // as we want roundoff as well so using math.floor

//case like we want number in between a rage, so we sepcify the min and max values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// here we need value from 10-20 only so, Math.random()--we get any value. thus, to get our values we set 
//console.log(Math.floor(Math.random() * (max - min + 1)) + min)