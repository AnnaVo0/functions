// Function declarations

// Function that alerts the first letter of a name
function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}

// Function that returns whether a number is divisible by two or not (even or odd)
function divisibleByTwo(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Function that returns the largest number in an array
function largestNum(arr) {
    let largest = arr[0];
    // for loop starts at i = 1 because largest is already equal to arr[0] so arr[0] does not need to be checked
    for (i = 1; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}

// Function calls
firstLetterName("Anna");
divisibleByTwo(5);
largestNum([5, -6, 0, 9, 8, 1]);