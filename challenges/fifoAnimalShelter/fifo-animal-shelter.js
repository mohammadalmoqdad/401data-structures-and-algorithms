let Animal = require('./animal.js'); // to make an object 
let Node = require('../Data-Structures/stacks_and_queues/node')



class AnimalShelter {
    constructor() {
        this.front = null;
        this.rear = null;
    }




    enqueue(animalObj) {
        let node = new Node(animalObj);
        if (animalObj.name == "dog" || animalObj.name == "cat") {


            if (!this.front) {
                this.front = node;
                this.rear = node;
                node.next = null
            }
            else {
                this.rear.next = node;
                this.rear = node;
            }
            
        }
        return this;
    }





    dequeue(pref) {
        if (pref.name != "dog" && pref.name != "cat") {
            return null;
        }
        else {
            if (!this.front) throw new Error();
            let front2 = this.front;
            this.front = this.front.next;
            return front2.value;
        }
    }


    
}


// let animal1 = new Animal("cat")
// let animal2 = new Animal("dog")
// let animal3 = new Animal("cat2")
// let shelter = new AnimalShelter();
// shelter.enqueue(animal1).enqueue(animal2).enqueue(animal3)
// shelter.dequeue(animal3);

// console.log(shelter)
