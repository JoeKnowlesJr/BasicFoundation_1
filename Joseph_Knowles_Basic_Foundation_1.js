// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function upTo255() {
    var retVal = [];
    for (var i = 1; i < 256; i++) {
        retVal.push(i);
    }
    return retVal;
}

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sumTo1000() {
    var sum = 0;
    for (var i = 0; i < 1001; i +=2) {
        sum += i;
    }
    return sum;
}

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.(e.g. 1 + 3 + 5 +...+4997 + 4999).

function oddsTo5000() {
    var sum = 0;
    for (var i = 1; i < 5000; i += 2) {
        sum += i;
    }
    return sum;
}

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1, 2, 5] returns 8.[-5, 2, 5, 12] returns 14).

function sumArray(arr) {
    var retVal = 0;
    for (var i = 0; i < arr.length; i++) {
        retVal += arr[i];
    }
    return retVal;
}

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g.for[-3, 3, 5, 7] max is 7)

function getMax(arr) {
    var retMax = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > retMax) {
            retMax = arr[i];
        }
    }
    return retMax;
}

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g.for[1, 3, 5, 7, 20] average is 7.2)

function getAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.(ex. [1, 3, 5, .... , 47, 49]).Hint: Use 'push' method.

function oddsTo50() {
    var retVal = [];
    for (var i = 1; i < 50; i+= 2) {
        retVal.push(i);
    }
    return retVal;
}

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.For example if arr = [1, 3, 5, 7] 
// and Y = 3, your function will return 2.(There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, Y) {
    var retVal = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            retVal++;
        }
    }
    return retVal;
}

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1, 5, 10, -2] will 
// become[1, 25, 100, 4])

function squareValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done 
// the array should contain no negative values. (e.g. [1, 5, 10, -2] will become[1, 5, 10, 0])

function zeroNegs(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

// Max / Min / Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the 
// original array. (e.g. [1, 5, 10, -2] will return [10, -2, 3.5])

function maxMinAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var num = arr[i];
        if (num > max) max = num;
        if (num < min) min = num;
        sum += num;
    }
    return [max, min, (sum / arr.length)];
}

// Swap Values - Write a function that will swap the first and last values of any given array.The default minimum length of the array is 2.(e.g. [1, 5, 10, -2] will 
// become[-2, 5, 10, 1]).

function swapFirstLast(arr) {
    var first = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = first;
    return arr;
}

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.For example if 
// array = [-1, -3, 2], your function will return ['Dojo', 'Dojo', 2].

function negsToDojo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) arr[i] = "Dojo";
    }
    return arr;
}