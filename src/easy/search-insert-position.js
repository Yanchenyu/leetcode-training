/**
 * @name 搜索插入位置
 * @description 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
    你可以假设数组中无重复元素。
 * @example 示例 1:
    输入: [1,3,5,6], 5
    输出: 2
    示例 2:

    输入: [1,3,5,6], 2
    输出: 1
    示例 3:

    输入: [1,3,5,6], 7
    输出: 4
    示例 4:

    输入: [1,3,5,6], 0
    输出: 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target);
    if (index !== -1) return index;
    const l = nums.length;
    for (let i = 0; i < l; i++) {
        if (target < nums[i]) {
            return i
        }
    }
    return l
};

// 比较简单

/**
 * 执行用时 :
    52 ms
    , 在所有 JavaScript 提交中击败了
    98.82%
    的用户
    内存消耗 :
    34.2 MB
    , 在所有 JavaScript 提交中击败了
    50.67%
    的用户
 */
