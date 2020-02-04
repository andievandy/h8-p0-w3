function pasanganTerbesar(num) {
    var highestPair = 0;
    var tempNum = num;

    while (tempNum > 0) {
        var pairNum = tempNum % 100;
        if(pairNum > highestPair) {
            highestPair = pairNum;
        }
        var remainder = tempNum % 10;
        tempNum = (tempNum - remainder) / 10;
    }
    return highestPair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99