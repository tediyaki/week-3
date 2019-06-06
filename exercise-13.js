function targetTerdekat(arr) {
    // you can only write your code here!
    var findX = false;
    var findO = false;
    var o = 0;
    var findingRightX = false;
    var leftX = 0 - arr.length;
    var rightX = arr.length * 2;
  
    for(var i = 0; i < arr.length && !findingRightX; i++) {
        if(arr[i] === 'o') {
            o = i;
            findO = true;
        }

        if(arr[i] === 'x') {
            findX = true;
            if(findO) {
                rightX = i;
                findingRightX = true;
            } else {
                leftX = i;
            }
        }
    }

    var left = o - leftX;
    var right = rightX - o;
    
    if(!findX) {
        return 0;
    } else if(left < right){
        return left;
    } else {
        return right;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2