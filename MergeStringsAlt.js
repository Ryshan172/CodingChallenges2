/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString = '';
    let i = 0, j = 0;

    // Loop through both strings, adding one character from each at a time
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            mergedString += word1[i];
            i++;
        }
        if (j < word2.length) {
            mergedString += word2[j];
            j++;
        }
    }

    return mergedString;
};

// Example usage:
console.log(mergeAlternately("abc", "pqr"));  // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs"));  // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq"));  // Output: "apbqcd"
