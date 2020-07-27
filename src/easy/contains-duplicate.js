/**
 * 给定一个整数数组，判断是否存在重复元素。

    如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

     

    示例 1:

    输入: [1,2,3,1]
    输出: true
    示例 2:

    输入: [1,2,3,4]
    输出: false
    示例 3:

    输入: [1,1,1,3,3,4,3,2,4,2]
    输出: true
 */

// 方法1： 去重，然后看数组长度是否有变化
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};


// 方法2：遍历，用对象赋key，然后看该对象是否有这个key

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const l = nums.length;
    const set = new Set();
    for (let i = 0; i < l; i++) {
        if (set.has(nums[i])) {
            return true
        }
        set.add(nums[i]);
    }
    return false;
};
