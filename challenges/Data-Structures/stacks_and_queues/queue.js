let Node = require('./node.js');

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        let node = new Node(value);
        if (!this.front) {
            this.front = node;
            this.rear = node;
            node.next = null;
        }
        else {
            this.rear.next = node;
            this.rear = node;
        }

        return this;
    }


    dequeue() {
        if (!this.front) throw new Error(" Can not remove element from empty queue! ")
        let front2 = this.front;
        this.front = this.front.next;
        return front2;
    }



    peek() {
        if (!this.front) throw new Error(" Can not peek element from empty queue! ")
        return this.front.value;
    }





    isEmpty() {
        if (!this.front && !this.rear) return true;
        else return false;
    }



}
let que = new Queue();
que.enqueue(2).enqueue(3).enqueue(3232)
console.log(que)
module.exports = Queue;