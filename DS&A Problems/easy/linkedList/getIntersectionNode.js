/* [Intersection of Two Linked Lists] from LeetCode's explore section

Prompt:
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

Example 2:
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

Example 3:
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
*/

// Solution | Time O(1) | Space O(n)
var getIntersectionNode = function(headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let nodeA = headA;
  let nodeB = headB;

  while(nodeA) {
    lenA++;
    nodeA = nodeA.next;
  }

  while(nodeB) {
    lenB++;
    nodeB = nodeB.next;
  }

  nodeA = headA;
  while(lenA > lenB) {
    nodeA = nodeA.next;
    lenA--;
  }
  nodeB = headB;
  while(lenA < lenB) {
    nodeB = nodeB.next;
    lenB--;
  }

  while(nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return nodeA;
};

// Alternate Solution | Time O(n) | Space O(1) - wintryleo
var getIntersectionNode = function(headA, headB) {
  let currA = headA,
      currB = headB;

  // start both pointer from the start of the linked lists
  // when the smaller list pointer reaches end, we start it from the beginning of the longer list
  // and when the longer list reaches end, we start it from the beginning of the smaller list
  // so basically both the pointers traverse at-max (m + n) steps until they either meet at the intersection
  // or at the end (null)
  while(currA !== currB) {
      if(!currA) {
          currA = headB;
      } else {
          currA = currA.next;
      }
      if(!currB) {
          currB = headA;
      } else {
          currB = currB.next;
      }
  }
  return currA;
}

// Same but different syntax - COrtez1
const getIntersectionNode = (headA, headB) => {
  let a = headA, b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};