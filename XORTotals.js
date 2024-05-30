/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let totalXOR = 0;
    const n = nums.length;

    // Iterate over all possible subsets
    for (let mask = 0; mask < (1 << n); mask++) {
        let currentXOR = 0;
        for (let i = 0; i < n; i++) {
            // Check if the i-th bit is set in the mask
            if ((mask & (1 << i)) !== 0) {
                currentXOR ^= nums[i];
            }
        }
        totalXOR += currentXOR;
    }

    return totalXOR;
};

// Example usage:
console.log(subsetXORSum([1, 3])); // Output: 6
console.log(subsetXORSum([5, 1, 6])); // Output: 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])); // Output: 480
