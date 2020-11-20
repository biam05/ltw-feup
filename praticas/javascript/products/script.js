// Select and print the form
console.log("Form");
let form = document.getElementsByTagName('form');
console.log(form);
// --- using outerHTML
console.log("Form", form[0].outerHTML);
 
// Select and print the quantity input
console.log("Quantity Input");
let quantity = document.querySelector("form input[name='quantity']");
console.log(quantity);
// --- using outerHTML
console.log(quantity.outerHTML);
 
// Select and print all inputs inside the form
console.log("All Input");
let input = document.querySelectorAll("form input");
for(let i = 0; i < input.length; i++) {
    console.log(input[i]); 
    // --- using outerHTML
    console.log(input[i].outerHTML);
}