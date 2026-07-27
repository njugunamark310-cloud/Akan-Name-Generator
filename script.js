// Get the form 
const form = document.getElementById("akanform");

//check for form found by javascript
console.log(form);

// listen for form submission
form.addEventListener("submit", function (event) {
     
    // Stop refresh in page
    event.preventDefault();

    // Get selected birth page 
    const birthDate = document.getElementById("birthDate").value;

    // Get selected gender 
    const gender =document.querySelector('input[name="gender"]:checked');

    console.log("Birth Date:", birthDate);
    console.log("Gender:", gender);

});