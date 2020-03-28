/**
 * @name 最长公共前缀
 * @description 编写一个函数来查找字符串数组中的最长公共前缀。
    如果不存在公共前缀，返回空字符串 ""。
 * @example 示例 1:
    输入: ["flower","flow","flight"]
    输出: "fl"

    示例 2:
    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
 */


// 自己动手解决方案，68ms，战胜72.13%用户，34.6MB，
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = "";
    if (!strs.length || !strs[0].length) return ans
    for (let j = 0; j < strs[0].length; j++) {
        let c = ans + strs[0][j],
            isAllHave = true;
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].indexOf(c) !== 0) {
                isAllHave = false;
            }
        }
        if (isAllHave) {
            ans = c
        } else {
            return ans
        }
    }
    return ans
};