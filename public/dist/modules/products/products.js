const productList = document.getElementById('product-list');
class setProduct {
    constructor() { }
    static getInstance() {
        if (!setProduct.instance) {
            setProduct.instance = new setProduct();
        }
        return setProduct.instance;
    }
    set(productName, productValue, productQuantity) {
        setProduct.label = productName;
        setProduct.price = productValue;
        setProduct.quantity = productQuantity;
        this.add();
    }
    add() {
        if (!setProduct.product[setProduct.productIndex]) {
            setProduct.product[setProduct.productIndex] = {
                label: setProduct.label,
                price: setProduct.price,
                quantity: setProduct.quantity
            };
            setProduct.productIndex++;
        }
    }
    addToHTML() {
        for (let [key, product] of Object.entries(setProduct.product)) {
            var productButton = document.createElement("button");
            productButton.setAttribute("class", "product");
            productButton.setAttribute("data-product-id", key);
            productButton.innerHTML = product.label + '<br>$' + product.price;
            productList.appendChild(productButton);
        }
    }
    getProduct() {
        return setProduct.product;
    }
}
setProduct.product = {};
setProduct.productIndex = 0;
setProduct.label = "";
setProduct.price = -1;
setProduct.quantity = 0;
const sp = setProduct.getInstance();
sp.set("Cola", 1.00, 1);
sp.set("Chips", 0.50, 0);
sp.set("Candy", 0.65, 5);
sp.addToHTML();
const products = sp.getProduct();
export { products };
