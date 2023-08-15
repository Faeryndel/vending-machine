import { displayMessage, messages } from '../message.js';
import { coins } from './coins.js';
import { updateTotalAmount } from '../moneyManager.js';
const coinsButton = document.querySelectorAll('button.coin');
function coinHandler() {
    for (let i = 0; i < coinsButton.length; i++) {
        coinsButton[i].addEventListener('click', function (e) {
            e.preventDefault();
            let weight = this.getAttribute('data-weight');
            if (!coins[weight]) {
                displayMessage(messages.INVALID_COIN);
            }
            else {
                let size = this.getAttribute('data-size').split(';');
                if (coins[weight].diameter !== parseFloat(size[0])
                    || coins[weight].thickness !== parseFloat(size[1])) {
                    displayMessage(messages.INVALID_COIN);
                }
                else {
                    updateTotalAmount(coins[weight].value);
                }
            }
        });
    }
}
coinHandler();
export { coinsButton };
