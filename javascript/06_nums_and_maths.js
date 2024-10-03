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





