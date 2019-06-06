var balikString = (str) => {
    var stringBaru = "";
    for(var i = str.length-1; i>=0; i--) {
        stringBaru += str[i];
    }
    return stringBaru;
}

////input "hello world!"
//output "!dlrow olleh"
console.log(balikString("hello world!"));