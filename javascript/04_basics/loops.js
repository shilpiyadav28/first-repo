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







