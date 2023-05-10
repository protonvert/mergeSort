function mergeSort(array) {
    // split our arrays and stops once length of array is 1
     if (array.length <= 1) return array
 
    // store array length
    let {length} = array
 
    // store middle point
    let middle = Math.floor(length / 2)
 
    // store left half of array
    let leftArray = array.slice(0, middle)
 
    // store right half of array
    let rightArray = array.slice(middle, array.length)
 
    // run mergeSort on left half and right half, merge them
    return merge(mergeSort(leftArray), mergeSort(rightArray))
 
 }
 
 function merge(leftArray, rightArray) {
     // takes two arrays, sorts them, and merges them together into one array
     
     // new array for storage
     const storage = []
 
     while(leftArray.length && rightArray.length) {
         if(leftArray[0] <= rightArray[0]) {
             storage.push(leftArray.shift())
         }
         else {
             storage.push(rightArray.shift())
         }
     }
 
     return [...storage, ...leftArray, ...rightArray]
 
 }