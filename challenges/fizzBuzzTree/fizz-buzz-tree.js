const Node = require('./node');

class k_Node_Tree {

    constructor(root) {
        this.root = root;
    }
}
function fizzBuzz(tree) {
    if (!tree.root) return " enter a tree first !"
    let current = tree.root;
    let newTree = new k_Node_Tree();
    let counter = 0;




    function _traverse(node) {
        let newNode = new Node();
        if (counter == 0) {
            newTree.root = newNode;
            counter++;
        }
        newNode.value = _transformValue(node.value);
        for (let i = 0; i < node.children.length; i++) {
            newNode.children.push(_traverse(node.children[i]));
        }
        return newNode;
    }
    _traverse(current)

    return newTree;
}




function _transformValue(val) {
    if (val % 3 == 0 && val % 5 == 0) return 'FizzBuzz';
    if (val % 3 == 0) return 'Fizz';
    if (val % 5 == 0) return 'Buzz';
    else return val.toString();
}

module.exports = { fizzBuzz: fizzBuzz, k_Node_Tree: k_Node_Tree, Node: Node };

