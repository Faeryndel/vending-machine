import { updateTotalAmount } from '../moneyManager.js';
const coinsReturn = document.getElementById('return-coin');
coinsReturn.addEventListener('click', function (e) {
    e.preventDefault();
    updateTotalAmount(0);
});
export { coinsReturn };
