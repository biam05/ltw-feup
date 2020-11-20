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

// Select the desription input
let description = document.querySelector("form input[name='description']");

// Submit event listener
form[0].addEventListener('submit', function(e) {
    e.preventDefault();
    let newLine = document.createElement("tr");
    newLine.innerHTML  = `<td>${description.value}</td><td><input value="${quantity.value}"></td><td><input type="button" value="Remove"></td>`;
    document.getElementById("products").append(newLine);
    alert('Submitted!')
})