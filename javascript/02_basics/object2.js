// const tinderUser = new Object()// it is a singletone
const tinderUser = {}//it is non-singletone

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {           //it is an example of nested objects; so, yeh possible h ki khud ek object ek object to le skta h  
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);   // in this way we can access nested objects


//here multiple objects are there, need to add in one object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }// this is one method but not good
// const obj3 = Object.assign({}, obj1, obj2, obj4)// this another method, but {}, it is optional----the syntax is object.assign(target, source)

const obj3 = {...obj1, ...obj2}// this is mostly used ---here spread operator is uded(..., ...,)   
//here we can add multiple objects 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //it is a way to access the objects, when an object having multiple objects in an array 
// users[index no.].key---this is the syntax
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));----here we get all keys in an array datatype
// console.log(Object.values(tinderUser));----here we get all values in an array datatype
// console.log(Object.entries(tinderUser));----we get both keys and values in an array datatype

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); ----it is checking "isloggedIn" is present in the object or not

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]