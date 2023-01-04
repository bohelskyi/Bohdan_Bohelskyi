function numberToIPv4(number) {
    let binaryArray = [];
    let binaryDigit = Math.pow(2, 31);

    for (let i = 31; i >= 0; i--)
    {
        binaryArray[i] = number >= binaryDigit ? 1 : 0;
        number -= number >= binaryDigit ? binaryDigit : 0;
        binaryDigit /= 2;
    }

    let octets = Array(4).fill(0);
    for (let i = 0; i < 32; i++)
    {
        binaryDigit = Math.pow(2, i - Math.floor(i / 8) * 8);
        if (binaryArray[i] === 1)
        {
            octets[Math.ceil(3 - i / 8)] += binaryDigit;
        }
    }
    

    let result = "";
    for (let i = 0; i < octets.length; i++)
    {
        result += String(octets[i]);
        if (i < octets.length - 1) result += ".";
    }

    return result;
}

console.log(numberToIPv4(2149583361));
console.log(numberToIPv4(32));
console.log(numberToIPv4(0));