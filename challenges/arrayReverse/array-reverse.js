function reverseArray(arr) {

    if (arr.length == 0) {
        return "Empty Array!"
    }

    let reversedArr = [];
    if (typeof arr == 'object') {
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedArr.push(arr[i]);
        }
    }

    return reversedArr;
}

reverseArray([1, 2, 3, 4, 5, 6])