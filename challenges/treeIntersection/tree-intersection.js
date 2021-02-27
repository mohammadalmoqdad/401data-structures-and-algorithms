function tree_intersection(tree1, tree2){
    let output = [];
  
    let hashmap = new Hashmap(1024);
    let firstTreeValues = tree1.inOrder();
    firstTreeValues.forEach(value=> {
      hashmap.add(value);
    });
  
    let secondTreeValues = tree2.inOrder();
  
    secondTreeValues.forEach(value=> {
  
      let key = hashmap.hash(value);
      if(hashmap.storage[key]){
        output.push(value);
      }
    });
  
    return output;
  }