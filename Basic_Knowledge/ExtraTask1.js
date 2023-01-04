function nextBigger(number) {
    let digits = Array.from(String(number), Number);
    let sum = 0;
    let exponent = 1;
    let found = false;

    for (let i = digits.length-1; i > 0; i--)
    {
        if (digits[i] > digits[i-1] && !found)
        {
            [digits[i], digits[i - 1]] = [digits[i - 1], digits[i]];
            found = true;
        }
        sum += digits[i] * exponent;
        exponent *= 10;
    }

    sum += digits[0] * exponent;
    if (!found) return -1;
    return sum;
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));
console.log(nextBigger(111));
console.log(nextBigger(531));