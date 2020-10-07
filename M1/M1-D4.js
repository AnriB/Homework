/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

let area = function(l1,l2) {
    return l1 * l2
}

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

let crazySum = function(a,b) {
    if (a == b){
        return 3*(a+b);
    }
    else {
        return 'The given integers are not equal!'
    }
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

let crazyDiff = function(x) {
    if (Math.abs(x-19) > 19){
        return 3 * Math.abs(x-19);
    }
    else {
        return `The absolute difference between ${x} and 19 is smaller then 19`;
    }
}

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

// not possible anyway!

let boundary = function(N) {
    if ((20 <= N && N <= 100) && N == 400) {
        return true;
    }

    else {
        return false;
    }
}

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

let strivify = function(S) {
    a = 'Strive ' + S;

    if (S.slice(0,6) == 'Strive') {
        return S;
    }
    else {
        return a;
    }
}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let check3and7 = function(x) {
    if (x > 0){

        if ((x % 3 == 0) && (x % 7 == 0)) {
            return `${x} is a multiple of 3 and 7`
        } else if (x % 3 == 0) {
            return `${x} is a multiple of 3`
        } else if (x % 7 == 0) {
            return `${x} is a multiple of 7`
        } else {
            return `${x} is not a multiple of 3 or 7`
        }

    }
    else {
        return 'The give number is not positive';
    }
}

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

let reverseString = function(x) {
    
    let nStr = "";
    
    for (var i = x.length - 1; i >= 0; i--) {
        nStr += x[i];
    }

    return nStr;

}

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

let upperFirst = function(x) {
    
    let splitStr = x.toLowerCase().split(' ');

    for (i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(' ');
}

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let cutString = function(x) {
    
    nStr = x.slice(1,x.length-1);

    return nStr;
}

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

let giveMeRandom = function(n) {

    arr = [];

    for (i = 1; i <=n; i++) {
        arr.push(Math.floor((Math.random() * 10) + 1));
    }

    return arr;
}

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
