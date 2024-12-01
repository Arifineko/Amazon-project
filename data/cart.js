export const cart = [];

export function addToCart(productId) {
    //2 fitur disini: add to cart & just add the quantity

    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    })

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId,
            quantity: 1
        })
    }
}