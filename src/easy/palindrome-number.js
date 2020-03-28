/**
 * @name 回文数
 * @description 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @example 输入: 121
            输出: true

            输入: -121
            输出: false
            解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 */

/**
 * @param {number} x
 * @return {boolean}
 */

// 传统方法，先转字符串，再转数组，然后翻转
var isPalindrome1 = function(x) {
    if (x < 0) return false
    var a = (x + '').split('').reverse().join('');
    return a == x
};


// 其实只要从最外层开始判断，第一个是否等于最后一个，一旦不等于，直接返回false
var isPalindrome2 = function(x) {
    if (x < 0) return false
    const str = x + '',
        l = str.length,
        max = Math.floor(l/2);
    for (let i = 0; i < max; i++) {
        let j = l - i - 1;
        if (str[i] !== str[j]) return false
    }
    return true
};


// 官方题解：将后一半的数字取出，翻转，然后和前一半的数字进行对比
var isPalindrome3 = function(x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    var revertedNumber = 0;
    while(x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = parseInt(x / 10);
    }
    // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return x == revertedNumber || x == parseInt(revertedNumber/10);
};

// 补充一个我自己写的，执行时间200ms，内存44.6MB，战胜94.42%
var isPalindrome = function(x) {
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false
    }
    let num = 0;
    while (x > num) {
        let re = x%10;
        num = num * 10 + re;
        if (num !== x) {
            x = parseInt(x/10);
        }
    }
    return x === num
};
