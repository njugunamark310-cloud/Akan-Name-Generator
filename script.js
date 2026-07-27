// Days of the week 
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

//Male Akan names
const maleNames =[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

//Female Akan names
const femaleNames =[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];
// formula
function calculateDayOfWeek(day, month, year) {

    const CC = Math.floor(year / 100);
    const YY = year % 100;

     const dayOfWeek = (
        ((CC / 4) - 2 * CC - 1) +
        ((5 * YY) / 4) +
        ((26 * (month + 1)) / 10) +
        day
    ) % 7;

    return Math.floor((dayOfWeek + 7) % 7);

}
// Get the form 
const form = document.getElementById("akanform");

// check for form found by javascript
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

    // validate the input
    if (!birthDate || !gender) {
        alert("Please select your birth date and gender.");
        return;
    }
    
    // split date into year, month and day
    const [year, month, day] =birthDate.split("-");

    // convert them to numbers
    const yearNumber = Number(year);
    const monthNumber = Number(month);
    const dayNumber = Number(day);
    
    if (monthNumber < 1 || monthNumber > 12) {
    // Now calculate the day of the week
    }

    const dayIndex = calculateDayOfWeek(
    dayNumber,
    monthNumber,
    yearNumber
);
    console.log(dayIndex);

let akanName;

if (gender.value === "male") {
    akanName = maleNames[dayIndex];
} else {
    akanName = femaleNames[dayIndex];
}
console.log(akanName);
//Update on webpage
const output = document.getElementById("output");
output.innerHTML = `
    You were born on <strong>${days[dayIndex]}</strong>.<br>
    Your Akan name is <strong>${akanName}</strong>.
`;

    //Test the values
    console.log("year:", yearNumber);
    console.log("month:", monthNumber);
    console.log("day:", dayNumber);
    console.log("gender:", gender.value);
});