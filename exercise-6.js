function angkaPalindrome(num) {
    var nextNum = num + 1;

    while (true) {
        var reversedNum = 0;
        var tempNum = nextNum;
        while (tempNum > 0) {
            var remainder = tempNum % 10;
            reversedNum = reversedNum * 10 + remainder;
            tempNum = (tempNum - remainder) / 10;
        }
        if(reversedNum == nextNum) {
            return nextNum;
        }
        nextNum++;
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001