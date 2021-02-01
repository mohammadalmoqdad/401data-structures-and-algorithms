
function selectionSort(arr) {
    let temp = 0;
    let min;
    for (i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;


    // arr.forEach((element, idx) => {
    //     if (temp > element) {
    //         temp = element;
    //     }
    //     else if (temp < element) {
    //       continue;
    //     }
    //     temp2 = arr[i];
    //     arr[i] = temp;

    // });




}

module.exports = selectionSort;