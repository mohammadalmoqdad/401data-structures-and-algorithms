# Hashtables: 
- Hashtable is a datastructure that alow the value to be gotten with a complexity (1)

## Challenge: 
- Implementing Hashtables with the mentioned methods to perform the basic operations on the Hashtable.


## Approach & Efficiency: 
- i created an array called table that has the has multiple object where each bject has a hashed key and a value which is the linkedlist that has all the value inside it.

## API: 
- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.