/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();
    
    // Step 2: Split the string into words by spaces
    // Step 3: Filter out empty words
    let words = s.split(/\s+/);
    
    // Step 4: Reverse the array of words
    words.reverse();
    
    // Step 5: Join the words with a single space in between
    return words.join(' ');
};

// Example usage:
console.log(reverseWords("the sky is blue"));       // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));      // Output: "world hello"
console.log(reverseWords("a good   example"));     // Output: "example good a"




/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();
    
    // Step 2: Split the string into words by spaces
    let words = s.split(/\s+/);

    // Step 3: Iterate through the words from the end to the beginning
    let reversedString = '';
    for (let i = words.length - 1; i >= 0; i--) {
        reversedString += words[i];
        if (i > 0) {
            reversedString += ' ';
        }
    }

    return reversedString;
};

// Example usage:
console.log(reverseWords("the sky is blue"));       // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));      // Output: "world hello"
console.log(reverseWords("a good   example"));     // Output: "example good a"
