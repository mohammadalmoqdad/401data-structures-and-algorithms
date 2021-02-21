const Node = require('./node');
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let results = [];
        function _traverse(node) {
            results.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            _traverse(this.root);
            return results;

        }

    }


    inOrder() {
        let results = [];
        function _traverse(node) {
            if (node.left) _traverse(node.left);
            results.push(node.value)
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return results;

    }


    postOrder() {
        let results = [];
        function _traverse(node) {
            if (node.left) _traverse(node.left)
            if (node.right) _traverse(node.right)
            results.push(node.value);
        }
        _traverse(this.root);
        return results;

    }

    breadthFirst(BTree) {

        let visited = [];
        let queue = [];
        let current = BTree.root;

        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            visited.push(current.val);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        };

        return visited;

    }
}








}



module.exports = BinaryTree;