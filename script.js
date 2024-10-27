// 1. Grade Calculator
function calculateMarks(marks) { 
    return marks >= 90 ? "A" : 
           marks >= 75 ? "B" : 
           marks >= 50 ? "C" : 
           "D";
}
const studentMarks = 85; 
const grade = calculateMarks(studentMarks);
console.log("Grade " + grade);

// 6. Generate Multiplication Table

let number = 5; 
for (let i = 1; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + (number * i));
}

// 2. Number Reversal
let num = 12345;
let reversedNum = +num.toString().split('').reverse().join('');
console.log(reversedNum); 

// 3. Calculate Power

function calculatePower(base, exponent) {
    let result = 1; 
    for (let i = 0; i < exponent; i++) {
        result *= base; 
    }
    return result; 
}
console.log(calculatePower(2, 3)); 

// 5. Count Vowels in a String
function countVowels(str) {
    const vowels = 'aeiou'; 
    let count = 0; 
    for (const char of str) { 
        if (vowels.includes(char)) { 
            count++; 
        }
    }
    return count; 
}
console.log(countVowels("Mansi ")); 

// 7. Sum of Even and Odd Numbers in an Array

const arr = [1, 2, 3, 4, 5, 6];
let evenSum = 0; 
let oddSum = 0; 
for (const num of arr) {
 num % 2 === 0 ? (evenSum += num) : (oddSum += num);
}
console.log({ evenSum, oddSum });

