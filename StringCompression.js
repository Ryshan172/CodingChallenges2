/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0;
    let write = 0;

    while (read < chars.length) {
        let start = read;
        
        // Move the read pointer to the end of the current group of characters
        while (read < chars.length && chars[read] === chars[start]) {
            read++;
        }
        
        // Write the character
        chars[write++] = chars[start];
        
        // Calculate the count
        let count = read - start;
        if (count > 1) {
            const countStr = count.toString();
            for (let c of countStr) {
                chars[write++] = c;
            }
        }
    }
    
    return write;
};

// Example usage:
let chars1 = ["a","a","b","b","c","c","c"];
console.log(compress(chars1)); // Output: 6
console.log(chars1.slice(0, 6)); // Output: ["a","2","b","2","c","3"]

let chars2 = ["a"];
console.log(compress(chars2)); // Output: 1
console.log(chars2.slice(0, 1)); // Output: ["a"]

let chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(compress(chars3)); // Output: 4
console.log(chars3.slice(0, 4)); // Output: ["a","b","1","2"]
