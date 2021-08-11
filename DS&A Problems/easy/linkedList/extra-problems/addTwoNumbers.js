/* [Add Two Numbers] from LeetCode's explore section

Prompt:
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


 var addTwoNumbers = function(l1, l2) {
   let dummy = new ListNode(-1, null);
   let head = dummy;
   let p = l1;
   let q = l2;
   let carry = 0;

   while(p !== null || q !== null) {
     let x = (p !== null) ? p.val : 0;
     let y = (q !== null) ? q.val : 0;
     let sum = carry + x + y;

     carry = Math.floor(sum / 10);
     dummy.next = new ListNode(sum % 10);
     dummy = dummy.next;

     if (p !== null) p = p.next;
     if (q !== null) q = q.next;
   }

   if (carry > 0) {
     dummy.next = new ListNode(carry);
   }
  return head.next;
};

// Similar Solution
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(-1, null);
  let head = dummy;
  let carry = 0;

  while(l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    dummy.next = new ListNode(sum % 10);
    dummy = dummy.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    dummy.next = new ListNode(carry);
  }
 return head.next;
};