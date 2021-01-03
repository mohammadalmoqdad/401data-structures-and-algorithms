'use strict';

let Node = require('./node');

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            return this;
        }

        let currentNode = this.head;
        while (currentNode.next){
        // my next is not null 
        currentNode = currentNode.next;        
        } 
        currentNode.next = node;
        return this;
    }

    insert(value){
        let node = new Node(value);

        if(!this.head){  
            //  I am adding at empty LL
            this.head = node;
            return this;
        }

        else{
            node.next = this.head;
            this.head = node;
        }


    }

   includes (val) {
        // if in return true else return false
        // console.log(LLobj)  

       
        let currentNode = this.head;
        if(!this.head){
        console.log("enter element first");          
        }
        // only one node in LL
        do {
          
            if(currentNode.value == val) return true
            currentNode = currentNode.next
        }
        while (currentNode.next)
       // for last element : 
        if(val == currentNode.value) return true;

        return false;
    }

    toString(){
        console.log(this)
        let currentNode = this.head
        let nodes = [];
        while(currentNode.next){
          nodes.push(`${currentNode.value} ==>`)
         currentNode = currentNode.next
        }
        nodes.push("Null");
       return nodes.join("");
    }


}

let LL = new LinkedList ();
LL.append(4).append(3).append(2);
LL.insert(77);
LL.includes(2)
LL.toString();
