function update(event) {
    const hellobox = document.getElementById('hellobox');
    const answer = document.getElementById("answer");
    const username = document.getElementById("greetform").value;
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    event.preventDefault();
    if (username !== "") {
        hellobox.textContent = `Hello ${username}!`;
    }
    if (document.getElementById("add").checked === true) {
        answer.textContent = `The answer is ${num1 + num2}.`;
    } else if (document.getElementById("sub").checked === true) {
        answer.textContent = `The answer is ${num1 - num2}.`;
    } else if (document.getElementById("mult").checked === true) {
        answer.textContent = `The answer is ${num1 * num2}`;
    } else if (document.getElementById("div").checked === true) {
        answer.textContent = `The answer is ${num1 / num2}`;
    }
}