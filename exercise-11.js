function tentukanDeretAritmatika(arr) {
    if(arr.length == 1) return true;
    var result = true;
    var i = 0;
    var difference = arr[1] - arr[0];

    while(result == true && i < arr.length - 1) {
        if(difference != (arr[i + 1] - arr[i])) {
            result = false;
        }
        i++;
    }
    return result;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false