function convertToRoman(num) {
    // Handle 0 case
    if (num === 0) return '';
    
    // Define all Roman numeral symbols including subtractive cases
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],  // M - C
        ['D', 500],
        ['CD', 400],  // D - C
        ['C', 100],
        ['XC', 90],   // C - X
        ['L', 50],
        ['XL', 40],   // L - X
        ['X', 10],
        ['IX', 9],    // X - I
        ['V', 5],
        ['IV', 4],    // V - I
        ['I', 1]
    ];
    
    let result = '';
    
    // Iterate through each symbol
    for (let [symbol, value] of romanSymbols) {
        // While the number is greater than or equal to the current value
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
}




// do not edit below this line
module.exports = convertToRoman
