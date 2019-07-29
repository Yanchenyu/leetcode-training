/**
 * @name 两数之和
 * @description 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @example 给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */

var twoSum1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            } 
        }
    }
}

// twoSum1，最传统的方法，两次循环，执行耗时156ms，内存占用34.7MB

var twoSum2 = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        if (obj.hasOwnProperty(n)) {
            return [obj[n], i]
        }
        obj[nums[i]] = i
    }
    return []
}

// twoSum2，将数组元素转为对象的key，然后下标作为value，利用对象存储值更快，执行耗时96ms，内存占用34.1MB

var twoSum3 = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        if (map.has(n)) {
            return [map.get(n), i]
        }
        map.set(nums[i], i)
    }
    return []
}

// twoSum3，原理同上，但是利用es6的Map数据结构，存储读值更快，执行耗时64ms，内存占用35MB

var twoSum4 = function(nums, target) {
    let map = new Map(),
        l = nums.length;
    for(let i = 0; i<l; i++) {
        let val = nums[i],
            n = target - val;
        if (map.has(n)) {
            return [map.get(n), i]
        }
        map.set(val, i)
    }
    return []
}

// 尽可能的优化一下