function convertToRoman(num) {
    // Handle 0 case (not typically represented in Roman numerals)
    if (num === 0) return '';
    
    // Define Roman numeral symbols and their values
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
    
    // Iterate through each symbol
    for (let [symbol, value] of romanSymbols) {
        // While the number is greater than or equal to the current value
        while (num >= value) {
            // Add the symbol to result and subtract the value from num
            result += symbol;
            num -= value;
        }
        
        // Handle subtractive cases (like IV, IX, XL, etc.)
        // We need to check for subtractive combinations
        const subtractiveCases = [
            ['CM', 900],  // M - C
            ['CD', 400],  // D - C
            ['XC', 90],   // C - X
            ['XL', 40],   // L - X
            ['IX', 9],    // X - I
            ['IV', 4]     // V - I
        ];
        
        for (let [subSymbol, subValue] of subtractiveCases) {
            if (num >= subValue) {
                result += subSymbol;
                num -= subValue;
                break; // Only one subtractive case can apply at a time
            }
        }
    }
    
    return result;
}




// do not edit below this line
module.exports = convertToRoman
