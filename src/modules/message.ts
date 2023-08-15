
// const messageZone = document.getElementById('message') as HTMLElement;
const messageTimer: number = 1000
enum messages {
    INSERT_COIN = 'INSERT COIN',
    INVALID_COIN = 'INVALID COIN',
    SOLD_OUT = 'SOLD OUT',
    EXACT_CHANGE_ONLY = 'EXACT CHANGE ONLY',
    THANK_YOU = 'THANK YOU'
}

function displayPreviousMessage(previousMessage: string, messageZone: HTMLElement): void
{
    messageZone.innerHTML = previousMessage
}

function getMessage(messageIndex: messages | number): string
{
    let message: string = ''

    if( typeof messageIndex === 'number' ){
        message = '$'+messageIndex
    }else{
        message = messageIndex
    }

    return message
}

function getPreviousMessage(messageIndex: messages, messageZone: HTMLElement): string
{
    let message: string = ''
    switch(messageIndex){
        case messages.INVALID_COIN:
        case messages.SOLD_OUT:
        case messages.EXACT_CHANGE_ONLY:
            message = messageZone.innerHTML
            break
        case messages.THANK_YOU:
            message = messages.INSERT_COIN
            break
        default:
            break
    }
    return message
}

function displayMessage( messageIndex: messages | number ): void
{
    let messageZone = document.getElementById('message') as HTMLElement;
    let message: string = getMessage(messageIndex)
    let previousMessage: string = ''

    if( typeof messageIndex !== 'number' ){
        previousMessage = getPreviousMessage(messageIndex, messageZone)
    }
    
    messageZone.innerText = message.toUpperCase();

    if( previousMessage !== '' ){
        window.setTimeout(() => displayPreviousMessage(previousMessage, messageZone), messageTimer);
    }
}

export {displayMessage, messages}
