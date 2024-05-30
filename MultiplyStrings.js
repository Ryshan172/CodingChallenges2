/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // Edge case where either number is "0"
    if (num1 === "0" || num2 === "0") return "0";
    
    const m = num1.length, n = num2.length;
    const result = Array(m + n).fill(0);

    // Reverse the strings to simplify index calculations
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const p1 = i + j, p2 = i + j + 1;
            const sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    // Convert the result array to a string, skipping leading zeros
    let resultStr = result.join('');
    while (resultStr[0] === '0') {
        resultStr = resultStr.slice(1);
    }

    return resultStr;
};

// Example usage:
console.log(multiply("2", "3")); // Output: "6"
console.log(multiply("123", "456")); // Output: "56088"
