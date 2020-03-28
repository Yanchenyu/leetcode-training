/**
 * @name 整数反转
 * @description 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * @example 示例 1
    输入: 123
    输出: 321
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0;
    while (x !== 0) {
        let r = x % 10;
        num = num * 10 + r;
        x = parseInt(x/10);
    }
    var outRange = num < Math.pow(-2, 31) ||  num > (Math.pow(2, 31)-1);
    // 如果溢出则返回0
    return outRange ? 0 : num;
};

// 解题思路：计算是最快的，所以我采用了这种方案，最快速度是76 ms，战胜了95.29%用户，内存35.9MB
