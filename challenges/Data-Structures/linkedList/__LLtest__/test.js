let LinkeList = require('../linked-list');
describe("linked List model", () => {


    it("Can successfully instantiate an empty linked list", () => {
        let LL = new LinkeList();
        LL.append(" ");
        expect(LL.head.value).not.ToBeNull();
    })



    it("Can properly insert into the linked list", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        LL.append(testValue);
        expect(LL.head.value).toEqual(testValue);

    })




    it("The head property will properly point to the first node in the linked list", () => {
        let LL = new LinkeList();
        expect(LL.head.value).ToBeNull();
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
        expect(LL.includes(testValue)).toEqual(true);

    })




    it("Will return false when searching for a value in the linked list that does not exist", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        LL.append("first value").append(testValue);
        expect(LL.includes("falsy value")).toEqual(false);

    })




    it("Can properly return a collection of all the values that exist in the linked list", () => {
        let LL = new LinkeList();
        let testValue = "testing"
        let testValue1 = "testing"
        let testValue2 = "testing"

        LL.append("first value").append(testValue).append(testValue1).append(testValue2);
        let logicalVariable = LL.includes(testValue) && LL.includes(testValue2)
        expect(logicalVariable).toEqual(true);

    })






})