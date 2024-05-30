/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    let countMap = {};
    // Add them to a map and increment
    for (let num of arr) {
        if (countMap[num] !== undefined) {
            countMap[num] += 1;
        }
        else {
            countMap[num] = 1;
        }
    }

    let counts = Object.values(countMap);
    let uniqueCounts = new Set(counts);

    return counts.length === uniqueCounts.size;
    
};