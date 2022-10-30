function confirmer() {
    var res = confirm("Êtes-vous sûr de commander?");
}


document.querySelector("#hamberger").addEventListener("click", function() {
    document.querySelector(".nav2-menu").classList.toggle("active");

})

let carts = document.querySelectorAll('.add-cart');


let maklas = [{
    name: 'salade concombre soja poivron',
    price: 42,
    num: 0,
}, {
    name: 'salade de chou blanc et carotte',
    price: 40,
    num: 0,
}, {
    name: 'salade dalgues',
    price: 46,
    num: 0,
}, {
    name: 'salade de chou et daikon',
    price: 54,
    num: 0,
}]


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
    if (cartItems && maklacont) {
        maklacont.innerHTML = '';
        Object.values(cartItems).map(item => {
            maklacont.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="images${item.name}.jpeg">
                <span>${item.name}</span>
            </div>
            `
        })
    }

}
displayCart();