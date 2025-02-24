const names = ["Leo", "Vanessa", "Zoe"]
const event = "Code Expo"

function writeCards(names, event) {
    let messages = [];

    for (let i = 0; i < names.length;  i++) {
        let message = `Thank you, ${names[i]}, for your presence at the ${event}`;
        messages.push(message);
    }

    return messages;
}
const thankYouCards = writeCards(names, event);
console.log(thankYouCards);

function countDown(number) {
    
    while (number >= 0) {
      console.log(number); 
      number--; 
    }
  }