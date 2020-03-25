
function isOdd(numb) {
    return (numb & 1) != 0;
}

function isEven(numb) {
    return (numb & 1) == 0;
}

module.exports = {
    isOdd: isOdd,
    isEven: isEven
}