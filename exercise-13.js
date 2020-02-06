function targetTerdekat(arr) {
    var oPosition = -1;
    var xPositions = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] == 'o') {
          oPosition = i;
      } else if(arr[i] == 'x') {
          xPositions[xPositions.length] = i;
      }
    }

    var closestDistance = 0;
    for(var i = 0; i < xPositions.length; i++) {
        var distance = Math.abs(oPosition - xPositions[i]);
        if(distance < closestDistance || closestDistance <= 0) {
            closestDistance = distance;
        }
    }
    return closestDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2