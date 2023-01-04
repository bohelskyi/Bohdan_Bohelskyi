function digital_root(inputNumber) {
    while (inputNumber >= 10)
    {
        let digitsAmount = Math.log10(inputNumber) + 1;
        let nextNumber = 0;
        for (let i = 0; i < digitsAmount; i++)
        {
            nextNumber += Math.floor(inputNumber % 10);
            inputNumber /= 10;
        }
        inputNumber = nextNumber;
    }
    return inputNumber;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));