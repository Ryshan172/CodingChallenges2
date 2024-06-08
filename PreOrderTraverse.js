var preorderTraversal = function(root) {
    const result = [];

    function traverse(node) {
        if (node === null) {
            return;
        }

        result.push(node.val); // Visit the root node first
        traverse(node.left);   // Then traverse the left subtree
        traverse(node.right);  // Finally, traverse the right subtree
    }
    traverse(root);
    return result; 
};