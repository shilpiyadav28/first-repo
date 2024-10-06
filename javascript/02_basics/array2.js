const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// push krne ek array ke andar dusra aaray aa ja h eg.[1,2[3,4]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)//in concating we remove this problem which arises due to "push"
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// yeh mordern method h ek se jada array ko add krne ka, and we get all elements in a single array.


// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]// if we have this problem, then how can we solve this 

const real_another_array = another_array.flat(Infinity)// using .flat(), we can resolve this ,
// in paraenthisis we can give level till we want expand array or infinite 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//checking is it array or not?
console.log(Array.from("Hitesh"))// we can directly make the array like this
console.log(Array.from({name: "hitesh"})) // interesting, here it us unable to make the array , here we need to define that, on which thing we need to make array, 
//like array should made on the values or keys?..... now gives output as [] empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//by using "of" we can also make array, by using variable name
