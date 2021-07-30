/* [Palindrome Linked List] from LeetCode's explore section

Prompt:
Given the head of a singly linked list, return true if it is a palindrome.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

Follow up: Could you do it in O(n) time and O(1) space?
 */

// Solution - Time O(n) | Space O(n)
var isPalindrome = function(head) {
  let reverse = [];
  let listHead = head;

  while(head !== null) {
    reverse.push(head.val);
    head = head.next;
  }
  reverse.reverse();

  let idx = 0;
  while(listHead !== null) {
    if (reverse[idx] !== listHead.val) return false;
    listHead = listHead.next;
    idx++;
  }
  return true;
};

// Alternate Solution - Time O(n) | Space O(1)
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  // Revesing left half of the list
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    let temp = slow;
    slow = slow.next;
    temp.next = prev;
    prev = temp;
  }

  // Handling for odd length of list
  if (fast !== null) slow = slow.next;

  // Comparing both halves
  while(prev !== null && slow !== null) {
    if (prev.val !== slow.val) return false;
    prev = prev.next;
    slow = slow.next;
  }
  return prev === null && slow === null;
};