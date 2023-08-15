const coinList = document.getElementById('coin-list');
class setCoins {
    constructor() { }
    static getInstance() {
        if (!setCoins.instance) {
            setCoins.instance = new setCoins();
        }
        return setCoins.instance;
    }
    set(weight, name, value, diameter, thickness) {
        setCoins.label = name;
        setCoins.weight = weight;
        setCoins.value = value;
        setCoins.diameter = diameter;
        setCoins.thickness = thickness;
        this.add();
    }
    add() {
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
    addToHTML() {
        for (let [key, coin] of Object.entries(setCoins.coins)) {
            var coinButton = document.createElement("button");
            coinButton.setAttribute("data-weight", coin.weight);
            coinButton.setAttribute("data-size", coin.diameter + ';' + coin.thickness);
            coinButton.setAttribute("class", "coin");
            coinButton.innerHTML = coin.label;
            coinList.appendChild(coinButton);
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
setCoins.index = 0;
setCoins.diameter = -1;
setCoins.thickness = -1;
let sc = setCoins.getInstance();
sc.set(3.95, "Nikel", 0.05, 21.2, 1.76);
sc.set(7.75, "Dime", 0.10, 18.03, 1.22);
sc.set(4.4, "Quarter", 0.25, 23.88, 1.58);
sc.addToHTML();
const coins = sc.getCoins();
export { coins };
