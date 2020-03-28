/**
 * @name 有效的括号
 * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

        有效字符串需满足：

        左括号必须用相同类型的右括号闭合。
        左括号必须以正确的顺序闭合。
        注意空字符串可被认为是有效字符串。

 * @example 示例 1:

        输入: "()"
        输出: true
        示例 2:

        输入: "()[]{}"
        输出: true
        示例 3:

        输入: "(]"
        输出: false
        示例 4:

        输入: "([)]"
        输出: false
        示例 5:

        输入: "{[]}"
        输出: true

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.trim();
    if (s.length % 2 !== 0) return false
    let arr = [],
        l = s.length;
    for (let i = 0; i < l; i++) {
        switch (s[i]) {
            case '[':
            case '{':
            case '(':
                arr.push(s[i]);
                break
            case ']':
                if (arr.pop() !== '[') return false
                break
            case '}':
                if (arr.pop() !== '{') return false
                break
            case ')':
                if (arr.pop() !== '(') return false
                break
        }
    }
    return !arr.length
};

// 解题思路：堆栈的思路，56 ms，战胜了95.93%用户，内存33.7MB
