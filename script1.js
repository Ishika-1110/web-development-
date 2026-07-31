alert("Hello, World!");
console.log("This is a simple JavaScript alert and console log example.");

var a=prompt("Please enter a number:");
var isTrue = confirm("Is this number true? (yes/no)");
if (isTrue){
    console.log("You entered a true number.");
}
else{
    console.log("You entered a false number.");
}
console.log("You entered: " + a);
