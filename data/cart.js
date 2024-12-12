export let cart = JSON.parse(localStorage.getItem('cart')) || [];


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    })

    const selectorEl = document.querySelector(`.js-quantity-selector-${productId}`)
    const quantity = Number(selectorEl.value)

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId,
            quantity
        })
    }

    let timeoutId;

    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)
    addedMessage.classList.add('display')

    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
        addedMessage.classList.remove('display')
    }, 2000);

    saveToStorage()
}


export function removeFromCart(productId) {
    const newCart = cart.filter(cartItem => cartItem.productId !== productId);
    cart = newCart

    saveToStorage()
}

export function calculateCartQuantity() {
    let cartQuantity = 0

    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity
    })

    return cartQuantity
}

export function updateQuantity(productId, newQuantity) {
    const matchingProduct = cart.find(cartItem => cartItem.productId === productId)

    if (matchingProduct) {
        matchingProduct.quantity = newQuantity;
    }

    saveToStorage()
}