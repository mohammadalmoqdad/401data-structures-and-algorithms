const HashTable = require('../hashtable.js');

describe("Hashtable Moule", () => {

    it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
        let hashTable = new HashTable(1024)
        hashTable.set('act', 'Christian Bale');
        expect(hashTable.get('act')).not.toBeNull()
    })

    it("Retrieving based on a key returns the value stored", () => {
        let hashTable = new HashTable(1024)
        hashTable.set('act', 'Christian Bale');
        expect(hashTable.get('act').head.value.act).toEqual("Christian Bale")
    })



    it("Successfully returns null for a key that does not exist in the hashtable", () => {
        let hashTable = new HashTable(1024)
        hashTable.set('act', 'Christian Bale');
        expect(hashTable.get('mohammad')).toBeNull()
    })


    it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
        let hashTable = new HashTable(1024)
        hashTable.set('act', 'Christian Bale');
        hashTable.set('cat', 'Fake value');
        console.log(hashTable.get('act').values()[1]["cat"])
        expect(hashTable.get('act').values()[1]["cat"]).toEqual("Fake value")
    })


});