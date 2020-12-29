function insertShiftArray(arr,num){
    // n+1 /n
    
    let arrCopy=[...arr];
    for (let i=0;i<arr.length;i++){
      if(arr.length%2==0){
        if(i==arr.length/2){
          // arr.splice(i,0,num);
            arr[i]=num
        }
        if(i>arr.length/2){
          arr[i]=arrCopy[i-1]
        }
      }
      else if(arr.length%2!=0){
        if(i==(arr.length+1)/2){
          arr[i]=num;
        }
        if(i>(arr.length+1)/2){
          arr[i]=arrCopy[i-1];
        }
      }
    

    }
    
    arr.push(arrCopy[arrCopy.length-1]) // just to add the last elemeent because it is not added cause of  the loo length
    console.log(arr)
    }
    
    insertShiftArray([2,4,6,8], 5);
    insertShiftArray([4,8,15,23,42], 16);