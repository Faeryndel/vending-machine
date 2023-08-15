// const messageZone = document.getElementById('message') as HTMLElement;
const messageTimer = 1000;
var messages;
(function (messages) {
    messages["INSERT_COIN"] = "INSERT COIN";
    messages["INVALID_COIN"] = "INVALID COIN";
    messages["SOLD_OUT"] = "SOLD OUT";
    messages["EXACT_CHANGE_ONLY"] = "EXACT CHANGE ONLY";
    messages["THANK_YOU"] = "THANK YOU";
})(messages || (messages = {}));
function displayPreviousMessage(previousMessage, messageZone) {
    messageZone.innerHTML = previousMessage;
}
function getMessage(messageIndex) {
    let message = '';
    if (typeof messageIndex === 'number') {
        message = '$' + messageIndex;
    }
    else {
        message = messageIndex;
    }
    return message;
}
function getPreviousMessage(messageIndex, messageZone) {
    let message = '';
    switch (messageIndex) {
        case messages.INVALID_COIN:
        case messages.SOLD_OUT:
        case messages.EXACT_CHANGE_ONLY:
            message = messageZone.innerHTML;
            break;
        case messages.THANK_YOU:
            message = messages.INSERT_COIN;
            break;
        default:
            break;
    }
    return message;
}
function displayMessage(messageIndex) {
    let messageZone = document.getElementById('message');
    let message = getMessage(messageIndex);
    let previousMessage = '';
    if (typeof messageIndex !== 'number') {
        previousMessage = getPreviousMessage(messageIndex, messageZone);
    }
    messageZone.innerText = message.toUpperCase();
    if (previousMessage !== '') {
        window.setTimeout(() => displayPreviousMessage(previousMessage, messageZone), messageTimer);
    }
}
export { displayMessage, messages };
