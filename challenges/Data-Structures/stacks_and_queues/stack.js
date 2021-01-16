let Node = require('./node.js');

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let node = new Node(value);
        if (!this.top) {
            this.top = node;
            node.next = null;
        }
        else {
            node.next = this.top;
            this.top = node;
        }
    }
    pop() {
        if(!this.top) throw new Error(" Can not pop() when Stack is empty! ")
        let top2 = this.top;
        this.top = this.top.next;
        return top2.value;
    }
    peek() {
        if (!this.top) throw new Error(" Can not peek() when Stack is empty! ")
        return this.top.value;
    }
    isEmpty(){
        if(!this.top) {
             return true;
        }
        else {
            return false;}
    }
}

// let st = new Stack();
// st.push(22)
// st.push(33)
// st.push(44)
// st.push(55)
// st.push(66)
// st.pop();
// st.isEmpty()

// console.log(st.peek())
module.exports = Stack;