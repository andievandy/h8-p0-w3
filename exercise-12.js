function tentukanDeretGeometri(arr) {
    // if (arr.length == 1) return true;
    // var result = true;
    // var i = 0;
    // var difference = arr[1] / arr[0];

    // while (result == true && i < arr.length - 1) {
    //     if (difference != (arr[i + 1] / arr[i])) {
    //         result = false;
    //     }
    //     i++;
    // }
    // return result;
    if (arr.length == 1) return true;
    for(var i = 0; i < arr.length - 2; i++) {
        if(arr[i+1] / arr[i] != arr[i+2] / arr[i+1]) {
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false