/* [Remove Nth Node From End of List] from LeetCode's explore section

Prompt:
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

// Initial approach - Fails with input head = [1], n = 1
var removeNthFromEnd = function(head, n) {
  let node = head;
  let size = 0;

  while(node) {
    size++;
    node = node.next;
  }

  let index = Math.abs(size - n);

  node = head;
  let counter = 0;
  while(node) {
    if (counter === index - 1) {
      node.next = node.next ? node.next.next : null;
    }
    counter++;
    node = node.next;
  }
  return head;
};

// Helper function
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// Solution
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head);
  let a = dummy;
  let b = dummy;

  for (let i = 1; i <= n + 1; i++) {
    a = a.next
  }
  while(a !== null) {
    a = a.next;
    b = b.next;
  }
  b.next = b.next.next;
  return dummy.next;
};
