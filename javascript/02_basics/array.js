// array
//methods of defining array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)//push the elements in the last of the array
// myArr.push(7)
// myArr.pop()//pop the element from the last of the array

// myArr.unshift(9)---insert the element in the first of the array
// myArr.shift()----removes the element from first of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //joins two or more array but also convert them in string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// we get only [1,2]

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);// we get [1,2,3] 
console.log(myn2);

//++++++++++important as per interview +++
// difference between slice and splice is :
// slice ma jo bhi operation perform krte h usse orignal array pr koi frak nhi padat 
// but splice ma hamare changes will reflect in the orignal array
// jese esma C---jo h voh bss ab [0,4,5] hi reh gya h 


