function convertToRoman(num) {
    // Define an array of roman numeral symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];
    
    let result = '';

    // Iterate through each symbol-value pair
    for (let [roman, value] of romanSymbols) {
        // While the current number is greater than or equal to the symbol value
        while (num >= value) {
            result += roman;  // Append the Roman numeral symbol to the result
            num -= value;     // Subtract the value from the number
        }
    }

    return result;
}

// Example usage
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII




// do not edit below this line
module.exports = convertToRoman
