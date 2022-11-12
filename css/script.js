
document.querySelector("#hamberger").addEventListener("click", function() {
    document.querySelector(".nav_bar").classList.toggle("active");

})

document.querySelector("#hamberger").addEventListener("click", function() {
    // document.querySelector(".search").style.display = "none";
    document.querySelector(".search").classList.toggle("active");
})



// document.querySelector(".crt").addEventListener("click", function() {
//     document.querySelector(".products-container").style.display= "block";

// })




// filter

 var dish_options = document.getElementById("Category");
 var dishes = document.getElementsByClassName("p-item");

// dish_options.addEventListener("change", (e) => {
//   let selected_dish = e.target.value;
//   console.log(selected_dish);
//   for (const dish of dishes) {
//     if (selected_dish == "all") {
//         console.log("all");
//       dish.style.display="unset";
//     } else if (dish.type === selected_dish) {
//         console.log("dish.type");
//         dish.style.display="unset";
//     } else {
//         dish.style.display="none";
//     }
//   }
// });

// ////////////////////////////

dish_options.addEventListener("change", (e) => {
  let selected_dish = e.target.value;
  console.log(selected_dish);
  for (const dish of dishes) {    
    if (selected_dish == "all") {
        // dish.classList.remove("hide");
        dish.style.display="unset";
        
    } else if (dish.className.includes(selected_dish)) {
        // dish.classList.remove("hide");
        dish.style.display="unset";
    } else {
        // dish.classList.add("hide");
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