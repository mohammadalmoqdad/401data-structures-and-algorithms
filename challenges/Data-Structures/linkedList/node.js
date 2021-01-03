
'use strict';
class Node{
constructor(value){
    this.value = value;
    this.next = null; // when it is created it will be null and I will change that value later
}

}
module.exports = Node; // i didn't exported instance of it because I want to make a new instance from the class itself in ll.js