/**
 * @description 两数相加
 * @link https://leetcode.cn/problems/add-two-numbers/description
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @description 解题思路
 * 1.采用双指针，分别指向两个链表的头部
 * 2.开始遍历链表，将遍历到的节点值进行相加
 *  2.1.若其中一个链表此时已结束，则使用 0 作为其虚拟节点的值
 *  2.2.记录每次相加的结果【sum + carry】
 *  2.3.以【sum % 10】作为相加后节点的值
 *  2.4.以【sum / 10】记录当前位求和是否产生了进位【carry】
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let accessor1 = l1;
  let accessor2 = l2;

  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (accessor1 || accessor2 || carry > 0) {
    let val1 = 0,
      val2 = 0;

    if (accessor1) {
      val1 = accessor1.val;
      accessor1 = accessor1.next;
    }

    if (accessor2) {
      val2 = accessor2.val;
      accessor2 = accessor2.next;
    }

    const val = val1 + val2 + carry;

    current.next = new ListNode(val % 10);
    carry = Math.floor(val / 10);
    current = current.next;
  }

  return dummy.next;
}
