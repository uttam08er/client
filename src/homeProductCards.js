import { addToCart } from "./addToCart";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate'); 


export const showProductContainer=(products) =>{
    if(!products){
        return false;
    }

    products.forEach((curProduct) => {
        const { id, name, category, brand, price, stock, description, image} = curProduct;
        
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);

        productClone.querySelector('.product-name').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.product-image').src = image;
        productClone.querySelector('.product-desc').textContent = description;
        productClone.querySelector('.product-price').textContent = `₹${price}`;
        productClone.querySelector('.actual-product--price').textContent = `₹${(price*1.6).toFixed(2)}`;
        productClone.querySelector('.product-stock').textContent = stock;

        productClone.querySelector('.cards').addEventListener('click',(event)=>{
            addToCart(event, id, stock);
        })
        productContainer.append(productClone);
    });
}