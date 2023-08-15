import {displayMessage, messages} from './message.js'

var amountInMachine: number = 0

function updateTotalAmount( amount: number ){
    if( amount === 0 ){
        amountInMachine = 0;
        displayMessage( messages.INSERT_COIN )
    }else{
        amountInMachine = (amountInMachine + amount)
        let tmp:string = amountInMachine.toFixed(2)
        amountInMachine = parseFloat(tmp)
        displayMessage( amountInMachine )
    }
}

function buyProduct( productPrice: number ){
    if( (amountInMachine - productPrice) !== 0 ){
        displayMessage(messages.EXACT_CHANGE_ONLY)
    }else{
        displayMessage(messages.THANK_YOU)
        amountInMachine = 0
    }
}

export {updateTotalAmount, buyProduct}
