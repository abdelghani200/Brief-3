function confirmer() {
    var res = confirm("Êtes-vous sûr de commander?");
}


document.querySelector("#hamberger").addEventListener("click", function() {
    document.querySelector(".nav2-menu").classList.toggle("active");

})

let carts = document.querySelectorAll('.add-cart');


let maklas = [{
        id: 1,
        name: 'salade concombre soja poivron',
        price: 42,
        imgfood: "images/salade-concombresojapoivron-a-la-japonaise--278713p453800.jpg",
        num: 0,
    },
    {
        id: 1,
        name: 'salade de chou blanc et carotte',
        price: 40,
        imgfood: "images/salade_de_chou_blanc_et_carotte.jpg",
        num: 0,
    },
    {
        id: 1,
        name: 'salade dalgues',
        price: 46,
        imgfood: "images/salade d'algues.webp",
        num: 0,
    },
    {
        id: 1,
        name: 'salade de chou et daikon',
        price: 54,
        imgfood: "images/salade-de-chou-et-daikon-a-la-japonaise.jpeg",
        num: 0,
    },


    {
        id: 2,
        name: 'Plat Gyoza',
        price: 42,
        imgfood: "images/Gyoza.jpg",
        num: 0,
    }, {
        id: 2,
        name: 'Plat Okonomiyaki',
        price: 40,
        imgfood: "images/Okonomiyaki.jpg",
        num: 0,
    }, {
        id: 2,
        name: 'Plat Yakitori',
        price: 46,
        imgfood: "images/Yakitori.png",
        num: 0,
    }, {
        id: 2,
        name: 'Plat Tonkatsu',
        price: 54,
        imgfood: "images/Tonkatsu.jpg",
        num: 0,
    },


    {
        id: 3,
        name: 'Gyoza',
        price: 42,
        imgfood: "images/Gyoza.jpg",
        num: 0,
    }, {
        id: 3,
        name: 'Osaka Cooking Class',
        price: 40,
        imgfood: "images/Osaka Cooking Class.png",
        num: 0,
    }, {
        id: 3,
        name: 'Obento art culinaire',
        price: 46,
        imgfood: "images/obento- art culinaire.jpg",
        num: 0,
    }, {
        id: 3,
        name: 'Box Guide',
        price: 54,
        imgfood: "images/Obento Box Guide.jpg",
        num: 0,
    },


]




for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(maklas[i]);
        totalprix(maklas[i])
    })
}

function cartNumbers(makla) {
    console.log("the product clicked is", makla);
    let maklas = localStorage.getItem('cartNumbers');
    maklas = parseInt(maklas)

    if (maklas) {
        localStorage.setItem('cartNumbers', maklas + 1);
        document.querySelector('.cart span').textContent = maklas + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(makla);
}

function setItem(makla) {
    let cartItems = localStorage.getItem('maklasNum');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[makla.name] == undefined) {
            cartItems = {
                ...cartItems,
                [makla.name]: makla
            }
        }
        console.log(cartItems[makla.name]);
        cartItems[makla.name].num += 1;
    } else {
        makla.num = 1;
        cartItems = {
            [makla.name]: makla
        }
    }

    localStorage.setItem("maklasNum", JSON.stringify(cartItems));
}


function totalprix(makla) {
    //console.log("The product price is", maklas.price);
    let catkot = localStorage.getItem('totalprix');

    if (catkot != null) {
        catkot = parseInt(catkot);
        localStorage.setItem("totalprix", catkot + makla.price);
    } else {
        localStorage.setItem("totalprix", makla.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("maklasNum");
    cartItems = JSON.parse(cartItems);
    let maklacont = document.querySelector(".products");
    let catkot = localStorage.getItem('totalprix');
    if (cartItems && maklacont) {
        maklacont.innerHTML = '';
        Object.values(cartItems).map(item => {
            maklacont.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="${item.imgfood}" class="circular--square" id="img-acht">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quanttity">
            <ion-icon class="decrease"
            name ="arrow-dropleft-circle"></ion-icon>
            <span>${item.num}</span>
            <ion-icon class="increase"
            name ="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">${item.num * item.price}</div>
            `;
        });
        maklacont.innerHTML += `
         <div class="basketTotalCont">
         <h4 class="basketTotaltitle">Prix Total</h4>
         <h4 class="basketTotal">${catkot}</h4>
         `;

    }

}
displayCart();

// const categoryTitle = document.querySelectorAll('#type-menu option');
// const allCategoryPosts = document.querySelectorAll('.all');
// console.log(categoryTitle);
// console.log(allCategoryPosts);
// for (let i = 0; i < categoryTitle.length; i++) {
//     categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
// }

// function filterPosts(item) {
//     changeActivePosition(item);
//     for (let i = 0; i < allCategoryPosts.length; i++) {
//         if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
//             allCategoryPosts[i].style.display = "block";
//         } else {
//             allCategoryPosts[i].style.display = "none";
//         }
//     }
// }

// function changeActivePosition(activeItem) {
//     for (let i = 0; i < categoryTitle.length; i++) {
//         categoryTitle[i].classList.remove('active');
//     }
//     activeItem.classList.add('active');
// };

document.querySelector(".A1").addEventListener("click", function() {
    document.querySelector("body > section.menu > div.menu-food all salades ").style.display = "flex";
    document.querySelector("body > div.mother > div.menu-food all plats ").style.display = "none";
    document.querySelector("body > div.mother > div.menu-food all obento ").style.display = "none";
})
document.querySelector(".A2").addEventListener("click", function() {
    document.querySelector("body > div.mother > div.card1 ").style.display = "none";
    document.querySelector("body > div.mother > div.card2 ").style.display = "flex";
    document.querySelector("body > div.mother > div.card3 ").style.display = "none";
})
document.querySelector(".A3").addEventListener("click", function() {
        document.querySelector("body > div.mother > div.card1 ").style.display = "none";
        document.querySelector("body > div.mother > div.card2 ").style.display = "none";
        document.querySelector("body > div.mother > div.card3 ").style.display = "flex";
    })
    // for show all
document.querySelector(".A4").addEventListener("click", function() {
    document.querySelector("body > div.mother > div.card1 ").style.display = "flex";
    document.querySelector("body > div.mother > div.card2 ").style.display = "flex";
    document.querySelector("body > div.mother > div.card3 ").style.display = "flex";
})