// Get the form 
const form = document.getElementById("akanform");

//check for form found by javascript
console.log(form);

//listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("form submitted!");
});
