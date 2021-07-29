/* [Remove Linked List Elements] from LeetCode's explore section

Prompt:
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
*/

// Solution - Time O(n) | Space O(1)
var removeElements = function(head, val) {
  if (head === null) {
    return head;
  }

  while(head !== null && head.val === val) {
    head = head.next;
  }

  if (head !== null) {
    let prev = head;
    let curr = head.next;

    while(curr !== null) {
      if (curr.val === val) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
  }
  return head;
};

// Similar solution w/ slightly different syntax
var removeElements = function(head, val) {
  if (head === null) {
    return head;
  }

  while(head !== null && head.val === val) {
    head = head.next;
  }

  let curr = head;
  while(curr !== null && !curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next
    }
  }
  return head;
};