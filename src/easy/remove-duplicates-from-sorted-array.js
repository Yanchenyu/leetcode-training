/**
 * @name 删除排序数组中的重复项
 * @description 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 * @example 示例 1:

    给定数组 nums = [1,1,2], 

    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

    你不需要考虑数组中超出新长度后面的元素。
    示例 2:

    给定 nums = [0,0,1,1,1,2,2,3,3,4],

    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

    你不需要考虑数组中超出新长度后面的元素。

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = nums[0];
    for (var i = 1; i< nums.length; i++) {
        if (j === nums[i]) {
            nums.splice(i, 1);
            i -= 1;
        } else {
            j = nums[i];
        }
    }
    return nums.length
};
// 自己的算法，好慢。。。因为splice太慢


var removeDuplicates = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j
};
// 这个方法稍微快一点，因为没有用删除，但是nums数组并没有去重，不过题目中并未要求nums要完整，可以不管超过不重复的位置后面的值

/**
 * 执行用时 :
    76 ms
    , 在所有 JavaScript 提交中击败了
    93.53%
    的用户
    内存消耗 :
    36.8 MB
    , 在所有 JavaScript 提交中击败了
    87.37%
    的用户
 */