// les produits

let products = [
  {
    type: "sushi",
    name : "salade concombre soja poivron",
    img : "salade-concombresojapoivron-a-la-japonaise--278713p453800.jpg",
    price : 28
  },
  {
    type: "sushi",
    name : "salade de chou blanc et carotte",
    img : "salade_de_chou_blanc_et_carotte.jpg",
    price : 34
  },
  {
    type: "sushi",
    name : "salade de chou et daikon",
    img : "salade-de-chou-et-daikon-a-la-japonaise.jpeg",
    price : 67
  },
  {
    type: "sushi",
    name: "salade de chou et daikon",
    img:"salade-de-chou-et-daikon-a-la-japonaise.jpeg",
    price: 25,
  },
  {
    type: "plat",
    name : "Plat Gyoza",
    img : "Gyoza.jpg",
    price : 45
  },
  {
    type: "plat",
    name : "Plat Okonomiyaki",
    img : "Okonomiyaki.jpg",
    price : 43
  },
  {
    type: "plat",
    name : "Plat Yakitori",
    img : "Yakitori.png",
    price : 31
  },
  {
    type: "plat",
    name: 'Plat Tonkatsu',
    img:"Tonkatsu.jpg",
    price: 24,
  },
  {
    type: "obento",
    name : "Plat Gyoza",
    img : "Gyoza.jpg",
    price : 55
  },
  {
    type: "obento",
    name : "Osaka Cooking Class",
    img : "Osaka Cooking Class.png",
    price : 46
  },
  {
    type: "obento",
    name : "Obento art culinaire",
    img : "obento- art culinaire.jpg",
    price : 56
  },
  {
    type: "obento",
    name : "Box Guide",
    img : "Obento Box Guide.jpg",
    price : 34
  }
 
];
 



var cart = {
 
  hPdt : "",      
  hItems : "",   
  items : {},       
  iURL : "images/", 
  
  
  save : () => {
    localStorage.setItem("cart",JSON.stringify(cart.items));
    
    // console.log(cart);
    // console.log(cart.items);
    
  },


  
  load : () => {
    cart.items = localStorage.getItem("cart");
    console.log(cart.items);

    if (cart.items == null) {
       cart.items = {}; 
      //  console.log(cart.items);
      }
    else { 
      cart.items = JSON.parse(cart.items); 

      // console.log(cart.items);
    }
  },

  
  nuke : () => {
     if (confirm("Empty cart?")) {
    cart.items = {};
    localStorage.removeItem("cart");
    cart.list();
  }},

  
  init : () => {
    
    cart.hPdt = document.getElementById("cart-products");
    cart.hItems = document.getElementById("cart-items");

    // console.log();
    // cart.hPdt.innerHTML = "";
    let p;
            
    for (let id in products) {
      p = products[id];
      
      
      var produits = document.getElementById("cart-products");
      console.log(produits);
      var produit = document.createElement("div");
      //  console.log(produit);
      produit.classList.add("p-item");
      produit.classList.add(p.type);
      
      var produitContent = `
      <img class="p-img" src = "${cart.iURL + p.img}" />
      <div class="p-name">${p.name}</div>
      <div class="p-price">$ ${p.price.toFixed(2)}</div>
      <button class="cart p-add">Add To Cart</button>
      </div>
      `;
      produit.innerHTML = produitContent;

      produit.querySelector(".p-add").onclick = () => { cart.add(id); };

      produits.append(produit);
      cart.hPdt.appendChild(produit);
    }



    
    cart.load();

    
    cart.list();
  },

  
  list : () => {
    
    cart.hItems.innerHTML = "";
    let item,empty = true;
    for (let key in cart.items) {
      // console.log(typeof("key"));
      if (cart.items.hasOwnProperty(key)) { 
        // console.log(cart.items.hasOwnProperty(key));

        empty = false; 
        break; 
      }
    }

    
    if (empty) {
    //  console.log(empty);
      item = document.createElement("div");
      // console.log(item);
      item.innerHTML = "Cart is empty";
      cart.hItems.appendChild(item);
    }

    
    else {
      let template = document.getElementById("template-cart").content,
          p, total = 0, subtotal = 0;
      for (let id in cart.items) {
        
        p = products[id];
        item = template.cloneNode(true);
        item.querySelector(".c-del").onclick = () => { cart.remove(id); };
        item.querySelector(".c-name").textContent = p.name;
        item.querySelector(".c-qty").value = cart.items[id];
        item.querySelector(".c-qty").onchange = function () { cart.change(id, this.value); };
        cart.hItems.appendChild(item);

        
        subtotal = cart.items[id] * p.price;
        // console.log(subtotal);
        total += subtotal;
        // console.log(total);
      }

      
      item = document.createElement("div");
      item.className = "c-total";
      item.id = "c-total";
      item.innerHTML ="TOTAL: $" + total;
      cart.hItems.appendChild(item);

      
      item = document.getElementById("template-cart-checkout").content.cloneNode(true);
      cart.hItems.appendChild(item);
    }
  },

 
  add : (id) => {
    if (cart.items[id] == undefined) { 
      cart.items[id] = 1; 
    }
    else { 
      cart.items[id]++; 
    }
    cart.save(); cart.list();
  },

  
  change : (pid, qty) => {
    
    if (qty <= 0) {
      delete cart.items[pid];
      cart.save(); cart.list();
    }

    
    else {
      cart.items[pid] = qty;
      var total = 0;
      for (let id in cart.items) {
        total += cart.items[id] * products[id].price;
        document.getElementById("c-total").innerHTML ="TOTAL: $" + total;
      }
    }
  },

  
  remove : (id) => {
    delete cart.items[id];
    cart.save();
    cart.list();
  },

 
  checkout : () => {
    
    alert("Thank you for your visit");

    
  }
};


















































window.addEventListener("DOMContentLoaded", cart.init);




    // let template = document.getElementById("template-product").content,
    //     p, part;
    //     console.log("trgt");
    //     let item = document.querySelector("p-item").childElementCount;
    //     console.log(item);
    //     console.log("werve");


    // for (let id in products) {
    //   p = products[id];
    //   item = template.cloneNode(true);
    //   item.querySelector(".p-img").src = cart.iURL + p.img;
    //   item.querySelector(".p-name").textContent = p.name;
    //   item.querySelector(".p-item").className =  "p-item " + p.type;
    //   item.querySelector(".p-price").textContent = "$" + p.price.toFixed(2);
    //   item.querySelector(".p-add").onclick = () => { cart.add(id); };
    //   // item.className.add(p.type);
    //   item.classList.add("hh");
    //   console.log(item.className);
    //   cart.hPdt.appendChild(item);
    // }