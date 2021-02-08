//                              first word to occur more than once 
let HashTable = require('../Data-Structures/hashtable/hashtable')
function repeatedWord(str) {
    let words = splitIntoSingleWord(str);
    let x;
    let hashtable = new HashTable(words.length);
    for (let i = 0; i < words.length; i++) {
        hashtable.set(words[i], words[i])
        let y = hashtable
        console.log(y)
        if (checkFirstAddition(hashtable)) {
            return words[i];
        }
    }
    return 'nomatch'


}

// solutions:

// 2. Hashtable where i store all the words inside the array and on the first second addition on any linked list I will return that added text and it will be first repeated eleemtent  ++++>>>>>>>>>>>>> complexity of time will be O(n)!

function splitIntoSingleWord(str) {
    return str.split(' ');
}

function checkFirstAddition(hashtable) {
    hashtable.table.forEach((data, i) => {
        if (data) {
            if (data.values().length > 0) {
                return "anything";
            }
        }
    })

}

console.log(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York'))