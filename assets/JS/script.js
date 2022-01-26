var nameFirst = "User";
var price = 100;
var isCustomer = true;

alert("Welcome: " + nameFirst);
var sitePlease = confirm("Do you want a website for " + price + " US$?");
console.log("Hello " + nameFirst);
console.log("The price for these sites go for " + price + "a site.");

if (sitePlease){
    alert("Great");
} else
    alert("See You Later");