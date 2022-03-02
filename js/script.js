// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt="";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>999999999999 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 999999999999.`
    } else {
        txt += `You have entered the number ${num}.`;
        txt += `Largest Prime Factor of ${num} is ${largestPrimeFactor(num)}.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the largest prime factor of a given number
    largestPrimeFactor(13195) returns 29
    largestPrimeFactor(161) returns 23
*/
function largestPrimeFactor(number) {
    let prime = 1;
    let i = 2;
    while (i*i <= number) {
        while (number%i == 0) {
            prime = i;
            number = number/i;
        }
        i += 1;
    }

    if (number > 1) prime = number;
    return prime;
}