import displayMessage from './message.js';
import { coins } from './coins.js';
const coinsButton = document.querySelectorAll('button.coin');
for (let i = 0; i < coinsButton.length; i++) {
    coinsButton[i].addEventListener('click', function (e) {
        e.preventDefault();
        let weight = this.getAttribute('data-weight');
        displayMessage(coins[weight].value);
    });
}
export { coinsButton };
