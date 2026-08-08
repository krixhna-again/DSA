class Solution {
  leftView(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];
    let front = 0;

    while (front < queue.length) {
      const levelSize = queue.length - front;

      for (let i = 0; i < levelSize; i++) {
        const node = queue[front++];

        // First node of each level is visible from the left
        if (i === 0) {
          result.push(node.data);
        }

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    return result;
  }
}