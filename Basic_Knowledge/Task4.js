function numberOfPairs(inputTarget, inputArray) {
    inputArray = inputArray.filter(number => {
        return number <= inputTarget});
    let result = 0
    for (let i = 0; i < inputArray.length; i++)
        for (let j = i + 1; j < inputArray.length; j++)
            if (inputArray[i] + inputArray[j] === inputTarget) result += 1
    return result;
}

console.log(numberOfPairs(5, [1, 3, 6, 2, 2, 0, 4, 5]));
console.log(numberOfPairs(1, [1, 3, 6, 2, 2, 0, 4, 5]));
console.log(numberOfPairs(10, [10, 0, 5, 6, 4]));