class Solution {
  /**
   * Returns the kth node's value from the end of the list (k=1 means the last node).
   * Returns -1 if k is greater than the number of nodes (or k < 1).
   */
  getKthFromLast(head, k) {
    if (k < 1) return -1;

    let fast = head;
    let slow = head;

    for (let i = 0; i < k; i++) {
      if (fast === null) return -1;
      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow.data;
  }
}

module.exports = { Solution };