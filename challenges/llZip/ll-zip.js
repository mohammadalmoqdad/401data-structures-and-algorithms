let LinkedList = require('../Data-Structures/linkedList/linked-list.js')

function zipLists(ll1, ll2) {
    let currentNode1 = ll1.head;
    let currentNode2 = ll2.head;
    let ll3 = new LinkedList();
    if (!currentNode1 && !currentNode2) return null;
    while (currentNode1 || currentNode2) {

        if (currentNode1) {
            ll3.append(currentNode1.value)
        }

        if (currentNode2) {
            ll3.append(currentNode2.value)
        }

        if (currentNode1) currentNode1 = currentNode1.next;
        if (currentNode2) currentNode2 = currentNode2.next;

    }

    return ll3;
}


module.exports = zipLists;