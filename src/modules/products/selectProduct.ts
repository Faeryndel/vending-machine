import {displayMessage, messages} from '../message.js';
import {products} from './products.js';
import {buyProduct} from '../moneyManager.js'

const productButton = document.querySelectorAll('button.product')

function productHandler(){
    for(let i = 0; i < productButton.length; i++) {
        productButton[i].addEventListener('click', function(e){
            e.preventDefault()
            let productId = this.getAttribute('data-product-id')
            if( products[productId] ){
                if( products[productId].quantity <= 0 ){
                    displayMessage(messages.SOLD_OUT)
                }else{
                    buyProduct(products[productId].price)
                }
            }
        });
    }
}

productHandler()

export {productButton}
