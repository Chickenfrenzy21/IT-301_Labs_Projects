let valid = false;
let input = Number(prompt('Enter total restaurant bill amount: '));
do {
    if (input === 0) {
        input = Number(prompt('Please enter a bill amount greater than zero.'));
    } else if (input < 0){
        input = Number(prompt('Negative amounts are not allowed. Please enter a valid bill amount.'));
    } else if (isNaN(input)) {
        input = Number(prompt('Invalid input. Please enter a numeric bill amount.'));
    } else {
        valid = true;
    }
} while (valid == false);
let tip = input * 0.1;
console.log(tip);
document.write(`Your bill amount is $${input} and your calculated tip is $${tip}.`)