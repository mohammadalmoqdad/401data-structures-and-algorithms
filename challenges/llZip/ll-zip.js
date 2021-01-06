let LinkedList = require('../Data-Structures/linkedList/linked-list')

function zipLists(ll1, ll2) {
    let currentNode1 = ll1.head1;
    let currentNode2 = ll2.head1;
    let arr = [];
    while (currentNode1 || currentNode1) {
        if (currentNode1) {
            arr.push(currentNode1.value)
        }
        if (currentNode2) {
            arr.push(currentNode2.value)
        }
        currentNode1 = currentNode1.next;
        currentNode2 = currentNode2.next;
    }
    console.log(arr.join(''))
    return arr.join('')
}
let ll1 = new LinkedList();
let ll2 = new LinkedList();
ll1.append(2).append(3).append(4);
ll2.append(5).append(6).append(7);
zipLists(ll1, ll2)