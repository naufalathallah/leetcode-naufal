/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyNode = new ListNode(0);
        ListNode p = l1, q = l2, current = dummyNode;
        int carry = 0;
        
        while (p != null || q != null) {
            int x = (p != null) ? p.val : 0; // If list l1 is exhausted, use 0
            int y = (q != null) ? q.val : 0; // If list l2 is exhausted, use 0
            int sum = carry + x + y; // Add the values and carry
            
            carry = sum / 10; // Calculate the carry for the next iteration
            current.next = new ListNode(sum % 10); // Create a new node with the current digit
            
            current = current.next;
            if (p != null) p = p.next; // Move to the next node in l1
            if (q != null) q = q.next; // Move to the next node in l2
        }
        
        // If there's still a carry left after the last addition, create a new node
        if (carry > 0) {
            current.next = new ListNode(carry);
        }
        
        // Return the next node of the dummy node, which is the head of the result list
        return dummyNode.next;
    }
}