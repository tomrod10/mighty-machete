/* [Swap Nodes in Pairs]

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
*/

// Solution
var swapPairs = function(head) {
  if (head === null || head.next === null) return head;

  let nextNode = head.next.next;
  let temp = head;
  head = head.next;
  head.next = temp;
  head.next.next = swapPairs(nextNode);
  return head;
};

// Similar Solution by JohnnyXian
var swapPairs = function(head) {
  if (head == null || head.next == null) return head

  let currHead = head
  let nextHead = head.next
  let skipHead = head.next.next

  // relink the second node to the first node
  nextHead.next = currHead

  // the firstNode's next would be the result of the swap
  currHead.next = swapPairs(skipHead)

  // nextHead targets the 2nd node, which would be the first node if it reversed
  return nextHead
};