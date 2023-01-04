function filterList(inputList) {
    return inputList.filter(Number.isFinite);
}

console.log(filterList([1, 2, 'a', 'b']));
console.log(filterList([1, 2, 'a', 'b', 0, 15]));
console.log(filterList([1, 2, 'aasf', '1', '123', 123]));