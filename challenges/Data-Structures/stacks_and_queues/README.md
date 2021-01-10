# Stacks and Queues
Implementation: Stacks and Queues

## Challenge
- Create a stack and queue with all operiations that could be applied on them.

## Approach & Efficiency
I used class node to import it inside the stack and queue files.
time and space for all operations : O(1);

## API: 
    
#### Stack methods: 
push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

#### Queue methods: 
enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.



## checklist: 
- [x] Can successfully push onto a stack
- [x] Can successfully push multiple values onto a stack
- [x] Can successfully pop off the stack
- [x] Can successfully empty a stack after multiple pops
- [x] Can successfully peek the next item on the stack
- [x] Can successfully instantiate an empty stack
- [x] Calling pop or peek on empty stack raises exception
- [x] Can successfully enqueue into a queue
- [x] Can successfully enqueue multiple values into a queue
- [x] Can successfully dequeue out of a queue the expected value
- [x] an successfully peek into a queue, seeing the expected value
- [x] Can successfully empty a queue after multiple dequeues
- [x] Can successfully instantiate an empty queue
- [x] Calling dequeue or peek on empty queue raises exception


