
function BinarySearch(arr,num){
    // middle
    let min=0;
    let max=arr.length-1;
    let mid;
    while(min<=max){
      
       if(num == arr[min]) return min;
       if(num == arr[max]) return max;
       if(num == arr[mid]) return mid;
       if(arr.length%2 == 0){
        mid = arr.length/2-1
        if(num<arr[mid]){
          max=mid;
        }
        else{
          min = mid;
        }
      }
      else if(arr.length%2!=0){
        mid=(arr.length-1)/2;
         if(num<arr[mid]){
          max = mid-1;
        }
        else{
          min = mid-1;
        }
      }
    }
      return -1
  }
  
  BinarySearch([4,8,15,16,23,42,50], 15);