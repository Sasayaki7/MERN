/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    let dict = {};
    let results = [];
    for (let i = 0; i < nums.length; i++){
      if(dict[targetSum-nums[i]] === undefined){
        dict[nums[i]]=i
      }
      else{
        results.push ([dict[targetSum-nums[i]], i])
      }
    }
    return results
}


console.log(twoSum(nums1, targetSum1))