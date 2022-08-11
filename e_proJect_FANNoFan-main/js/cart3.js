if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('You are being redirected to the Checkout page')
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title font-weight-bold">${title}</span>
        </div>
        <span class="cart-price cart-column">${price} x 1</span>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price-cart')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + ((total) + (total*0.02))
    document.getElementsByClassName('cart-subtotal-price')[0].innerText = '$' + (total)
}






/* Heart Click */
(function () {
    const heart = document.getElementById("heart");
    heart.addEventListener("click", function () {
        heart.classList.toggle("red");
    });
})();
(function () {
    const heart = document.getElementById("heart1");
    heart.addEventListener("click", function () {
        heart.classList.toggle("red");
    });
})();
(function () {
    const heart = document.getElementById("heart2");
    heart.addEventListener("click", function () {
        heart.classList.toggle("red");
    });
})();

/* Like Click */
(function () {
    const heart = document.getElementById("like");
    heart.addEventListener("click", function () {
        heart.classList.toggle("red");
    });
})();
(function () {
    const heart = document.getElementById("like1");
    heart.addEventListener("click", function () {
        heart.classList.toggle("red");
    });
})();
(function () {
    const heart = document.getElementById("like2");
    heart.addEventListener("click", function () {
        heart.classList.toggle("red");
    });
})();


/* Login alert */
function myFunctionalert() {
    alert("You must login or register first")
}
function myFunctionalertlogin() {
    alert("Login successful, you are redirected to your account page")
}
/* Checkout alert */
function mycheckoutalert(){
    alert("Thank you for using our product. Your order will be responded within the next 24 hours. You are being redirected to the product page")
}

/* remove div */

function myFunctionremove() {
    var myobj = document.getElementById("remove");
    myobj.remove();
}
function myFunctionremove1() {
    var myobj = document.getElementById("remove1");
    myobj.remove();
}
function myFunctionremove2() {
    var myobj = document.getElementById("remove2");
    myobj.remove();
}