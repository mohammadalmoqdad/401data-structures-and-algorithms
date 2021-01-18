const PseudoQueue = require('../queue-with-stacks.js');

describe("Queue with two stacks Model", () => {

    it("Enqueue can add element to at the rear of the PseudoQueue And dequeue will remove first one", () => {
        let psQueue = new PseudoQueue();
        psQueue.enqueue(2).enqueue(3).enqueue(4);
        expect(psQueue.dequeue()).toEqual(2);
        
    })

    it("When use dequeue with an empty PseudoQueue it returns false", () => {
        let psQueue = new PseudoQueue();
        expect(psQueue.dequeue()).toBeFalsy();
    })



})