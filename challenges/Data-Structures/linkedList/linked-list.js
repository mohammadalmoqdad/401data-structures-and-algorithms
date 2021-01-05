'use strict';

let Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }




    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            // my next is not null 
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }




    insert(value) {
        let node = new Node(value);

        if (!this.head) {
            //  I am adding at empty LL
            this.head = node;
            return this;
        }

        else {
            node.next = this.head;
            this.head = node;
        }


    }




    includes(val) {
        let currentNode = this.head;
        if (!this.head) {
            console.log("enter element first");
        }
        do {
            if (currentNode.value == val) return true
            currentNode = currentNode.next
        }
        while (currentNode.next)

        // for last element : 
        if (val == currentNode.value) return true;
        return false;
    }





    toString() {
        console.log(this)
        let currentNode = this.head
        let nodes = [];
        do {
            nodes.push(`${currentNode.value} ==>`)
            currentNode = currentNode.next
        } while (currentNode.next)
        nodes.push(`${currentNode.value} ==>`) // for last node
        nodes.push("Null");
        return nodes.join("");
    }






    insertBefore(value, newVal) {
        try {

            let currentNode = this.head;
            if (currentNode.value == value) {
                // adding it at the beagaining
                this.insert(newVal);
            }

            while (currentNode.next) {
                if (currentNode.next.value == value) {
                    let node = new Node(newVal);
                    node.next = currentNode.next;
                    currentNode.next = node;
                }
                currentNode = currentNode.next.next;
            }


        }
        catch (e) {
            return false;
        }
    }








    insertAfter(value, newVal) {
        try {


            let currentNode = this.head;
            while (currentNode.next) {

                if (currentNode.value == value) {
                    // to avoid adding the last element twice I added the && 
                    let node = new Node(newVal);
                    node.next = currentNode.next;
                    currentNode.next = node;
                }
                if (!currentNode.next.next && currentNode.next.value == value) {
                    // or I can just use the this.append(method)
                    let node = new Node(newVal);
                    node.next = null
                    console.log(currentNode)
                    currentNode.next.next = node;
                    console.log(currentNode)

                }
                currentNode = currentNode.next;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }


}

// let LL = new LinkedList();
// LL.append(4)
// LL.append(22);
// LL.insertBefore(22, 33);
// LL.insertAfter(22, 44);
// LL.toString();

module.exports = LinkedList;