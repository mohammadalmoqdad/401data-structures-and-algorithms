let LinkeList = require('../linked-list.js');
let zipLists = require('../../../llZip/ll-zip.js');

describe("linked List model test code challenge 3", () => {

    it("The new linked lists should involve both entered linkedLists", () => {
        let ll1 = new LinkeList();
        let ll2 = new LinkeList();
        ll1.append(1).append(2).append(3);
        ll2.append(4).append(5).append(6);
        let result = zipLists(ll1, ll2);
        let currentNode = result.head;
        while (currentNode) {
            expect(ll1.includes(currentNode.value) || ll2.includes(currentNode.value)).toBeTruthy();
            currentNode = currentNode.next;
        }
    });


    it("The new linked lists should involve both entered linkedLists", () => {
        let ll1 = new LinkeList();
        let ll2 = new LinkeList();
        let result = zipLists(ll1, ll2);
        console.log(result)
        expect(result).toBeNull();

    });


})

















xdescribe("linked List model test code challenge 2", () => {


    it("Can successfully add a node to the end of the linked list", () => {
        let LL = new LinkeList();
        LL.append(2);
        expect(LL.head).not.toEqual(null);
    })


    it("Can successfully add multiple nodes to the end of a linked list", () => {
        let LL = new LinkeList();
        LL.append(2).append(3).append(4)
        expect(LL.head.next.next).not.toEqual(null);
    })


    it("Can successfully insert a node before a node located i the middle of a linked list", () => {
        let LL = new LinkeList();
        LL.append(2).append(3).append(4);
        LL.insertBefore(3, 5);
        expect(LL.head.next.value).toEqual(5);
    })


    it("Can successfully insert a node before the first node of a linked list", () => {
        let LL = new LinkeList();
        LL.append(2).append(3).append(4);
        LL.insertBefore(2, 5);
        expect(LL.head.value).toEqual(5);
    })


    it("Can successfully insert after a node in the middle of the linked list", () => {
        let LL = new LinkeList();
        LL.append(2).append(3).append(4);
        LL.insertAfter(3, 5);
        expect(LL.head.next.next.value).toEqual(5);
    })


    it("Can successfully insert a node after the last node of the linked list", () => {
        let LL = new LinkeList();
        LL.append(2).append(3).append(4);
        LL.insertAfter(4, 5);
        expect(LL.head.next.next.next.value).toEqual(5);
    })



})


xdescribe("linked List model", () => {


    it("Can successfully instantiate an empty linked list", () => {
        let LL = new LinkeList();
        LL.append(" ");
    })
    expect(LL).not.ToBeNull();

    it("Can properly insert into the linked list", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        LL.append(testValue);
        expect(LL.head.value).toEqual(testValue);

    })


    it("The head property will properly point to the first node in the linked list", () => {
        let LL = new LinkeList();
        expect(LL.head).ToBeNull();
    })


    it("Can properly insert multiple nodes into the linked list", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        LL.append("first value").append(testValue);
        expect(LL.head.next.value).toEqual(testValue);

    })


    it("Will return true when finding a value within the linked list that exists", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        LL.append("first value").append(testValue);
        expect(LL.inclues(testValue)).toEqual(true);

    })


    it("Will return false when searching for a value in the linked list that does not exist", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        LL.append("first value").append(testValue);
        expect(LL.inclues("falsy value")).toEqual(false);

    })


    it("Can properly return a collection of all the values that exist in the linked list", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        let testValue1 = "testing"
        let testValue2 = "testing"

        LL.append("first value").append(testValue).append(testValue1).append(testValue2);
        let logicalVariable = LL.inclues(testValue) && LL.inclues(testValue2)
        expect(logicalVariable).toEqual(true);

    })






})

