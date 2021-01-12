let Stack = require('../stacks_and_queues/stack.js')

class PseudoQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        if (!this.front) {
            this.stack1.push(value)
            this.front = this.stack1.peek();
            this.rear = this.stack1.peek();
        }
        else { //front should not be hanged cuz i will dequeue using it
            this.stack1.push(value)
            this.rear = this.stack1.peek();
        }


    }
    dequeue() {

        if (!this.stack1.isEmpty()) {
            while (this.stack1.top) {
                this.stack2.push(this.stack1.pop());
            }
           
            let removedItem =  this.stack2.pop();
             let counter = 0;
            while (this.stack2.top) {
                this.stack1.push(this.stack2.pop());
                counter++;
                if(counter == 1){
                    // for the first iteration in the loop
                    this.front = this.stack1.peek()
                }
            }
            return removedItem;
        }
        else throw new Error()
    }
}


// let q = new PseudoQueue();
// q.enqueue(22);
// q.enqueue(33);
// q.dequeue();
// q.dequeue();
// let x = q.stack1
// console.log(x)