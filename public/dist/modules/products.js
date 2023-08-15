class setProduct {
    constructor() { }
    static getInstance() {
        if (!setProduct.instance) {
            setProduct.instance = new setProduct();
        }
        return setProduct.instance;
    }
    set(productName, productValue) {
        setProduct.label = productName;
        setProduct.value = productValue;
        this.add();
    }
    add() {
        if (!setProduct.product[setProduct.productIndex]) {
            setProduct.product[setProduct.productIndex] = {
                label: setProduct.label,
                value: setProduct.value
            };
            setProduct.productIndex++;
        }
    }
    getProduct() {
        return setProduct.product;
    }
}
setProduct.product = {};
setProduct.productIndex = 0;
setProduct.label = "";
setProduct.value = -1;
let sc = setProduct.getInstance();
sc.set("Cola", 1.00);
sc.set("Chips", 0.50);
sc.set("Candy", 0.65);
export const products = sc.getProduct();
// products.forEach( (product: Product) => {
//     console.log(product)
// })
