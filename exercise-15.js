function groupAnimals(animals) {
    // you can only write your code here!

    var grouping = [];

    while(animals.length > 0) {
        var firstLetter = animals[0][0];
        var group = [];

        for(var i = 0; i < animals.length; i++) {
            if(firstLetter === animals[i][0]) {
                group.push(animals[i]);
                animals = mySplice(animals, i, 1);
                i -= 1;
            }
        }
        grouping.push(group);
    }
    return myInsertionSort(grouping);
}

function myInsertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
    }
    return arr;
}

function mySplice(sampleArray, startIdx, howManyDel) {
    var output = [];

    for(var i = 0; i < sampleArray.length; i++) {
        if(i < startIdx || i >= startIdx + howManyDel) {
            output[output.length] = sampleArray[i]
        }
    }
    return output;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]