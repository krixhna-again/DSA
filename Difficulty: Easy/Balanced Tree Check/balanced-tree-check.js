class Solution {
    isBalanced(root) {
        return this.checkHeight(root) !== -1;
    }

    checkHeight(node) {
        // Empty tree is balanced
        if (node === null) {
            return 0;
        }

        // Get left subtree height
        let leftHeight = this.checkHeight(node.left);

        // Left subtree is not balanced
        if (leftHeight === -1) {
            return -1;
        }

        // Get right subtree height
        let rightHeight = this.checkHeight(node.right);

        // Right subtree is not balanced
        if (rightHeight === -1) {
            return -1;
        }

        // Difference in heights must be at most 1
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return height of current node
        return Math.max(leftHeight, rightHeight) + 1;
    }
}