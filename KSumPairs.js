/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    // Go through array. 
    // For each, 5 - nums[i], then check if the difference is in the array, if so, take it out. 
    let countMap = {};
    let operations = 0;

    // Count the number of occurences of each number:
    for (let num of nums) {
        if (countMap[num] !== undefined) {
            countMap[num] += 1;
        }
        else {
            countMap[num] = 1;
        }
    }

    // Pairs that sum up to k
    for (let num of nums) {
        let complement = k - num;

        // Check if both num and complement are in the map
        if (countMap[num] > 0 && countMap[complement] > 0) {
            // Check if there are at least 2 instances 
            if (num === complement && countMap[num] < 2) {
                continue;
            }

            // We can form a pair, so decrement the counts and increment the operations count
            countMap[num] -= 1;
            countMap[complement] -= 1;
            operations += 1;
        }
    }

    return operations;
    
};