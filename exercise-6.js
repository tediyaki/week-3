function angkaPalindrome(num) {
    // you can only write your code here!
    for(var i = num+1; true; i++) {
        if(isPalindrome(i)) {
            return i;
        }
    }
}

function isPalindrome(num) {
    var angka = "" + num;

    for(var j = 0; j < angka.length / 2; j++) {
        if(angka[j] !== angka[angka.length-1-j]) {
            return false;
        }
    }
    return true;
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001