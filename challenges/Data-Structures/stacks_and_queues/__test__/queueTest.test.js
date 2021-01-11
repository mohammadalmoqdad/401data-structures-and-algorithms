const Queue = require('../queue.js');


xdescribe('Queue Model', () => {

    

    it('Can successfully enqueue multiple values into a queue', () => {
        let que = new Queue();
        que.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
        expect(que.peek()).toEqual(4);
    });



    it('The enqueue & dequeue is done perfectly ', () => {
        let que = new Queue();
        que.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
        expect(que.dequeue()).toEqual(4);
        expect(que.dequeue()).toEqual(3);
        expect(que.dequeue()).toEqual(2);
        expect(que.dequeue()).toEqual(1);
    });


    it('Can successfully peek into a queue, seeing the expected value ', () => {
        let que = new Queue();
        que.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
        expect(que.peek()).toEqual(4);
    });


    it('Can successfully empty a queue after multiple dequeues', () => {
        let que = new Queue();
        que.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
        que.dequeue()
        que.dequeue()
        que.dequeue()
        que.dequeue()
        expect(que.isEmpty()).toEqual(true);
    });


    it('Can successfully instantiate an empty queue ', () => {
        let que = new Queue();
        expect(que instanceof Queue).toBeTruthy();
    });


    it('Calling dequeue or peek on empty queue raises exception', () => {
        let que = new Queue();
        expect(que.peek()).toThrow(" Can not peek element from empty queue! ");
        expect(que.dequeue()).toThrow(" Can not remove element from empty queue! ");

    });

    








});