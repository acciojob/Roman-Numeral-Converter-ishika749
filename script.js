function convertToRoman(num) {
    // Define Roman numeral symbols and their values
    const symbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];
    
    // Handle edge case of 0
    if (num === 0) return '';
    
    let result = '';
    
    // Iterate through each symbol
    for (let [symbol, value] of symbols) {
        // While the number is greater than or equal to current value
        while (num >= value) {
            // Add the symbol to result and subtract value from num
            result += symbol;
            num -= value;
        }
        
        // Handle subtractive cases (like IV, IX, XL, etc.)
        // Check if we can use subtractive notation with the next smaller value
        for (let [nextSymbol, nextValue] of symbols) {
            // For cases like IV (4), IX (9), XL (40), XC (90), CD (400), CM (900)
            if (value - nextValue >= num && num >= value - nextValue) {
                result += nextSymbol + symbol;
                num -= (value - nextValue);
                break;
            }
        }
    }
    
    return result;
}




// do not edit below this line
module.exports = convertToRoman
