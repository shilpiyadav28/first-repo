//about strings
const str1= "shilpi"
const str2 = "Yadav"
// concatinating of strings

const newstr = str1+str2 + 28;
console.log(newstr);

//one more method of declaration of string is :
 const gameName = new String('shilpi ji')// es trah se define krne pr hame string ke operationa mil jate h.
//const gameName = new String('hitesh-hc-com'

//  //how can access the string and 
//  yeh jo bhi values ko hum change kr rhe h us se orginal valus ma koi change nhi aayega kyuki 
//  strings (primitive data) stack ma save hoota jaha changes are made on only copied things.

 console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));
console.log(gameName.indexOf('i'));
console.log(gameName.toUpperCase());

const mystr = gameName.substring(0,4)//in substring we have define substring(start,end),if start is not givn then it takes default from first and same as for last
console.log(mystr);
//slicing
console.log(gameName.slice(-8,-1));
console.log(gameName.slice(-2,1,-1));//not sure for this
//trim
const mystr1= "      shilpi      "
console.log(mystr1);
console.log(mystr1.trim());//it will remove the blank spaces from start / end

const mynewstring = "hello world, we are on the earth"
console.log(mynewstring.replace('h', 'H'));
console.log(mynewstring.replaceAll('h', 'H'));
console.log(mynewstring.includes('moon'));// is the keywod matching with the string or not here answer is false
console.log(mynewstring.split(' '));// this converts the string into array but on the basis of space , hypen ,dot etc.
// for further operations, we can check mdn page






 
