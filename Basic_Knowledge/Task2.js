function first_non_repeating_letter(inputString) {
    let repeatingLetters = [];
    let nonRepeatingLetters = [];
    let loweredString = inputString.toLowerCase();

    for (let letter of loweredString) {
        if (repeatingLetters.includes(letter)) continue;

        if (nonRepeatingLetters.includes(letter)) {
            nonRepeatingLetters.splice(nonRepeatingLetters.indexOf(letter) , 1);
            repeatingLetters.push(letter);
            continue;
        }
        nonRepeatingLetters.push(letter);
    }

    if (nonRepeatingLetters.length == 0)
        return "";

    console.log(nonRepeatingLetters);
    return inputString[inputString.toLowerCase().indexOf(nonRepeatingLetters[0])];
}

console.log(first_non_repeating_letter("stress"));
console.log(first_non_repeating_letter("sTreSS"));
console.log(first_non_repeating_letter("sTTtreSS"));