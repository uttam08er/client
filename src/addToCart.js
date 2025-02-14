export const addToCart = (event, id, stock) => {
    const currentCard = document.querySelector(`#card${id}`);
    const target = event.target.className;
    const productStock = currentCard.querySelector('.product-stock');
    const productQuantity = currentCard.querySelector('.product-quantity');
    const addInCarts = currentCard.querySelector('.add-to-cart');
    let quantity = parseInt(productQuantity.textContent);

    let currentStock = stock;

    // console.log(productStock.textContent);
    // console.log(typeof(quantity));
    // console.log(target);


    const cartIncrement = () => {
        if (quantity < currentStock) {
            productQuantity.textContent = quantity + 1;
            // currentStock -= 1;
            productStock.textContent = currentStock;
        }
    }
    const cartDecrement = () => {
        if (quantity > 1) {
            productQuantity.textContent = quantity - 1;
            // stock = stock + 1;
            productStock.textContent = stock;
        }
    }

    // addInCart(){
        
    // }


    switch (target) {
        case 'cart-increment':
            cartIncrement();
            break;

        case 'cart-decrement':
            cartDecrement();
            break;

        case 'add-to--cart':
            // addInCart();
            break;

        default:
            console.log('no target');
    }

}