//alert("connected") only for learning purpose, this is very wired in production.
//  let hold = document.getElementById("changetextbutton");
//  console.log(hold);    ---this to check what we are holding means which content we have fetched for the process

// example -1 is done
document.getElementById("changetextbutton")
.addEventListener("click", function(){
  let paragraph = document.getElementById("mypara");
  paragraph.textContent = "Paragraph is Changed!";
});

// example -2 // traversing the content
document.getElementById("highlightfirstcity").addEventListener("click" , function () {
   let highlightedcity =  document.getElementById("citilist");
   highlightedcity.firstElementChild.classList.add("highlight");   //---- by using classList we can add our CSS by giving class name in it
});


//example -3 //changing/ manipulating the content
document.getElementById("changeItem").addEventListener("click", function (){
   let order = document.getElementById("chaiType");
   order.textContent = "Expresso";
   
})


//example -4 
//creating and inserting elements

// document.getElementById("addNewitem").addEventListener("click" , function () {
  
//   let newitem = document.createElement('li');
//   newitem.textContent = "Eggs";
  
//   document.getElementById("shoppinglist").appendChild("newitem");
// });
document.getElementById("addNewitem").addEventListener("click" , function () {
  const  changedItem = document.createElement('li');
  changedItem.textContent = "Eggs";

const addingchild = document.getElementById("shoppinglist");
addingchild.appendChild("changedItem");
});
  

//example-5 --- removing the elements

document.getElementById("removetask").addEventListener("click" , function () {
  let newtasklist = document.getElementById("tasking");
  newtasklist.lastElementChild.remove(newtasklist);
})
