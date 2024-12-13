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
});

// examp-6  event handling in the DOM  
document.getElementById("eventhandler").addEventListener("dblclick", function () {
  alert("hello user!!");
})

// example-7 ---- jis tea pr click kroge uska name show hoga
document.getElementById("tealist").addEventListener("" , function(event){
    console.log(event.target && event.target.matches('.teaItem'));
    alert("You Selected :" + event.target.textContent);
    
});

//example -8 ----form submitted
document.getElementById("feedbackdetails").addEventListener('submit', function(event){
  event.preventDefault();
  let feedback = document.getElementById("feedbackid").value;
  console.log(feedback);
  document.getElementById("displayed").textContent = "Feedback is submitted";
});

// example -9 



  

