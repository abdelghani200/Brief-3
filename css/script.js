
document.querySelector("#hamberger").addEventListener("click", function() {
    document.querySelector(".nav_bar").classList.toggle("active");

})

// document.querySelector("#hamberger").addEventListener("click", function() {
//     // document.querySelector(".search").style.display = "none";
//     document.querySelector(".search").classList.toggle("active");
// })



// document.querySelector(".crt").addEventListener("click", function() {
//     document.querySelector(".products-container").style.display= "block";

// })




// filter

 var options = document.getElementById("Category");
 var dishes = document.getElementsByClassName("p-item");


 options.addEventListener("change", (e) => {
  let selected = e.target.value;
  console.log(selected);
  for (const dish of dishes) {    
    if (selected == "all") {
        
        dish.style.display="unset";
        
    } else if (dish.className.includes(selected)) {
       
        dish.style.display="unset";
    } else {
        
        dish.style.display="none";
      }
  }
});









// hhhhhhhhhhhh



// document.querySelector(".A1").addEventListener("click", function () {
//     document.querySelector(".toutes-salade").style.display = "flex";
//     document.querySelector(".tout-plats").style.display = "none";
//     document.querySelector(".tout-obento").style.display = "none";
// })
// document.querySelector(".A2").addEventListener("click", function () {
//     document.querySelector(".toutes-salade").style.display = "none";
//     document.querySelector(".tout-plats").style.display = "flex";
//     document.querySelector(".tout-obento").style.display = "none";
// })
// document.querySelector(".A3").addEventListener("click", function () {
//     document.querySelector(".toutes-salade").style.display = "none";
//     document.querySelector(".tout-plats").style.display = "none";
//     document.querySelector(".tout-obento").style.display = "flex";
// })
// // for show all
// document.querySelector(".A4").addEventListener("click", function () {
//     document.querySelector(".toutes-salade").style.display = "flex";
//     document.querySelector(".tout-plats").style.display = "flex";
//     document.querySelector(".tout-obento").style.display = "flex";
// })