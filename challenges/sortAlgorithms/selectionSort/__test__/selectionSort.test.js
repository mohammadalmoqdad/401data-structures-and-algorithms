const selectionSort = require('../selectionSort');

describe("selection sort model",()=>{
    it("The returned array is sorted",()=>{
        let arr = [3,5,7,9,0];
        expect(selectionSort(arr)).toEqual([0,3,5,7,9])
    })
})