/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    let preIndex = 0; // Use an index instead of modifying the array

    function buildTree(left: number, right: number): TreeNode | null {
        if (preIndex >= preorder.length || left > right) return null;

        let root = new TreeNode(preorder[preIndex++]); // Get the current root value

        // If the root is the only node left, return it
        if (left === right) return root;

        // Find the left subtree root position in postorder
        let leftChild = preorder[preIndex];
        let leftIndex = postorder.indexOf(leftChild);

        // Recursively build left and right subtrees
        root.left = buildTree(left, leftIndex);
        root.right = buildTree(leftIndex + 1, right - 1);

        return root;
    }

    return buildTree(0, postorder.length - 1);
}

// Helper function to print tree in level order
function levelOrderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    let queue: TreeNode[] = [root];
    let result: number[] = [];

    while (queue.length > 0) {
        let node = queue.shift()!;
        result.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}