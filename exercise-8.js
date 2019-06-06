function pasanganTerbesar(num) {
    // you can only write your code here!
    var max = 0;
    while(num > 9) {
        if(num % 100 > max) {
            max = num % 100;
        }

        num = (num - (num % 10))/10;
    }
    return max;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85