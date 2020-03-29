/**
 * @name 合并两个有序链表
 * @description 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @example 示例：

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    var pHead = new ListNode(-1),
        p = pHead;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;     // 这里为什么重新赋值了，还能保留引用？
    }
    if (l1) {
        p.next = l1;
    } else {
        p.next = l2;
    }
    return pHead.next
};

// 这题说实话，没看懂，不知道为什么pHead能一直留着指针

// 测试用例
[1,2,4]
[1,3,4]

// 输出
[1,1,2,3,4,4]