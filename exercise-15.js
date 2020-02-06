function groupAnimals(animals) {
    var resultUnsorted = [];
    for(var i = 0; i < animals.length; i++) {
        var group = resultUnsorted.length;
        for(var j = 0; j < resultUnsorted.length; j++) {
            if(animals[i][0] == resultUnsorted[j][0][0]) {
                group = j;
            }
        }
        if (resultUnsorted[group] === undefined) {
            resultUnsorted[group] = [];
            resultUnsorted[group][0] = animals[i];
        } else {
            resultUnsorted[group][resultUnsorted[group].length] = animals[i];
        }
    }

    var resultSorted = [];
    for (var j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
        for(var i = 0; i < resultUnsorted.length; i++) {
            if (resultUnsorted[i][0].charCodeAt(0) == j) {
                resultSorted[resultSorted.length] = resultUnsorted[i];
            }
        }
    }
    return resultSorted;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]