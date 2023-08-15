const productList = document.getElementById('product-list')!

interface Product {
    [index: number]: {
        label: string;
        price: number;
        quantity: number;
    }
}

class setProduct implements Product {
    private static instance: setProduct;
    private static product: Product = {};
    private static productIndex: number = 0;

    [productIndex: number]: {label: string; price: number; quantity: number;}

    static label: string = "";
    static price: number = -1;
    static quantity: number = 0;
   
    constructor() {}

    public static getInstance(): setProduct 
    {
        if (!setProduct.instance) {
            setProduct.instance = new setProduct();
        }
        return setProduct.instance;
    }

    
    public set( productName: string, productValue: number, productQuantity: number): void
    {

        setProduct.label = productName
        setProduct.price = productValue
        setProduct.quantity = productQuantity
        this.add()
    }


    private add(): void
    {
        if (!setProduct.product[setProduct.productIndex]) {
            setProduct.product[setProduct.productIndex] = {
                label: setProduct.label,
                price: setProduct.price,
                quantity: setProduct.quantity
            };
            setProduct.productIndex++
        }
    }

    public addToHTML():void
    {
        for(let [key, product] of Object.entries(setProduct.product) ){
        
            var productButton=document.createElement("button");
            productButton.setAttribute("class", "product");
            productButton.setAttribute("data-product-id", key);
            productButton.innerHTML = product.label+'<br>$'+product.price;
            productList.appendChild(productButton)
    
        }
    }

    public getProduct(): Product
    {
        return setProduct.product
    }
}
   
const sp = setProduct.getInstance();
sp.set( "Cola", 1.00, 1 )
sp.set( "Chips", 0.50, 0 )
sp.set( "Candy", 0.65, 5 )
sp.addToHTML()

const products:Product = sp.getProduct();

export {products}
