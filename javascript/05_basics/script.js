//alert("connected") only for learning purpose, this is very wired in production.
//  let hold = document.getElementById("changetextbutton");
//  console.log(hold);    ---this to check what we are holding means which content we have fetched for the process

// example -1 is done
document.getElementById("changetextbutton")
.addEventListener("click", function(){
  let paragraph = document.getElementById("mypara");
  paragraph.textContent = "Paragraph is Changed!";
});

// example -2
document.getElementById("highlightfirstcity").addEventListener("click" , function () {
   let highlightedcity =  document.getElementById("citilist");
   highlightedcity.firstElementChild.classList.add("highlight");   //---- by using classList we can add our CSS by giving class name in it
});


  
