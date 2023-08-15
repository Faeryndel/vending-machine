import { displayMessage, messages } from './message.js';
var amountInMachine = 0;
function updateTotalAmount(amount) {
    if (amount === 0) {
        amountInMachine = 0;
        displayMessage(messages.INSERT_COIN);
    }
    else {
        amountInMachine = (amountInMachine + amount);
        let tmp = amountInMachine.toFixed(2);
        amountInMachine = parseFloat(tmp);
        displayMessage(amountInMachine);
    }
}
function buyProduct(productPrice) {
    if ((amountInMachine - productPrice) !== 0) {
        displayMessage(messages.EXACT_CHANGE_ONLY);
    }
    else {
        displayMessage(messages.THANK_YOU);
        amountInMachine = 0;
    }
}
export { updateTotalAmount, buyProduct };
