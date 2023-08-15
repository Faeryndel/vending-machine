const coinList = document.getElementById('coin-list')!

interface Coin {
    [index: number]: {
        label: string;
        weight: number;
        value: number;
        diameter: number;
        thickness: number;
    }
}

class setCoins implements Coin {
    private static instance: setCoins;
    private static coins: Coin = {};

    [index: number]: { label: string; weight: number; value: number; diameter: number; thickness: number; };

    static label: string = "";
    static weight: number = -1;
    static value: number = -1;
    static index: number = 0;
    static diameter: number = -1;
    static thickness: number = -1;
   
    constructor() {}

    public static getInstance(): setCoins 
    {
        if (!setCoins.instance) {
            setCoins.instance = new setCoins();
        }
        return setCoins.instance;
    }

    public set( weight: number, name: string, value: number, diameter: number, thickness: number  ): void
    {
        setCoins.label = name
        setCoins.weight = weight
        setCoins.value = value
        setCoins.diameter = diameter
        setCoins.thickness = thickness
        this.add()
    }

    private add(): void
    {
        if (!setCoins.coins[setCoins.weight]) {
            setCoins.coins[setCoins.weight] = {
                label: setCoins.label,
                value: setCoins.value,
                diameter: setCoins.diameter,
                thickness: setCoins.thickness,
                weight: setCoins.weight
            };
        }
    }

    public addToHTML():void
    {
        for(let [key, coin] of Object.entries(setCoins.coins) ){
            var coinButton=document.createElement("button");
            coinButton.setAttribute("data-weight", coin.weight);
            coinButton.setAttribute("data-size", coin.diameter+';'+coin.thickness);
            coinButton.setAttribute("class", "coin");
            coinButton.innerHTML = coin.label;
            coinList.appendChild(coinButton)
        }
    }

    public getCoins(): Coin
    {
        return setCoins.coins
    }
}
   
let sc = setCoins.getInstance();
sc.set( 3.95, "Nikel", 0.05, 21.2, 1.76 )
sc.set( 7.75, "Dime", 0.10, 18.03, 1.22 )
sc.set( 4.4, "Quarter", 0.25, 23.88, 1.58 )
sc.addToHTML()

const coins:Coin = sc.getCoins();

export {coins}
