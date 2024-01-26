function sendsSMS(smsText) {
    const maxLength = 60; 
    const textLength = smsText.length;
    
    if (textLength <= maxLength) {
        console.log(`You need 1 sms to send text - ${smsText}`);
    } else {
        const smsCount = Math.ceil(textLength / maxLength);
        console.log(`You need ${smsCount} sms to send text - ${smsText}`);
    }
}

// sendsSMS("This package is native ESM and no longer provides a CommonJS export.");
sendsSMS("Це повідомлення містить більше 60 символів, тому ти його зараз читаєш.А якби тут було менше повідомлень, тоді б ти читав інший меседж. Бай-бай;)");
