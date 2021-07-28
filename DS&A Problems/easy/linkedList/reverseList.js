/* [Reverse Linked List] from LeetCode's explore section

Prompt:
Given the head of a singly linked list, reverse the list, and return the reversed list. Accomplish this is O(n) Time and O(1) Space

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/

// Iterative Solution - Time O(n) | Space O(1)
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while(curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};

// Recursive Solution - Time O(n) | Space O(n)
var reverseList = function(head) {
  if (head === null || head.next === null) return head;

  let reversedListHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedListHead;
};