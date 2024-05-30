/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let chars = s.split('');
    let left = 0, right = chars.length - 1;

    while (left < right) {
        // Move left pointer until it points to a vowel
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        // Move right pointer until it points to a vowel
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }
        // Swap the vowels
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
};

// Example usage:
console.log(reverseVowels("hello"));    // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
