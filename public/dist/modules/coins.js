class setCoins {
    constructor() { }
    static getInstance() {
        if (!setCoins.instance) {
            setCoins.instance = new setCoins();
        }
        return setCoins.instance;
    }
    set(weight, name, value, size) {
        setCoins.label = name;
        setCoins.weight = weight;
        setCoins.value = value;
        setCoins.size = size;
        this.add();
    }
    add() {
        if (!setCoins.coins[setCoins.weight]) {
            setCoins.coins[setCoins.weight] = {
                label: setCoins.label,
                value: setCoins.value,
                size: setCoins.size,
                weight: setCoins.weight
            };
        }
    }
    getCoins() {
        return setCoins.coins;
    }
}
setCoins.coins = {};
setCoins.label = "";
setCoins.weight = -1;
setCoins.value = -1;
setCoins.size = -1;
setCoins.index = 0;
let sc = setCoins.getInstance();
sc.set(3.95, "Nikel", 0.05, 1);
sc.set(7.75, "Dime", 0.10, 1.25);
sc.set(4.4, "Quarter", 0.25, 1.5);
export const coins = sc.getCoins();
