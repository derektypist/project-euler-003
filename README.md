# Project Euler 003 - Largest Prime Factor

The prime factors of 13195 are 5,7, 13 and 29. What is the largest prime factor of the number 600851475143?  The aim is to find the prime factor of this and other numbers using HTML Forms and JavaScript.

Information is at [Project Euler 003](https://projecteuler.net/problem=3)

## UX

**Getting Started**

Enter a number between 2 and 999999999999 and click on the Submit Button.  You will see the number that you have entered as well as the largest prime factor of that number, unless you have made an invalid input.  For example, the largest prime factor of 13195 is 29. Click on the Reset Button to clear that information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

    * Not entering anything in the input field
    * Entering text that is not a number (e.g. bus)
    * Entering a number, but it is not an integer
    * Entering a number less than 2 or greater than 999999999999

As a user, I expect `largestPrimeFactor(2)` to return a number.

As a user, I expect `largestPrimeFactor(2)` to return 2.

As a user, I expect `largestPrimeFactor(3)` to return 3.

As a user, I expect `largestPrimeFactor(7)` to return 7.

As a user, I expect `largestPrimeFactor(8)` to return 8.

As a user, I expect `largestPrimeFactor(13195)` to return 29.

As a user, I expect `largestPrimeFactor(600851475143)` to return 6857.

**Information Architecture**

The function `largestPrimeFactor(number)` returns a number (integer), where `number` is between 2 and 999999999999.

## Features

Allows the user to enter a number as well as seeing the largest prime factor of that number.  For example, if the number was 13195, the largest prime factor is 29.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5,CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-003) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)