from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        l_result = ListNode(0)
        l_head = l_result

        while l1 or l2 or carry:
            sum = carry + ((l1 and l1.val) or 0) + ((l2 and l2.val) or 0)
            if sum >= 10:
                sum -= 10
                carry = 1
            else:
                carry = 0

            l_result.val = sum
            l_result.next = ListNode(0)

            l_result = l_result.next
            l1 = l1.next if l1 and l1.next else None
            l2 = l2.next if l2 and l2.next else None

        return l_head
