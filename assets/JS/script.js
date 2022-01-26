var price = 100;
var isCustomer = true;

// Is this array sorted?
var arrayPractice1 = [1,7,9,9,4,5];
var arrayPractice2 = ["Vincent", "Vincent Jr.", "Voughn", "Barbara"];

var nameFirst = prompt("What is your name?");
alert("Welcome: " + nameFirst);
var sitePlease = confirm("Do you want a website for " + price + " US$?");
console.log("Hello " + nameFirst);
console.log("The price for these sites go for " + price + "$ per site.");

for (var i = 0; i < arrayPractice1.length; i++) {
    // console.log(i);
    console.log(arrayPractice1[i]);
}

for (let j = 0; j < arrayPractice2.length; j++) {
    // console.log(j);
    console.log(arrayPractice2[j]);

}

let famIndex = arrayPractice2.indexOf(nameFirst);
if (famIndex !== -1) {
    console.log("It's You!");
}else{
    console.log("Who Are You!");
}

if (sitePlease){
    alert("Great " + nameFirst.toUpperCase());
} else {
    alert("See You Later " + nameFirst);
}