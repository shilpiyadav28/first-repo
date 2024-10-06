//functions

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){     //----number1, number2 are parametrers

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2   //this one method
    // return result
    return number1 + number2            //another method (mostly used)
}

const result = addTwoNumbers(3, 5)    //3,5--are arguments but agar hum yaha ek int value de or ek string , then gadbad ho skti h 

// console.log("Result: ", result);



// this is a function which gives a message that user is loggedin

function loginUserMessage(username = "sam"){        
    if(!username){        //another method is ---username === undefined but (!undefined ---is mostly used) and one more thing to resolve this problem is 
        //we can give a default value , ki agar koi koi bhi name nhi pass kr rha h toh "sam" hi print ho jaye
        //if loop checks, user has passed anyvalue or not, if it is true then console vali line print hogi and return ke baad vali print hi nhi hoogi 
        // kyuki fuction ek bar return aagya then ,uske baad ke line exceute nhi hoti h

        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// yeh function bnaya h hamne eg. of shaopping card, jisma hame input ma kitni values aayegi yeh nhi pta 
//here we used ...num1(rest /spread operator bolte h)
//jitne bhi input aayenge voh sb num1 ma jake [arrayki form ma save hoo jayenge ]
// and agar val1,val2 use kiya h toh yeh starting do values to lega and baki rest of values will go into tthe num1 as an array.
function calculateCartPrice(val1, val2, ...num1){     
    return num1   

}

// console.log(calculateCartPrice(200, 400, 500, 2000))


//how fuction works on objects
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


//how function works with array
 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));