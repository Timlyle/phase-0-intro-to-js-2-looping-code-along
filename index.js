const arrayOfGifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);

    }

    return gifts;
}

wrapGifts(arrayOfGifts);

function writeCards(arrayOfNames, eventName) {
    const cardMessages = [];
    for (let i = 0; i < arrayOfNames.length; i++) {

        const message = `Thank you, ${arrayOfNames[i]} , for the wonderful ${eventName} gift!`
        cardMessages.push(message)
    }
    return cardMessages
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");
writeCards(["Bodhi", "Samip", "Ali"], "christmas");

function countDown(givenNumber) {
    let countDown = givenNumber;
    debugger
    while (countDown >= 0) {
        console.log(countDown--);
    }

};
countDown(11);