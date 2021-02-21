let Node = require('./node');
const BinaryTree = require('./tree')
class BinarySearchTree extends BinaryTree {

    add(value) {
        let addedNode = new Node(value);

        function _traverse(node) {
            if (!this.root) {
                root = addedNode;
                return this;
            }

            if (value > node.value) {
                if (node.right) {
                    if (node.right.value < value) {
                        // add between
                        addedNode.right = node.right;
                        node.right = addedNode;
                        return this;
                    }
                    else {
                        _traverse(node.right);
                    }
                }
                if (!node.right) {
                    // add at the end
                    node.right = addedNode;
                    return this;
                }

            }


            if (value <= node.value) {
                if (node.left) {
                    if (node.left.value < value) {
                        //add between 
                        addedNode.left = node.left;
                        node.left = addedNode;
                        return this;
                    }
                    else {
                        _traverse(node.left);
                    }
                }

                if (!node.left) {
                    //add last
                    node.left = addedNode;
                    return this;
                }
            }


        }

    }


    contains(value) {
        // return boolean 
        let result = this.preOrder();
        if(result.includes(value)) return true;
        else return false;
    }


    find_maximum_value(){
        let maxValue = 0;
        
        function _traverse(node) {
            if(node.value > maxValue) maxValue = node.value;
            if (node.right) _traverse(node.right);
            else return maxValue;
        }
       return _traverse(this.root);


    }



}

module.exports = BinarySearchTree;